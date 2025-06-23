import React, { useEffect, useState } from 'react';
import ComputerCanvas from '../computer';
import classes from './index.module.css';
import ProjectCard from '../project-card';
import ShinyText from '../shinny-text';
import { motion } from 'framer-motion';
const Hero = () => {
  const refHeroDesc = React.useRef<HTMLDivElement>(null);
  const [heightOfLineHero, setHeightOfLineHero] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (refHeroDesc.current) {
        const height = refHeroDesc.current.clientHeight;
        setHeightOfLineHero(height);
      }
    }, 1000);
  }, []);

  return (
    <>
      <section className="relative max-w-[70vw] h-auto mx-auto mt-[48px]">
        <div className="inset-0 mx-auto flex flex-grow items-start gap-5 relative">
          <motion.div
            initial={{ opacity: 0, left: '-10%' }}
            animate={{ opacity: heightOfLineHero ? 1 : 0, left: heightOfLineHero ? '-1.8rem' : '-5%' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            className="flex flex-col justify-center items-center absolute left-0 top-0"
            style={{ height: heightOfLineHero }}>
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div
              className="w-1 "
              style={{ height: '100%', background: 'linear-gradient(transparent, #7C72FF 30%)' }}
            />
          </motion.div>
          <div ref={refHeroDesc}>
            <h1 className={`${classes.title} text-[#915eff]`}>
              <ShinyText
                text="Hello, I'm Huy."
                disabled={false}
                speed={3}
                className="custom-class"
                baseColor="#7C72FF"
                secondColor="#722bd6"
                lastColor="#2a1ce6"
              />
            </h1>
            <ul
              className={classes.description}
              style={{ listStyle: 'inside' }}>
              <li>
                <span>
                  I'm a React Developer with over 4 years of experience in web development, specializing in building
                  user interfaces and web applications using React JS, Next JS, and TypeScript.
                </span>
              </li>
              <li>
                <span>
                  I have a solid understanding of React's core concepts, including state management, component
                  lifecycle, and hooks. I am also familiar with popular libraries and tools in the React ecosystem, such
                  as Redux, React Router, and styled-components etc.
                </span>
              </li>
              <li>
                <span>
                  I have a strong understanding of web development principles, including responsive design, performance
                  optimization, and accessibility.
                </span>
                <br />
              </li>
            </ul>
          </div>
        </div>
        <ComputerCanvas />
      </section>
      <section className="flex flex-col items-center">
        <ShinyText
          text="Future Projects"
          disabled={false}
          speed={3}
          className="custom-class text-[3rem] mt-[4.4rem]"
          baseColor="#915eff"
          secondColor="#7C72FF"
          lastColor="#6A5ACD"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] lg:grid-cols-4 mt-10 items-center justify-items-center ">
          <ProjectCard
            color="green"
            progress="70%"
            title="E-commerce"
            count={1}
          />
          <ProjectCard
            color="red"
            progress="12%"
            title="E-Learning"
            count={4}
          />
          <ProjectCard
            color="orange"
            progress="15%"
            title="Chating"
            count={5}
          />
          <ProjectCard
            color="blue"
            progress="45%"
            title="AI Extension"
            count={20}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
