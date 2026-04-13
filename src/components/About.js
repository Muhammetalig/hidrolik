"use client";

export default function About() {
  return (
    <section id="hakkimizda" className="section-padding" style={{ position: 'relative' }}>
      <div className="container grid grid-cols-2" style={{ alignItems: 'center' }}>
        <div className="about-image-wrapper animate-fade-in-up">
          <div className="glass-panel about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Hidrolik Mühendisliği" 
              className="about-img"
            />
            <div className="experience-badge glass-panel">
              <span className="years">25+</span>
              <span className="text">Yıllık<br/>Tecrübe</span>
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
          position: relative;
        }
        .about-image-container {
          padding: 1rem;
          position: relative;
        }
        .about-img {
          width: 100%;
          border-radius: 8px;
          display: block;
          object-fit: cover;
          height: 400px;
        }
        .experience-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(0, 229, 255, 0.1);
          border-color: rgba(0, 229, 255, 0.3);
        }
        .experience-badge .years {
          font-size: 3rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          color: var(--primary-color);
          line-height: 1;
        }
        .experience-badge .text {
          font-weight: 500;
          text-transform: uppercase;
          line-height: 1.2;
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
          .experience-badge {
            bottom: -10px;
            right: 10px;
          }
          .about-content {
            margin-top: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
