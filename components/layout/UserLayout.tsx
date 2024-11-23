import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './Header';
interface LayoutPropsI {
  children: React.ReactNode;
  name?: string;
}
const UserLayout: React.FC<LayoutPropsI> = (props) => {
  return (
    <div className="flex">
      {/* <SideNav /> */}
      <div className="flex-1 bg-primary relative z-0 flex flex-col bg-[#0d1117] min-h-[100vh]  m-auto px-[24px]">
        {/* <NavBar /> */}
        <Header user={null} />
        <ToastContainer />
        {props.children}
      </div>
    </div>
  );
};

export default UserLayout;
