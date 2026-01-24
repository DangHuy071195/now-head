// components/HamburgerMenu.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

const HamburgerMenu = () => {
  const menuItems = ['Home', 'About', 'Tech', 'Job'];

  return (
    <nav className="flex items-center">
      <div className="flex items-center gap-6">
        <ul className="flex gap-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href="/"
                className="text-white hover:text-purple-400 transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
