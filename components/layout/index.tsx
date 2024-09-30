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

const Layout = () => {
  return (
    <div className="bg-primary relative z-0 flex flex-col bg-[#0d1117] min-h-[100vh]">
      <NavBar />
      <Header />
      <Hero />
      <About />
      <Exprience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0 h-screen flex items-center justify-start px-96">
        <StarCanvas />
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
