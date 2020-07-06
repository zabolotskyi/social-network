import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';

import {
  followActionCreator,
  loadUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  unfollowActionCreator
} from '../../redux/usersReducer';

const UsersContainer = props => (
  <Users
    users={props.users}
    pageCount={props.pageCount}
    currentPage={props.currentPage}
    totalUsersCount={props.totalUsersCount}
    loadUsers={props.loadUsers}
    setCurrentPage={props.setCurrentPage}
    setTotalUsersCount={props.setTotalUsersCount}
    follow={props.follow}
    unfollow={props.unfollow}
  />
);

const mapStateToProps = state => ({
  users: state.users.users,
  pageCount: state.users.pageCount,
  currentPage: state.users.currentPage,
  totalUsersCount: state.users.totalUsersCount
});

const mapDispatchToProps = dispatch => ({
  loadUsers: users => dispatch(loadUsersActionCreator(users)),
  setCurrentPage: currentPage => dispatch(setCurrentPageActionCreator(currentPage)),
  setTotalUsersCount: totalUsersCount => dispatch(setTotalUsersCountActionCreator(totalUsersCount)),
  follow: userId => dispatch(followActionCreator(userId)),
  unfollow: userId => dispatch(unfollowActionCreator(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
