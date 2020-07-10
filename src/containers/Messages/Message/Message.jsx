import React from 'react';

import { DEFAULT_SMALL_AVATAR_SRC } from '../../../consts';

import styles from './Message.module.css';

const Message = props => (
  <div className={styles.message_wrapper}>
    <div>
      <img alt="user" src={DEFAULT_SMALL_AVATAR_SRC} />
    </div>
    <div className={styles.info}>
      <div>
        <div className={styles.username}>{props.name}</div>
        <div className={styles.message}>{props.message}</div>
      </div>
      <div className={styles.message_info}>5:14:00 PM</div>
    </div>
  </div>
);

export default Message;
