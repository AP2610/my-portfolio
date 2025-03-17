import { Experience as ExperienceType } from '@/app/cv/data';
import clsx from 'clsx';
import { ExternalLink } from '../external-link';

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
  bulletPoints,
  link,
  className,
}: ExperienceProps) => {
  return (
    <article className={clsx('space-y-4', className)}>
      <header>
        <h2 className="text-2xl text-accent-blue print:text-xl print:text-black">{company}</h2>

        <p className="text-xl font-semibold text-foreground print:text-black">{role}</p>

        {subText && <p className="text-sm text-foreground print:text-black">{subText}</p>}

        <p className="text-accent-lime print:text-lime-700">
          {period} | {location}
        </p>
      </header>

      <div className="space-y-4 text-foreground print:text-black">
        {Array.isArray(description) ? description.map((desc, index) => <p key={index}>{desc}</p>) : <p>{description}</p>}

        {bulletPoints && (
          <ul className="list-disc space-y-2 pl-5">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}

        {link && (
          <ExternalLink href={link.url} className="mt-4 print:hidden">
            {link.text}
          </ExternalLink>
        )}
      </div>
    </article>
  );
};
