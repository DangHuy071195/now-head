// components/HamburgerMenu.js
import { useState, useEffect } from 'react';
import styles from './HamburgerMenu.module.css';
import Link from 'next/link';
const HamburgerMenu = () => {
  const menuItems = ['Home', 'About', 'Tech', 'Job'];

  return (
    <div className={styles['header__main-nav']}>
      {/* <input type="checkbox" />
      <div className={styles['header__main-nav--hamburger']}>
        <div></div>
      </div> */}
      <div className={styles['header__main-nav--menu']}>
        <div>
          <div>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href="/"
                    className={styles['nav-link']}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
