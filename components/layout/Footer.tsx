import React from 'react';
import classes from './index.module.css';
import Link from 'next/link';
import { cn } from '@/utils/cn';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={cn(classes['footer-content'], 'flex md:flex-row')}>
        <h2>Contact Me Via</h2>
        <Link
          href="mailto:nguyendanghuy071195@gmail.com"
          className="cursor-pointer flex items-center gap-[0.4rem] text-[1.2rem]">
          <i className="fa-solid fa-envelope hover:text-violet-500 text-[2.4rem]"></i> <span>|</span>
          <span> Phone number 0363792188</span>
        </Link>
        <div className="flex md:flex-row gap-[1.2rem] items-center">
          <h2>Follow me on:</h2>
          <div className={classes['social-links']}>
            <Link
              href="https://www.linkedin.com/in/huy-nguyen-2209b4165/"
              target="_blank"
              className={cn(classes['social-icon'])}>
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <div className={classes['footer-bottom']}>
        <p>&copy; 2025 Huy Nguyen Dev. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
