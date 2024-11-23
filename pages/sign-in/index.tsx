import OTPComponent from '@/components/phone-login';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import FormItem from '@/components/ui/form/FormItem';
import {
  createUser,
  githubSignIn,
  googleSignIn,
  loginWithEmailAndPassword,
  passwordValidate,
  resetPassword,
} from '@/libs/firebase';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Suspense, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import classes from './sign-in.module.css';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useActions } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useSelector';
import Link from 'next/link';
const Item = Form.Item;

const SignIn = () => {
  const [isPhoneSignIn, setIsPhoneSignIn] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();
  const [loadingEmail, setLoadingEmail] = useState(false);

  const { userLogin } = useActions();
  const { loading, user, token } = useTypedSelector((state) => state.user);

  const submitHandler = async (values: any) => {
    const { email, password } = values;
    console.log(`email`, email);
    setLoadingEmail(true);
    try {
      const status = await passwordValidate(password);
      if (status?.isValid) {
        const res = await loginWithEmailAndPassword(email, password);
        const { userToken: token, error } = res;
        if (!error) {
          await userLogin('email', token);
          toast.success('Sign In successfully!');
          setLoadingEmail(false);
          router.push('/');
        } else {
          console.log(`error firebase ...`, error);
          toast.error(`Failed to sign in with email`);
          setLoadingEmail(false);
        }
      }
    } catch (error: any) {
      console.log(`error`, error.code);
      setLoadingEmail(false);
      toast.error('Failed to sign in with email...');
    }
  };

  const siginWithProvider = async (provider: string) => {
    try {
      let res;
      if (provider === 'google') {
        res = await googleSignIn();
      }
      if (provider === 'github') {
        res = await githubSignIn();
      }
      const userToken = res.token;
      await userLogin(userToken, provider);
      router.push('/');
      // toast.success(`${provider.toLocaleUpperCase()} Sign In successfully!`);
    } catch (error: any) {
      console.log(`error`, error);
      if (error.code === 'auth/account-exists-with-different-credential') {
        toast.error('An account already exists with the same email address but different sign-in credentials.');
      } else {
        toast.error(`Failed to sign in with ${provider.toLocaleUpperCase()}`);
      }
    }
  };

  const phoneSignInHandler = () => {
    console.log('Phone Sign In');
    setIsPhoneSignIn(true);
  };

  const forgotPasswordHandler = async () => {
    try {
      const value = form.getFieldValue('email');
      await resetPassword(value);
    } catch (error) {}
  };

  return (
    <div className="flex flex-col items-center w-[600px] mx-auto bg-white p-[2.4rem] mt-[30rem] rounded-lg">
      <h2 className="text-[#232323] text-[2rem]">Sign In</h2>
      <Form
        form={form}
        layout="vertical"
        title="Sign In"
        className="w-full"
        onFinish={submitHandler}>
        <Item
          name={'email'}
          label={<span className="text-[#232323]">Email</span>}
          rules={[
            {
              required: true,
              message: 'Please enter email',
            },
            {
              type: 'email',
              message: 'Please enter valid email',
            },
          ]}>
          <Input placeholder="Enter your email..." />
        </Item>
        <Item
          name={'password'}
          label={<span className="text-[#232323]">Password</span>}
          className="text-white mb-0"
          rules={[
            {
              required: true,
              message: 'Please enter password',
            },
            {
              min: 8,
              message: 'Password should be more than 8 characters',
            },
            {
              pattern: new RegExp('(?=.*[A-Z])'),
              message: 'Password should contain at least one uppercase letter',
            },
            {
              pattern: new RegExp('(?=.*[a-z])'),
              message: 'Password should contain at least one lowercase letter',
            },
            {
              pattern: new RegExp('(?=.*[0-9])'),
              message: 'Password should contain at least one number',
            },
          ]}>
          <Input
            type="password"
            placeholder="Enter your password..."
          />
        </Item>
        <div className="flex justify-between">
          <span>
            You don&apos;t have an account? <Link href="/sign-up">Sign Up</Link>
          </span>
          <span
            className="cursor-pointer"
            onClick={forgotPasswordHandler}>
            Forgot Password
          </span>
        </div>
        <div className={'flex  mt-[1.2rem] flex-wrap gap-[1.4rem] justify-center'}>
          <Button
            htmlType="submit"
            loading={loadingEmail || loading}
            className="w-full flex-[0_0_40%]"
            icon={<i className="fa-solid fa-envelope" />}>
            Sign In With Email
          </Button>
          <Button
            onClick={() => siginWithProvider('google')}
            icon={<i className="fa-brands fa-google" />}
            htmlType="button"
            className="flex-[0_0_40%]">
            Google
          </Button>
          <Button
            htmlType="button"
            className=" flex-[0_0_40%]"
            icon={<i className="fa-brands fa-github" />}
            onClick={() => siginWithProvider('github')}>
            Github
          </Button>
          {/* {loading && <p>Loading...</p>} */}
          {!isPhoneSignIn && (
            <Button
              icon={<i className="fa-solid fa-phone" />}
              onClick={phoneSignInHandler}
              className="flex-[0_0_40%]">
              Sign in with phone
            </Button>
          )}
          {isPhoneSignIn && <OTPComponent />}
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
