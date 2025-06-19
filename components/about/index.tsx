import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import classes from './index.module.css';
import axios from 'axios';
import RotatingText from '../roating-text';
interface AboutPropsI {
  services?: any[];
}

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'I can build a web application from scratch, or maintain and update an existing one. I have experience in both frontend and backend development.',
    icon: 'fas fa-code',
  },
  {
    id: 2,
    title: 'Mobile Development',
    description:
      'I have knowledge in building mobile applications using React Native. I can develop cross-platform applications for both iOS and Android.',
    icon: 'fas fa-mobile-alt',
  },

  {
    id: 4,
    title: 'API Development',
    description:
      'I can develop a RESTful API, GraphQl for your web or mobile application use MERN Stacks. I have experience in both building and consuming APIs.',
    icon: 'fas fa-server',
  },
];
const About: React.FC<AboutPropsI> = (props) => {
  console.log(`services`, services);

  return (
    <div className={classes.about}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-[1.2rem] justify-center py-[4.4rem]">
          <p className="text-[2.4rem] text-white h-[4.8rem] leading-[4.8rem] uppercase">MY TECHNICAL</p>
          <RotatingText
            texts={['WEB', 'APP', 'EXTENSION']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-[2.4rem] text-white"
            staggerFrom={'last'}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <div className={classes.services}>
          {services?.map((service, index) => (
            <ServiceCard
              id={service.id}
              key={index}
              title={service.title}
              description={service.description}
              index={index}
              icon={service.icon}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
