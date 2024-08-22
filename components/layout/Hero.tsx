import React from 'react';
import { motion } from 'framer-motion';
import ComputerCanvas from '../computer';
const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto ">
        <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-grow items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 sm:h-80 h-40 bg-violet-gradient" />
          </div>
          <div>
            <h1 className="mt-8 text-[30px]">
              Hi, I'm <span className="text-[#915eff]">HuyItto</span>
            </h1>
            <p className="mt-2 text-white-100 text-[20px]">
              I'm React developer, user <br className="sm:block hidden" /> interface and web applications I'm also a 3D
              developer, specializing in creating immersive and interactive experiences using cutting-edge technologies.
              With my expertise in both React and 3D development, I can bring your ideas to life and deliver stunning
              visual experiences that engage and captivate users.
            </p>
          </div>
        </div>
        <ComputerCanvas />
      </section>
    </>
  );
};

export default Hero;
