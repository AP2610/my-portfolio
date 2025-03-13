import { ProjectCard } from '@/components/project-card';
import { projectsData } from './data';
import { Section } from '@/components/section';
import { Button } from '@/components/buttons';
import { FaArrowDown } from 'react-icons/fa';
import { ExternalLink } from '@/components/external-link';

const ProjectsPage = () => {
  return (
    <Section className="mt-[var(--header-height)]" hasTopPadding hasBottomPadding>
      <div className="space-y-12">
        <header>
          <h1 className="mb-8 text-4xl">My Projects</h1>

          <div className="space-y-6">
            <p className="text-lime">
              You might find some duplication here from the content on the CV page, for that, I sincerely apologise. I&apos;ve
              done my best to keep the information unique to each section.
            </p>

            <p>TLDR: Hit the Projects button below if you&apos;re just interested in my projects.</p>

            <div className="flex items-center gap-4 md:w-1/2">
              <Button isLinkButton href="/cv" className="w-full">
                View my CV here
              </Button>

              <Button variant="secondary" scrollTo="featured-projects" className="w-full">
                Projects <FaArrowDown className="bounce-vertical ml-2" />
              </Button>
            </div>

            <p>
              What you&apos;ll find below are some of the most impactful projects I&apos;ve worked on—both in my growth as a
              developer and in their impact on users. These aren&apos;t all the projects I&apos;ve contributed to throughout my
              career, but they represent key milestones.
            </p>

            <p>
              Earlier in my career, I worked on fully custom WordPress themes, handling both frontend and backend development.
              These projects leveraged the then-new Gutenberg editor, which heavily utilises React. This was my first professional
              exposure to React and marked the beginning of my journey into modern frontend development.
            </p>

            <p>
              Beyond client-facing applications, I&apos;ve also built internal tools for my teams. Two of the most notable ones
              include:
            </p>

            <ul className="mb-4 ml-4 list-inside list-disc font-sans">
              <li>A team randomiser (Coronavirus Dashboard) – Used to fairly assign a team member to lead each sprint.</li>
              <li>
                An XML parser (VodafoneZiggo) – Designed to handle large XML files from Salesforce Commerce Cloud and convert them
                into a usable format.
              </li>
            </ul>

            <p>
              Both tools were built with React. I still have access to the code for these projects and plan to add them to my
              portfolio soon - they need to be cleaned up and refined slightly. The XML parse especially was created in a rush, I
              need to refactor its code.
            </p>

            <p>
              Additionally, my very first use of React was for a technical assignment during my interview with Clockwork. I built
              a weather widget, which, while simple, was an important learning experience for me. The API is no longer free, but
              the code is still available on my{' '}
              <ExternalLink href="https://github.com/AP2610?tab=repositories" variant="inline">
                GitHub
              </ExternalLink>{' '}
              if you&apos;d like to check it out. (Be kind—it was my first React project, just a few months after I started
              coding!)
            </p>
          </div>
        </header>

        <Section isFullWidth id="featured-projects">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl">Featured Projects</h2>
            <p className="text-lime">Projects are listed in chronological order, more or less.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                slug={project.slug}
                company={project.company}
                role={project.role}
                situation={project.situation}
                image={project.image}
              />
            ))}
          </div>
        </Section>
      </div>
    </Section>
  );
};

export default ProjectsPage;
