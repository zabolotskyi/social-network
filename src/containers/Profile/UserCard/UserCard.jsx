import React from 'react';

import { Loader } from '../../../components/Loader';

import { DEFAULT_BIG_AVATAR_SRC, DEFAULT_WALLPAPER_SRC } from '../../../consts';

import styles from './UserCard.module.css';

const UserCard = props => {
  if (!props.userProfile) {
    return <Loader />;
  }

  return (
    <div className={styles.top_header}>
      <div className={styles.top_header_thumb}>
        <img alt="nature" src={DEFAULT_WALLPAPER_SRC} />
      </div>
      <div className={styles.profile_section}>
        <div className={styles.row}>
          <div className={styles.row_nav}>
            <div>Timeline</div>
            <div>About</div>
            <div>Friends</div>
          </div>
          <div className={styles.row_nav}>
            <div>Photos</div>
            <div>Videos</div>
            <div>...</div>  
          </div>
        </div>
      </div>
      <div className={styles.top_header_author}>
        <img
          alt="theme"
          src={
            props.userProfile.photos.small
              ? props.userProfile.photos.small
              : DEFAULT_BIG_AVATAR_SRC
          }
        />
        <div className={styles.author_content}>
          <div className={styles.author_name}>{props.userProfile.fullName}</div>
          <div className={styles.author_location}>{props.userProfile.aboutMe}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
