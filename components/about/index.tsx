import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const About = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and user-friendly websites using modern web technologies.',
      icon: 'https://example.com/angular-icon.png', // Replace with the online link to the Angular icon image
    },
    {
      title: 'Mobile App Development',
      description: 'Creating native and cross-platform mobile applications for iOS and Android.',
      icon: 'https://example.com/react-icon.png', // Replace with the online link to the React icon image
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces for web and mobile applications.',
      icon: 'https://example.com/vuejs-icon.png', // Replace with the online link to the Vue.js icon image
    },
    // Add more services here
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <p className="">Introduction</p>
        <p className="">
          I am a software engineer who is passionate about creating and developing software applications. I have a
          strong foundation in computer science and software engineering principles. I am always looking for
          opportunities to learn and grow as a software engineer. I am proficient in a variety of programming languages
          and technologies, including JavaScript, TypeScript, React, Node.js, Express, MongoDB, and SQL. I have
          experience working with both front-end and back-end technologies, and I am comfortable working in a full-stack
          development environment. I am also familiar with agile development methodologies and have experience working
          in a team-based environment. I am a quick learner and a problem solver, and I am always looking for new
          challenges to tackle.
        </p>
        <h2>Services</h2>
        <div className="flex flex-wrap gap-10 mt-20">
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
