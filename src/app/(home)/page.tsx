import { About } from '@/components/features/about';
import { HomepageCardGrid } from '@/components/features/home/home-page-card-grid';
import { SmallScreenHeroTitle } from '@/components/features/home/small-screen-hero-title';
import { Section } from '@/components/layout/section';
import { AnimatedRadialGradientBackground } from '@/components/ui/animated-radial-gradient-background';
import { AnimatedText } from '@/components/ui/animated-text';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Arjun Puri's Portfolio Homepage",
  description:
    'The homepage contains facts about Arjun Puri and his work. It includes an about me section which goes into more detail.',
};

const Home = () => {
  return (
    <>
      <Section
        className="relative flex min-h-dvh flex-col justify-around gap-16 md:gap-8"
        paddingTop="small"
        paddingBottom="small"
      >
        <AnimatedRadialGradientBackground />

        <h1 className="hidden text-3xl text-foreground md:block">
          <AnimatedText text="Frontend Engineer" delay={0.4} />
        </h1>

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
