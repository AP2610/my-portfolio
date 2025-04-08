import { About } from '@/components/features/about';
import { HomepageCardGrid } from '@/components/features/home/home-page-card-grid';
import { Section } from '@/components/layout/section';
import { AnimatedElementPresence } from '@/components/ui/animated-element-presence';
import { AnimatedRadialGradientBackground } from '@/components/ui/animated-radial-gradient-background';
import { AnimatedText } from '@/components/ui/animated-text';

const Home = () => {
  return (
    <>
      <Section className="relative flex min-h-[100dvh] flex-col justify-around gap-16 pb-16 pt-16 md:gap-8 md:pt-8">
        <AnimatedRadialGradientBackground />

        <h1 className="hidden text-4xl text-foreground md:block">
          <AnimatedText text="Frontend Developer" />
        </h1>

        <div className="space-y-4 text-foreground md:hidden">
          <p className="text-3xl font-black">Hi, I'm Arjun</p>
          <p>I'm a frontend developer based in the Netherlands.</p>
        </div>

        <AnimatedElementPresence entryAnimationDelay={0.2} animationProperty="opacity">
          <HomepageCardGrid />
        </AnimatedElementPresence>
      </Section>

      <Section id="about" isFullWidth hasTopPadding hasBottomPadding>
        <About />
      </Section>
    </>
  );
};

export default Home;
