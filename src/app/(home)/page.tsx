import { About } from '@/components/about';
import { Button } from '@/components/buttons';
import { Section } from '@/components/section';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Section
        className="custom-background-violet flex min-h-[100svh] flex-col items-center justify-center"
        isFullWidth
        // The id is needed for my animated styling on the hero to work. Note to self: Consider getting rid of it and the associated logic.
        id="hero"
      >
        <Section className="flex h-full flex-col items-center justify-center gap-16 font-sans">
          <div className="flex flex-col gap-4">
            <h1 className="text-center font-sans text-4xl font-black">Hi! I&apos;m Arjun</h1>
            <p className="text-center text-2xl font-light text-lime">Welcome to my portfolio</p>
          </div>

          <div className="flex gap-4">
            <Button isLinkButton href="/cv">
              View CV
            </Button>

            <Button variant="secondary" scrollTo="about">
              About Me <FaArrowDown className="bounce-vertical ml-2" />
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
