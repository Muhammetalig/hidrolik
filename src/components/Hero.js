"use client";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title animate-fade-in-up">
          Güçlü, Güvenilir ve <br />
          <span className="gradient-text">Yenilikçi Hidrolik</span> Sistemler
        </h1>
        <p className="hero-subtitle animate-fade-in-up delay-1">
          Endüstriyel ihtiyaçlarınız için yüksek performanslı hidrolik pompalar, 
          valfler ve özel otomasyon sistemleri üretiyoruz. Gücünüze güç katıyoruz.
        </p>
        <div className="hero-actions animate-fade-in-up delay-2">
          <a href="#hizmetler" className="primary-btn">Hizmetlerimizi Keşfedin</a>
          <a href="#iletisim" className="secondary-btn">Bize Ulaşın</a>
        </div>
        
        <div className="hero-stats animate-fade-in-up delay-3 glass-panel">
          <div className="stat-item">
            <h3>25+</h3>
            <p>Yıllık Tecrübe</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Tamamlanan Proje</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>10M+</h3>
            <p>Üretilen Parça</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: var(--nav-height);
          background: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover no-repeat;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(6, 11, 20, 0.95) 0%, rgba(6, 11, 20, 0.7) 100%);
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin-bottom: 2.5rem;
        }
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        .secondary-btn {
          border: 2px solid var(--text-primary);
          color: var(--text-primary);
          background: transparent;
          padding: 12px 28px;
          font-size: 1rem;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          padding: 2rem 4rem;
        }
        .stat-item {
          text-align: center;
        }
        .stat-item h3 {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 0.2rem;
          line-height: 1;
        }
        .stat-item p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .stat-divider {
          width: 1px;
          height: 50px;
          background: var(--glass-border);
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
            padding: 2rem;
          }
          .stat-divider {
            width: 50px;
            height: 1px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }
          .secondary-btn, .primary-btn { text-align: center; }
        }
      `}</style>
    </section>
  );
}
