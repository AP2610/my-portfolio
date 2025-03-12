import { Project as ProjectType } from '@/app/projects/data';
import { Badge } from '@/components/badge';
import { Button } from '@/components/buttons';
import { MyImage } from '@/components/image';

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
    <article className="space-y-8 border-b border-white/10 pb-16 last:border-b-0">
      <header className="mb-8">
        <h2 className="mb-4 text-2xl text-blue">{company}</h2>
        <span className="mb-2 font-sans text-xl font-medium md:mb-0">{role}</span>
        <span className="block font-sans text-lime-600 md:ml-4 md:inline md:font-medium">{period}</span>
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

      <div className="space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium">Situation</h3>
          <p>{situation}</p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium">Tasks</h3>

          <ul className="list-disc space-y-2 pl-4 font-sans">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium">Results</h3>
          <p>{results}</p>
        </div>

        {additionalInfo && (
          <div>
            <h3 className="mb-4 text-lg font-medium">Additional Information</h3>
            <p>{additionalInfo}</p>
          </div>
        )}

        <div>
          <h3 className="mb-4 text-lg font-medium">Technologies & Skills</h3>

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
            <Button href={websiteUrl} isLinkButton variant="primary">
              Visit Project Website
            </Button>
          )}

          {githubUrl && (
            <Button href={githubUrl} isLinkButton variant="blue-secondary">
              View Source Code
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
