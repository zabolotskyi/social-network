import React from 'react';

import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={`${styles.item} ${styles.active}`}>
      <a href="#link">Profile</a>
    </div>
    <div className={styles.item}>
      <a href="#link">Messages</a>
    </div>
    <div className={styles.item}>
      <a href="#link">News</a>
    </div>
    <div className={styles.item}>
      <a href="#link">Music</a>
    </div>
    <div className={styles.item}>
      <a href="#link">Settings</a>
    </div>
  </nav>
);

export default Navbar;
