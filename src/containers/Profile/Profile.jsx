import React from 'react';

import PostsContainer from './Posts/PostsContainer';
import UserCard from './UserCard/UserCard';

const Profile = props => (
  <React.Fragment>
    <UserCard {...props} />
    <PostsContainer />
  </React.Fragment>
);

export default Profile;
