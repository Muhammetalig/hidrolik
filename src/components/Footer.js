"use client";

export default function Footer() {
  return (
    <footer className="footer section-padding pb-0" style={{ backgroundColor: 'rgba(6, 11, 20, 0.9)', borderTop: '1px solid var(--glass-border)', paddingBottom: 0 }}>
      <div className="container grid grid-cols-3" style={{ marginBottom: '3rem' }}>
        <div className="footer-col">
          <div className="logo mb-4" style={{ display: 'inline-block' }}>
            <img src="/logo.png" alt="GNC Hidrolik Logo" style={{ height: '90px', width: 'auto' }} />
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            GNC HİDROLİK PNÖMATİK OTOMASYON SİS. SAN. TİC. LTD. ŞTİ. <br/>
            Yüksek teknoloji, kaliteli üretim ve müşteri memnuniyeti.
          </p>
          <div className="social-links">
            <a href="#">in</a>
            <a href="#">f</a>
            <a href="#">ig</a>
            <a href="#">x</a>
          </div>
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
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-secondary)', fontSize: '0.9rem', flexWrap: 'wrap', gap: '1rem' }}>
          <p>&copy; {new Date().getFullYear()} GNC Hidrolik Pnömatik Otomasyon. Tüm Hakları Saklıdır.</p>
          <p>Tasarım & Geliştirme: Antigravity Labs</p>
        </div>
      </div>

      <style jsx>{`
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
          color: var(--text-primary);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .social-links a:hover {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: var(--bg-main);
          transform: translateY(-3px);
        }
        .footer-col a:hover {
          color: var(--primary-color) !important;
        }
        @media (max-width: 968px) {
          .footer-col {
            align-items: flex-start !important;
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
}
