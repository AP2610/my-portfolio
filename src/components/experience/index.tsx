import { Experience as ExperienceType } from '@/app/cv/data';
import styles from '@/app/cv/cv.module.css';
import Link from 'next/link';

type ExperienceProps = ExperienceType;

export const Experience = ({
  company,
  role,
  period,
  location = 'Netherlands',
  subText,
  description,
  bulletPoints,
  link,
}: ExperienceProps) => {
  return (
    <article className={`space-y-4 ${styles.printArticle}`}>
      <header>
        <h2 className="text-2xl text-blue">{company}</h2>
        <p className="text-xl font-medium">{role}</p>
        {subText && <p className="text-sm text-lime-600">{subText}</p>}
        <p className="text-lime-600">
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
            className={`text-blue hover:underline mt-4 inline-block ${styles.printLink}`}
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
