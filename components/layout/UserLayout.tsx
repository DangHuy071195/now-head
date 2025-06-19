import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './Header';
import Footer from './Footer';
interface LayoutPropsI {
  children: React.ReactNode;
  name?: string;
}
const UserLayout: React.FC<LayoutPropsI> = (props) => {
  return (
    <>
      <Header user={null} />
      <div className="flex">
        {/* <SideNav /> */}
        <div className="flex-1 bg-primary relative z-0 flex flex-col min-h-[100vh] m-auto px-[24px]">
          {/* <NavBar /> */}
          <ToastContainer />
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
