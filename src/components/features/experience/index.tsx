import { ExperienceType } from '@/app/cv/data';
import { Accordion } from '@/components/ui/accordion';
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
      <div className="space-y-2">
        {project.description && <p>{project.description}</p>}

        {project.bulletPoints && (
          <ul className="list-disc space-y-2 pl-5">
            {project.bulletPoints.map((point, bulletIndex) => (
              <li key={bulletIndex}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    ),
  }));

  return (
    <article className={clsx('space-y-4', className)}>
      <header className="space-y-1">
        <h2 className="text-2xl font-medium text-accent-electric-blue">{company}</h2>

        <p className="text-foreground">{role}</p>

        {subText && <p className="text-sm text-foreground">{subText}</p>}

        <p className="text-accent-lime-foreground">
          {period} | {location}
        </p>
      </header>

      <div className="space-y-6 text-foreground">
        <p>{description}</p>

        {carriedOverProjects && carriedOverProjects.length > 0 && (
          <div>
            <h3 className="mb-2 font-medium">Carried Over Projects</h3>

            <ul className="list-disc space-y-2 pl-5">
              {carriedOverProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        )}

        {projectAccordionData && projectAccordionData.length > 0 && (
          <div className="space-y-6">
            <Accordion data={projectAccordionData} />
          </div>
        )}

        {additionalProjects && additionalProjects.length > 0 && (
          <div>
            <h3 className="mb-2 font-medium">Additional Projects</h3>

            <ul className="list-disc space-y-2 pl-5">
              {additionalProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};
