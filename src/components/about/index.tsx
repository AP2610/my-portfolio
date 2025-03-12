import { Button } from '@/components/buttons';
import { Section } from '../section';
import { Badge } from '@/components/badge';
import { InfoBox } from '@/components/info-box';
import { Blockquote } from '@/components/blockquote';
import { TextHighlight } from '@/components/text-highlight';

// TODO: Add something about beauty in simplicity
export const About = () => {
  const specializations = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Sanity CMS'];

  return (
    <Section className="space-y-8 text-lg">
      <h2 className="text-3xl md:text-4xl font-black">
        About <span className="text-blue">Me</span>
      </h2>

      <p>
        I&apos;m a frontend developer with a passion for creating beautiful, interactive, and accessible applications that
        prioritise the user experience. While trained as a full-stack developer, I gravitated towards the frontend because of
        direct impact on users. I thrive on transforming ideas into functional, visually appealing web applications and believe in
        clear, honest communication—no beating around the bush, just constructive and transparent discussions.
      </p>

      <p>
        I have worked on a diverse range of projects across e-commerce, telecom, logistics, media, and public sector
        domains—including the <span className="text-blue">Corona Dashboard</span>, which saw over
        <span className="text-blue"> 250,000 daily visitors</span> at its peak. This project was particularly meaningful,
        requiring rapid execution, accessibility considerations, and a high level of responsibility during a critical period.
      </p>

      <div>
        <p className="mb-4">I specialise in:</p>
        <ul className="flex flex-wrap gap-2">
          {specializations.map((skill) => (
            <li key={skill}>
              <Badge>{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <p>
        With a service mindset rooted in my background in hospitality and tech marketing, I bring strong interpersonal skills and
        adaptability to dynamic environments. Having lived in
        <TextHighlight color="blue">Australia, India, Kenya, Switzerland, and now the Netherlands,</TextHighlight>I excel at
        understanding cultural dynamics and seamlessly integrating into different teams .
      </p>

      <p>
        Outside of work, I foster creativity through cooking, DIY projects, gaming, and reading—constantly learning,
        experimenting, and building, both digitally and physically.
      </p>

      <InfoBox color="blue">
        <p className="text-lg">
          If you&apos;re looking for someone who codes full time, i.e., gets off work and then continues coding late into night -
          that&apos;s not me. It was at one point. I sacrificed a work-life balance for my job and my craft - and I suffered
          because of it. I&apos;ve since taken pride in being able to balance my work, craft, and personal life.
        </p>
        <p className="text-lg">
          Now, once I&apos;m done with work, I enjoy spending time with my partner, coming up with a new recipe or thinking of the
          next DIY project around the house. I firmly believe that exploring my creativity in a fashion that is not related to my
          job, leads to an unbound ability to be creative in my job.
        </p>
        <p className="text-lg">
          When all I did was code, I found myself demoralised after a while. Since I&apos;ve expanded my portfolio of creativity,
          I find myself more excited to apply myself in all of them. I&apos;ve solved many a code-related issue while being
          hunched over my stove wondering what&apos;s missing from a dish.
        </p>
        <p className="text-lg">
          While I fully appreciate people who love to spend all their time writing code or writing about writing code - I
          wouldn&apos;t give up the balance I&apos;ve worked very hard to create over the last half decade.
        </p>
      </InfoBox>

      <Blockquote color="blue">
        Quality is king, but flexibility is key. I believe in delivering high-quality work while adapting to real-world
        constraints.
      </Blockquote>

      <div className="space-y-4">
        <p className="text-lg">
          If you&apos;ve made it this far, I appreciate you taking the time to read a little bit about my story.
        </p>
        <p className="text-lg">
          If you&apos;re still interested, head over to my CV, it will give you a comprehensive overview of my work experience and
          my skills. From there, feel free to dive into the projects I&apos;ve worked on over the last 6 years of my career.
        </p>
      </div>

      <div className="flex gap-4 md:w-1/4 ml-auto">
        <Button isLinkButton href="/cv" className="w-full">
          View My CV
        </Button>
        <Button isLinkButton href="/projects" variant="blue-secondary" className="w-full">
          See My Projects
        </Button>
      </div>
    </Section>
  );
};
