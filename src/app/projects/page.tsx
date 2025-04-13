import { ProjectCard } from '@/components/features/projects/project-card';
import { Section } from '@/components/layout/section';
import type { Metadata } from 'next';
import { projectsData } from './data';

export const metadata: Metadata = {
  title: "Arjun Puri's Projects",
  description:
    'Explore my portfolio of web development projects, featuring work with React, Next.js, and TypeScript, Tailwind CSS, and more.',
};

const ProjectsPage = () => {
  return (
    <Section paddingTop="medium" paddingBottom="medium">
      <div className="space-y-12">
        <header>
          <h1 className="mb-8 text-3xl text-foreground md:text-4xl">Projects</h1>

          <div className="space-y-6">
            <p className="text-foreground">
              These are some of the most impactful projects I've worked on—both in my growth as a developer and in their impact on
              users. These aren't all the projects I've contributed to throughout my career, but the most substantial ones.
            </p>

            <p className="text-foreground">
              Earlier in my career, I worked on fully custom WordPress implementations, handling both frontend and backend
              development. These projects leveraged the then-new Gutenberg editor, which heavily utilises React. This was my first
              professional exposure to React and marked the beginning of my journey into modern frontend development.
            </p>
          </div>
        </header>

        <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsPage;
