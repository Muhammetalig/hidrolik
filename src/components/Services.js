"use client";

export default function Services() {
  const services = [
    {
      title: 'Hidrolik Güç Üniteleri',
      icon: '⚙️',
      desc: 'İhtiyaca özel, yüksek verimli ve uzun ömürlü hidrolik güç üniteleri tasarımı ve üretimi.'
    },
    {
      title: 'Özel Silindir İmalatı',
      icon: '🔧',
      desc: 'Zorlu çalışma koşullarına dayanıklı, standart ve özel ölçülerde hidrolik silindirler.'
    },
    {
      title: 'Sistem Taahhüt ve Proje',
      icon: '🏗️',
      desc: 'Anahtar teslim hidrolik otomasyon sistemleri ve mühendislik proje taahhüt hizmetleri.'
    },
    {
      title: 'Bakım ve Onarım',
      icon: '🛠️',
      desc: '7/24 yerinde servis, arıza tespiti ve periyodik koruyucu bakım hizmetleri.'
    },
    {
      title: 'Yedek Parça Tedariği',
      icon: '📦',
      desc: 'Dünyaca ünlü markaların hidrolik pompa, valf, motor ve sızdırmazlık elemanları satışı.'
    },
    {
      title: 'Hortum ve Rakor Presleme',
      icon: '🔗',
      desc: 'Yüksek basınca dayanıklı, garantili hidrolik hortum presleme ve rakor montajı.'
    }
  ];

  return (
    <section id="hizmetler" className="section-padding services-section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Çözüm ve Hizmetlerimiz</h2>
        <p className="section-subtitle animate-fade-in-up delay-1">
          Endüstriyel ihtiyaçlarınız için baştan uca profesyonel çözümler sunuyoruz. Güvenilirlik ve performans garantisiyle.
        </p>
        
        <div className="grid grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="glass-panel service-card animate-fade-in-up" style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#iletisim" className="learn-more">Teklif İste →</a>
            </div>
          ))}
        </div>
      </div>

      {/* Showcase Banner with Hidrolik Image */}
      <div className="services-showcase">
        <div className="showcase-overlay"></div>
        <div className="container showcase-content">
          <div className="showcase-stats">
            <div className="showcase-stat">
              <h3>7/24</h3>
              <p>Teknik Destek</p>
            </div>
            <div className="showcase-divider"></div>
            <div className="showcase-stat">
              <h3>%100</h3>
              <p>Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background:
            linear-gradient(116deg, rgba(248, 250, 252, 0.96) 0 44%, rgba(248, 250, 252, 0) 44.2%),
            linear-gradient(180deg, rgba(6, 26, 59, 0.86), rgba(7, 20, 47, 0.96));
          color: var(--secondary-color);
        }
        .services-section :global(.section-subtitle) {
          color: #55677F;
        }
        .service-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s ease, border-color 0.3s ease;
          background: rgba(255, 255, 255, 0.92);
          border-color: rgba(11, 61, 120, 0.14);
          color: var(--secondary-color);
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
        }
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          background: rgba(11, 61, 120, 0.08);
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          border: 1px solid rgba(11, 61, 120, 0.16);
        }
        .service-card h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .service-card p {
          color: #53677E;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .learn-more {
          color: var(--accent-color);
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          position: relative;
        }
        .learn-more::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-color);
          transition: width 0.3s ease;
        }
        .learn-more:hover::after {
          width: 100%;
        }

        /* Showcase Banner */
        .services-showcase {
          position: relative;
          margin-top: 5rem;
          height: 350px;
          background: url('/workshop-hidrolik.jpg') center/cover no-repeat;
          background-attachment: scroll;
          overflow: hidden;
        }
        .services-showcase::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(112deg, rgba(248, 250, 252, 0.9) 0 36%, transparent 36.2%);
          z-index: 1;
        }
        .showcase-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(6, 26, 59, 0.9) 0%,
            rgba(6, 26, 59, 0.58) 50%,
            rgba(3, 8, 23, 0.92) 100%
          );
          z-index: 2;
        }
        .showcase-content {
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .showcase-stats {
          display: flex;
          align-items: center;
          gap: 3rem;
          padding: 2rem 4rem;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .showcase-stat {
          text-align: center;
        }
        .showcase-stat h3 {
          font-size: 2.8rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          color: var(--primary-color);
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .showcase-stat p {
          color: #53677E;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }
        .showcase-divider {
          width: 1px;
          height: 50px;
          background: rgba(11, 61, 120, 0.18);
        }
        @media (max-width: 968px) {
          .services-showcase {
            height: auto;
            padding: 3rem 0;
          }
          .showcase-stats {
            flex-wrap: wrap;
            gap: 2rem;
            padding: 2rem;
            justify-content: center;
          }
          .showcase-divider {
            display: none;
          }
          .showcase-stat {
            min-width: 120px;
          }
        }
        @media (max-width: 640px) {
          .showcase-stats {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
