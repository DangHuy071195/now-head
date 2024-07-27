import Link from 'next/link';
import React from 'react';
import HamburgerMenu from '../humberger';

const NavBar = () => {
  return (
    <nav className="py-[4px] px-[24px] flex ">
      <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-yellow-400 flex-grow-0">
        JS
      </div>
      <ul className="flex items-center flex-grow justify-around px-[12px] py-[4px]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <HamburgerMenu />
    </nav>
  );
};

export default NavBar;
