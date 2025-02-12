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
    <div className="flex">
      {/* <SideNav /> */}
      <div className="flex-1 bg-primary relative z-0 flex flex-col bg-[#0d1117] min-h-[100vh]  m-auto px-[24px]">
        {/* <NavBar /> */}
        <UserHeader user={null} />
        <ToastContainer />
        {props.children}
      </div>
    </div>
    // return user && user?.role === 'admin' && router.pathname !== '/' ? (
    //   <Layout style={{ minHeight: '100vh' }}>
    //     <Sider
    //       style={{ background: 'white' }}
    //       breakpoint="lg"
    //       collapsedWidth="0"
    //       onBreakpoint={(broken) => {
    //         console.log(broken);
    //       }}
    //       onCollapse={(collapsed, type) => {
    //         console.log(collapsed, type);
    //       }}>
    //       <Dropdown
    //         menu={{
    //           items: [
    //             {
    //               key: 'account',
    //               label: 'My Profile',
    //               onClick: () => {
    //                 router.push('/profile');
    //               },
    //             },
    //             {
    //               key: 'logout',
    //               label: 'Logout',
    //               onClick: () => {
    //                 userLogout();
    //                 router.replace('/sign-in');
    //               },
    //             },
    //           ],
    //         }}
    //         placement="bottomCenter"
    //         overlayStyle={{ width: '100px', minWidth: '100px' }}
    //         trigger={['click']}
    //         arrow={{ pointAtCenter: true }}>
    //         <div className="h-[64px] flex items-center justify-center p-[24px] gap-[12px]">
    //           <Avatar
    //             size={32}
    //             src={user?.picture}
    //             shape="circle"
    //             className="border-1 border-orange-400 border-solid cursor-pointer"
    //           />
    //           <span>{user?.name}</span>
    //         </div>
    //       </Dropdown>

    //       <Menu
    //         theme="light"
    //         mode="inline"
    //         defaultSelectedKeys={['4']}
    //         items={items}
    //       />
    //     </Sider>
    //     <Layout>
    //       <Header
    //         style={{ background: 'white' }}
    //         className="flex items-center justify-between">
    //         <span>Logo</span>
    //         <div className="flex items-center gap-[12px]">
    //           <Search
    //             placeholder="input search text"
    //             allowClear
    //             onSearch={onSearch}
    //             style={{ width: 200 }}
    //           />
    //           <i className="fa-solid fa-language text-[16px]"></i>
    //           <i className="fa-regular fa-envelope text-[16px]"></i>
    //           <i className="fa-regular fa-bell text-[16px]"></i>
    //         </div>
    //       </Header>
    //       <Content style={{ margin: '24px 16px 0' }}>
    //         <div
    //           style={{
    //             padding: 24,
    //             minHeight: 360,
    //           }}>
    //           <span>{props.children}</span>
    //         </div>
    //       </Content>
    //       <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
    //     </Layout>
    //   </Layout>
    // ) : (
  );
  // );
};

export default MainLayout;
