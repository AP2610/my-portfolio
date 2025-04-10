import { Badge } from '@/components/ui/badge';

const specialisations = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Sanity CMS'];

// TODO: Edit all about me content
export const aboutMeDataLeft = [
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

export const aboutMeDataRight = [
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
