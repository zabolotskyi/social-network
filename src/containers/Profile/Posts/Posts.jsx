import React from 'react';

import Post from './Post/Post';

import styles from './Posts.module.css';

const renderPosts = posts => posts.map(post => (
  <Post key={post.id} id={post.id} message={post.message} likes={post.likes} />
));

const Posts = props => {
  const onAddTempPost = event => {
    const tempText = event.target.value;
    props.addTempPost(tempText);
  };

  const onAddPost = () => {
    props.addPost();
  };

  return (
    <React.Fragment>
      <div className={styles.new_post}>
        <div>My posts</div>
        <textarea
          placeholder="Your news..."
          onChange={onAddTempPost}
          value={props.tempPost}
        />
        <div className={styles.button}>
          <button onClick={onAddPost}>Send</button>
        </div>
      </div>
      <div className={styles.posts}>
        {props.tempPost}
        {renderPosts(props.posts)}
      </div>
    </React.Fragment>
  );
};

export default Posts;
