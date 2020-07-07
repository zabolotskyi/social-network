import React from 'react';

import styles from './Message.module.css';

const Message = props => (
  <div className={styles.message_wrapper}>
    <div>
      <img alt="user" src="https://image.flaticon.com/icons/svg/147/147144.svg" />
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
