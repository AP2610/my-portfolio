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
    <article className="space-y-8 pb-16 border-b border-white/10 last:border-b-0">
      <header className="space-y-4">
        <h2 className="text-2xl text-blue">{company}</h2>
        <p className="text-xl font-medium">{role}</p>
        <p className="text-lime-600">{period}</p>
      </header>

      {image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <MyImage src={image} alt={`${company} project screenshot`} />
        </div>
      )}

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Situation</h3>
          <p>{situation}</p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Tasks</h3>

          <ul className="list-disc pl-4 space-y-2 font-sans">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Results</h3>
          <p>{results}</p>
        </div>

        {additionalInfo && (
          <div>
            <h3 className="text-lg font-medium mb-2">Additional Information</h3>
            <p>{additionalInfo}</p>
          </div>
        )}

        <div>
          <h3 className="text-lg font-medium mb-2">Technologies & Skills</h3>

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
