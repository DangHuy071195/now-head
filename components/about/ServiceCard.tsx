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
        <h2 className={classes.heading}>0{index + 1}</h2>
        <i className={`${icon} text-[40px]`}></i>
        <p>{description}</p>
        <a href="#">Read more...</a>
      </div>
    </div>
  );
};

export default ServiceCard;
