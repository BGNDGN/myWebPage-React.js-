import React, { useState, useCallback } from 'react';
import About from '../components/About.jsx';
import SSS from '../components/SSS.jsx';
import FSDI from '../components/FSDI.jsx';
import UsingTechnologies from '../components/UsingTechnologies.jsx';
import Logos from '../logo/Logo';
import burakImage from '../assets/burak-profile.webp';
import { Link } from 'react-router-dom';
import styles from '../css/HomePage.module.css';
import Layout from '../components/Layout';

function HomePage() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleSendMail = useCallback(() => {
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=burakgundogan25@gmail.com&su=${encodeURIComponent(subject)}&body=Mail adresim:${email}`;
    window.open(gmailURL, "_blank");
  }, [email, subject]);

  return (
    <Layout videoUrl="https://res.cloudinary.com/deh41xzpo/video/upload/v1750776287/3129671-uhd_3840_2160_30fps_hzqcf0.mp4">
      <div>
        <div className={styles.navbarDiv}>
          <div className={styles.navbarPageName}>
            <Link to="/homepage">burakgundogan.net</Link>
          </div>

          <div className={styles.navbarZones}>
            <a href="#about">Hakkımda</a>
            <a href="#experience">İş Deneyimlerim</a>
            <a href="#skills">Kullandığım Teknolojiler</a>
            <a href="#socials">Sosyal Medyalarım</a>
            <a href="#contact">Benimle İletişime Geç</a>
            <Link to="/">Giriş Sayfasına Geri Dön</Link>
          </div>
        </div>

        <div id="about" className={styles.aboutZone}>
          <h2>Hakkımda</h2>
          <hr />
          <img src={burakImage} className={styles.burakImageHomePage} alt="Burak Gündoğan" loading="lazy" />
          <div className={styles.aboutZoneText}>
            <About />
          </div>
          <hr className={styles.aboutZoneThisHrHasToHidden}/>
        </div>

        <div id="experience" className={styles.experienceZone}>
          <h2>İş Deneyimlerim</h2>
          <hr />
          <SSS />
          <hr />
          <FSDI />
          <hr />
        </div>

        <div id="skills" className={styles.usingTechnologiesZone}>
          <h2>Kullandığım Teknolojiler</h2>
          <hr />
          <UsingTechnologies />
          <hr />
        </div>

        <div id="contact" className={styles.contactMeZone}>
          <h2>Benimle İletişime Geçin</h2>
          <hr className={styles.contactMeZoneHr}/>

          <div className={styles.mailDiv}>
            <label>
              E-mail: 
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                maxLength={29}
                className={styles.mailInput}
              />
            </label>
          </div>

          <div className={styles.subjectDiv}>
            <label />
            Konu:
            <textarea
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Konu başlığı"
              maxLength={405}
              className={styles.subjectInput}
            />
          </div>

          <div>
            <button className={styles.contactMeButton} onClick={handleSendMail}>Gönder</button>
          </div>
        </div>

        <div id="socials" className={styles.socialMediasZone}>
          <h2>Sosyal Medya Hesaplarım</h2>
          <hr className={styles.socialMediasZoneHr}/>
          <Logos />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
