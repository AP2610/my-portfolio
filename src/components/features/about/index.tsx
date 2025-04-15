import { Accordion } from '@/components/ui/accordion';
import { MyLink } from '@/components/ui/my-link';
import { aboutMeData } from './data';

export const About = () => {
  return (
    <article className="space-y-8">
      <h2 className="text-3xl text-foreground md:text-4xl">
        About <span className="text-accent-electric-blue">Me</span>
      </h2>

      <Accordion data={aboutMeData} isTwoColumns className="!mb-14 !mt-10" />

      <div className="space-y-4 text-foreground">
        <p>If you've gone through all the above, I appreciate you taking the time to read a little bit about my story.</p>

        <p>
          If you're still interested, head over to{' '}
          <MyLink type="internal" href="/cv">
            my CV
          </MyLink>
          , it will give you a comprehensive overview of my work experience and my skills.
        </p>

        <p className="font-semibold">You'll also be able to download my CV as a PDF from there.</p>

        <p>
          If you'd rather see my work first, head over to the{' '}
          <MyLink type="internal" href="/projects">
            projects page
          </MyLink>{' '}
          to dive into the projects I've worked on over the last 5 years of my career.
        </p>
      </div>
    </article>
  );
};
