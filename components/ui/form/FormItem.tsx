import React, { useState } from 'react';
import classes from './form.module.css';
interface FormItemPropsI {
  forLabel: string;
  labelStr: string;
  type?: string;
  value?: string;
  errors?: string[];
  onChange?: (e: any) => void;
}
const FormItem: React.FC<FormItemPropsI> = ({ forLabel, type, labelStr, onChange, value, errors }) => {
  const [isFocused, setIsFocused] = useState(false);
  const onChangeInputHandler = () => {};
  return (
    <div className={classes.form}>
      <div className={classes.combobox}>
        <label
          htmlFor={forLabel}
          className={`${classes.label} ${isFocused ? classes.focused : ''}`}>
          {labelStr}
        </label>
        <input
          id={forLabel}
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== '')}
          value={value}
          onChange={onChange}
        />
      </div>
      <span style={{ color: '#ca4646' }}>
        {errors?.map((err: string) => {
          return <p key={err}>{err}</p>;
        })}
      </span>
    </div>
  );
};

export default FormItem;
