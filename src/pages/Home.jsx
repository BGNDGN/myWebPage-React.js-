import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import burakImage from '../assets/burak-profile.webp';
import Logos from '../logo/Logo';
import register from '../assets/austin-distel-744oGeqpxPQ-unsplash.webp';
import login from '../assets/desola-lanre-ologun-zYgV-NGZtlA-unsplash.webp';
import homepage from '../assets/undraw_fingerprint-login_19qv.webp';

function Home() {
  return (
    <div className="homeContainer">
      <video autoPlay loop muted className="backgroundVideo" playsInline preload="auto">
        <source src="https://res.cloudinary.com/deh41xzpo/video/upload/v1750776340/12121108_3840_2160_30fps_snlkju.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      <div className='homeMainDiv'>
        <div className='homeFirstDiv'>
          <div className="photograph">
            <img src={burakImage} className="burakImage" alt="Burak G\u00fcndo\u011fan" loading="lazy" />
          </div>
          <div className="nameSurname"><p>Burak G\u00fcndo\u011fan</p></div>
          <div className="title"><p>Jr.Frontend/Full-Stack/Backend Developer</p></div>
          <div className="socialMedias">
            <p>Sosyal Medya Hesaplar\u0131m ve Github Hesab\u0131m</p>
            <Logos />
          </div>
          <div className="copyright"><p>Copyright \u00a9 2025 - T\u00fcm Haklar\u0131 Sakl\u0131d\u0131r.</p></div>
        </div>

        <div className='homeSecondDiv'>
          <p className="blog">BLOG SAYFAM</p>
          <p className='routerToHomePage' style={{ backgroundImage: `url(${homepage})` }}>Anasayfaya girmek i\u00e7in&nbsp;<Link to="/homepage"><strong className='routerToHomePageStrong'>t\u0131klay\u0131n\u0131z !</strong></Link></p>
          <p className='routerToLoginPage' style={{ backgroundImage: `url(${register})` }}>Kaydolmak i\u00e7in&nbsp;<Link to="/register"> <strong className='routerToHomeLoginStrong'>t\u0131klay\u0131n\u0131z !</strong></Link></p>
          <p className='routerToRegisterPage' style={{ backgroundImage: `url(${login})` }}>Giri\u015f yapmak i\u00e7in&nbsp;<Link to="/login"> <strong className='routerToHomeRegisterStrong'>t\u0131klay\u0131n\u0131z !</strong></Link></p>
        </div>
      </div>
    </div>
  );
}

export default Home;