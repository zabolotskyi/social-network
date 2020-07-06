import React from 'react';

import styles from './User.module.css';

const User = props => (
  <div className={styles.user}>
    <div className={styles.user_info_left}>
      <div>
        <img alt="user" src={props.avatarSrc} />
      </div>
      <button onClick={props.toggleFollow}>
        {props.buttonText}
      </button>
    </div>
    <div className={styles.user_info_right}>
      <div className={styles.user_name_status}>
        <div>{props.user.name}</div>
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
