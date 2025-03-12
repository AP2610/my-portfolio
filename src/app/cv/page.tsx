import { Section } from '@/components/section';
import { Experience } from '@/components/experience';
import { experiences } from './data';
import { DownloadButton } from '@/components/download-button';
import Link from 'next/link';
import { MyImage } from '@/components/image';
import { Badge } from '@/components/badge';

const SKILLS_PRINT = [
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'SCSS',
  'Tailwind CSS',
  'Bootstrap',
  'NextJS',
  'Cypress',
  'Test Automation',
  'REST',
  'CI/CD',
  'Git',
  'Sanity CMS',
  'Figma',
  'Accessibility',
  'Agile',
  'Pair Programming',
  'AI Pair Programming',
  'Coaching',
];

const SKILLS_FULL = [...SKILLS_PRINT, 'Wordpress', 'Strapi CMS', 'Remote Work', 'Nuxt', 'VueJS', 'NPM'];

// TODO: Go through the text here for any issues and things that dont fit properly
export default function CV() {
  return (
    <Section
      className="mx-auto mt-[var(--header-height)] print:w-[21cm] print:max-w-[21cm] print:h-auto print:px-10 print:py-16 print:text-black print:bg-white"
      hasTopPadding
      hasBottomPadding
    >
      {/* Intro with image */}
      <Section isFullWidth className="flex flex-col md:flex-row gap-4 items-start justify-between print:break-inside-avoid mb-8">
        <div className="flex flex-col items-center md:items-start print:items-start w-full md:w-auto gap-4">
          <MyImage
            src="/cv/headshot.png"
            alt="Arjun Puri"
            containerClasses="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-lime print:border-lime-700"
          />

          {/* TODO: IMPORTANT Make into component this is for print only */}
          <div className="hidden print:block">
            <p className="font-semibold text-blue print:text-blue-600 mb-2">Skills & Methodologies</p>
            <p className="text-[12px] text-blue print:text-blue-600 mb-2">
              *For a comprehensive list, please see the CV on my website.
            </p>

            <ul className="flex flex-wrap gap-2 w-60">
              {SKILLS_PRINT.map((skill) => (
                <li key={skill}>
                  <Badge color="blue-700">{skill}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 md:ml-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl text-blue print:text-blue-600">Arjun Puri</h1>

            <DownloadButton className="print:hidden" />
          </div>

          <p className="text-lime font-semibold print:text-lime-700">
            Frontend Engineer | JavaScript, TypeScript, React, Next.js, Tailwind | Building Reliable, Engaging & User-Centric Web
            Experiences
          </p>

          <p className="text-lime print:text-lime-700">
            Location - Netherlands | Nationality - Indian (Dutch Permanent Residency)
          </p>

          {/* About me - only for print */}
          <div className="space-y-2 hidden print:block">
            <p>
              I&apos;m a frontend developer who loves building interactive, accessible, and user-friendly applications. While I
              trained as a full-stack developer, I naturally gravitated toward the frontend because of its direct impact on users.
              I enjoy turning ideas into beautiful, functional web experiences and believe in clear, honest communication—no
              fluff, just real conversations. I&apos;ve worked remote for the last 5 years, and continue to love collaborating
              with my team.
            </p>
            <p>
              I&apos;ve worked on e-commerce, telecom, logistics, media, and public sector projects, including the Corona
              Dashboard, which had over 250K daily visitors. My background in hospitality and tech marketing has shaped my ability
              to adapt, collaborate, and thrive in diverse teams—a skill sharpened by living in Australia, India, Kenya,
              Switzerland, and the Netherlands.
            </p>
            <p>
              Outside of work, you&apos;ll find me cooking, tackling DIY projects, gaming, or reading—always learning,
              experimenting, and building. Quality matters, but being adaptable is just as important.
            </p>
          </div>

          {/* TODO: Add icons for links */}
          {/* TODO: Add correct links */}
          <div className="flex gap-4 text-sm font-sans font-medium">
            <Link href="https://github.com/yourusername" className="text-blue-600 hover:underline">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/yourusername" className="text-blue-600 hover:underline">
              LinkedIn
            </Link>
            <Link href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              Email
            </Link>
          </div>
        </div>
      </Section>

      <header className="print:hidden mb-8">
        <h2 className="text-4xl mb-4">Professional Experience</h2>

        <p className="text-lime mb-4">A comprehensive overview of my career journey</p>

        <p>You can also hit the button in the top right corner to download my CV as a PDF.</p>

        <p className="mt-2">
          Please keep in mind, my CV contains consolidated and condensed information about my experiences. Should you wish to gain
          a deeper understanding of the projects i have worked on, including the situation, tasks, results, technical details. and
          specializations, I invite you to explore the{' '}
          <Link href="/projects" className="text-blue hover:text-blue-600 hover:underline">
            projects section
          </Link>{' '}
          of this website.
        </p>
      </header>

      <div className="space-y-12 print:space-y-10 font-sans">
        <h3 className="hidden print:block print:text-3xl text-blue-600">My Experience</h3>

        <div className="space-y-8 md:space-y-16 print:space-y-10">
          {experiences.map((experience, index) => (
            <Experience key={index} {...experience} className="print:break-inside-avoid" />
          ))}
        </div>
      </div>

      {/* TODO: IMPORTANT Make into component this is for non print */}
      <div className="print:hidden mt-8">
        <h4 className="text-2xl text-blue print:text-blue-600 mb-6">Skills & Methodologies</h4>

        <ul className="flex flex-wrap gap-2">
          {SKILLS_FULL.map((skill) => (
            <li key={skill}>
              <Badge color="blue-700">{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>

      {/* Languages & Certifications */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2">
        <div>
          <h4 className="text-2xl text-blue print:text-black mb-4">Languages</h4>

          <ul className="flex flex-col space-y-4 font-sans">
            <li>
              <Badge color="violet">English (Native or Bilingual)</Badge>
            </li>
            <li>
              <Badge color="violet">French</Badge>
            </li>
            <li>
              <Badge color="violet">Hindi (Native or Bilingual)</Badge>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl text-blue print:text-black mb-4">Certifications</h4>

          <ul className="flex flex-col space-y-4 font-sans">
            <li>
              <Badge color="violet">Le Wagon Full Stack Bootcamp</Badge>
            </li>
            <li>
              <Badge color="violet">End-to-End JavaScript Testing with Cypress.io</Badge>
            </li>
            <li>
              <Badge color="violet">Complete Javascript Certification</Badge>
            </li>
            <li>
              <Badge color="violet">React Tutorial</Badge>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
