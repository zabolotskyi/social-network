import React from 'react';
import { NavLink } from 'react-router-dom';

import { DEFAULT_SMALL_AVATAR_SRC } from '../../../consts';

import styles from './Dialog.module.css';

const Dialog = props => {
  const path = `/messages/${props.id}`;

  return (
    <div>
      <NavLink to={path} className={styles.link} >
        <div className={styles.dialog}>
          <div>
            <img alt="user" src={DEFAULT_SMALL_AVATAR_SRC} />
          </div>
          <div className={styles.info}>
            <div>
              <div className={styles.username}>{props.name}</div>
              <div className={styles.message}>Hi, how about...</div>
            </div>
            <div className={styles.message_info}>
              <div>5:14 PM</div>
              <div className={styles.message_count}>{props.messages}</div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Dialog;
