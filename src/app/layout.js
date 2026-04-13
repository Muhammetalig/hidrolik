import './globals.css';

export const metadata = {
  title: 'HidroTech | İleri Hidrolik Sistem Çözümleri',
  description: 'Türkiye\'nin lider hidrolik sistem üreticisi. Endüstriyel hidrolik çözümler, yüksek basınçlı pompalar ve otomasyon sistemleri.',
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
