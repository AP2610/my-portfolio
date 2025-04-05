'use client';

import { About } from '@/components/features/about';
import { AnimatedElementPresence } from '@/components/ui/animated-element-presence';
import { Section } from '@/components/layout/section';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Section
        className="relative flex flex-col items-center justify-center"
        isFullWidth
        hasTopPadding
        hasHeaderMarginTop
        // The id is needed for my animated styling on the header to work. Note to self: Consider getting rid of it and the associated logic.
        id="hero"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.6, 0.5],
          }}
          transition={{
            duration: 4,
            times: [0, 0.5, 1],
            ease: 'easeInOut',
            repeat: Infinity,
            opacity: {
              duration: 2,
              times: [0, 0.5, 1],
              ease: 'easeIn',
            },
          }}
          className="homepage-radial-background absolute bottom-0 left-0 right-0 top-[-20%] -z-10"
        ></motion.div>
        <Section>
          <AnimatedElementPresence
            entryAnimationDelay={0.2}
            animationProperty="opacity"
            className="grid grid-cols-4 grid-rows-4 gap-6"
          >
            <div className="flex flex-col items-center justify-center rounded-md bg-homepage-card-bg p-6 text-center text-foreground shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h1 className="mb-4 text-3xl font-semibold">Hi, I'm Arjun</h1>
              <p className="text-gray-600">Welcome to my portfolio!</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-md bg-homepage-card-bg p-6 text-center text-foreground shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="mb-4 text-3xl font-semibold">5 years</h2>
              <p className="text-gray-600">Of Frontend Development</p>
            </div>

            <div className="col-span-2 row-span-2 flex flex-col justify-center rounded-md bg-homepage-card-bg p-6 text-foreground shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="mb-4 text-3xl font-semibold">About me</h2>
              <p className="text-gray-600">
                I'm a frontend engineer with a passion for creating beautiful, interactive, and accessible applications that
                prioritise the user experience. While trained as a full-stack developer, I gravitated towards the frontend for its
                direct impact on users. I thrive on transforming ideas into functional, visually appealing web applications and
                believe in clear, honest communication—no beating around the bush, just constructive and transparent discussions.
              </p>
            </div>
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
