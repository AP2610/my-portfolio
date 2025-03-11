import { Button } from '@/components/buttons';
import { Section } from '@/components/section';

export default function Home() {
  return (
    <Section className="font-sans min-h-[100svh] flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center font-sans font-black">Hi! I&apos;m Arjun</h1>
        <p className="text-center text-2xl text-lime">Welcome to my portfolio</p>
      </div>

      <div className="flex gap-4">
        <Button isLinkButton href="/cv">
          View CV
        </Button>
        <Button isLinkButton href="/projects" variant="secondary">
          Projects
        </Button>
      </div>
    </Section>
  );
}
