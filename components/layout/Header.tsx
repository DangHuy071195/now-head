import Link from 'next/link';
import React from 'react';
import classes from './index.module.css';
import { useRouter } from 'next/navigation';
import { useTypedSelector } from '@/hooks/useSelector';
import { useActions } from '@/hooks/useAction';
const Header = () => {
  const router = useRouter();
  const selector = useTypedSelector((state) => state.user);
  console.log(`selector`, selector);
  const { logout } = useActions();
  return (
    <div className={classes['header__logo__content']}>
      <Link
        href="/"
        className={classes['header__logo__content--logo']}>
        <span>Huy IT | JS Mastery</span>
      </Link>
      {/* <div className={classes['header__logo__content--content']}>
        <h1 className={classes['header__logo__content--content__title']}>Welcome to my profile</h1>
        <p className={classes['header__logo__content--content__para']}>
          &Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea odio sit consequuntur hic ipsum rem voluptate
          doloremque fugit exercitationem itaque laborum vel, earum optio!
        </p>
      </div> */}
      <div className={classes['social-login']}>
        <button
          className={classes['sign-in']}
          onClick={() => {
            router.push('/sign-in');
          }}>
          Sign In
        </button>
        <button
          className={classes['sign-in']}
          style={{ color: '#fff' }}
          onClick={() => {
            logout();
          }}>
          Sign Out
        </button>
        <button
          className={classes['sign-up']}
          onClick={() => {
            router.push('/sign-up');
          }}>
          Sign up here!!
        </button>
      </div>
    </div>
  );
};

export default Header;
