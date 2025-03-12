import { Section } from '@/components/section';
import { Experience } from '@/components/experience';
import { experiences } from './data';
import styles from './cv.module.css';
import Link from 'next/link';

// TODO: Add print button
// TODO: Add print option, dark mode or light mode
// TODO: Go through the text here for any issues and things that dont fit properly
// TODO: Add additonal experiences from ordina cv like blokker etc.
// TODO: Add additional CV stuff like skills etc, check ordina CV and linkedin for guidance
export default function CV() {
  return (
    <>
      <Section className={`max-w-4xl mx-auto mt-[var(--header-height)] ${styles.printFriendly}`} hasTopPadding hasBottomPadding>
        <header className={`${styles.printHide} mb-8`}>
          <h1 className="text-4xl mb-4">Professional Experience</h1>
          <p className="text-lime text-lg">A comprehensive overview of my career journey.</p>

          <p className="text-lg mt-4">
            You can also hit the button in the top right corner to print or save my CV as a PDF. Please keep in mind, my CV
            contains consolidated and condensed information about my experiences. Should you wish to gain a deeper understanding
            of the projects i have worked on, including the situation, tasks, results, technical details. and specializations, I
            invite you to explore the{' '}
            <Link href="/projects" className="text-blue hover:text-blue-600 hover:underline">
              projects section
            </Link>{' '}
            of this website.
          </p>
        </header>

        <div className={`space-y-12 font-sans ${styles.printBody}`}>
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <Experience key={index} {...experience} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
