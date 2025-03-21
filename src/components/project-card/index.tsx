import { Project } from '@/app/projects/data';
import { MyImage } from '@/components/image';
import { Button } from '../buttons';
import clsx from 'clsx';

type ProjectCardProps = Pick<Project, 'slug' | 'company' | 'role' | 'situation' | 'image'>;

export const ProjectCard = ({ slug, company, role, situation, image }: ProjectCardProps) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white-600/10 shadow-md transition-transform hover:scale-[1.02] hover:transform dark:border-2 dark:border-black-400 dark:bg-black-400/30">
      {/* I use aspect-video here to avoid having to set an explicit height. I do this so the image does not get cut off. */}
      {image && <MyImage src={image} alt={`${company} project`} containerClasses="aspect-video" sizes="40vw" />}

      <div className="flex flex-grow flex-col space-y-4 p-4">
        <h2 className="text-2xl text-accent-blue">{company}</h2>
        <p className="text-xl font-semibold text-foreground">{role}</p>

        <div className="flex flex-grow flex-col">
          {/* Show full situation text when there is no image */}
          <p className={`${clsx({ 'line-clamp-3': image })} mb-6 text-foreground`}>{situation}</p>

          {/* Button is always at the bottom using mt-auto */}
          <Button isLinkButton href={`/projects/${slug}`} variant="primary-outline" className="mt-auto">
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
};
