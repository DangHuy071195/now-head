import React from 'react';

interface PrimaryButtonPropsI {
  children: React.ReactNode;
  icon?: string;
  size?: number;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: any) => void;
}

const PrimaryButton: React.FC<PrimaryButtonPropsI> = ({ children, icon, size, type, style, onClick }) => {
  return (
    <button
      className="bg-[#2e2c2f] text-white border-none px-5 py-2 rounded cursor-pointer max-w-[15rem] mt-10 ml-auto text-xl transition-all duration-200 hover:opacity-80 active:shadow-[1px_0_0.8rem_1px_rgba(209,128,242,0.75)]"
      style={style}
      onClick={onClick}
      type={type}>
      {icon && <i className={`${icon} mr-[0.4rem]`} />}
      {children}
    </button>
  );
};

export default PrimaryButton;
