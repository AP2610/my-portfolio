import { Button } from '@/components/buttons';
import { Section } from '@/components/section';
import { Badge } from '@/components/badge';
import { InfoBox } from '@/components/info-box';
import { Blockquote } from '@/components/blockquote';

const specialisations = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Sanity CMS'];

export const About = () => {
  return (
    <Section className="space-y-8">
      <h2 className="text-3xl md:text-4xl">
        About <span className="text-blue">Me</span>
      </h2>

      <p>
        I&apos;m a frontend developer with a passion for creating beautiful, interactive, and accessible applications that
        prioritise the user experience. While trained as a full-stack developer, I gravitated towards the frontend for its direct
        impact on users. I thrive on transforming ideas into functional, visually appealing web applications and believe in clear,
        honest communication—no beating around the bush, just constructive and transparent discussions.
      </p>

      <p>
        I have worked on a diverse range of projects across e-commerce, telecom, logistics, media, and public sector
        domains—including the <span className="text-blue">Corona Dashboard</span>, which saw over{' '}
        <span className="text-blue">250,000 daily visitors</span> at its peak. This project was particularly meaningful, requiring
        rapid execution, accessibility considerations, and a high level of responsibility during a critical period.
      </p>

      <p>
        Beyond coding, I excel at coaching juniors, technical analysis, and strategic planning, often leading meetings (more for
        the sake of keeping them efficient if nothing else) and shaping project direction.
      </p>

      <div>
        <p className="mb-4">I specialise in:</p>

        <ul className="flex flex-wrap gap-2">
          {specialisations.map((skill) => (
            <li key={skill}>
              <Badge>{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <p>
        With a service mindset shaped by a hospitality education, I bring strong interpersonal skills and a keen eye for detail,
        ensuring that both user experience and technical execution are of the highest quality. Having lived in Australia, India,
        Kenya, Switzerland, and now the Netherlands, I excel at navigating cultural dynamics and seamlessly integrating into
        diverse teams.
      </p>

      <p>
        I&apos;ve worked remotely for the past five years, honing my skills in remote collaboration, asynchronous communication,
        and cross-timezone teamwork. While I appreciate the autonomy and trust required for remote work, I&apos;m also happy to
        return to a hybrid environment. Having said that, my preference is for mostly remote work.
      </p>

      <h3 className="text-xl">AI in My Workflow</h3>

      <p>
        In the past year, I have worked with AI tools like GitHub Copilot, Augment, and ChatGPT and found ways to integrate them
        into my development workflow, leveraging them to optimise development processes, automate repetitive tasks, and enhance
        productivity. Beyond work, I use AI extensively in my personal life, whether it&apos;s for DIY projects or recipe
        development—helping me refine and improve ideas efficiently.
      </p>

      <h3 className="text-xl">Beauty in Simplicity</h3>

      <p>
        While some pride themselves on complex solutions, I value clarity and simplicity in code. A well-structured, simple
        codebase improves both productivity and collaboration. Having said that, I myself have written some overly complex logic
        in the past, only to find myself returning months later trying to demystify it. That&apos;s only reinforced my belief in
        KISS - Keep It Simple, Stupid. Additionally, working in teams with a varying range of experience, I&apos;ve learnt the
        importance of keeping code understandable by all levels. I am far from perfect at this, but I always try to keep it in
        mind when writing code.
      </p>

      <h3 className="text-xl">Experience with Large Codebases & Clean Code Philosophy</h3>

      <p>
        I have experience with large-scale codebases, particularly at the Corona Dashboard and Blokker. I am a strong advocate for
        refactoring—a clean, well-structured codebase is paramount to long-term productivity and maintainability. However, I also
        understand the need for balance between code quality and efficient delivery. Like my mother taught me, &quot;a clean
        closet makes for a clear mind.&quot;
      </p>

      <p>
        Outside of work, I foster creativity through cooking, DIY projects, gaming, and reading—constantly learning,
        experimenting, and building, both digitally and physically.
      </p>

      {/* Move this to core values section get values from previous CV */}
      <InfoBox color="blue">
        <p>
          If you&apos;re looking for someone who codes full time, i.e., gets off work and then continues coding late into night -
          that&apos;s not me. It was at one point. I sacrificed a work-life balance for my job and my craft - and I suffered
          because of it. I&apos;ve since taken pride in being able to balance my work, craft, and personal life.
        </p>

        <p>
          Now, once I&apos;m done with work, I enjoy spending time with my partner, coming up with a new recipe or thinking of the
          next DIY project around the house. I firmly believe that exploring my creativity in a fashion that is not related to my
          job, leads to an unbound ability to be creative in my job.
        </p>

        <p>
          When all I did was code, I found myself demoralised after a while. Since I&apos;ve expanded my portfolio of creativity,
          I find myself more excited to apply myself in all of them. I&apos;ve solved many a code-related issue while being
          hunched over my stove.
        </p>

        <p>
          While I fully appreciate people who love to spend all their time writing code or writing about writing code - I
          wouldn&apos;t give up the balance I&apos;ve worked very hard to create.
        </p>
      </InfoBox>

      <Blockquote color="blue">
        Quality is king, but flexibility is key. I believe in delivering high-quality work while adapting to real-world
        constraints.
      </Blockquote>

      <div className="space-y-4">
        <p>If you&apos;ve made it this far, I appreciate you taking the time to read a little bit about my story.</p>

        <p>
          If you&apos;re still interested, head over to my CV, it will give you a comprehensive overview of my work experience and
          my skills. From there, feel free to dive into the projects I&apos;ve worked on over the last 6 years of my career.
        </p>
      </div>

      <div className="flex gap-4 md:mt-12 md:w-1/4">
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
