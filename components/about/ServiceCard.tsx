import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false });
interface ServiceCardInterfaceProps {
  title: string;
  description: string;
  index: number;
  icon: string;
}
import classes from './index.module.css';
const ServiceCard: React.FC<ServiceCardInterfaceProps> = ({ title, icon }) => {
  return (
    <Tilt options={{ max: 25, scale: 1.05, speed: 300 }}>
      <motion.div
        className={classes.card}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}>
        <img
          src={icon}
          alt={title}
        />
        <h3 className="text-white  text-[20px] font-bold text-center">{title}</h3>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
