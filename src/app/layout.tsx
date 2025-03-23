import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/context/theme-context';
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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDarkMode = theme === 'dark' || (!theme && systemPreference);

                  if (isDarkMode) {
                    document.documentElement.classList.remove('light')
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                    document.documentElement.classList.add('light')
                  }
                } catch (_) {}
              }())
            `,
          }}
        />
      </head>

      <ThemeProvider>
        <body className={clsx(`${raleway.variable} flex min-h-screen flex-col antialiased`)}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
