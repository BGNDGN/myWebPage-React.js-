import React from 'react';
import About from '../components/About.jsx';
import SSS from '../components/SSS.jsx';
import FSDI from '../components/FSDI.jsx';
import UsingTechnologies from '../components/UsingTechnologies.jsx'
import Logos from '../logo/Logo';
import burakImage from '../assets/burak-profile.webp';
import { useState } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import baseURL from '../../api/baseURL';

console.log(baseURL);

function HomePage () {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    const handleSendMail = useCallback(() => {
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=burakgundogan25@gmail.com&su=${encodeURIComponent(subject)}&body=Mail adresim: ${email}`;
        window.open(gmailURL, "_blank");
    }, [email, subject]);

    return (
        <div>
            <style>{`
                html {
                    scroll-behavior: smooth;
                }
            `}</style>

            <video autoPlay loop muted className="backgroundVideo" playsInline preload="auto">
                <source src="https://res.cloudinary.com/deh41xzpo/video/upload/v1750776287/3129671-uhd_3840_2160_30fps_hzqcf0.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
            </video>

            <div className="navbarDiv">
                <div className="navbarPageName">
                    <Link to="/homepage">burakgundogan.net</Link>
                </div>

                <div className="navbarZones">
                    <Link to="/">Giriş Sayfası</Link>
                    <a href="#about">Hakkımda</a>
                    <a href="#experience">İş Deneyimlerim</a>
                    <a href="#skills">Kullandığım Teknolojiler</a>
                    <a href="#socials">Sosyal Medyalarım</a>
                    <a href="#contact">Benimle İletişime Geç</a>
                </div>
            </div>
            
            <div id="about" className="aboutZone">
                <h2>Hakkımda</h2>
                <hr></hr>
                <img src={burakImage} className="burakImage" alt="Burak Gündoğan" loading="lazy"  />

                <div className="aboutZoneText">
                    <About />
                </div>
            </div>

            <div id="experience" className="experienceZone">
                <h2>İş Deneyimlerim</h2>
                <hr></hr>
                <SSS />
                <hr></hr>
                <FSDI />
                <hr></hr>
            </div>

            <div id="skills" className="usingTechnologiesZone">
                <h2>Kullandığım Teknolojiler</h2>
                <hr></hr>
                <UsingTechnologies></UsingTechnologies>
                <hr></hr>
            </div>

            <div id="contact" className="contactMeZone">
                <h2>Benimle İletişime Geçin</h2>
                <hr></hr>
                <div className='mailDiv'>
                    <label>
                        E-mail:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-posta adresiniz"
                            className='mailInput'
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
                            placeholder="Konu başlığı"
                            className='subjectInput'
                        />
                    </label>
                </div>
                <div>
                    <button className='contactMeButton' onClick={handleSendMail}>Gönder</button>
                </div>
            </div>

            <div id="socials" className="socialMediasZone">
                <h2>Sosyal Medya Hesaplarım</h2>
                <hr></hr>
                <Logos />
            </div>

        </div>
    );
}

export default HomePage;
