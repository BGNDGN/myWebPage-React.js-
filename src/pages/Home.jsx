import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import burakImage from '../assets/burak-profile.webp';
import Logos from '../logo/Logo';
import register from '../assets/austin-distel-744oGeqpxPQ-unsplash.webp';
import login from '../assets/desola-lanre-ologun-zYgV-NGZtlA-unsplash.webp';
import homepage from '../assets/undraw_fingerprint-login_19qv.webp';

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homeContainer">
      <video
        className="backgroundVideo"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source
          src="https://res.cloudinary.com/deh41xzpo/video/upload/v1750776340/12121108_3840_2160_30fps_snlkju.mp4"
          type="video/mp4"
        />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      {!videoLoaded && (
        <div className="loadingPlaceholder">Yükleniyor...</div>
      )}

      {/* İçerik video yüklendikten sonra gösterilir */}
      {videoLoaded && (
        <main className="homeMainDiv">
          <section className="homeFirstDiv">
            <div className="photograph">
              <img
                src={burakImage}
                alt="Burak Gündoğan"
                className="burakImage"
                loading="lazy"
              />
            </div>
            <div className="nameSurname">
              <p>Burak Gündoğan</p>
            </div>
            <div className="title">
              <p>Jr.Frontend/Full-Stack/Backend Developer</p>
            </div>
            <div className="socialMedias">
              <p>Sosyal Medya Hesaplarım ve Github Hesabım</p>
              <Logos />
            </div>
            <div className="copyright">
              <p>Copyright © 2025 - Tüm Hakları Saklıdır.</p>
            </div>
          </section>

          <section className="homeSecondDiv">
            <p className="blog">BLOG SAYFAM</p>
            <p
              className="routerToHomePage"
              style={{ backgroundImage: `url(${homepage})` }}
            >
              Anasayfaya girmek için <br />
              <Link to="/homepage">
                <strong className="routerToHomePageStrong">tıklayınız !</strong>
              </Link>
            </p>
            <p
              className="routerToLoginPage"
              style={{ backgroundImage: `url(${register})` }}
            >
              Kaydolmak için <br />
              <Link to="/register">
                <strong className="routerToHomeLoginStrong">tıklayınız !</strong>
              </Link>
            </p>
            <p
              className="routerToRegisterPage"
              style={{ backgroundImage: `url(${login})` }}
            >
              Giriş yapmak için <br />
              <Link to="/login">
                <strong className="routerToHomeRegisterStrong">tıklayınız !</strong>
              </Link>
            </p>
          </section>
        </main>
      )}
    </div>
  );
}
