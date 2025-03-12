import clsx from 'clsx';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Arjun Puri's Portfolio",
  description: 'A portfolio website for Arjun Puri representing his work and skills.',
};

// TODO: Create a footer
// TODO: Create a contact me section
// TODO: Place portfolio behind password with ability to request password
// TODO: Animate main entry so it opens like a curtain or something
// TODO: Put all todos in todoist
// TODO: Fix issue on page load
// TODO: Add favicon
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
