import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import classes from './index.module.css';

const About = () => {
  const services = [
    {
      title: 'Web',
      description: 'Building responsive and user-friendly websites using modern web technologies.',
      icon: 'fa-brands fa-react', // Replace with the online link to the Angular icon image
    },
    {
      title: 'Mobile App',
      description: 'Creating native and cross-platform mobile applications for iOS and Android.',
      icon: 'fa-brands fa-vuejs', // Replace with the online link to the React icon image
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces for web and mobile applications.',
      icon: 'fa-brands fa-angular', // Replace with the online link to the Vue.js icon image
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
        <p className={classes.title}>Introduction</p>
        <p className={classes.desc}>
          I am a software engineer who is passionate about creating and developing software applications. I have a
          strong foundation in computer science and software engineering principles. I am always looking for
          opportunities to learn and grow as a software engineer. I am proficient in a variety of programming languages
          and technologies, including JavaScript, TypeScript, React, Node.js, Express, MongoDB, and SQL. I have
          experience working with both front-end and back-end technologies, and I am comfortable working in a full-stack
          development environment. I am also familiar with agile development methodologies and have experience working
          in a team-based environment. I am a quick learner and a problem solver, and I am always looking for new
          challenges to tackle.
        </p>
        <h2 className="text-[24px] mb-[20px]">Services</h2>
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
