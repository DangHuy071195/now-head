import OTPComponent from '@/components/phone-login';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import FormItem from '@/components/ui/form/FormItem';
import { createUser, githubSignIn, googleSignIn, passwordValidate } from '@/libs/firebase';
import Image from 'next/image';
import { useState } from 'react';
import classes from './sign-in.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useActions } from '@/hooks/useAction';
const SignIn = () => {
  const [isPhoneSignIn, setIsPhoneSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email: any; password: any }>({ email: [], password: [] });
  const { login } = useActions();
  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (!email || email === '') {
      setErrors((prev) => {
        const curErrors = prev.email || [];
        const curErrorsUpdated = [...curErrors, 'Please enter email'];
        return { ...prev, email: curErrorsUpdated };
      });
    }
    if (!password || password === '') {
      setErrors((prev) => {
        const curErrors = prev.password || [];
        const curErrorsUpdated = [...curErrors, 'Please enter password'];
        return { ...prev, password: curErrorsUpdated };
      });
    }
    const status = await passwordValidate(password);
    if (status?.isValid) {
      await createUser(email, password);
    } else {
      console.log(`status`, status);
      const meetsMinPasswordLength = status?.meetsMinPasswordLength;
      const meetsMaxPasswordLength = status?.meetsMaxPasswordLength;
      const containsUppercaseLetter = status?.containsUppercaseLetter;
      const containsNumericCharacter = status?.containsNumericCharacter;
      const containsLowercaseLetter = status?.containsLowercaseLetter;
      let errorsPassword = [];

      if (!meetsMinPasswordLength) {
        errorsPassword.push('Password should be more than 8 characters');
      }

      if (!containsUppercaseLetter) {
        errorsPassword.push('Password should contain at least one uppercase letter');
      }
      if (!containsLowercaseLetter) {
        errorsPassword.push('Password should contain at least one lowercase letter');
      }
      if (!containsNumericCharacter) {
        errorsPassword.push('Password should contain at least one number');
      }
      setErrors((prevPwd) => {
        return { ...prevPwd, password: errorsPassword };
      });
    }
  };

  const googleSignHandler = async () => {
    // window.location.href = 'http://localhost:5000/auth/google';
    try {
      const res: any = await googleSignIn();
      console.log(`res`, res);
      const userToken = res.token;
      login(userToken, 'google');
      // toast.success('Google Sign In successfully!');
    } catch (error) {
      toast.error('Failed to sign in with Google');
    }
  };
  const githubSignHandler = async () => {
    console.log('Github Sign In');
    try {
      const res = await githubSignIn();
      const userToken = res.token;
      login(userToken, 'github');
      // toast.success('Github Sign In successfully!');
    } catch (error) {
      toast.error('Failed to sign in with Google');
    }
  };

  const phoneSignInHandler = () => {
    console.log('Phone Sign In');
    setIsPhoneSignIn(true);
  };
  return (
    <>
      <h2>Sign In</h2>
      <form
        className={classes['singUp__form']}
        title="Sign Up"
        onSubmit={submitHandler}>
        <FormItem
          labelStr="Email"
          forLabel="email"
          type="email"
          errors={errors.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormItem
          labelStr="Password"
          forLabel="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          errors={errors.password}
        />
        <PrimaryButton
          onClick={submitHandler}
          style={{ marginTop: 0 }}>
          Sign In
        </PrimaryButton>
        or
        <div className={classes.socials}>
          <PrimaryButton
            onClick={googleSignHandler}
            type="button">
            <Image
              className="google-icon"
              src="/google.png"
              alt="Google icon"
              width={20}
              height={20}
            />
            Google
          </PrimaryButton>
          <PrimaryButton
            type="button"
            onClick={githubSignHandler}>
            <Image
              className="github-icon"
              src="/github.png"
              alt="Github icon"
              width={20}
              height={20}
            />
            Github
          </PrimaryButton>
          {!isPhoneSignIn && (
            <PrimaryButton
              icon={'fa-solid fa-phone'}
              onClick={phoneSignInHandler}>
              Sign in with phone
            </PrimaryButton>
          )}
          {isPhoneSignIn && <OTPComponent />}
        </div>
      </form>
    </>
  );
};

export default SignIn;
