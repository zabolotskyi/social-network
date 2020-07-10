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

import { API_URL } from '../../consts';

class UsersContainer extends React.Component {

  componentDidMount() {
    const { pageCount, currentPage, loadUsers, setTotalUsersCount, setIsFetching } = this.props;

    setIsFetching(true);
    
    axios.get(
      `${API_URL}/users?count=${pageCount}&page=${currentPage}`,
      {
        withCredentials: true,
        headers: {
          "API-KEY": "17595c62-ba18-4475-be9c-85ddf88bea8a"
        }
      }
    )
      .then(res => {
        setIsFetching(false);
        loadUsers(res.data.items);
        setTotalUsersCount(res.data.totalCount);
      });
  }

  onLoadUsers = () => {
    const { pageCount, currentPage, loadUsers, setIsFetching } = this.props;

    setIsFetching(true);

    axios.get(
      `${API_URL}/users?count=${pageCount}&page=${currentPage}`,
      {
        withCredentials: true,
        headers: {
          "API-KEY": "17595c62-ba18-4475-be9c-85ddf88bea8a"
        }
      }
    )
      .then(res => {
        setIsFetching(false);
        loadUsers(res.data.items)
      });
  }
    

  onSetCurrentPage = currentPage => {
    this.props.setCurrentPage(currentPage);
  }

  onToggleFollow = user => () => {
    const { follow, unfollow } = this.props;

    if (user.followed) {
      axios.delete(
        `${API_URL}/follow/${user.id}`,
        {
          withCredentials: true,
          headers: {
            "API-KEY": "17595c62-ba18-4475-be9c-85ddf88bea8a"
          }
        }
      )
        .then(res => {
          if (res.data.resultCode === 0) {
            unfollow(user.id);
          }
        });
    } else {
      axios.post(
        `${API_URL}/follow/${user.id}`,
        {},
        {
          withCredentials: true,
          headers: {
            "API-KEY": "17595c62-ba18-4475-be9c-85ddf88bea8a"
          }
        }
      )
        .then(res => {
          if (res.data.resultCode === 0) {
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
