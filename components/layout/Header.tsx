import { Grid } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const { useBreakpoint } = Grid;
interface HeaderPropsI {
  user: any;
}
const Header: React.FC<HeaderPropsI> = ({ user }) => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;
  const [scrollY, setScrollY] = useState(0);
  const [headerClass, setHeaderClass] = useState('header-visible');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // At top of page, always show header
        setHeaderClass('header-visible');
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setHeaderClass('header-hidden');
      } else {
        // Scrolling up - show header
        setHeaderClass('header-visible');
      }

      lastScrollY = currentScrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`shadow-sm bg-[#2c2f35] ${headerClass}`}>
      <nav
        id="header__main-nav"
        className="flex justify-center w-full items-center"
        onClick={() => {
          const hamburgerContainer = document.querySelector('#header__main-nav');
          hamburgerContainer?.classList.toggle('clicked');
          const links = document.querySelectorAll('.header__main-nav--links li');
          links.forEach((link) => {
            link.classList.toggle('fade');
          });
        }}>
        <div className="header__main-nav--hamburger">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
        <div className="flex min-h-[4rem] items-center w-full justify-between">
          <Link
            href={'/'}
            className=" mr-[1.2rem] hidden md:block">
            <Image
              src={'/avatar.jpg'}
              alt="main-avt"
              width={!isMobile ? 40 : 60}
              height={!isMobile ? 40 : 60}
              className="rounded-full avatar"
            />
          </Link>
          <ul className="header__main-nav--links flex-end">
            <li>
              <a
                href="/cv.pdf"
                aria-label="Download CV"
                download={'nguyen-dang-huy_cv-fe-dev.pdf'}>
                <i className="fa-solid fa-folder-arrow-down"></i> About me
              </a>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/huyittos2"
                target="_blank">
                <i className="fa-brands fa-facebook"></i> Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/huy-nguyen-2209b4165/"
                target="_blank">
                <i className="fa-brands fa-linkedin"></i> Linkedin
              </Link>
            </li>
            <li>
              <Link href="tel:+84363792188">
                <i className="fa-solid fa-phone"></i> +84 363792188
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
