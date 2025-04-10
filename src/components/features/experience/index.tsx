import { ExperienceType } from '@/app/cv/data';
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
  return (
    <article className={clsx('space-y-4', className)}>
      <header>
        <h2 className="text-2xl text-accent-electric-blue print:text-xl print:text-rich-black">{company}</h2>

        <p className="text-xl font-semibold text-foreground print:text-rich-black">{role}</p>

        {subText && <p className="text-sm text-foreground print:text-rich-black">{subText}</p>}

        <p className="text-accent-lime print:text-lime-700">
          {period} | {location}
        </p>
      </header>

      <div className="space-y-6 text-foreground print:text-rich-black">
        <p>{description}</p>

        {projects && projects.length > 0 && (
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold">{project.name}</h3>
                {project.description && <p>{project.description}</p>}
                {project.bulletPoints && (
                  <ul className="list-disc space-y-2 pl-5">
                    {project.bulletPoints.map((point, bulletIndex) => (
                      <li key={bulletIndex}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {additionalProjects && additionalProjects.length > 0 && (
          <div>
            <h3 className="mb-2 font-semibold">Additional Projects</h3>
            <ul className="list-disc space-y-2 pl-5">
              {additionalProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        )}

        {carriedOverProjects && carriedOverProjects.length > 0 && (
          <div>
            <h3 className="mb-2 font-semibold">Carried Over Projects</h3>
            <ul className="list-disc space-y-2 pl-5">
              {carriedOverProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};
