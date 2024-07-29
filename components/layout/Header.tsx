import Link from 'next/link';
import React from 'react';
import classes from './index.module.css';

const Header = () => {
  return (
    <div className={classes['header__logo__content']}>
      <Link
        href="/"
        className={classes['header__logo__content--logo']}>
        <span>V</span>L<span>V</span>
      </Link>
      <div className={classes['header__logo__content--content']}>
        <h1 className={classes['header__logo__content--content__title']}>Relax your soul</h1>
        <p className={classes['header__logo__content--content__para']}>
          &Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea odio sit consequuntur hic ipsum rem voluptate
          doloremque fugit exercitationem itaque laborum vel, earum optio!
        </p>
      </div>
      <div>Link</div>
    </div>
  );
};

export default Header;
