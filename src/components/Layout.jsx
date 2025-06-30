import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/Layout.module.css';

function Layout({ children, videoUrl }) {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/login':
        document.body.style.backgroundColor = '#1f2937';
        document.body.style.color = '#fff';
        break;
      case '/register':
      case '/homepage':
      case '/':
        document.body.style.backgroundColor = '#f9f9f9';
        document.body.style.color = '#333';
        break;
      default:
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [location.pathname]);

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
