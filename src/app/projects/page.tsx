import { ProjectCard } from '@/components/features/projects/project-card';
import { Section } from '@/components/layout/section';
import { Heading } from '@/components/ui/heading';
import type { Metadata } from 'next';
import { projectsData } from './data';
import { AnimatedElementPresence } from '@/components/ui/animation/animated-element-presence';

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
          <Heading level="h1" className="mb-8">
            Projects
          </Heading>

          <div className="space-y-6">
            <p className="text-foreground">
              These are some of the most impactful projects I've worked on—both in my growth as a developer and in their impact on
              users. These aren't all the projects I've contributed to throughout my career, but the most substantial ones.
            </p>

            <p className="text-foreground">
              Earlier in my career, I worked on fully custom WordPress implementations (not mentioned below), handling both
              frontend and backend development. These projects leveraged the then-new Gutenberg editor, which heavily utilises
              React.
            </p>
          </div>
        </header>

        <Section isFullWidth animateOnScroll className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <AnimatedElementPresence key={index} animationProperty="position" entryAnimationDelay={1 + index * 0.2}>
              <ProjectCard project={project} />
            </AnimatedElementPresence>
          ))}
        </Section>
      </div>
    </Section>
  );
};

export default ProjectsPage;
