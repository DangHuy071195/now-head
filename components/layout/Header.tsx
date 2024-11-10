import Link from 'next/link';
import React from 'react';
import classes from './index.module.css';
import { useRouter } from 'next/navigation';
import { useTypedSelector } from '@/hooks/useSelector';
import { useActions } from '@/hooks/useAction';
import Image from 'next/image';
import SearchInput from '../ui/search-input';
interface HeaderPropsI {
  user: any;
}
const Header: React.FC<HeaderPropsI> = ({ user }) => {
  const router = useRouter();
  const selector = useTypedSelector((state) => state.user);
  console.log(`selector`, selector);
  const { logout } = useActions();
  const { loading, user: userStore, accessToken, error } = useTypedSelector((state) => state.user);

  return (
    <div className={`${classes['header__logo__content']} `}>
      <header id="header">
        <nav
          id="header__main-nav"
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
          <ul className="header__main-nav--links">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Hire Me</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
