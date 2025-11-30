import { Navigation } from '@/components/navigation';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WordBeetle',
  description: 'あなたの語学学習をサポート',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
