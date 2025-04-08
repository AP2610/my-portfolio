import { About } from '@/components/features/about';
import { HomepageCardGrid } from '@/components/features/home/home-page-card-grid';
import { SmallScreenHeroTitle } from '@/components/features/home/small-screen-hero-title';
import { Section } from '@/components/layout/section';
import { AnimatedRadialGradientBackground } from '@/components/ui/animated-radial-gradient-background';

const Home = () => {
  return (
    <>
      <Section
        className="relative flex min-h-dvh flex-col justify-around gap-16 md:gap-0"
        paddingTop="small"
        paddingBottom="small"
      >
        <AnimatedRadialGradientBackground />

        <SmallScreenHeroTitle className="md:hidden" />

        <HomepageCardGrid />
      </Section>

      <Section id="about" paddingTop="medium" paddingBottom="medium">
        <About />
      </Section>
    </>
  );
};

export default Home;
