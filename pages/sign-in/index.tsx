import React, { useState } from 'react';
import classes from './sign-in.module.css';
import FormItem from '@/components/ui/form/FormItem';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import Image from 'next/image';
import OTPComponent from '@/components/phone-login';
import axios from 'axios';

const SignIn = () => {
  const [isPhoneSignIn, setIsPhoneSignIn] = useState(false);

  const submitHandler = () => {};

  const googleSignHandler = async () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };
  const githubSignHandler = () => {
    console.log('Github Sign In');
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
          labelStr="Name"
          forLabel="name"
        />
        <FormItem
          labelStr="Email"
          forLabel="email"
          type="email"
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
          <PrimaryButton onClick={githubSignHandler}>
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
