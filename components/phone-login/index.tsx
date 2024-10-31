//@ts-nocheck
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import { auth } from '../../libs/firebase';
import { ToastContainer } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import PrimaryButton from '../ui/button/PrimaryButton';
import classes from './index.module.css';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import axios from 'axios';
const OTPComponent: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(60); // 60 seconds

  const [otp, setOtp] = useState<string>('');
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [message, setMessage] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          console.log('reCAPTCHA solved');
        },
        'expired-callback': () => {
          console.warn('reCAPTCHA expired; resetting');
          window.recaptchaVerifier.reset(); // Reset if expired
        },
      });
    }
  };
  useEffect(() => {
    setupRecaptcha();
  }, []);

  // Send OTP
  const sendOtpHandler = async () => {
    console.log(`sent otp`);
    if (isCooldown) {
      alert(`Please wait ${cooldownTime} seconds before trying again.`);
      return;
    }

    setupRecaptcha();
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          console.log('reCAPTCHA solved');
        },
        'expired-callback': () => {
          console.warn('reCAPTCHA expired; resetting');
          window.recaptchaVerifier.reset(); // Reset if expired
        },
      });
    } else {
      setupRecaptcha();
    }
    try {
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setIsCooldown(true);
      const interval = setInterval(() => {
        setCooldownTime((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsCooldown(false);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
      console.log(`result`, result);
      setConfirmationResult(result);
      setIsOtpSent(true);
      toast.success('OTP sent successfully!');
    } catch (error) {
      console.error('Error sending OTP:', error);
      if (error.message === 'auth/too-many-requests' || error.message === 'TOO_MANY_ATTEMPTS_TRY_LATER') {
        toast.error('Too many requests. Please try again later.');
      } else {
        toast.error('Failed to send OTP. Please try again.');
      }
    }
  };

  // Verify OTP
  const verifyOtpHandler = async () => {
    if (!confirmationResult) {
      toast.warning('Please request an OTP first.');
      return;
    }

    try {
      const result = await confirmationResult.confirm(otp);
      console.log(`result`, result);
      const firebaseToken = await result.user.getIdToken();
      console.log(`firebaseToken`, firebaseToken);
      const res = await axios.post('api/user/auth/phone-login', { token: firebaseToken });
      toast.success('Phone number verified successfully!');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      {!isOtpSent ? (
        <>
          <PhoneInput
            country={'vn'}
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(`+${phone}`)}
            inputStyle={{ width: '100%' }}
            enableSearch
            countryCodeEditable
            autoFormat={false}
          />

          <PrimaryButton
            type="button"
            onClick={sendOtpHandler}>
            {isCooldown ? `Wait ${cooldownTime} seconds` : 'Send OTP'}
          </PrimaryButton>
        </>
      ) : (
        <>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
            className={classes['input']}
          />
          <PrimaryButton
            type={'button'}
            onClick={verifyOtpHandler}>
            Verify OTP
          </PrimaryButton>
        </>
      )}
      <div
        id="recaptcha-container"
        className={classes['recaptcha-container']}></div>
    </div>
  );
};

export default OTPComponent;
