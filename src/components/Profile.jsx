import React from 'react';

import styles from './Profile.module.css';

const Profile = () => (
  <div className={styles.profile}>
    <div className={styles.photo_wall}>
      <img alt="theme" src="https://static.dgnb.de/fileadmin/dgnb-system/de/gebaeude/im-betrieb/Dutchman-Office_LaSalle-848-345px.jpg?m=1582814195" />
    </div>
    <div className={styles.profile_info}>
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
      <div className={styles.new_post}>
        <div>My posts</div>
        <textarea placeholder="Your news..." />
        <div className={styles.button}>
          <button>Send</button>
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div className={styles.circle} />
          <div>Message 1</div>
        </div>
        <div className={styles.post}>
          <div className={styles.circle} />
          <div>Message 2</div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
