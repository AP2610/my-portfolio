import { Accordion } from '@/components/ui/accordion';
import { Blockquote } from '@/components/ui/blockquote';
import { MyLink } from '@/components/ui/my-link';
import { aboutMeDataLeft, aboutMeDataRight } from './data';

export const About = () => {
  return (
    <article className="space-y-8">
      <h2 className="text-3xl text-foreground md:text-4xl">
        About <span className="text-accent-electric-blue">Me</span>
      </h2>

      <div className="!mb-14 !mt-10 grid auto-rows-auto grid-cols-1 lg:grid-cols-2 lg:gap-6">
        <div className="space-y-4">
          <Accordion data={aboutMeDataLeft} />
        </div>

        <div className="space-y-4">
          <Accordion data={aboutMeDataRight} />
        </div>
      </div>

      {/* TODO: consider adding info box section here */}

      <Blockquote color="electric-blue">
        Quality is king, but flexibility is key. I believe in delivering high-quality work while adapting to real-world
        constraints.
      </Blockquote>

      <div className="space-y-4 text-foreground">
        <p>If you've gone through all the above, I appreciate you taking the time to read a little bit about my story.</p>

        <p>
          If you're still interested, head over to my CV by clicking the button below, it will give you a comprehensive overview
          of my work experience and my skills.
        </p>

        <p className="font-semibold">You'll also be able to download my CV as a PDF from there.</p>

        <p>
          If you'd rather see my work first, hit the button below to dive into the projects I've worked on over the last 5 years
          of my career.
        </p>
      </div>

      <div className="flex gap-4 md:mt-12 md:w-1/4">
        <MyLink type="internal" variant="primary" href="/cv" className="w-full">
          View My CV
        </MyLink>

        <MyLink type="internal" href="/projects" variant="electric-blue-secondary" className="w-full">
          See My Projects
        </MyLink>
      </div>
    </article>
  );
};
