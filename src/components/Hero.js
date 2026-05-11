"use client";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-card animate-fade-in-up">
          <div className="hero-copy">
            <span className="hero-kicker">GNC Hidrolik Pnömatik Otomasyon</span>
            <h1 className="hero-title">
              Güçlü, Güvenilir ve <br />
              <span>Yenilikçi Hidrolik</span> Sistemler
            </h1>
            <p className="hero-subtitle">
              Endüstriyel ihtiyaçlarınız için yüksek performanslı hidrolik pompalar,
              valfler ve özel otomasyon sistemleri üretiyoruz. Gücünüze güç katıyoruz.
            </p>
            <div className="hero-actions">
              <a href="#hizmetler" className="primary-btn">Hizmetlerimizi Keşfedin</a>
              <a href="#iletisim" className="secondary-btn">Bize Ulaşın</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-brand-card">
              <img src="/logo.jpeg" alt="GNC Hidrolik Logo" />
              <div className="brand-line"></div>
              <p>Hidrolik • Pnömatik • Otomasyon</p>
            </div>
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
          overflow: hidden;
          background:
            linear-gradient(114deg, rgba(248, 250, 252, 0.96) 0 43%, rgba(248, 250, 252, 0) 43.2%),
            linear-gradient(135deg, rgba(6, 26, 59, 0.96), rgba(3, 8, 23, 0.96)),
            url('/workshop-cnc.jpg') center/cover no-repeat;
        }
        .hero-section::after {
          content: '';
          position: absolute;
          right: -10%;
          bottom: -25%;
          width: 55%;
          height: 52%;
          background: linear-gradient(135deg, rgba(11, 61, 120, 0.95), rgba(217, 35, 50, 0.32));
          clip-path: polygon(22% 0, 100% 0, 78% 100%, 0 100%);
          opacity: 0.72;
        }
        .hero-content {
          position: relative;
          z-index: 2;
        }
        .hero-card {
          min-height: 560px;
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.98fr);
          align-items: stretch;
          overflow: hidden;
          border-radius: 30px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.34);
        }
        .hero-copy {
          background: rgba(248, 250, 252, 0.96);
          color: var(--light-panel-text);
          padding: 5rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-kicker {
          color: var(--primary-color);
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1rem;
          position: relative;
        }
        .hero-kicker::after {
          content: '';
          display: block;
          width: 64px;
          height: 4px;
          margin-top: 0.9rem;
          background: var(--accent-color);
          border-radius: 999px;
        }
        .hero-title {
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 800;
          color: var(--secondary-color);
          letter-spacing: -0.05em;
        }
        .hero-title span {
          color: var(--primary-color);
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: #4B5D73;
          max-width: 700px;
          margin-bottom: 2.5rem;
        }
        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }
        .secondary-btn {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
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
          background: rgba(11, 61, 120, 0.08);
          transform: translateY(-2px);
        }
        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
          background: linear-gradient(145deg, rgba(6, 26, 59, 0.97), rgba(3, 8, 23, 0.98));
        }
        .hero-visual::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(118deg, transparent 0 30%, rgba(255, 255, 255, 0.07) 30.2% 31.6%, transparent 31.8% 100%);
        }
        .hero-brand-card {
          position: relative;
          z-index: 1;
          width: min(100%, 380px);
          padding: 2rem;
          background: rgba(255, 255, 255, 0.96);
          border-radius: 22px;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
        }
        .hero-brand-card img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 10px;
        }
        .brand-line {
          width: 92px;
          height: 4px;
          margin: 1.5rem 0 0.8rem;
          background: var(--accent-color);
          border-radius: 999px;
        }
        .hero-brand-card p {
          color: var(--primary-color);
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        @media (max-width: 768px) {
          .hero-section {
            padding: calc(var(--nav-height) + 24px) 0 3rem;
            background: linear-gradient(145deg, rgba(248, 250, 252, 0.98), rgba(9, 28, 63, 0.96));
          }
          .hero-card {
            grid-template-columns: 1fr;
            min-height: auto;
            border-radius: 24px;
          }
          .hero-copy {
            padding: 3rem 1.5rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }
          .secondary-btn, .primary-btn { text-align: center; }
          .hero-visual {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
