import Layout from '@/components/layout';
import FormItem from '@/components/ui/form/FormItem';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import React, { useState } from 'react';
import classes from './sign-up.module.css';
import axios from 'axios';
import { Button, ConfigProvider, Form, Input, notification } from 'antd';
import MainConfigProvider from '@/components/config-provider';
interface formStateI {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const { Item } = Form;
const SignUp = () => {
  const [form] = Form.useForm();
  const submitHandler = async () => {
    const formState = form.getFieldsValue(true);
    try {
      const res = await axios.post('http://localhost:3000/api/user', formState);
      console.log(`res in client`, res.data);
      notification.success({
        message: 'Success',
        description: 'You have successfully signed up!',
      });
    } catch (error) {
      console.log(`error`, error);
      notification.error({
        message: 'Error',
        description: 'An error occurred while signing up!',
      });
    }
  };

  return (
    <MainConfigProvider>
      <Form
        labelAlign="left"
        className={classes.singUp__form}
        form={form}
        layout="vertical"
        initialValues={{ name: '', email: '', password: '', password2: '' }}
        onFinish={submitHandler}>
        <Item
          label="Name"
          name={'name'}
          required>
          <Input placeholder="Pleas enter the name" />
        </Item>
        <Item
          label="Email"
          name={'email'}
          required>
          <Input placeholder="Pleas enter the email" />
        </Item>
        <Item
          label="Password"
          name={'password'}
          required
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 8,
              message: 'Password must be at least 8 characters long!',
            },
            {
              pattern: /.*[A-Z].*/,
              message: 'Password must contain at least one uppercase letter!',
            },
            {
              pattern: /.*\d.*/,
              message: 'Password must contain at least one number!',
            },
          ]}>
          <Input placeholder="Pleas enter the password" />
        </Item>

        <Item
          label="Confirm Password"
          name="password2"
          dependencies={['password']}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}>
          <Input />
        </Item>
        <Button
          htmlType="submit"
          type="primary"
          style={{ marginLeft: 'auto' }}
          className="border border-solid border-white max-w-[12rem] ">
          Sign Up
        </Button>
      </Form>
    </MainConfigProvider>
  );
};

export default SignUp;
