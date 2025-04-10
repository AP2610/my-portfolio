import { Accordion } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Blockquote } from '@/components/ui/blockquote';
import { MyLink } from '@/components/ui/my-link';

const specialisations = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Sanity CMS'];

// TODO: Edit all about me content
const aboutMeDataLeft = [
  {
    id: 'background-info',
    title: 'Background and Introduction',
    content: (
      <>
        <div className="space-y-4 text-foreground">
          <p>
            I'm a frontend engineer with a passion for creating beautiful, interactive, and accessible applications that
            prioritise the user experience. While trained as a full-stack developer, I gravitated towards the frontend for its
            direct impact on users. I thrive on transforming ideas into functional, visually appealing web applications and
            believe in clear, honest communication—no beating around the bush, just constructive and transparent discussions.
          </p>

          <p>
            I have worked on a diverse range of projects across e-commerce, telecom, logistics, media, and public sector
            domains—including the <span className="text-accent-electric-blue">Corona Dashboard</span>, which saw over{' '}
            <span className="text-accent-electric-blue">250,000 daily visitors</span> at its peak. This project was particularly
            meaningful, requiring rapid execution, accessibility considerations, and a high level of responsibility during a
            critical period.
          </p>
        </div>

        <div className="space-y-4 text-foreground">
          <p className="font-semibold">I specialise in:</p>

          <ul className="flex flex-wrap gap-2">
            {specialisations.map((skill) => (
              <li key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-foreground">
          <p>
            With a service mindset shaped by a hospitality education, I bring strong interpersonal skills and a keen eye for
            detail, ensuring that both user experience and technical execution are of the highest quality. Having lived in
            Australia, India, Kenya, Switzerland, and now the Netherlands, I excel at navigating cultural dynamics and seamlessly
            integrating into diverse teams.
          </p>
        </div>
      </>
    ),
  },
  // TODO: edit this content
  {
    id: 'beyond-coding',
    title: 'Beyond Coding',
    content: `Beyond coding, I excel at coaching juniors, technical analysis, and strategic planning, often leading meetings (more
            for the sake of keeping them efficient if nothing else) and shaping project direction.`,
  },
  {
    id: 'large-codebases-clean-code',
    title: 'Experience with Large Codebases & Clean Code Philosophy',
    content: `I have experience with large-scale codebases, particularly at the Corona Dashboard and Blokker. I am a strong advocate
          for refactoring—a clean, well-structured codebase is paramount to long-term productivity and maintainability. However, I
          also understand the need for balance between code quality and efficient delivery. Like my mother taught me, "a clean
          closet makes for a clear mind."`,
  },
  {
    id: 'outside-of-work',
    title: 'Outside of Work',
    content: `Outside of work, I foster creativity through cooking, DIY projects, gaming, and reading—constantly learning,
          experimenting, and building, both digitally and physically.`,
  },
];

const aboutMeDataRight = [
  {
    id: 'ai-in-my-workflow',
    title: 'AI in My Workflow',
    content: `In the past year, I have worked with AI tools like GitHub Copilot, Augment, and ChatGPT and found ways to integrate them
          into my development workflow, leveraging them to optimise development processes, automate repetitive tasks, and enhance
          productivity. Beyond work, I use AI extensively in my personal life, whether it's for DIY projects or recipe
          development—helping me refine and improve ideas efficiently.`,
  },
  {
    id: 'remote-work',
    title: 'Remote & Hybrid Work Experience',
    content: `I've worked remotely for the past five years, honing my skills in remote collaboration, asynchronous communication,
            and cross-timezone teamwork. While I appreciate the autonomy and trust required for remote work, I'm also happy to
            return to a hybrid environment.`,
  },
  {
    id: 'beauty-in-simplicity',
    title: 'Beauty in Simplicity',
    content: `While some pride themselves on complex solutions, I value clarity and simplicity in code. A well-structured, simple
          codebase improves both productivity and collaboration. Having said that, I myself have written some overly complex logic
          in the past, only to find myself returning months later trying to demystify it. That's only reinforced my belief in KISS
          - Keep It Simple, Stupid. Additionally, working in teams with a varying range of experience, I've learnt the importance
          of keeping code understandable by all levels. I am far from perfect at this, but I always try to keep it in mind when
          writing code.`,
  },
];

export const About = () => {
  return (
    <article className="space-y-8">
      <h2 className="text-3xl text-foreground md:text-4xl">
        About <span className="text-accent-electric-blue">Me</span>
      </h2>

      <div className="grid auto-rows-auto grid-cols-1 lg:grid-cols-2 lg:gap-6">
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
