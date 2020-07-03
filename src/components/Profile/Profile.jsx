import React from 'react';

import PostsContainer from './Posts/PostsContainer';
import UserCard from './UserCard/UserCard';

const Profile = () => (
  <React.Fragment>
    <UserCard />
    <PostsContainer />
  </React.Fragment>
);

export default Profile;
