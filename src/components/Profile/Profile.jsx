import React from 'react';

import Posts from './Posts/Posts';
import UserCard from './UserCard/UserCard';

let postsData = [
  { id: 1, message: "First comment", likes: 10 },
  { id: 2, message: "Stop spamming!", likes: 23 }
];

const Profile = () => (
  <React.Fragment>
    <UserCard />
    <Posts posts={postsData} />
  </React.Fragment>
);

export default Profile;
