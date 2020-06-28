import React from 'react';

import Post from './Post/Post';

import styles from './Posts.module.css';

const Posts = () => (
  <React.Fragment>
    <div className={styles.new_post}>
      <div>My posts</div>
      <textarea placeholder="Your news..." />
      <div className={styles.button}>
        <button>Send</button>
      </div>
    </div>
    <div className={styles.posts}>
      <Post />
      <Post />
    </div>
  </React.Fragment>
);

export default Posts;
