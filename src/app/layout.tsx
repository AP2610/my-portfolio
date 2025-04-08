import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/context/theme-context';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import '../styles/globals.scss';
import { Sidebar } from '@/components/layout/sidebar';
import { AnimatedElementPresence } from '@/components/ui/animated-element-presence';

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
        <body className={clsx(`${raleway.variable} antialiased`)}>
          {/* Header is only shown upto the md breakpoint, then the sidebar takes over */}
          <Header className="md:hidden" />

          <AnimatedElementPresence entryAnimationDelay={0.2} animationProperty="opacity">
            <div className="flex min-h-dvh pt-header-height md:pt-0">
              <Sidebar className="hidden md:flex" />

              <div className="flex flex-1 flex-col">
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
            </div>
          </AnimatedElementPresence>
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
