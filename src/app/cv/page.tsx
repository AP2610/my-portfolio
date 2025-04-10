import { Badge } from '@/components/ui/badge';
import { DownloadButton } from '@/components/features/cv/download-button';
import { Experience } from '@/components/features/experience';
import { MyLink } from '@/components/ui/my-link';
import { MyImage } from '@/components/ui/image';
import { Section } from '@/components/layout/section';
import { SocialIconLink } from '@/components/ui/social-icon-link';
import type { Metadata } from 'next';
import { experiences } from './data';
import { InfoBox } from '@/components/ui/info-box';

export const metadata: Metadata = {
  title: "Arjun Puri's CV",
  description:
    'Frontend Engineer with expertise in JavaScript, TypeScript, React, Next.js and Tailwind CSS. View my professional experience, skills, and qualifications.',
};

const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'SCSS',
  'Tailwind CSS',
  'Framer Motion',
  'Bootstrap',
  'Next.js',
  'Cypress',
  'Jest',
  'Test Automation',
  'REST',
  'CI/CD',
  'Git',
  'Sanity CMS',
  'Monorepo',
  'Figma',
  'Accessibility',
  'Agile',
  'Scrum',
  'Pair Programming',
  'AI Pair Programming',
  'Coaching',
  'Wordpress',
  'Strapi CMS',
  'Remote Work',
  'Nuxt',
  'VueJS',
  'NPM',
  'Github Actions',
  'Prettier',
  'EsLint',
  'Micro Animations',
  'Husky',
  'Web Components',
];

// TODO: Go through the text here for any issues and things that dont fit properly
// TODO: Extract page parts to components
const CvPage = () => {
  return (
    <Section className="mt-[var(--header-height)]" hasTopPadding hasBottomPadding>
      <Section isFullWidth className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row">
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:items-start">
          <MyImage
            src="/cv/headshot.webp"
            alt="Arjun Puri"
            priority
            sizes="50vw"
            containerClasses="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent-lime hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-4 md:ml-8">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-4xl text-accent-electric-blue">Arjun Puri</h1>

            <DownloadButton />
          </div>

          <p className="font-bold text-accent-lime">
            Frontend Engineer | JavaScript, TypeScript, React, Next.js, Tailwind | Building Reliable, Engaging & User-Centric Web
            Experiences
          </p>

          <p className="font-bold text-accent-lime">Location - Netherlands | Nationality - Indian (Dutch Permanent Residency)</p>

          <div className="flex gap-4 font-sans text-sm font-medium">
            <SocialIconLink platform="github" />
            <SocialIconLink platform="linkedin" />
            <SocialIconLink platform="email" />
          </div>
        </div>
      </Section>

      <header className="mb-8 text-foreground">
        <h2 className="mb-4 text-4xl">Professional Experience</h2>

        <InfoBox className="my-8">
          <p>
            You can hit the button in the top right corner to download my CV as a PDF. My downloadable CV has been designed in
            Figma.
          </p>
        </InfoBox>

        <p>
          Please keep in mind, my CV contains consolidated and condensed information about my experiences. Should you wish to gain
          a deeper understanding of the projects I have worked on, including the situation, tasks, results, technical details, and
          specializations, I invite you to explore the{' '}
          <MyLink type="internal" href="/projects">
            projects section
          </MyLink>{' '}
          of this website.
        </p>
      </header>

      {/* Experience section */}
      <div className="space-y-10 font-sans md:space-y-12">
        {experiences.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>

      {/* Skills */}
      <div className="mt-10">
        <h4 className="mb-6 text-2xl text-accent-electric-blue">Skills & Methodologies</h4>

        <ul className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <li key={skill}>
              <Badge color="electric-blue-700">{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>

      {/* Languages & Certifications */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-6 text-2xl text-accent-electric-blue">Languages</h4>

          <ul className="flex flex-wrap gap-2 font-sans">
            <li>
              <Badge color="violet">English (Native or Bilingual)</Badge>
            </li>
            <li>
              <Badge color="violet">French (B1)</Badge>
            </li>
            <li>
              <Badge color="violet">Hindi (Native or Bilingual)</Badge>
            </li>
            <li>
              <Badge color="violet">Dutch (A2)</Badge>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-2xl text-accent-electric-blue">Certifications</h4>

          <ul className="flex flex-wrap gap-2 font-sans">
            <li>
              <MyLink
                type="external"
                hasHover={false}
                href="https://www.linkedin.com/in/arjunpuri26/overlay/1574531685954/single-media-viewer/?profileId=ACoAAB61nJkB4W7StLKExMHGTXbDlDd3Lvi6sgs"
              >
                <Badge color="violet" hasLink>
                  Le Wagon Fullstack Bootcamp
                </Badge>
              </MyLink>
            </li>
            <li>
              <MyLink
                type="external"
                hasHover={false}
                href="https://www.linkedin.com/in/arjunpuri26/overlay/1635498506856/single-media-viewer/?profileId=ACoAAB61nJkB4W7StLKExMHGTXbDlDd3Lvi6sgs"
              >
                <Badge color="violet" hasLink>
                  React Tutorial
                </Badge>
              </MyLink>
            </li>
            <li>
              <MyLink type="external" hasHover={false} href="https://www.udemy.com/certificate/UC-KEQX9LVH/">
                <Badge color="violet" hasLink>
                  Complete Javascript Certification
                </Badge>
              </MyLink>
            </li>
            <li>
              <MyLink
                type="external"
                hasHover={false}
                href="https://www.linkedin.com/in/arjunpuri26/overlay/1574531584404/single-media-viewer/?profileId=ACoAAB61nJkB4W7StLKExMHGTXbDlDd3Lvi6sgs"
              >
                <Badge color="violet" hasLink>
                  Learn Javascript Certification
                </Badge>
              </MyLink>
            </li>
            <li>
              <MyLink
                type="external"
                hasHover={false}
                href="https://www.linkedin.com/learning/certificates/b0b5c1a8e36afa9d6aaf0be2d6978fc70a5ad5939ff1afa6d51b071e38e96f5b?trk=backfilled_certificate"
              >
                <Badge color="violet" hasLink>
                  Testing with Cypress.io
                </Badge>
              </MyLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Education section */}
      <div className="mt-10">
        <h3 className="mb-6 text-2xl text-accent-electric-blue">Education</h3>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col">
            <div className="mb-2">
              <h4 className="text-xl font-semibold text-foreground">Ecole hôtelière de Lausanne</h4>
              <p className="text-accent-lime">Bachelor of Science Degree, Hospitality Administration/Management</p>
            </div>

            <p className="text-sm text-gray-400">2014 - 2018</p>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <h4 className="text-xl font-semibold text-foreground">Le Wagon</h4>
              <p className="text-accent-lime">Computer Programming</p>
            </div>

            <p className="text-sm text-gray-400">2019</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CvPage;
