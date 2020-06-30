import React from 'react';

import Post from './Post/Post';

import styles from './Posts.module.css';

let renderPosts = posts => posts.map(post => (
  <Post key={post.id} id={post.id} message={post.message} likes={post.likes} />
));

const Posts = props => (
  <React.Fragment>
    <div className={styles.new_post}>
      <div>My posts</div>
      <textarea placeholder="Your news..." />
      <div className={styles.button}>
        <button>Send</button>
      </div>
    </div>
    <div className={styles.posts}>
      {renderPosts(props.posts)}
    </div>
  </React.Fragment>
);

export default Posts;
