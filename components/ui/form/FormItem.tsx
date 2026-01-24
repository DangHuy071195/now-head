import React, { useState } from 'react';

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
    <div className="flex flex-col gap-3 mb-10">
      <div className="relative w-full">
        <label
          htmlFor={forLabel}
          className={`absolute top-1/2 left-4 -translate-y-1/2 text-[#ccc] text-[1.4rem] transition-all duration-200 pointer-events-none ${
            isFocused || value ? '!top-[-10px] !text-xs !text-white' : 'invisible'
          }`}
        >
          {labelStr}
        </label>
        <input
          id={forLabel}
          type={type}
          className="p-2 rounded border-none outline-none text-[#232323] text-lg h-[3.2rem] w-full"
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
