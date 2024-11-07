import React from 'react';
import classes from './index.module.css';
const SearchInput = () => {
  return (
    <div className="relative  max-w-[40vw] flex-1">
      <i className="fa-solid fa-magnifying-glass text-[20px] absolute top-[12px] left-[12px] text-gray-400"></i>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none border-gray-500 border-2 rounded-[20px] px-[42px] py-[5px] text-white text-[20px] w-full"
      />
    </div>
  );
};

export default SearchInput;
