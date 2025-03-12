import { Experience as ExperienceType } from '@/app/cv/data';
import Link from 'next/link';
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
  bulletPoints,
  link,
  className,
}: ExperienceProps) => {
  return (
    <article className={clsx('space-y-4', className)}>
      <header>
        <h2 className="text-2xl text-blue print:text-black">{company}</h2>
        <p className="text-xl font-medium">{role}</p>
        {subText && <p className="text-sm text-lime-600 print:text-black">{subText}</p>}
        <p className="text-lime-600 print:text-black">
          {period} | {location}
        </p>
      </header>

      <div className="space-y-4">
        {Array.isArray(description) ? description.map((desc, index) => <p key={index}>{desc}</p>) : <p>{description}</p>}

        {bulletPoints && (
          <ul className="list-disc pl-5 space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}

        {link && (
          <Link
            href={link.url}
            className="text-blue hover:underline mt-4 inline-block print:hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </Link>
        )}
      </div>
    </article>
  );
};
