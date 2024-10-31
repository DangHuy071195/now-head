import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import About from '../about';
import Exprience from '../experience';
import Tech from '../tech';
import Works from '../work';
import Contact from '../contact';
import Feedbacks from '../feedbacks';
import StartsCanvas from '../starts-canvas';
import Header from './Header';
import StarCanvas from '../starts-canvas';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LayoutPropsI {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutPropsI> = ({ children }) => {
  return (
    <div className="bg-primary relative z-0 flex flex-col bg-[#0d1117] min-h-[100vh]">
      <NavBar />
      <Header />
      <ToastContainer />
      {children}
    </div>
  );
};

export default Layout;
