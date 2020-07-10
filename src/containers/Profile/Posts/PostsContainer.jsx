import React from 'react';
import { connect } from 'react-redux';

import Posts from './Posts';

import { addPost, addTempPost } from '../../../redux/profileReducer';

const PostsContainer = props => (
  <Posts {...props} />
);

const mapStateToProps = state => ({
  posts: state.profile.posts,
  tempPost: state.profile.tempPost
});

const mapDispatchToProps = {
  addPost,
  addTempPost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
