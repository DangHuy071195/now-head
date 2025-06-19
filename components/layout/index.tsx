import { useActions } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useSelector';
import { auth } from '@/libs/firebase';
import { Avatar, Dropdown, Input, Layout, Menu } from 'antd';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSWR from 'swr';

import fetcher from '@/utils/fetcher';
import UserHeader from './Header';
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
interface LayoutPropsI {
  children: React.ReactNode;
  name?: string;
}
const MainLayout: React.FC<LayoutPropsI> = (props) => {
  const router = useRouter();
  const onSearch = (value: string) => console.log(value);

  // Add this to your SignInPage component
  // useEffect(() => {
  //   const loadGoogleScript = () => {
  //     const script = document.createElement('script');
  //     script.src = 'https://accounts.google.com/gsi/client';
  //     script.async = true;
  //     script.onload = () => {
  //       //@ts-ignore
  //       window.google.accounts.id.initialize({
  //         client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  //         callback: handleCredentialResponse, // This will handle the response from one-tap
  //         auto_select: true, // Automatically select account if one is available
  //       });
  //       //@ts-ignore
  //       window.google.accounts.id.prompt(); // Prompt for one-tap sign-in
  //     };
  //     document.body.appendChild(script);
  //   };

  //   loadGoogleScript();
  // }, []);

  // const handleCredentialResponse = (response: any) => {
  //   const credential = response.credential; // This is the JWT token
  //   // Use the credential to authenticate with Firebase
  //   const provider = new GoogleAuthProvider();
  //   return signInWithCredential(auth, GoogleAuthProvider.credential(credential))
  //     .then((userCredential) => {
  //       // Handle successful sign-in
  //       console.log('User signed in:', userCredential.user);
  //       router.push('/dashboard'); // Redirect to dashboard after sign-in
  //     })
  //     .catch((error) => {
  //       console.error('Error signing in with credential:', error);
  //     });
  // };

  // const { userLogout, updateFirebaseToken, realtimeUser } = useActions();

  // const { user } = useTypedSelector((state) => state.user);

  // const { data, error } = useSWR(
  //   user && user.firebaseToken && user.token
  //     ? ['http://localhost:5000/user', `${user?.firebaseToken},${user?.token}`]
  //     : null,
  //   ([url, token]) => fetcher(url, token),
  // );

  // useEffect(() => {
  //   // Listen for authentication state changes

  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in
  //       user.getIdToken().then((token) => {
  //         // Update Redux or perform other actions here
  //         updateFirebaseToken(token);
  //       });
  //     } else {
  //       // User is signed out
  //       console.log('User is signed out');
  //       userLogout();
  //       router.push('/sign-in');
  //     }
  //   });

  //   // Clean up the subscription on unmount
  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   console.log(`data`, data);
  //   if (data) {
  //     console.log(`data`, data);
  //     realtimeUser(data.user);
  //   }
  // }, [data]);

  // if (error) {
  //   console.log(`router path name ${router.pathname} try to sig-in`);
  // }

  // if (!data || !user) {
  //   // return <div className="text-white">Loading...</div>;
  // }

  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  const items = [
    {
      key: 'courses',
      label: (
        <span className="text-[14px] font-medium">
          <i className="fa-brands fa-discourse"></i> Course
        </span>
      ),
      onClick: () => {
        router.push('/admin/courses');
      },
    },
    {
      key: 'services',
      label: (
        <span className="text-[14px] font-medium">
          <i className="fa-brands fa-discourse"></i> Services
        </span>
      ),
      onClick: () => {
        router.push('/admin/services');
      },
    },
    {
      key: 'users',
      label: (
        <span className="text-[14px] font-medium">
          <i className="fa-brands fa-discourse"></i> Users
        </span>
      ),
      onClick: () => {
        router.push('/admin/users');
      },
    },
  ];
  return (
    <div className="flex max-w-[70vw] mx-auto justify-center">
      {/* <SideNav /> */}
      <div className="flex-1 bg-primary relative z-0 flex flex-col bg-[#0d1117] min-h-[100vh]  m-auto px-[24px]">
        {/* <NavBar /> */}
        <UserHeader user={null} />
        <ToastContainer />
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
