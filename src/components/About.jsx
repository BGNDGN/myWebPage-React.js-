import React from 'react';
import '../css/UsingTechnologies.css';

function About() {
    return (
        <div className="usingTechText">

            <hr />

            <p><strong>📌 Eğitim</strong></p>
            <p>Plevne Anadolu Lisesinden mezun oldum.</p>
            <p>Ardından Topkapı Üniversitesi'nde, Bilgisayar Programlama bölümünü kazandım ve</p>
            <p>Topkapı Üniversitesi Bilgisayar Programlama bölümünden mezun oldum.</p>

            <hr />

            <p><strong>🛠️ Staj Deneyimi</strong></p>
            <p>
                Stajıma <strong>Modanisa</strong> firmasında başladım. Yaklaşık 3 ay süren staj dönemimi tamamladım.
                Bu süreçte QA (Quality Assurance) ve ardından frontend/backend geliştirme ekiplerinde görev aldım.
            </p>

            <hr />

            <p><strong>💻 Geliştirdiğim Teknolojiler</strong></p>
            <ul>
                <li>Nuxt.js, React.js, Next.js ile projeler geliştiriyorum.</li>
                <li>Node.js ile backend geliştiriyorum.</li>
            </ul>

            <hr />

            <p><strong>🎯 Hedef Pozisyonlarım</strong></p>
            <ul>
                <li>Junior Frontend Developer (önceliğim)</li>
                <li>Junior Full-Stack Developer</li>
                <li>Junior Backend Developer</li>
            </ul>

            <hr/>

            <p><strong>🧭 Kariyer Hedefim</strong></p>
            <p>GitHub hesabımda geliştirdiğim projelerim mevcuttur.</p>
            <p>İlgili pozisyonlarda çalışmak istiyorum.</p>
            <p>GitHub hesabıma ulaşmak için{' '}<a href="https://github.com/BGNDGN?tab=repositories" target="_blank" rel="noopener noreferrer">tıklayınız!</a></p>

            <hr />

            <p><strong>🔧 Ekstra Bilgiler:</strong></p>
            <p>Ayrıca bireysel olarak öğrendiğim programlama dilleri şunlardır:</p>
                <ul>
                    <li>C</li>
                    <li>C#</li>
                    <li>PHP</li>
                </ul>
            <p>Bu dilleri online eğitimlerle ve okulda edindiğim bilgilerle öğrendim ve </p>
            <p>kendimi geliştirdim.</p>
        </div>
    );
}

export default React.memo(About);
