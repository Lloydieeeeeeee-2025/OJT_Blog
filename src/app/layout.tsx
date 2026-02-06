import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';  

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Lloyd's Blog",
  description: 'A 12-week journey documented through weekly blog posts',
  icons: {
    icon: '/mine.jpg',
  }
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
