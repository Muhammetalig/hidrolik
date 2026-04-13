"use client";

export default function Contact() {
  return (
    <section id="iletisim" className="section-padding" style={{ position: 'relative' }}>
      <div className="container grid grid-cols-2">
        <div className="contact-info animate-fade-in-up">
          <h4 className="gradient-text" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1rem' }}>BİZE ULAŞIN</h4>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Projeleriniz İçin Yanınızdayız</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Sorularınız, teknik destek talepleriniz veya teklif almak için bizimle iletişime geçebilirsiniz. Uzman mühendis kadromuz size yardımcı olmaktan memnuniyet duyacaktır.
          </p>

          <div className="info-cards">
            <div className="glass-panel info-card">
              <div className="icon">📍</div>
              <div>
                <h4>Konum</h4>
                <p>İnönü mah. Arifoğlu cad. No: 3/A<br/>Gebze / Kocaeli</p>
              </div>
            </div>
            <div className="glass-panel info-card">
              <div className="icon">📞</div>
              <div>
                <h4>Telefon</h4>
                <p>0538 885 2766<br/>(7/24 Teknik Servis)</p>
              </div>
            </div>
            <div className="glass-panel info-card">
              <div className="icon">✉️</div>
              <div>
                <h4>E-Posta</h4>
                <p>info@gnchidrolik.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-whatsapp animate-fade-in-up delay-2 glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem', border: '1px solid rgba(37, 211, 102, 0.2)' }}>
            <span style={{ fontSize: '3rem' }}>💬</span>
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Hızlı İletişim</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.05rem', maxWidth: '350px' }}>
            Soru, görüş ve teklif talepleriniz için WhatsApp üzerinden satış ve destek ekibimizle anında mesajlaşabilirsiniz.
          </p>
          <a href="https://wa.me/905388852766?text=Merhaba,%20web%20sitenizden%20ulaşıyorum.%20Bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
            <button className="primary-btn" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, #128C7E, #25D366)', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)' }}>
              WhatsApp'tan Ulaşın
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
        }
        .info-card .icon {
          font-size: 2rem;
          background: rgba(0, 229, 255, 0.1);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .info-card h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
          color: var(--primary-color);
        }
        .info-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .contact-form {
          padding: 3rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .form-group input, .form-group textarea {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--glass-border);
          padding: 12px 16px;
          border-radius: 8px;
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          background: rgba(0, 229, 255, 0.05);
        }
        @media (max-width: 968px) {
          .contact-form {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
