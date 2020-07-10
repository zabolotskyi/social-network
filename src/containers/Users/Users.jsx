import React from 'react';

import { Loader } from '../../components/Loader';
import Pagination from './Pagination/Pagination';
import User from './User/User';

import styles from './Users.module.css';

const Users = props => (
  <div className={styles.users}>
    <Pagination
      currentPage={props.currentPage}
      pagesCount={props.pagesCount}
      onLoadUsers={props.onLoadUsers}
      onSetCurrentPage={props.onSetCurrentPage}
    />
    {props.isFetching ?
      <Loader /> : (
        props.users.map(user =>
          <User 
            key={user.id}
            user={user}
            onToggleFollow={props.onToggleFollow(user)}
          />
        )
      )}
  </div>
);

export default Users;
