import { ProjectDetails } from '@/components/project-details';
import { Section } from '@/components/section';
import { notFound } from 'next/navigation';
import { projectsData } from '../data';

export const generateStaticParams = async () => {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
};

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projectsData.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Section className="mt-[var(--header-height)]" hasTopPadding hasBottomPadding>
      <ProjectDetails {...project} />
    </Section>
  );
};

export default ProjectPage;
