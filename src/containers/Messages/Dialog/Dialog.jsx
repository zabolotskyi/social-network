import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Dialog.module.css';

const Dialog = props => {
  const path = `/messages/${props.id}`;

  return (
    <div>
      <NavLink to={path} className={styles.link} >
        <div className={styles.dialog}>
          <div>
            <img alt="user" src="https://image.flaticon.com/icons/svg/147/147144.svg" />
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
