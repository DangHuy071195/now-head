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
      {/* <div className={classes['header__logo__content--content']}>
        <h1 className={classes['header__logo__content--content__title']}>Welcome to my profile</h1>
        <p className={classes['header__logo__content--content__para']}>
          &Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea odio sit consequuntur hic ipsum rem voluptate
          doloremque fugit exercitationem itaque laborum vel, earum optio!
        </p>
      </div> */}
      {/* <Image
        alt="logo"
        src={'/logo.png'}
        width={60}
        height={60}
        className="rounded-full "
      /> */}
      {/* <SearchInput /> */}
      <Image
        src="/kid.jpg"
        alt="logo"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="flex justify-between flex-0.5">
        <Link
          className={classes['header-item']}
          href={'/'}>
          Home
        </Link>
        <Link
          className={classes['header-item']}
          href={'/'}>
          Services
        </Link>
        <Link
          className={classes['header-item']}
          href={'/'}>
          Contact
        </Link>
        <Link
          className={classes['header-item']}
          href={'/'}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
