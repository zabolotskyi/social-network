import React from 'react';

import User from './User/User';

import styles from './Users.module.css';

const Users = props => {
  if (!props.users.length) {
    props.loadUsers([
      {
        id: 1,
        name: 'Zhabka',
        status: 'My swamp is the best',
        location: {
          country: 'Land',
          city: 'Swampville'
        },
        avatarSrc: 'https://html.crumina.net/html-olympus/img/author-main1.jpg',
        isFollowing: true
      },
      {
        id: 2,
        name: 'Kote',
        status: 'Mur-meow',
        location: {
          country: 'Cats Republic',
          city: 'Playground'
        },
        avatarSrc: 'https://html.crumina.net/html-olympus/img/author-main1.jpg',
        isFollowing: false
      }
    ]);
  }

  const toggleFollow = user => () => {
    if (user.isFollowing) {
      props.unfollow(user.id);
    } else {
      props.follow(user.id);
    }
  };

  return (
    <div className={styles.users}>
      {props.users.map(user =>
        <User
          key={user.id}
          user={user}
          buttonText={user.isFollowing ? 'Unfollow' : 'Follow'}
          toggleFollow={toggleFollow(user)}
        />
      )}
    </div>
  );
};

export default Users;
