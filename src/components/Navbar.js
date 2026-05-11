"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-container">
          <Link href="/">
            <img src="/logo.jpeg" alt="GNC Hidrolik Logo" className="logo-img" />
          </Link>
        </div>
        <div className="nav-links">
          <Link href="#hakkimizda">Hakkımızda</Link>
          <Link href="#hizmetler">Hizmetlerimiz</Link>
          <Link href="#iletisim">İletişim</Link>
        </div>
        <div className="nav-action">
          <Link href="#iletisim">
            <button className="primary-btn" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Teklif Al</button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          z-index: 100;
          transition: all 0.3s ease;
          background: rgba(6, 26, 59, 0.48);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .navbar.scrolled {
          background: rgba(6, 26, 59, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          height: 70px;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        .logo-img {
          height: 80px;
          width: auto;
          border-radius: 12px;
          background: #fff;
          padding: 6px 10px;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        .logo-img:hover {
          transform: scale(1.05);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-primary);
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-color);
          transition: width 0.3s ease;
        }
        .nav-links a:hover {
          color: #fff;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-action { display: none; }
          .logo-img {
            height: 60px;
            padding: 5px 8px;
          }
        }
      `}</style>
    </nav>
  );
}
