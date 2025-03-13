import { Section } from '@/components/section';
import { Experience } from '@/components/experience';
import { experiences } from './data';
import { DownloadButton } from '@/components/download-button';
import Link from 'next/link';
import { MyImage } from '@/components/image';
import { Badge } from '@/components/badge';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SKILLS_PRINT = [
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
  'Figma',
  'Accessibility',
  'Agile',
  'Pair Programming',
  'AI Pair Programming',
  'Coaching',
];

const SKILLS_FULL = [
  ...SKILLS_PRINT,
  'Wordpress',
  'Strapi CMS',
  'Remote Work',
  'Nuxt',
  'VueJS',
  'NPM',
  'Github Actions',
  'Prettier',
  'EsLint',
];

// TODO: Go through the text here for any issues and things that dont fit properly
// TODO: Extract page parts to components
// Not the cleanest code right now, but i was in a rush. I will refactor, promise.
export default function CV() {
  return (
    <Section
      className="mx-auto mt-[var(--header-height)] print:m-0 print:bg-white print:text-black print:w-full print:p-0"
      hasTopPadding
      hasBottomPadding
    >
      <Section
        isFullWidth
        className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row print:flex-row print:break-inside-avoid"
      >
        {/* Intro with image and skills in print */}
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:items-start print:items-start">
          <MyImage
            src="/cv/headshot.png"
            alt="Arjun Puri"
            priority
            containerClasses="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-lime print:border-lime-700"
          />

          {/* TODO: IMPORTANT Make into component this is for print only */}
          <div className="hidden print:block">
            <p className="mb-2 font-semibold text-blue print:text-blue-600">Skills & Methodologies</p>
            <p className="mb-2 text-[12px] text-blue print:text-blue-600">
              *For a comprehensive list, please see the CV on my website.
            </p>

            <ul className="flex w-60 print:text-[14px] flex-wrap gap-2">
              {SKILLS_PRINT.map((skill) => (
                <li key={skill}>
                  <Badge color="blue-700">{skill}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 md:ml-8">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-4xl text-blue print:text-blue-600">Arjun Puri</h1>

            <DownloadButton className="print:hidden" />
          </div>

          <p className="font-semibold text-lime print:text-lime-700">
            Frontend Engineer | JavaScript, TypeScript, React, Next.js, Tailwind | Building Reliable, Engaging & User-Centric Web
            Experiences
          </p>

          <p className="text-lime print:text-lime-700">
            Location - Netherlands | Nationality - Indian (Dutch Permanent Residency)
          </p>

          {/* About me - only for print */}
          <div className="hidden space-y-2 print:block">
            <p>
              I&apos;m a frontend developer passionate about building interactive, accessible, and user-friendly applications.
              Trained as a full-stack developer, I gravitated toward the frontend for its direct user impact. I thrive on turning
              ideas into functional, beautiful web experiences and value clear, honest communication. For the past five years,
              I&apos;ve worked remotely and excel at remote collaboration. In the past year, I&apos;ve integrated AI in my
              workflow and use it to boost my productivity.
            </p>
            <p>
              I&apos;ve worked in e-commerce, telecom, logistics, and the public sector, including the Corona Dashboard, which had
              over 250K daily visitors. With a service mindset shaped by a hospitality education, I bring strong interpersonal
              skills. Having lived across five countries-Australia, India, Kenya, Switzerland, and the Netherlands-I excel at
              navigating cultural dynamics and integrating into diverse teams. My strengths include coaching, technical analysis,
              and strategic planning, often leading meetings and guiding projects.
            </p>
            <p>
              Outside of work, you&apos;ll find me cooking, tackling DIY projects, gaming, or reading—always learning,
              experimenting, and building. Quality matters, but being adaptable is just as important.
            </p>
          </div>

          {/* TODO: Add correct links */}
          <div className="flex gap-4 font-sans text-sm font-medium print:hidden">
            <Link
              href="https://github.com/AP2610"
              className="text-blue-600 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/arjunpuri26/"
              className="text-blue-600 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="mailto:corned-tippets-5g@icloud.com"
              className="text-blue-600 hover:text-blue-400 transition-colors"
              title="Send Email - If the email looks weird, thats because i would rather not share my personal email online. This email address forwards emails to my personal email."
            >
              <FaEnvelope size={24} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Hidden in print */}
      <header className="mb-8 print:hidden">
        <h2 className="mb-4 text-4xl">Professional Experience</h2>

        <p className="mb-4 text-lime">A comprehensive overview of my career journey</p>

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

      {/* For print only - Certifications and languages */}
      <div className="hidden print:grid print:mt-0 grid-cols-1 print:gap-8 print:grid-cols-2">
        <div>
          <h4 className="mb-4 text-2xl text-blue print:text-black">Certifications</h4>

          <ul className="flex flex-wrap gap-2 font-sans">
            <li>
              <Badge color="violet">Le Wagon Fullstack Bootcamp</Badge>
            </li>
            <li>
              <Badge color="violet">Testing with Cypress.io</Badge>
            </li>
            <li>
              <Badge color="violet">Complete Javascript Certification</Badge>
            </li>
            <li>
              <Badge color="violet">React Tutorial</Badge>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-2xl text-blue print:text-black">Languages</h4>

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
      </div>

      {/* Experience section for both print and web */}
      <div className="space-y-12 font-sans print:space-y-6">
        <h3 className="hidden text-blue-600 print:block print:text-2xl page-break">Professional Experience</h3>

        <div className="space-y-10 md:space-y-12 print:space-y-10">
          {experiences.map((experience, index) => (
            <Experience key={index} {...experience} className="print:break-inside-avoid" />
          ))}
        </div>
      </div>

      {/* TODO: IMPORTANT Make into component this is for non print */}
      <div className="mt-10 print:hidden">
        <h4 className="mb-6 text-2xl text-blue print:text-blue-600">Skills & Methodologies</h4>

        <ul className="flex flex-wrap gap-2">
          {SKILLS_FULL.map((skill) => (
            <li key={skill}>
              <Badge color="blue-700">{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>

      {/* Languages & Certifications - non print */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 print:grid-cols-2 print:hidden">
        <div>
          <h4 className="mb-6 text-2xl text-blue print:text-black">Languages</h4>

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
          <h4 className="mb-6 text-2xl text-blue print:text-black">Certifications</h4>

          <ul className="flex flex-wrap gap-2 font-sans">
            <li>
              <Badge color="violet">Le Wagon Fullstack Bootcamp</Badge>
            </li>
            <li>
              <Badge color="violet">Testing with Cypress.io</Badge>
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
