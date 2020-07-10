import React from 'react';
import { NavLink } from 'react-router-dom';

import { HEADER_LOGO_SRC } from '../../consts';

import styles from './Header.module.css';

const Header = props => {
  const { login, isLoggedIn } = props;
  return (
    <header className={styles.header}>
      <div>
        <img alt="logo" src={HEADER_LOGO_SRC} />
      </div>
      <div className={styles.login}>
        {isLoggedIn ? `Hi, ${login}!` : <NavLink to="test">Login</NavLink>}
      </div>
    
    </header>
  );
};

export default Header;
