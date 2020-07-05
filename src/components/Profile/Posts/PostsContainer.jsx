import React from 'react';
import { connect } from 'react-redux';

import Posts from './Posts';

import { addPostActionCreator, addTempPostActionCreator } from '../../../redux/profileReducer';

const PostsContainer = props => (
  <Posts
    posts={props.posts}
    tempPost={props.tempPost}
    addPost={props.addPost}
    addTempPost={props.addTempPost}
  />
);

const mapStateToProps = state => ({
  posts: state.profile.posts,
  tempPost: state.profile.tempPost
});

const mapDispatchToProps = dispatch => ({
  addPost: () => dispatch(addPostActionCreator()),
  addTempPost: tempText => dispatch(addTempPostActionCreator(tempText))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
