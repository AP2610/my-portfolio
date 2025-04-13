import { ProjectType } from '@/app/projects/data';
import { Badge } from '@/components/ui/badge';
import { MyLink } from '@/components/ui/my-link';
import { MyImage } from '@/components/ui/image';
import { Accordion, AccordionData } from '@/components/ui/accordion';

type ProjectDetailsProps = ProjectType;

export const ProjectDetails = ({
  role,
  company,
  situation,
  tasks,
  results,
  specializations,
  image,
  githubUrl,
  websiteUrl,
}: ProjectDetailsProps) => {
  const projectDetailsAccordionData: AccordionData[] = [
    {
      id: 'situation',
      title: 'Situation',
      column: 'left',
      content: situation,
    },
    {
      id: 'tasks',
      title: 'Tasks',
      column: 'left',
      content: (
        <ul className="list-disc space-y-2 pl-5">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'results',
      title: 'Results',
      column: 'right',
      content: results,
    },
  ];

  return (
    <article className="space-y-8 border-b border-cosmic-latte/10 last:border-b-0">
      <header>
        <h2 className="mb-4 text-2xl text-accent-electric-blue">{company}</h2>
        <span className="font-sans font-normal text-foreground">{role}</span>
      </header>

      {image && (
        <div className="mx-auto max-w-4xl">
          <MyImage
            src={image}
            alt={`${company} project screenshot`}
            sizes="50vw"
            containerClasses="aspect-video rounded-lg overflow-hidden md:max-h-[32rem]"
          />
        </div>
      )}

      <div className="text-foreground">
        <Accordion isTwoColumns data={projectDetailsAccordionData} className="mb-10" />

        <div className="text-foreground">
          <h3 className="mb-4 text-xl font-semibold">Technologies & Skills</h3>

          <ul className="flex flex-wrap gap-2">
            {specializations.map((skill) => (
              <li key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>

        {(websiteUrl || githubUrl) && (
          <div className="mt-8 flex gap-4">
            {websiteUrl && (
              <MyLink type="external" href={websiteUrl} variant="primary" showIcon>
                Visit Project Website
              </MyLink>
            )}

            {githubUrl && (
              <MyLink type="external" href={githubUrl} variant="electric-blue-secondary" showIcon>
                View Source Code
              </MyLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
