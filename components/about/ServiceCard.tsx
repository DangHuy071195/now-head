import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
interface ServiceCardInterfaceProps {
  title: string;
  description: string;
  index: number;
  icon: any;
  id: string | number;
  image?: string;
}
import classes from './index.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
const ServiceCard: React.FC<ServiceCardInterfaceProps> = ({ index, title, icon, description, id, image }) => {
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
        {icon && <i className={`${icon} text-[40px]`}></i>}
        {!icon && image && (
          <Image
            src={image}
            width={48}
            height={48}
            alt="icon"
          />
        )}
        <p>{description}</p>
        {/* <a href="#">Read more...</a> */}
      </div>
    </div>
  );
};

export default ServiceCard;
