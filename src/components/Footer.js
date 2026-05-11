"use client";

export default function Footer() {
  return (
    <footer className="footer section-padding pb-0" style={{ paddingBottom: 0 }}>
      <div className="container grid grid-cols-3" style={{ marginBottom: '3rem' }}>
        <div className="footer-col">
          <div className="logo-container mb-4" style={{ display: 'inline-block' }}>
            <img 
              src="/logo.jpeg" 
              alt="GNC Hidrolik Logo" 
              style={{ 
                height: '90px', 
                width: 'auto',
                borderRadius: '12px',
                background: '#fff',
                padding: '8px 12px'
              }} 
            />
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            GNC HİDROLİK PNÖMATİK OTOMASYON SİS. SAN. TİC. LTD. ŞTİ. <br />
            Yüksek teknoloji, kaliteli üretim ve müşteri memnuniyeti.
          </p>
        </div>

        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Hızlı Bağlantılar</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Ana Sayfa</a></li>
            <li><a href="#hakkimizda" style={{ color: 'var(--text-secondary)' }}>Hakkımızda</a></li>
            <li><a href="#hizmetler" style={{ color: 'var(--text-secondary)' }}>Hizmetlerimiz</a></li>
            <li><a href="#iletisim" style={{ color: 'var(--text-secondary)' }}>İletişim</a></li>
          </ul>
        </div>

        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Çalışma Saatleri</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
            <li>Pazartesi - Cuma: 08:30 - 18:30</li>
            <li>Cumartesi: 09:00 - 13:00</li>
            <li>Pazar: Kapalı</li>
            <li style={{ marginTop: '1rem', color: 'var(--primary-color)' }}>7/24 Acil Hidrolik Servisi</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} GNC Hidrolik Pnömatik Otomasyon. Tüm Hakları Saklıdır.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(118deg, rgba(248, 250, 252, 0.08) 0 28%, transparent 28.2%),
            linear-gradient(135deg, rgba(6, 26, 59, 0.98), rgba(3, 8, 23, 1));
          border-top: 1px solid var(--glass-border);
        }
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
        }
        .footer-col a:hover {
          color: #fff !important;
        }
        @media (max-width: 968px) {
          .footer-col {
            align-items: flex-start !important;
            text-align: left !important;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}
