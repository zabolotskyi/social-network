import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = props => (
  <header className={styles.header}>
    <div>
      <img alt="logo" src="https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png" />
    </div>
    <div className={styles.login}>
      {props.isLoggedIn ? `Hi, ${props.login}!` : <NavLink to="google.com">Login</NavLink>}
    </div>
   
  </header>
);

export default Header;
