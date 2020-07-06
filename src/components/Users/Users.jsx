import * as axios from 'axios';
import React from 'react';

import Pagination from './Pagination/Pagination';
import User from './User/User';

import styles from './Users.module.css';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCount}&page=${this.props.currentPage}`)
      .then(res => {
        this.props.loadUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  toggleFollow = user => () => {
    if (user.followed) {
      this.props.unfollow(user.id);
    } else {
      this.props.follow(user.id);
    }
  }

  onLoadUsers = currentPage =>
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCount}&page=${currentPage}`)
      .then(res => this.props.loadUsers(res.data.items));

  onSetCurrentPage = currentPage => {
    this.props.setCurrentPage(currentPage);
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageCount);

    return (
      <div className={styles.users}>
        <Pagination
          currentPage={this.props.currentPage}
          pagesCount={pagesCount}
          onLoadUsers={this.onLoadUsers}
          onSetCurrentPage={this.onSetCurrentPage}
        />
        {this.props.users.map(user =>
          <User
            key={user.id}
            user={user}
            status={user.status ? user.status : 'No status'}
            avatarSrc={user.photos.small ? user.photos.small : 'https://image.flaticon.com/icons/svg/147/147144.svg'}
            buttonText={user.followed ? 'Unfollow' : 'Follow'}
            toggleFollow={this.toggleFollow(user)}
          />
        )}
      </div>
    );
  }
}

export default Users;
