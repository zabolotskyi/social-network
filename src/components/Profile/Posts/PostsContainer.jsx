import React from 'react';

import Posts from './Posts';

import { addPostActionCreator, addTempPostActionCreator } from '../../../redux/profileReducer';
import { StoreContext } from '../../../storeContext';

const PostsContainer = () => (
  <StoreContext.Consumer>
    {store => {
      const state = store.getState().profile;

      const addPost = () => store.dispatch(addPostActionCreator());
      const addTempPost = tempText => store.dispatch(addTempPostActionCreator(tempText));

      return (
        <Posts
          posts={state.posts}
          tempPost={state.tempPost}
          addPost={addPost}
          addTempPost={addTempPost}
        />
      );
    }}
  </StoreContext.Consumer>

);

export default PostsContainer;
