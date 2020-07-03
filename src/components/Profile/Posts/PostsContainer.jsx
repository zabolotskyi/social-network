import React from 'react';

import Posts from './Posts';

import { addPostActionCreator, addTempPostActionCreator } from '../../../redux/profileReducer';

const PostsContainer = props => {
  const state = props.store.getState().profile;

  const addPost = () => props.store.dispatch(addPostActionCreator());
  const addTempPost = tempText => props.store.dispatch(addTempPostActionCreator(tempText));

  return (
    <Posts
      posts={state.posts}
      tempPost={state.tempPost}
      addPost={addPost}
      addTempPost={addTempPost}
    />
  );
};

export default PostsContainer;
