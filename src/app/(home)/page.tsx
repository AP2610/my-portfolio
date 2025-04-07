import { About } from '@/components/features/about';
import { HomepageCard } from '@/components/features/home/homepage-card';
import { IconList } from '@/components/features/home/icon-list';
import { Section } from '@/components/layout/section';
import { AnimatedElementPresence } from '@/components/ui/animated-element-presence';
import { AnimatedRadialGradientBackground } from '@/components/ui/animated-radial-gradient-background';
import { Button } from '@/components/ui/buttons';
import { MyLink } from '@/components/ui/my-link';
import { SocialIconLink } from '@/components/ui/social-icon-link';

import JavaScriptIcon from '@/public/icons/javascript-48.png';
import NextJsIcon from '@/public/icons/nextjs-200.png';
import ReactIcon from '@/public/icons/react-40.png';
import SanityIcon from '@/public/icons/sanity-180.png';
import TailwindIcon from '@/public/icons/tailwindcss-48.png';
import TypeScriptIcon from '@/public/icons/typescript-50.png';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Section
        className="relative flex min-h-screen flex-col items-center justify-center"
        isFullWidth
        hasBottomPadding
        hasHeaderPaddingTop
        // TODO: Get rid of the header logic on the hero
        // The id is needed for my animated styling on the header to work. Note to self: Consider getting rid of it and the associated logic.
        id="hero"
      >
        <AnimatedRadialGradientBackground />

        <Section>
          <AnimatedElementPresence
            entryAnimationDelay={0.2}
            animationProperty="opacity"
            className="grid grid-cols-4 grid-rows-3 gap-6"
          >
            <HomepageCard>
              {/* TODO: make a heading component that takes level, size, weight, and color props */}
              <h1 className="mb-4 text-3xl font-semibold">Hi, I'm Arjun</h1>
              <p className="text-gray-500">Welcome to my portfolio!</p>
            </HomepageCard>

            <HomepageCard>
              <h2 className="mb-4 text-3xl font-semibold">5 years</h2>
              <p className="text-gray-500">Of frontend development experience</p>
            </HomepageCard>

            <HomepageCard className="col-span-2 row-span-2 space-y-4" textAlign="left" alignItems="start">
              <h2 className="text-3xl font-semibold">About me</h2>

              <p className="text-gray-500">
                I'm a frontend engineer with a passion for creating beautiful, interactive, and accessible applications that
                prioritise the user experience. While trained as a full-stack developer, I gravitated towards the frontend for its
                direct impact on users. I thrive on transforming ideas into functional, visually appealing web applications and
                believe in clear, honest communication—no beating around the bush, just constructive and transparent discussions.
              </p>

              <Button variant="secondary" scrollTo="about" className="ml-auto">
                Read More <FaArrowDown className="bounce-vertical ml-2" />
              </Button>
            </HomepageCard>

            <HomepageCard className="col-span-2" textAlign="left" alignItems="start">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-3xl font-semibold">Specialising in</h2>

                <IconList iconList={[NextJsIcon, ReactIcon, JavaScriptIcon, TypeScriptIcon, TailwindIcon, SanityIcon]} />
              </div>

              <p className="text-gray-500">Next.js, React, JavaScript, TypeScript, Tailwind CSS, Sanity CMS</p>
            </HomepageCard>

            <HomepageCard>
              <MyLink type="internal" href="/cv" showIcon className="text-3xl font-semibold">
                My CV
              </MyLink>
            </HomepageCard>

            <HomepageCard>
              <MyLink type="internal" href="/projects" showIcon className="text-3xl font-semibold">
                Projects
              </MyLink>
            </HomepageCard>

            <HomepageCard className="col-span-2 gap-4" flexDirection="row">
              <SocialIconLink platform="linkedin" size={32} />
              <SocialIconLink platform="github" size={32} />
              <SocialIconLink platform="email" size={32} />
            </HomepageCard>
          </AnimatedElementPresence>
        </Section>
      </Section>

      <Section id="about" isFullWidth hasTopPadding hasBottomPadding>
        <About />
      </Section>
    </>
  );
};

export default Home;
