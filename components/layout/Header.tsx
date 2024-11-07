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
    <div className={classes['header__logo__content']}>
      {/* <div className={classes['header__logo__content--content']}>
        <h1 className={classes['header__logo__content--content__title']}>Welcome to my profile</h1>
        <p className={classes['header__logo__content--content__para']}>
          &Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea odio sit consequuntur hic ipsum rem voluptate
          doloremque fugit exercitationem itaque laborum vel, earum optio!
        </p>
      </div> */}
      <Image
        alt="logo"
        src={'/logo.png'}
        width={80}
        height={80}
        className="rounded-full "
      />
      <SearchInput />
      <>{console.log(`user`, user)}</>
      <div className={classes['social-login']}>
        {!user ? (
          <button
            className={`${classes['sign-in']} text-white`}
            onClick={() => {
              router.push('/sign-in');
            }}>
            Sign In
          </button>
        ) : (
          <button
            className={classes['sign-in']}
            style={{ color: '#fff' }}
            onClick={() => {
              logout();
              if (!loading && !error && !user) {
                router.push('/sign-in');
              }
            }}>
            Sign Out
          </button>
        )}
        {!user && (
          <>
            <span className="text-white text-[18px]">|</span>
            <button
              className={classes['sign-up']}
              onClick={() => {
                router.push('/sign-up');
              }}>
              Sign up here!!
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
