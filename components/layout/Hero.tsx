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
            animate={{ opacity: heightOfLineHero ? 1 : 0, left: heightOfLineHero ? '-7%' : '-5%' }}
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
                  I'm a software engineer with experience in building web and mobile applications. I specialize in
                  front-end development and UI/UX design.
                </span>
              </li>
              <li>
                <span>I also develop RESTful APIs and microservices for web and mobile applications.</span>
              </li>
              <li>
                <span>
                  I have not had the opportunity to participate in projects with Nextjs but I have knowledge and
                  understanding of it. Based on my background and experience with React JS and the course on Udemy about
                  NextJs, I am confident that I can work with it with the requirements of optimizing SEO and performance
                  for the website...etc.
                </span>
                <br />
              </li>
              <li>
                <span className="text-white">
                  My English skills are not perfect, but they are sufficient for chatting, writing, understanding, and a
                  little bit of listening. I am not completely confident, but I am eager to try and secure a job.
                </span>
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.5rem] mt-10 items-center justify-items-center">
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
