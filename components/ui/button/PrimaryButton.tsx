import React from 'react';
import classes from './button.module.css';
interface PrimaryButtonPropsI {
  children: React.ReactNode;
  icon?: string;
  size?: number;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonPropsI> = ({ children, icon, size, type, style, onClick }) => {
  return (
    <button
      className={classes.btn}
      style={style}
      onClick={onClick}
      type={type}>
      {icon && <i className={`${icon} mr-[0.4rem]`} />}
      {children}
    </button>
  );
};

export default PrimaryButton;
