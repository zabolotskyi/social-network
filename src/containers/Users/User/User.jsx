import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './User.module.css';

const User = props => (
  <div className={styles.user}>
    <div className={styles.user_info_left}>
      <NavLink to={`/profile/${props.user.id}`}>
        <img alt="user" src={props.avatarSrc} />
      </NavLink>
      <button onClick={props.onToggleFollow}>
        {props.buttonText}
      </button>
    </div>
    <div className={styles.user_info_right}>
      <div className={styles.user_name_status}>
        <NavLink to={`/profile/${props.user.id}`}>{props.user.name}</NavLink>
        <div className={styles.status}>{props.status}</div>
      </div>
      <div className={styles.user_location}>
        <div>Ukraine</div>
        <div>Zhovti Vody</div>
      </div>
    </div>
  </div>
);

export default User;
