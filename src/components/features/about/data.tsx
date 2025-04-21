import { AccordionData } from '@/components/ui/accordion';

export const aboutMeData: AccordionData[] = [
  {
    id: 'background-info',
    title: 'Background and Introduction',
    column: 'left',
    content: (
      <>
        <div className="space-y-4 text-foreground">
          <p>
            I'm a frontend engineer with 5 years of experience. I create beautiful, interactive and accessible applications that
            prioritise UX. While trained as a full-stack developer, I leaned into frontend because of its direct user impact. With
            a user-centric mindset, I'm always looking for ways to improve the experience.
          </p>

          <p>
            I specialise in React, Next.js, Javascript, Typescript, TailwindCSS, and Sanity CMS With more than 4 years of React
            experience. I also have some experience with Nuxt.js and Vue. My fundamentals are strong, having worked on many
            vanilla JavaScript projects in the past. My experience with these technologies spans numerous industries like
            e-commerce, telecom, logistics, media, and the public sector. From large-scale e-commerce and telecom to projects like
            the Corona Dashboard which served the entirety of the Netherlands, I'm comfortable working on all sizes of projects.
          </p>

          <p>
            With an education and background in hospitality, I am detail-oriented and have strong interpersonal skills. Having
            lived in Australia, India, Kenya, Switzerland, and the Netherlands, I understand cultural dynamics well and find
            myself fitting into diverse teams easily. Beyond coding, my strengths lie in coaching juniors, technical analysis,
            strategic planning, giving presentations, and communication.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'beyond-coding',
    title: 'Beyond Coding',
    column: 'left',
    content: `Beyond writing code, I enjoy coahing junior developers, helping them consolidate their understanding of various topics. I've done this a few times already and hope to do more in the future. I've been told that I'm quite good at creating and giving presentations, often geeking out on desiging slides. Apart from that, I consider myself adept in technical analysis and strategic planning for new and existing projects.`,
  },
  {
    id: 'large-codebases-clean-code',
    title: 'Experience with Large Codebases & Clean Code Philosophy',
    content: `I have experience with large-scale codebases, like the Corona Dashboard and Blokker. The Corona Dashboard served the entire country of the Netherlands, while Blokker was one of the largest department stores in the Netherlands. I am a strong advocate
          for refactoring—a clean, well-structured codebase is paramount to long-term productivity and maintainability. However, I
          also understand the need for balance between code quality and efficient delivery. Like my mother taught me, "a clean
          closet makes for a clear mind."`,
  },
  {
    id: 'outside-of-work',
    title: 'Outside of Work',
    column: 'left',
    content: `Outside of work, I nurture my creativity through cooking, DIY projects, gaming, and reading. I'm a big fan of learning new things - whether its a new recipe, some random facts, or how to customise a piece of furniture. Food is probably my biggest hobby though, I'm always experimenting in the kithcen and coming up with my own recipes.`,
  },
  {
    id: 'ai-in-my-workflow',
    title: 'AI in My Workflow',
    column: 'right',
    content: `In the past year, I have worked with AI tools like GitHub Copilot, Augment, and ChatGPT and found ways to integrate them
          into my development workflow to enhance productivity when needed. While I still enjoy doing things manually for the sake of learning and staying sharp, when I need speed, AI is the way to go. In any case, not a single line of AI generated code gets through without thorough scrutiny and review. Beyond work, I use AI extensively in my personal life, whether it's for DIY projects or recipe
          development, it helps me get to where I am trying to go faster.`,
  },
  {
    id: 'remote-work',
    title: 'Remote & Hybrid Work Experience',
    column: 'right',
    content: `I've worked hybrid for the past five years, honing my skills in remote collaboration, asynchronous communication,
            and cross-timezone teamwork. While I appreciate the autonomy and trust required for remote work, I'm also happy to
            return to a hybrid environment where I can enjoy the benefits of both worlds.`,
  },
  {
    id: 'beauty-in-simplicity',
    title: 'Beauty in Simplicity',
    column: 'right',
    content: `I value clarity and simplicity in code - readability over complexity. A well-structured, simple
          codebase improves both productivity and collaboration. Having worked on a wide variety of codebases, I've seen the good, bad, and ugly. While I'm comfortable working in less than optimal set ups, I've seen first-hand the productivity gains of a clean, well-structured codebase. Additionally, working in teams with a varying range of experience, I've learnt the importance
          of keeping code understandable by all levels.`,
  },
];
