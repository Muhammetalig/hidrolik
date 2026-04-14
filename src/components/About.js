"use client";

export default function About() {
  const images = [
    { src: "/workshop-bakim.jpg", alt: "Hidrolik Bakım" },
    { src: "/workshop-cnc.jpg", alt: "CNC İşleme" },
    { src: "/workshop-hidrolik.jpg", alt: "Hidrolik Sistemler" }
  ];

  return (
    <section id="hakkimizda" className="section-padding" style={{ position: 'relative' }}>
      <div className="container grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
        <div className="about-image-wrapper animate-fade-in-up">
          <div className="glass-panel about-slider-container">
            <div className="slider-track">
              {/* İlk set */}
              {images.map((img, index) => (
                <div key={`set1-${index}`} className="slide">
                  <img src={img.src} alt={img.alt} className="about-img" />
                </div>
              ))}
              {/* İkinci set (sonsuzluk için) */}
              {images.map((img, index) => (
                <div key={`set2-${index}`} className="slide">
                  <img src={img.src} alt={img.alt} className="about-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="about-content animate-fade-in-up delay-2">
          <h4 className="gradient-text" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1rem' }}>HAKKIMIZDA</h4>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>İleri Teknoloji, Kusursuz Basınç</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Ağır sanayi, iş makinaları, otomotiv, denizcilik ve daha birçok sektöre yüksek standartlarda hidrolik sistemler üretiyor ve tasarlıyoruz. Modern tesisimizde, en son teknolojiyi kullanarak projelerinize özel çözümler sunuyoruz.
          </p>
          <ul className="feature-list" style={{ marginBottom: '2rem' }}>
            <li><span className="icon">✓</span> Özel Hidrolik Silindir Üretimi</li>
            <li><span className="icon">✓</span> Hidrolik Güç Üniteleri</li>
            <li><span className="icon">✓</span> 7/24 Teknik Servis ve Bakım</li>
            <li><span className="icon">✓</span> Ar-Ge Odaklı Yenilikçi Yaklaşım</li>
          </ul>
          <a href="#hizmetler" className="primary-btn" style={{ display: 'inline-block' }}>Daha Fazla Bilgi</a>
        </div>
      </div>

      <style jsx>{`
        .about-image-wrapper {
          width: 100%;
          max-width: 600px;
          margin-left: auto;
        }
        .about-slider-container {
          padding: 0;
          position: relative;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 24px;
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
        }
        .slider-track {
          display: flex;
          width: 600%; /* 6 görsel olduğu için (Her biri %100 kapsar track'in altındaki slide'a göre) */
          animation: scrollLeft 15s linear infinite;
        }
        .slide {
          width: calc(100% / 6);
          aspect-ratio: 4 / 3;
        }
        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .about-slider-container:hover .slider-track {
          animation-play-state: paused;
        }

        .feature-list {
          list-style: none;
        }
        .feature-list li {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.05rem;
        }
        .feature-list .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: var(--primary-color);
          color: var(--bg-main);
          border-radius: 50%;
          font-size: 0.8rem;
          font-weight: bold;
        }

        @media (max-width: 968px) {
          .grid-cols-2 {
            grid-template-columns: 1fr;
          }
          .about-image-wrapper {
            margin: 0 auto;
          }
          .about-content {
            text-align: center;
          }
          .feature-list li {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
