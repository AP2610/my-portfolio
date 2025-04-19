import { ProjectType } from '@/app/projects/data';
import { Accordion, AccordionData } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import { MyImage } from '@/components/ui/image';
import { MyLink } from '@/components/ui/my-link';

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
    <article className="space-y-12">
      <header>
        <Heading level="h2" as="h3" color="electric-blue" className="mb-2">
          {company}
        </Heading>

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
        <Accordion data={projectDetailsAccordionData} className="mb-12" />

        <div className="text-foreground">
          <Heading level="h3" as="h4" weight="semibold" className="mb-4">
            Technologies & Skills
          </Heading>

          <ul className="flex flex-wrap gap-2">
            {specializations.map((skill) => (
              <li key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>

        {(websiteUrl || githubUrl) && (
          <div className="mt-10 flex gap-4">
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
