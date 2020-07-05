import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';

import { followActionCreator, loadUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';

const UsersContainer = props => (
  <Users
    users={props.users}
    loadUsers={props.loadUsers}
    follow={props.follow}
    unfollow={props.unfollow}
  />
);

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => ({
  loadUsers: users => dispatch(loadUsersActionCreator(users)),
  follow: userId => dispatch(followActionCreator(userId)),
  unfollow: userId => dispatch(unfollowActionCreator(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
