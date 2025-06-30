import React from 'react';
import styles from '../css/Layout.module.css';

function Layout({ children, videoUrl }) {
  return (
    <div className={styles.layoutContainer}>
      <video
        autoPlay
        loop
        muted
        className={styles.layoutBackgroundVideo}
        playsInline
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      <div className={styles.layoutContent}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
