//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { auth } from '../../libs/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import classes from './index.module.css';
import PrimaryButton from '../ui/button/PrimaryButton';
const OTPComponent: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [message, setMessage] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  console.log(`auth`, auth);

  useEffect(() => {
    const setupRecaptcha = () => {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container');
      }
    };

    setupRecaptcha();
  }, []);

  // Send OTP
  const sendOtpHandler = async () => {
    console.log(`sent otp`);
    try {
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setIsOtpSent(true);
      setMessage('OTP sent to your phone.');
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('Failed to send OTP. Please try again.');
    }
  };

  // Verify OTP
  const verifyOtpHandler = async () => {
    if (!confirmationResult) {
      setMessage('Please request an OTP first.');
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      setMessage('Phone number verified successfully!');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setMessage('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      {!isOtpSent ? (
        <>
          <input
            className={classes.input}
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+1234567890"
            required
          />
          <PrimaryButton
            type="button"
            onClick={sendOtpHandler}>
            Send OTP
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
          />
          <PrimaryButton onClick={verifyOtpHandler}>Verify OTP</PrimaryButton>
        </>
      )}
      <div id="recaptcha-container"></div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OTPComponent;
