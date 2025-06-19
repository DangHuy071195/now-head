import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import classes from './index.module.css';
import { Avatar, Dropdown, Grid } from 'antd';
import { useActions } from '@/hooks/useAction';
import Image from 'next/image';
const { useBreakpoint } = Grid;
interface HeaderPropsI {
  user: any;
}
const Header: React.FC<HeaderPropsI> = ({ user }) => {
  const router = useRouter();
  // const selector = useTypedSelector((state) => state.user);
  const { userLogout } = useActions();
  // const { loading, user: userStore, accessToken, error } = useTypedSelector((state) => state.user);

  const signOutHandler = () => {
    userLogout();
  };

  const screens = useBreakpoint();
  const isMobile = screens.xs;
  console.log(`screens`, screens);
  return (
    <header
      id="header"
      className="shadow-sm bg-[#2c2f35]">
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
            className=" mr-[1.2rem]">
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
                download={'nguyen-huy-cv-middle-fe.pdf'}>
                <i className="fa-solid fa-folder-arrow-down"></i> About me
              </a>
            </li>

            <li>
              <Link
                href="https://www.facebook.com/huyittos2"
                target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/huy-nguyen-2209b4165/"
                target="_blank">
                <i className="fa-brands fa-linkedin"></i>
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
