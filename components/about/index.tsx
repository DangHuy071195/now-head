import { motion } from 'framer-motion';
import React from 'react';
import RotatingText from '../roating-text';
import ServiceCard from './ServiceCard';

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
    <section className="max-w-[95vw] md:max-w-[80vw] mx-auto px-4 md:px-0 py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        <div className="flex flex-col sm:flex-row items-center gap-[1.2rem] justify-center mb-12 md:mb-16">
          <p className="text-3xl md:text-6xl font-bold text-white text-center sm:text-left uppercase leading-tight">MY TECHNICAL</p>
          <RotatingText
            texts={['WEB', 'MOBILE APP', 'CHROME EXTENSION']}
            mainClassName="px-3 sm:px-4 py-2 bg-violet-700 text-black overflow-hidden justify-center rounded-lg text-2xl md:text-3xl font-bold text-white shadow-lg"
            staggerFrom={'last'}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
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
