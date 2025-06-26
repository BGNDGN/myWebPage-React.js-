import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Home.module.css';
import burakImage from '../assets/burak-profile.webp';
import Logos from '../logo/Logo';
import register from '../assets/austin-distel-744oGeqpxPQ-unsplash.webp';
import login from '../assets/desola-lanre-ologun-zYgV-NGZtlA-unsplash.webp';
import homepage from '../assets/undraw_fingerprint-login_19qv.webp';
import Layout from '../components/Layout';

function Home () {
  return (
    <Layout videoUrl="https://res.cloudinary.com/deh41xzpo/video/upload/v1750776340/12121108_3840_2160_30fps_snlkju.mp4">
    <div className={styles.homeContainer}>
      <div className={styles.homeMainDiv}>
        <div className={styles.homeFirstDiv}>
          <div className={styles.photograph}>
            <img src={burakImage} className={styles.burakImage} alt="Burak Gündoğan" loading="lazy" />
          </div>
          <div className={styles.nameSurname}><p>Burak Gündoğan</p></div>
          <div className={styles.title}><p>Jr.Frontend/Full-Stack/Backend Developer</p></div>
          <div className={styles.socialMedias}><p>Sosyal Medya Hesaplarım ve Github Hesabım</p>
            <Logos />
          </div>
          <div className={styles.copyright}><p>Copyright © 2025 - Tüm Hakları Saklıdır.</p></div>
        </div>

        <div className={styles.homeSecondDiv}>
          <p className={styles.blog}>BLOG SAYFAM</p>
          <p className={styles.routerToHomePage} style={{ backgroundImage: `url(${homepage})` }}>Anasayfaya girmek için&nbsp;<Link to="/homepage"><strong className={styles.routerToHomePageStrong}>tıklayınız !</strong></Link></p>
          <p className={styles.routerToLoginPage} style={{ backgroundImage: `url(${register})` }}>Kaydolmak için&nbsp;<Link to="/register"> <strong className={styles.routerToHomeLoginStrong}>tıklayınız !</strong></Link></p>
          <p className={styles.routerToRegisterPage} style={{ backgroundImage: `url(${login})` }}>Giriş yapmak için&nbsp;<Link to="/login"> <strong className={styles.routerToHomeRegisterStrong}>tıklayınız !</strong></Link></p>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Home;