import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import classes from './index.module.css';
import axios from 'axios';
import RotatingText from '../roating-text';
import { cn } from '@/utils/cn';
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
  {
    id: 3,
    title: 'Extension Development',
    description:
      'I can develop a browser extension for Chrome, Firefox, or Edge. I have experience in building extensions that enhance the user experience.',
    // icon: 'fas fa-plug',
    image: '/extension.png',
  },
];
const Services: React.FC<AboutPropsI> = (props) => {
  return (
    <section className="max-w-[70vw] mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <div className="flex flex-col sm:flex-row items-center gap-[1.2rem] justify-center py-[2.4rem] md:py-[4.4rem]">
          <p className="text-[2.4rem] text-white h-[4.8rem] leading-[4.8rem] uppercase">MY TECHNICAL</p>
          <RotatingText
            texts={['WEB', 'MOBILE APP', 'CHROME EXTENSION']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-violet-700 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-[2.4rem] text-white"
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
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[3.5rem] items-center justify-items-center ${classes.services}`}>
          {services?.map((service, index) => (
            <ServiceCard
              id={service.id}
              key={index}
              title={service.title}
              description={service.description}
              index={index}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
