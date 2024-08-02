import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false });
interface ServiceCardInterfaceProps {
  title: string;
  description: string;
  index: number;
  icon: any;
}
import classes from './index.module.css';
const ServiceCard: React.FC<ServiceCardInterfaceProps> = ({ index, title, icon, description }) => {
  return (
    <div className={classes.box}>
      <div className={classes.content}>
        <div className={classes.tape}></div>
        <h2 className={classes.heading}>{title}</h2>
        <h3 className={classes.heading}>{index}</h3>
        <i className={`${icon} text-[30px]`}></i>
        <p>{description}</p>
        <a href="#">Read more...</a>
      </div>
    </div>
  );
};

export default ServiceCard;
