import React from 'react';
import classes from './button.module.css';
interface PrimaryButtonPropsI {
  children: React.ReactNode;
  icon?: string;
  size?: number;
}

const PrimaryButton: React.FC<PrimaryButtonPropsI> = ({ children, icon, size }) => {
  return (
    <button className={classes.btn}>
      {icon && <i className={icon} />}
      {children}
    </button>
  );
};

export default PrimaryButton;
