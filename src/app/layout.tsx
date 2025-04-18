import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Providers } from '@/components/layout/providers';
import { Sidebar } from '@/components/layout/sidebar';
import { AnimatedElementPresence } from '@/components/ui/animated-element-presence';
import { ToastList } from '@/components/ui/toast-list';
import clsx from 'clsx';
import { Raleway } from 'next/font/google';
import '../styles/globals.scss';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

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

      <body className={clsx(`${raleway.variable} antialiased`)}>
        <Providers>
          <div className="isolate bg-background transition-colors duration-300">
            {/* Header is only shown upto the md breakpoint, then the sidebar takes over */}
            <Header className="md:hidden" />

            <AnimatedElementPresence entryAnimationDelay={0.2} animationProperty="opacity">
              <div className="flex min-h-dvh pt-header-height md:pt-0">
                <Sidebar className="hidden md:flex" />

                {/* min-w-0 https://www.bigbinary.com/blog/understanding-the-automatic-minimum-size-of-flex-items */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <main className="flex-grow">{children}</main>

                  <Footer />
                </div>
              </div>
            </AnimatedElementPresence>

            <ToastList />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
