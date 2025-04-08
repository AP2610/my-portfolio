import { About } from '@/components/features/about';
import { HomepageCardGrid } from '@/components/features/home/home-page-card-grid';
import { Section } from '@/components/layout/section';
import { AnimatedRadialGradientBackground } from '@/components/ui/animated-radial-gradient-background';

const Home = () => {
  return (
    <>
      <Section className="relative flex min-h-dvh flex-col justify-around gap-16 py-8 md:gap-8">
        <AnimatedRadialGradientBackground />

        <div className="space-y-4 text-foreground md:hidden">
          <h1 className="text-3xl">Hi, I'm Arjun</h1>
          <p className="text-lg">I'm a frontend engineer based in the Netherlands.</p>
        </div>

        <HomepageCardGrid />
      </Section>

      <Section id="about" isFullWidth hasTopPadding hasBottomPadding>
        <About />
      </Section>
    </>
  );
};

export default Home;
