import { About } from '@/components/features/about';
import { HomepageCardGrid } from '@/components/features/home/home-page-card-grid';
import { SmallScreenHeroTitle } from '@/components/features/home/small-screen-hero-title';
import { Section } from '@/components/layout/section';
import { AnimatedRadialGradientBackground } from '@/components/ui/animation/animated-radial-gradient-background';
import { AnimatedText } from '@/components/ui/animation/animated-text';
import { Heading } from '@/components/ui/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arjun Puri | Frontend Engineer Portfolio',
  description:
    'Frontend Engineer specializing in React, Next.js, and TypeScript. View my background, CV, projects, and qualifications.',
};

const Home = () => {
  return (
    <>
      <Section className="relative flex min-h-dvh flex-col justify-center gap-16" paddingTop="small" paddingBottom="small">
        <Heading level="h1" as="h2" className="hidden md:block">
          <AnimatedText text="Frontend Engineer" delay={0.4} />
        </Heading>

        <AnimatedRadialGradientBackground />

        <SmallScreenHeroTitle className="md:hidden" />

        <HomepageCardGrid />
      </Section>

      <Section id="about" paddingTop="medium" paddingBottom="medium" animateOnScroll>
        <About />
      </Section>
    </>
  );
};

export default Home;
