import Layout from '@/components/layout';
import FormItem from '@/components/ui/form/FormItem';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import React from 'react';
import classes from './sign-up.module.css';

const SignUp = () => {
  const submitHandler = () => {
    console.log(`submit Handler`);
  };
  return (
    <>
      <form
        className={classes['singUp__form']}
        title="Sign Up"
        onSubmit={submitHandler}>
        <FormItem
          labelStr="Email"
          forLabel="email"
          type="email"
          placeholder="Enter your email..."
        />
        <PrimaryButton>Continue</PrimaryButton>
      </form>
    </>
  );
};

export default SignUp;
