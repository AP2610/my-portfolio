import { Project as ProjectType } from '@/app/projects/data';
import { Badge } from '@/components/ui/badge';
import { MyImage } from '@/components/ui/image';
import { ExternalLink } from '../external-link';

type ProjectProps = ProjectType;

export const ProjectDetails = ({
  role,
  company,
  period,
  situation,
  tasks,
  results,
  specializations,
  image,
  githubUrl,
  websiteUrl,
  additionalInfo,
}: ProjectProps) => {
  return (
    <article className="space-y-8 border-b border-cosmic-latte/10 last:border-b-0">
      <header className="mb-8">
        <h2 className="mb-4 text-2xl text-accent-electric-blue">{company}</h2>
        <span className="mb-2 font-sans text-xl font-medium text-foreground md:mb-0">{role}</span>
        <span className="block font-sans font-medium text-accent-lime md:ml-4 md:inline">{period}</span>
      </header>

      {image && (
        <div className="mx-auto max-w-4xl">
          <MyImage
            src={image}
            alt={`${company} project screenshot`}
            containerClasses="aspect-video rounded-lg overflow-hidden md:max-h-[32rem]"
          />
        </div>
      )}

      <div className="space-y-6 text-foreground">
        <div>
          <h3 className="mb-4 text-xl font-semibold">Situation</h3>
          <p>{situation}</p>
        </div>

        <div className="text-foreground">
          <h3 className="mb-4 text-xl font-semibold">Tasks</h3>

          <ul className="list-disc space-y-2 pl-4 font-sans">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        <div className="text-foreground">
          <h3 className="mb-4 text-xl font-semibold">Results</h3>
          <p>{results}</p>
        </div>

        {additionalInfo && (
          <div className="text-foreground">
            <h3 className="mb-4 text-xl font-semibold">Additional Information</h3>
            <p>{additionalInfo}</p>
          </div>
        )}

        <div className="text-foreground">
          <h3 className="mb-4 text-xl font-semibold">Technologies & Skills</h3>

          {/* TODO: Create generic list component */}
          <ul className="flex flex-wrap gap-2">
            {specializations.map((skill) => (
              <li key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 pt-4">
          {websiteUrl && (
            <ExternalLink href={websiteUrl} variant="primary" showIcon>
              Visit Project Website
            </ExternalLink>
          )}

          {githubUrl && (
            <ExternalLink href={githubUrl} variant="electric-blue-secondary" showIcon>
              View Source Code
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
};
