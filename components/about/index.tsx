import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import classes from './index.module.css';

const About = () => {
  const services = [
    {
      title: 'Web',
      description: 'All web applications are built with the latest technologies and best practices.',
      icon: 'fa-solid fa-browser', // Replace with the online link to the Angular icon image
    },
    {
      title: 'Mobile App',
      description: 'Creating native and cross-platform mobile applications for iOS and Android.',
      icon: 'fa-solid fa-mobile-screen-button', // Replace with the online link to the React icon image
    },
    {
      title: 'Chrome Extension Developer',
      description: 'Developing Chrome extensions to improve your browsing experience.',
      icon: 'fa-sharp fa-solid fa-pen-ruler', // Replace with the online link to the Vue.js icon image
    },
    {
      title: 'API',
      description: 'Developing RESTful APIs and microservices for web and mobile applications.',
      icon: 'fa-brands fa-node-js', // Replace with the online link to the Node.js icon image
    },
  ];

  return (
    <div className={classes.about}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-[24px] mb-[20px] text-white">Services I can join.</h2>
        <div className={classes.services}>
          {services.map((service, index) => (
            <ServiceCard
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
