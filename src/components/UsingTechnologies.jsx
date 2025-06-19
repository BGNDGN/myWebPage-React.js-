import React from 'react';
import '../css/UsingTechnologies.css';

function UsingTechnologies () {
    return (
        <div className="usingTechText">
            <p><strong>Frontend:</strong> React.js / Next.js / Nuxt.js</p>
            <p><strong>React.js ile birlikte:</strong></p>
            <ul>
                <li>JSX yapısı</li>
                <li>State Yapıları (useState)</li>
                <li>Event Handle Yapıları ve Form Kullanımı</li>
                <li>useEffect ve Lifecycle Methods</li>
                <li>React Router</li>
                <li>LocalStorage</li>
                <li>State Management (Context API, Redux, Redux Toolkit)</li>
            </ul>
            <hr></hr>
            <p><strong>Backend:</strong> Node.js</p>

            <p><strong>Node.js ile birlikte:</strong></p>
            <ul>
                <li>Express.js</li>
                <li>Cors</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>JWT</li>
                <li>Token</li>
            </ul>
          
            <hr></hr>

            <p>Teknolojilerini kullanarak projeler geliştirdim ve geliştirmeye devam ediyorum.</p>
            <p>
                GitHub hesabıma ulaşmak için{' '}
                <a href="https://github.com/BGNDGN?tab=repositories" target="_blank" rel="noopener noreferrer">tıklayınız!</a>
            </p>
            <p>Şuan aktif olarak bu teknolojileri kullanıyorum. Ayrı olarak Next.js öğreniyorum ve projeler geliştiriyorum.</p>
        </div>
    );
}


export default React.memo(UsingTechnologies);