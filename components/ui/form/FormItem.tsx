import React from 'react';
import classes from './form.module.css';
interface FormItemPropsI {
  forLabel: string;
  labelStr: string;
  placeholder: string;
  type?: string;
}
const FormItem: React.FC<FormItemPropsI> = ({ forLabel, type, placeholder, labelStr }) => {
  return (
    <div className={classes.form}>
      <label htmlFor={forLabel}>{labelStr}</label>
      <input
        id={forLabel}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormItem;
