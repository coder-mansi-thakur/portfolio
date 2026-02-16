import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { profile } from '@/data/content';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.summary,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
