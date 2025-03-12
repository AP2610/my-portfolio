import { About } from '@/components/about';
import { Button } from '@/components/buttons';
import { Section } from '@/components/section';

const Home = () => {
  return (
    <>
      <Section
        className="font-sans min-h-[100svh] flex flex-col items-center justify-center gap-16 custom-background-violet"
        id="hero"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-center font-sans font-black">Hi! I&apos;m Arjun</h1>
          <p className="text-center text-2xl font-light text-lime">Welcome to my portfolio</p>
        </div>

        <div className="flex gap-4">
          <Button isLinkButton href="/cv">
            View CV
          </Button>
          {/* TODO: Add arrow pointing down to about me button so its clear where it is */}
          {/* TODO: Also consider addting down arrow to bottom of hero */}
          <Button variant="secondary" scrollTo="about">
            About Me
          </Button>
        </div>
      </Section>

      <Section id="about" isFullWidth hasTopPadding hasBottomPadding>
        <About />
      </Section>
    </>
  );
};

export default Home;
