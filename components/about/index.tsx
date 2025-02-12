import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import classes from './index.module.css';
import axios from 'axios';
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
      'I can build a mobile application from scratch, or maintain and update an existing one. I have experience in both iOS and Android development.',
    icon: 'fas fa-mobile-alt',
  },

  {
    id: 4,
    title: 'API Development',
    description:
      'I can develop a RESTful API for your web or mobile application use MERN Stacks. I have experience in both building and consuming APIs.',
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
        <h2 className="text-[24px] mb-[20px] text-white">Services I can join.</h2>
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
