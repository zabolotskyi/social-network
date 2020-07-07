import React from 'react';

import Loader from '../../../components/Loader/Loader';

import styles from './UserCard.module.css';

const UserCard = props => {
  if (!props.userProfile) {
    return <Loader />;
  }

  return (
    <div className={styles.top_header}>
      <div className={styles.top_header_thumb}>
        <img alt="nature" src="https://html.crumina.net/html-olympus/img/top-header1.jpg" />
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
              : "https://html.crumina.net/html-olympus/img/author-main1.jpg"
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
