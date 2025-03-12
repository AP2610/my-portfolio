import { About } from '@/components/about';
import { Button } from '@/components/buttons';
import { Section } from '@/components/section';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Section
        className="min-h-[100svh] flex flex-col items-center justify-center custom-background-violet"
        isFullWidth
        // The id is needed for my animated styling on the hero to work. Note to self: Consider getting rid of it and the associated logic.
        id="hero"
      >
        <Section className="font-sans h-full flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-center font-sans font-black">Hi! I&apos;m Arjun</h1>
            <p className="text-center text-2xl font-light text-lime">Welcome to my portfolio</p>
          </div>

          <div className="flex gap-4">
            <Button isLinkButton href="/cv">
              View CV
            </Button>

            <Button variant="secondary" scrollTo="about">
              About Me <FaArrowDown className="ml-2 bounce-vertical" />
            </Button>
          </div>
        </Section>
      </Section>

      <Section id="about" isFullWidth hasTopPadding hasBottomPadding>
        <About />
      </Section>
    </>
  );
};

export default Home;
