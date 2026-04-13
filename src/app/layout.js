import './globals.css';

export const metadata = {
  title: 'GNC Hidrolik | Pnömatik ve Otomasyon Sistemleri',
  description: 'GNC HİDROLİK PNÖMATİK OTOMASYON SİS SAN TİC LTD ŞTİ. İleri hidrolik, pnömatik, otomasyon çözümleri, bakım ve onarım hizmetleri.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <main className="main-wrapper">
          {children}
        </main>
      </body>
    </html>
  );
}
