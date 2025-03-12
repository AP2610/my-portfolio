import { Header } from '@/components/header';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(`${raleway.variable} antialiased`)}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
