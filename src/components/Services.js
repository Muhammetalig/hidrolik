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
    <section id="hizmetler" className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
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

      <style jsx>{`
        .service-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          background: rgba(0, 229, 255, 0.1);
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          border: 1px solid rgba(0, 229, 255, 0.2);
        }
        .service-card h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .service-card p {
          color: var(--text-secondary);
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
      `}</style>
    </section>
  );
}
