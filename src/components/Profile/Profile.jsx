import React from 'react';

import Posts from './Posts/Posts';
import UserCard from './UserCard/UserCard';

import styles from './Profile.module.css';

const Profile = () => (
  <div className={styles.profile}>
    <div className={styles.photo_wall}>
      <img alt="theme" src="https://static.dgnb.de/fileadmin/dgnb-system/de/gebaeude/im-betrieb/Dutchman-Office_LaSalle-848-345px.jpg?m=1582814195" />
    </div>
    <div className={styles.profile_info}>
      <UserCard />
      <Posts />
    </div>
  </div>
);

export default Profile;
