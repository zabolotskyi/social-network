import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';

import {
  follow,
  loadUsers,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  unfollow
} from '../../redux/usersReducer';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCount}&page=${this.props.currentPage}`)
      .then(res => {
        this.props.setIsFetching(false);
        this.props.loadUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onLoadUsers = () => {
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCount}&page=${this.props.currentPage}`)
      .then(res => {
        this.props.setIsFetching(false);
        this.props.loadUsers(res.data.items)
      });
  }
    

  onSetCurrentPage = currentPage => {
    this.props.setCurrentPage(currentPage);
  }

  onToggleFollow = user => () => {
    if (user.followed) {
      this.props.unfollow(user.id);
    } else {
      this.props.follow(user.id);
    }
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageCount);

    return (
      <Users
        users={this.props.users}
        pagesCount={pagesCount}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
        onLoadUsers={this.onLoadUsers}
        onSetCurrentPage={this.onSetCurrentPage}
        onToggleFollow={this.onToggleFollow}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  pageCount: state.users.pageCount,
  currentPage: state.users.currentPage,
  totalUsersCount: state.users.totalUsersCount,
  isFetching: state.users.isFetching
});

const mapDispatchToProps = {
  loadUsers,
  setCurrentPage,
  setTotalUsersCount,
  follow,
  unfollow,
  setIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
