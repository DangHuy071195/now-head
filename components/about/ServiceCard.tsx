import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
interface ServiceCardInterfaceProps {
  title: string;
  description: string;
  index: number;
  icon: any;
  id: string | number;
}
import classes from './index.module.css';
import { useRouter } from 'next/router';
const ServiceCard: React.FC<ServiceCardInterfaceProps> = ({ index, title, icon, description, id }) => {
  const router = useRouter();

  const serviceClickHandler = () => {
    console.log('service clicked');
  };
  return (
    <div
      className={classes.box}
      onClick={serviceClickHandler}>
      <div className={classes.content}>
        <div className={classes.tape}></div>
        {/* <h2 className={classes.heading}>0{index + 1}</h2> */}
        <i className={`${icon} text-[40px]`}></i>
        <p>{description}</p>
        {/* <a href="#">Read more...</a> */}
      </div>
    </div>
  );
};

export default ServiceCard;
