import { ExperienceType } from '@/app/cv/data';
import { Section } from '@/components/layout/section';
import { Accordion } from '@/components/ui/accordion';
import { Heading } from '@/components/ui/heading';
import clsx from 'clsx';

type ExperienceProps = ExperienceType & {
  className?: string;
};

export const Experience = ({
  company,
  role,
  period,
  location = 'Netherlands',
  subText,
  description,
  projects,
  additionalProjects,
  carriedOverProjects,
  className,
}: ExperienceProps) => {
  const projectAccordionData = projects?.map((project, index) => ({
    id: `${company}-project-${index}`,
    title: project.name,
    content: (
      <div className="mb-4 space-y-4">
        {project.description && <p>{project.description}</p>}

        {project.bulletPoints && (
          <ul className="list-disc space-y-2 pl-5">
            {project.bulletPoints.map((point, bulletIndex) => (
              <li key={bulletIndex}>{point}</li>
            ))}
          </ul>
        )}

        {project.technology && (
          <div className="space-y-2">
            <Heading level="h4" weight="semibold">
              Technologies & Skills
            </Heading>

            <p className="text-foreground">{project.technology}</p>
          </div>
        )}
      </div>
    ),
  }));

  return (
    <Section animateOnScroll isFullWidth className={clsx('space-y-4', className)}>
      <header className="space-y-1">
        <Heading level="h2" color="electric-blue" weight="medium">
          {company}
        </Heading>

        <p className="text-foreground">{role}</p>

        {subText && <p className="text-sm text-foreground">{subText}</p>}

        <p className="text-accent-lime">
          {period} | {location}
        </p>
      </header>

      <div className="space-y-6 text-foreground">
        <p>{description}</p>

        {carriedOverProjects && carriedOverProjects.length > 0 && (
          <div>
            <Heading level="h4" weight="semibold" className="mb-2">
              Carried Over Projects
            </Heading>

            <ul className="list-disc space-y-2 pl-5">
              {carriedOverProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        )}

        <Heading level="h4" weight="semibold">
          Projects
        </Heading>

        {projectAccordionData && projectAccordionData.length > 0 && (
          <div className="space-y-6">
            <Accordion data={projectAccordionData} />
          </div>
        )}

        {additionalProjects && additionalProjects.length > 0 && (
          <div className="space-y-2">
            <Heading level="h4" weight="semibold">
              Additional Projects
            </Heading>

            <ul className="list-disc space-y-2 pl-5">
              {additionalProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
};
