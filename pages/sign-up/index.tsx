import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useActions } from '@/hooks/useAction';
import { toast } from 'react-toastify';
import { auth, createUser, getInfoSign, resetPassword } from '@/libs/firebase';
import { useTypedSelector } from '@/hooks/useSelector';
import Link from 'next/link';
import { fetchSignInMethodsForEmail } from 'firebase/auth';

const SignUpForm = () => {
  const { userSignUp } = useActions();
  const { loading, user, token } = useTypedSelector((state) => state.user);
  const [loadingFirebase, setLoadingFirebase] = useState(false);

  const onFinish = async (values: any) => {
    setLoadingFirebase(true);
    const { username, email, password } = values;
    try {
      const res = await createUser(email, password);
      const { userToken, error } = res;
      if (!error) {
        await userSignUp(username, userToken);
        toast.success('Sign Up successfully!');
      } else {
        if (error === 'auth/email-already-in-use') {
          toast.error(error);
          toast.error('There was a problem logging in. Check your email and password or create an account.');
        } else {
          toast.error('Sign Up failed!');
        }

        setLoadingFirebase(false);
      }
    } catch (error: any) {
      setLoadingFirebase(false);
      toast.error(error.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-[600px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <Form
          name="signup"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              loading={loadingFirebase || loading}
              type="primary"
              htmlType="submit"
              className="w-full">
              Sign Up
            </Button>
          </Form.Item>
          <div>
            You have already an account? <Link href="/sign-in">Sign In</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
