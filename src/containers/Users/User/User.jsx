import React from 'react';
import { NavLink } from 'react-router-dom';

import { DEFAULT_SMALL_AVATAR_SRC } from '../../../consts';

import styles from './User.module.css';

const User = props => {
  const { id, photos, followed, name, status } = props.user;

  return (
    <div className={styles.user}>
      <div className={styles.user_info_left}>
        <NavLink to={`/profile/${id}`}>
          <img alt="user" src={photos.small ?? DEFAULT_SMALL_AVATAR_SRC} />
        </NavLink>
        <button onClick={props.onToggleFollow}>
          {followed ? 'Unfollow' : 'Follow'}
        </button>
      </div>
      <div className={styles.user_info_right}>
        <div className={styles.user_name_status}>
          <NavLink to={`/profile/${id}`}>{name}</NavLink>
          <div className={styles.status}>{status ?? 'No status'}</div>
        </div>
        <div className={styles.user_location}>
          <div>Ukraine</div>
          <div>Zhovti Vody</div>
        </div>
      </div>
    </div>
  );
};

export default User;
