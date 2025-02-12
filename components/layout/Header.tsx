import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import classes from './index.module.css';
import { Avatar, Dropdown } from 'antd';
import { useActions } from '@/hooks/useAction';
import Image from 'next/image';
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

  return (
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
            <Link href="#">Hire me via phone number +84363792188</Link>
          </li>
          <Image
            src={'/avatar.jpg'}
            alt="main-avt"
            width={50}
            height={50}
            className="rounded-full"
          />
          {/* <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          
          <li>
            <Link href="#">Contact</Link>
          </li> */}
          {/* {!user && (
            <li>
              <Link href="/sign-in">Sign in</Link>
            </li>
          )}
          {user && (
            <Dropdown
              trigger={['click']}
              menu={{
                items: [
                  { key: '1', label: 'Sign out', onClick: signOutHandler },
                  { key: '2', label: 'Profile', onClick: () => router.push('/profile') },
                  { key: '3', label: 'Dashboard', onClick: () => router.push('/admin') },
                ],
              }}>
              <li className="cursor-pointer">
                <Avatar
                  shape="circle"
                  src={``}
                  alt="Random Avatar"
                />
              </li>
            </Dropdown>
          )} */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
