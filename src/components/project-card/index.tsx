import { Project } from '@/app/projects/data';
import { MyImage } from '@/components/image';
import { Button } from '../buttons';
import clsx from 'clsx';

type ProjectCardProps = Pick<Project, 'slug' | 'company' | 'role' | 'situation' | 'image'>;

export const ProjectCard = ({ slug, company, role, situation, image }: ProjectCardProps) => {
  return (
    <article className="bg-black-600/30 border-2 border-black-600 h-full flex flex-col rounded-lg shadow-md overflow-hidden hover:transform hover:scale-[1.02] transition-transform">
      {/* I use aspect-video here to avoid having to set an explicit height. I do this so the image does not get cut off. */}
      {image && <MyImage src={image} alt={`${company} project`} containerClasses="aspect-video" />}

      <div className="p-6 flex-grow flex flex-col space-y-4">
        <h2 className="text-2xl text-blue">{company}</h2>
        <p className="text-xl font-medium">{role}</p>

        <div className="flex-grow flex flex-col">
          {/* Show full situation text when there is no image */}
          <p className={`${clsx({ 'line-clamp-3': image })} mb-4`}>{situation}</p>

          {/* Button is always at the bottom using mt-auto */}
          <Button isLinkButton href={`/projects/${slug}`} variant="blue-secondary" className="mt-auto">
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
};
