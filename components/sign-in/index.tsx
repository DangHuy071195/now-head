import OTPComponent from '@/components/phone-login';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import FormItem from '@/components/ui/form/FormItem';
import { createUser, githubSignIn, googleSignIn, passwordValidate } from '@/libs/firebase';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Suspense, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import classes from './sign-in.module.css';

const SignIn = () => {
  const [isPhoneSignIn, setIsPhoneSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email: any; password: any }>({ email: [], password: [] });
  // const { login } = useActions();
  // const { loading, accessToken, user } = useTypedSelector((state) => state.user);
  const router = useRouter();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (!email || email === '') {
      setErrors((prev) => {
        const curErrors = prev.email || [];
        const curErrorsUpdated = [...curErrors, 'Please enter email'];
        return { ...prev, email: curErrorsUpdated };
      });
      return;
    }
    if (!password || password === '') {
      setErrors((prev) => {
        const curErrors = prev.password || [];
        const curErrorsUpdated = [...curErrors, 'Please enter password'];
        return { ...prev, password: curErrorsUpdated };
      });
      return;
    }
    const status = await passwordValidate(password);
    if (status?.isValid) {
      const res = await createUser(email, password);
      const token = res.userToken;
      // await login(res, 'email', token);
      toast.success('Sign In successfully!');
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
      if (errorsPassword.length > 0) {
        return;
      }
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
      // await login(userToken, provider);
      router.push('/');
      toast.success(`${provider.toLocaleUpperCase()} Sign In successfully!`);
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

  return (
    <Suspense fallback={<HashLoader />}>
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
            onClick={() => siginWithProvider('google')}
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
            onClick={() => siginWithProvider('github')}>
            <Image
              className="github-icon"
              src="/github.png"
              alt="Github icon"
              width={20}
              height={20}
            />
            Github
          </PrimaryButton>
          {/* {loading && <p>Loading...</p>} */}
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
    </Suspense>
  );
};

export default SignIn;
