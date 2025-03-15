import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import '../styles/globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Arjun Puri's Portfolio",
  description: 'A portfolio website for Arjun Puri representing his work and skills.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={clsx(`${raleway.variable} flex min-h-screen flex-col antialiased`)}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
