import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideNav = () => {
  return (
    <aside id="side-nav">
      <div className="side-nav__content">
        <div className="side-nav__content--logo">
          <Image
            src="/kid.jpg"
            alt="logo"
            width={60}
            height={60}
          />
        </div>
        <ul className="side-nav__content--social">
          <Link href="#">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-instagram"></i>{' '}
          </Link>
          <Link href="#">
            <i className="fa-brands fa-skype"></i>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
