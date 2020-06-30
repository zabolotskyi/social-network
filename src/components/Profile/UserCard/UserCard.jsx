import React from 'react';

import styles from './UserCard.module.css';

const UserCard = () => (
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
      <img alt="theme" src="https://html.crumina.net/html-olympus/img/author-main1.jpg" />
      <div className={styles.author_content}>
        <div className={styles.author_name}>James Spiegel</div>
        <div className={styles.author_location}>San Francisco, CA</div>
      </div>
    </div>
  </div>
);

export default UserCard;
