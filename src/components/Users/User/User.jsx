import React from 'react';

import styles from './User.module.css';

const User = props => (
  <div className={styles.user}>
    <div className={styles.user_info_left}>
      <div>
        <img alt="user" src="https://image.flaticon.com/icons/svg/147/147144.svg" />
      </div>
      <button onClick={props.toggleFollow}>
        {props.buttonText}
      </button>
    </div>
    <div className={styles.user_info_right}>
      <div className={styles.user_name_status}>
        <div>{props.user.name}</div>
        <div className={styles.status}>{props.user.status}</div>
      </div>
      <div className={styles.user_location}>
        <div>{props.user.location.country}</div>
        <div>{props.user.location.city}</div>
      </div>
    </div>
  </div>
);

export default User;
