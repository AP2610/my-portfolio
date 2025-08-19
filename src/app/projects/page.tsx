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
    <Section paddingTop="medium" paddingBottom="medium" className="space-y-12">
      <article className="space-y-12">
        <header>
          <Heading level="h1" className="mb-8">
            Professional Projects
          </Heading>
        </header>

        <p className="text-foreground">
          These are some of the most impactful projects I've worked on—both in my growth as a developer and in their impact on
          users. These aren't all the projects I've contributed to throughout my career, but the most substantial ones.
        </p>

        <Section isFullWidth animateOnScroll className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.professionalProjects.map((project, index) => (
            <AnimatedElementPresence key={index} animationProperty="position" entryAnimationDelay={1 + index * 0.2}>
              <ProjectCard project={project} />
            </AnimatedElementPresence>
          ))}
        </Section>
      </article>

      <article className="space-y-12">
        <Heading level="h2" className="mb-8">
          Personal Projects
        </Heading>

        <p className="text-foreground">
          Below you'll find an ever-growing list of personal projects I've worked on. These are projects that I've worked on in my
          spare time. The goal with most of these projects was to learn something new and improve my skills, while making
          something fun and interesting.
        </p>

        <Section isFullWidth animateOnScroll className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.personalProjects.map((project, index) => (
            <AnimatedElementPresence
              key={index}
              shouldUseInView
              useInViewMargin="100px"
              animationProperty="position"
              entryAnimationDelay={1 + index * 0.2}
            >
              <ProjectCard project={project} />
            </AnimatedElementPresence>
          ))}
        </Section>
      </article>
    </Section>
  );
};

export default ProjectsPage;
