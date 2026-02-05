import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';  

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weekly Blog - 12 Week Journey',
  description: 'A 12-week journey documented through weekly blog posts',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
