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

import { followUser, getUsers, unfollowUser } from '../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    const { pageCount, currentPage, loadUsers, setTotalUsersCount, setIsFetching } = this.props;

    setIsFetching(true);
    
    getUsers(pageCount, currentPage)
      .then(res => {
        setIsFetching(false);
        loadUsers(res.items);
        setTotalUsersCount(res.totalCount);
      });
  }

  onLoadUsers = () => {
    const { pageCount, currentPage, loadUsers, setIsFetching } = this.props;

    setIsFetching(true);

    getUsers(pageCount, currentPage)
      .then(res => {
        setIsFetching(false);
        loadUsers(res.items)
      });
  }
    

  onSetCurrentPage = currentPage => {
    this.props.setCurrentPage(currentPage);
  }

  onToggleFollow = user => () => {
    const { follow, unfollow } = this.props;

    if (user.followed) {
      unfollowUser(user.id)
        .then(res => {
          if (res.resultCode === 0) {
            unfollow(user.id);
          }
        });
    } else {
      followUser(user.id)
        .then(res => {
          if (res.resultCode === 0) {
            follow(user.id);
          }
        });
    }
  }

  render() {
    const { users, totalUsersCount, pageCount, currentPage, isFetching } = this.props;

    const pagesCount = Math.ceil(totalUsersCount / pageCount);

    return (
      <Users
        users={users}
        pagesCount={pagesCount}
        currentPage={currentPage}
        isFetching={isFetching}
        onLoadUsers={this.onLoadUsers}
        onSetCurrentPage={this.onSetCurrentPage}
        onToggleFollow={this.onToggleFollow}
      />
    );
  }
}

const mapStateToProps = state => {
  const { users, pageCount, currentPage, totalUsersCount, isFetching } = state.users;

  return {
    users,
    pageCount,
    currentPage,
    totalUsersCount,
    isFetching
  };
};

const mapDispatchToProps = {
  loadUsers,
  setCurrentPage,
  setTotalUsersCount,
  follow,
  unfollow,
  setIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
