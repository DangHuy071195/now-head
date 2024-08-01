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

const Layout = () => {
  return (
    <div className="bg-primary relative z-0 flex flex-col bg-[#03001C] min-h-[100vh]">
      <NavBar />
      <Header />
      <Hero />
      <About />
      <Exprience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relateive z-0">
        <Contact />
        <StartsCanvas />
      </div>
    </div>
  );
};

export default Layout;
