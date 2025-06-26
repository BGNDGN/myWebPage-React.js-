import React, { useState, useCallback } from 'react';
import About from '../components/About.jsx';
import SSS from '../components/SSS.jsx';
import FSDI from '../components/FSDI.jsx';
import UsingTechnologies from '../components/UsingTechnologies.jsx';
import Logos from '../logo/Logo';
import burakImage from '../assets/burak-profile.webp';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';

function HomePage() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleSendMail = useCallback(() => {
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=burakgundogan25@gmail.com&su=${encodeURIComponent(subject)}&body=Mail adresim: ${email}`;
    window.open(gmailURL, "_blank");
  }, [email, subject]);

  return (
    <div>
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <video autoPlay loop muted className="backgroundVideo" playsInline preload="auto">
        <source
          src="https://res.cloudinary.com/deh41xzpo/video/upload/v1750776287/3129671-uhd_3840_2160_30fps_hzqcf0.mp4"
          type="video/mp4"
        />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      <div className="navbarDiv">
        <div className="navbarPageName">
          <Link to="/homepage">burakgundogan.net</Link>
        </div>

        <div className="navbarZones">
          <a href="#about">Hakk\u0131mda</a>
          <a href="#experience">\u0130\u015f Deneyimlerim</a>
          <a href="#skills">Kulland\u0131\u011f\u0131m Teknolojiler</a>
          <a href="#socials">Sosyal Medyalar\u0131m</a>
          <a href="#contact">Benimle \u0130leti\u015fime Ge\u00e7</a>
          <Link to="/">Giri\u015f Sayfas\u0131na Geri D\u00f6n</Link>
        </div>
      </div>

      <div id="about" className="aboutZone">
        <h2>Hakk\u0131mda</h2>
        <hr />
        <img src={burakImage} className="burakImage" alt="Burak G\u00fcndo\u011fan" loading="lazy" />
        <div className="aboutZoneText">
          <About />
        </div>
      </div>

      <div id="experience" className="experienceZone">
        <h2>\u0130\u015f Deneyimlerim</h2>
        <hr />
        <SSS />
        <hr />
        <FSDI />
        <hr />
      </div>

      <div id="skills" className="usingTechnologiesZone">
        <h2>Kulland\u0131\u011f\u0131m Teknolojiler</h2>
        <hr />
        <UsingTechnologies />
        <hr />
      </div>

      <div id="contact" className="contactMeZone">
        <h2>Benimle \u0130leti\u015fime Ge\u00e7in</h2>
        <hr />
        <div className="mailDiv">
          <label>
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              className="mailInput"
            />
          </label>
        </div>
        <div>
          <label>
            Konu:
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Konu ba\u015fl\u0131\u011f\u0131"
              className="subjectInput"
            />
          </label>
        </div>
        <div>
          <button className="contactMeButton" onClick={handleSendMail}>
            G\u00f6nder
          </button>
        </div>
      </div>

      <div id="socials" className="socialMediasZone">
        <h2>Sosyal Medya Hesaplar\u0131m</h2>
        <hr />
        <Logos />
      </div>
    </div>
  );
}

export default HomePage;