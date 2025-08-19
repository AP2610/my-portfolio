import { PersonalProjectType } from '@/app/projects/data';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import { MyImage } from '@/components/ui/image';
import { MyLink } from '@/components/ui/my-link';

type ProjectDetailsProps = PersonalProjectType;

export const PersonalProjectDetails = ({
  name,
  description,
  technologies,
  image,
  githubUrl,
  websiteUrl,
}: ProjectDetailsProps) => {
  return (
    <article className="space-y-12">
      <header>
        <Heading level="h2" as="h3" color="electric-blue" className="mb-2">
          {name}
        </Heading>
      </header>

      {image && (
        <div className="mx-auto max-w-4xl">
          <MyImage
            src={image}
            alt={`${name} project screenshot`}
            sizes="50vw"
            priority
            containerClasses="aspect-video rounded-lg overflow-hidden md:max-h-[32rem]"
          />
        </div>
      )}

      <div className="text-foreground">
        <div className="text-foreground">
          <p className="mb-4">{description}</p>

          <Heading level="h3" as="h4" weight="semibold" className="mb-4">
            Technologies & Skills
          </Heading>

          <ul className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li key={technology}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>
        </div>

        {(websiteUrl || githubUrl) && (
          <div className="mt-10 flex flex-col gap-4 md:flex-row">
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
