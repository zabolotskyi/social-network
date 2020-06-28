import React from 'react';

import styles from './UserCard.module.css';

const UserCard = () => (
  <React.Fragment>
    <div className={styles.avatar_description}>
      <div className={styles.avatar}>
        <img alt="avatar" src="https://ae01.alicdn.com/kf/HTB1iSSfMNjaK1RjSZKzq6xVwXXa8/3D-DIY-Diamond-Painting-Pug-Dog-Animals-Embroidery-Full-Square-Diamond-Painting-Cross-Stitch-Rhinestone-Mosaic.jpg_640x640q70.jpg" />
      </div>
      <div className={styles.description}>
        <div>Name: Puggy D.</div>
        <div>Date of birth: 2nd January</div>
        <div>City: Zhovti Vody</div>
        <div>Education: PTU'20</div>
        <div>Website: pug.com</div>
      </div>
    </div>
  </React.Fragment>
);

export default UserCard;
