import React from 'react';

import styles from './Post.module.css';

const Post = props => (
  <div className={styles.post}>
    <div className={styles.circle} />
    <div className={styles.message}>
      <div>{props.message}</div>
      <div className={styles.likes}>Likes: {props.likes}</div>
    </div>
  </div>
);

export default Post;
