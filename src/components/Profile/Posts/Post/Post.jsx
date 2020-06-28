import React from 'react';

import styles from './Post.module.css';

const Post = () => (
  <div className={styles.post}>
    <div className={styles.circle} />
    <div>Message 1</div>
  </div>
);

export default Post;
