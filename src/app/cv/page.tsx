import { Badge } from '@/components/badge';
import { DownloadButton } from '@/components/download-button';
import { Experience } from '@/components/experience';
import { ExternalLink } from '@/components/external-link';
import { MyImage } from '@/components/image';
import { Section } from '@/components/section';
import { SocialIcon } from '@/components/social-icon';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import { experiences } from './data';

export const metadata: Metadata = {
  title: "Arjun Puri's CV",
  description:
    'Frontend Engineer with expertise in JavaScript, TypeScript, React, Next.js and Tailwind CSS. View my professional experience, skills, and qualifications.',
};

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
  'Monorepo',
  'Figma',
  'Accessibility',
  'Agile',
  'Scrum',
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
  'Micro Animations',
  'Husky',
  'Web Components',
];

// TODO: Go through the text here for any issues and things that dont fit properly
// TODO: Extract page parts to components
// Not the cleanest code right now and the file is way too big for my liking, but i was in a rush. I will refactor, promise.
const CvPage = () => {
  return (
    <Section
      className="mt-[var(--header-height)] print:m-0 print:w-full print:max-w-none print:bg-white print:p-0 print:text-black"
      hasTopPadding
      hasBottomPadding
    >
      <Section
        isFullWidth
        className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row print:break-inside-avoid print:flex-row print:gap-8"
      >
        {/* Intro with image and skills in print, image is for web, skills only for print */}
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:items-start print:items-start">
          <MyImage
            src="/cv/headshot.webp"
            alt="Arjun Puri"
            priority
            sizes="50vw"
            containerClasses="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent-lime hover:scale-105 transition-transform duration-300 print:border-lime-700 print:hover:scale-100 print:transition-none print:duration-0 print:hover:scale-100"
          />

          {/* TODO: IMPORTANT Make into component this is for print only */}
          {/* Skills for print only */}
          <div className="hidden print:block">
            <p className="mb-2 font-semibold text-blue-600">Skills & Methodologies</p>
            <p className="mb-6 text-[10px] text-blue-600">*For a comprehensive list, please see the CV page on my website.</p>

            <ul className="flex w-64 flex-wrap gap-2">
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
            <h1 className="text-4xl text-accent-blue print:text-blue-600">Arjun Puri</h1>

            <DownloadButton className="print:hidden" />
          </div>

          <p className="font-bold text-accent-lime print:text-lime-700">
            Frontend Engineer | JavaScript, TypeScript, React, Next.js, Tailwind | Building Reliable, Engaging & User-Centric Web
            Experiences
          </p>

          <p className="font-bold text-accent-lime print:text-lime-700">
            Location - Netherlands | Nationality - Indian (Dutch Permanent Residency)
          </p>

          {/* About me - only for print */}
          <div className="hidden space-y-2 hyphens-auto text-justify print:mt-6 print:block">
            <p>
              I'm a frontend engineer specialising in React, Next.js and Typescript with strong fundamentals in JavaScript, HTML,
              and CSS. I'm passionate about building interactive, accessible, and user-friendly applications. Trained as a
              full-stack developer, I gravitated towards the frontend for its direct user impact. I thrive on turning ideas into
              functional, beautiful web experiences and value clear, honest communication. For the past five years, I've worked
              remotely and honed my skills in remote collaboration. In the past year, I've integrated AI into my workflow and use
              it to boost my productivity.
            </p>
            <p>
              Having lived across five countries-Australia, India, Kenya, Switzerland, and the Netherlands-I excel at navigating
              cultural dynamics and integrating into diverse teams.
            </p>
            <p>
              I've worked in e-commerce, telecom, logistics, and the public sector, including the Corona Dashboard, which had over
              250K daily visitors.
            </p>
            <p>
              With a service mindset shaped by a hospitality education, I bring strong interpersonal skills and have a keen eye
              for detail. My strengths extend not only to coding but also include coaching juniors, technical analysis, strategic
              planning, giving presentations, and effective communication.
            </p>
            <p>
              Outside of work, you'll find me cooking, tackling DIY projects, gaming, or reading—always learning, experimenting,
              and building.
            </p>
          </div>

          {/* TODO: Check if mailto works in production */}
          <div className="flex gap-4 font-sans text-sm font-medium print:hidden">
            <SocialIcon platform="github" />
            <SocialIcon platform="linkedin" />
            <SocialIcon platform="email" />
          </div>
        </div>
      </Section>

      {/* Hidden in print, for web only */}
      <header className="mb-8 text-foreground print:hidden">
        <h2 className="mb-4 text-4xl">Professional Experience</h2>

        <p>You can also hit the button in the top right corner to download my CV as a PDF.</p>

        <p className="mt-2">
          Please keep in mind, my CV contains consolidated and condensed information about my experiences. Should you wish to gain
          a deeper understanding of the projects I have worked on, including the situation, tasks, results, technical details, and
          specializations, I invite you to explore the{' '}
          <Link href="/projects" className="text-accent-blue hover:text-blue-600 hover:underline">
            projects section
          </Link>{' '}
          of this website.
        </p>
      </header>

      {/* For print only - Certifications and languages */}
      <div className="hidden grid-cols-1 print:mt-0 print:grid print:grid-cols-2 print:gap-10">
        <div>
          <h4 className="mb-4 text-2xl text-blue print:text-black">Certifications</h4>

          <ul className="flex flex-wrap gap-4 font-sans">
            <li>
              <Badge color="violet">Le Wagon Fullstack Bootcamp</Badge>
            </li>
            <li>
              <Badge color="violet">React Tutorial</Badge>
            </li>
            <li>
              <Badge color="violet">Complete Javascript</Badge>
            </li>
            <li>
              <Badge color="violet">Learn Javascript</Badge>
            </li>
            <li>
              <Badge color="violet">Testing with Cypress.io</Badge>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-2xl text-blue print:text-black">Languages</h4>

          <ul className="flex flex-wrap gap-4 font-sans">
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
        <h3 className="page-break hidden print:block print:text-2xl print:text-blue-600">Professional Experience</h3>

        <div className="space-y-10 md:space-y-12 print:space-y-10">
          {experiences.map((experience, index) => (
            <Experience key={index} {...experience} className="print:break-inside-avoid" />
          ))}
        </div>
      </div>

      {/* TODO: Skills for web only! IMPORTANT Make into component this is for non print */}
      <div className="mt-10 print:hidden">
        <h4 className="mb-6 text-2xl text-accent-blue print:text-blue-600">Skills & Methodologies</h4>

        <ul className="flex flex-wrap gap-2">
          {SKILLS_FULL.map((skill) => (
            <li key={skill}>
              <Badge color="blue-700">{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>

      {/* Languages & Certifications - Web only */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 print:hidden print:grid-cols-2">
        <div>
          <h4 className="mb-6 text-2xl text-accent-blue print:text-black">Languages</h4>

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
          <h4 className="mb-6 text-2xl text-accent-blue print:text-black">Certifications</h4>

          <ul className="flex flex-wrap gap-2 font-sans">
            <li>
              <ExternalLink
                noHover
                href="https://www.linkedin.com/in/arjunpuri26/overlay/1574531685954/single-media-viewer/?profileId=ACoAAB61nJkB4W7StLKExMHGTXbDlDd3Lvi6sgs"
              >
                <Badge color="violet" hasLink>
                  Le Wagon Fullstack Bootcamp
                </Badge>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                noHover
                href="https://www.linkedin.com/in/arjunpuri26/overlay/1635498506856/single-media-viewer/?profileId=ACoAAB61nJkB4W7StLKExMHGTXbDlDd3Lvi6sgs"
              >
                <Badge color="violet" hasLink>
                  React Tutorial
                </Badge>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink noHover href="https://www.udemy.com/certificate/UC-KEQX9LVH/">
                <Badge color="violet" hasLink>
                  Complete Javascript Certification
                </Badge>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                noHover
                href="https://www.linkedin.com/in/arjunpuri26/overlay/1574531584404/single-media-viewer/?profileId=ACoAAB61nJkB4W7StLKExMHGTXbDlDd3Lvi6sgs"
              >
                <Badge color="violet" hasLink>
                  Learn Javascript Certification
                </Badge>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                noHover
                href="https://www.linkedin.com/learning/certificates/b0b5c1a8e36afa9d6aaf0be2d6978fc70a5ad5939ff1afa6d51b071e38e96f5b?trk=backfilled_certificate"
              >
                <Badge color="violet" hasLink>
                  Testing with Cypress.io
                </Badge>
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Education section for both print and web */}
      <div className="mt-10">
        <h3 className="mb-6 text-2xl text-accent-blue print:text-blue-600">Education</h3>

        <div className="flex flex-col gap-8 md:flex-row print:gap-6">
          <div className="flex flex-col print:break-inside-avoid">
            <div className="mb-2">
              <h4 className="text-xl font-semibold text-foreground print:text-black">Ecole hôtelière de Lausanne</h4>
              <p className="text-accent-lime print:text-lime-700">
                Bachelor of Science Degree, Hospitality Administration/Management
              </p>
            </div>

            <p className="text-sm text-gray-400 print:text-gray-600">2014 - 2018</p>
          </div>

          <div className="flex flex-col print:break-inside-avoid">
            <div className="mb-2">
              <h4 className="text-xl font-semibold text-foreground print:text-black">Le Wagon</h4>
              <p className="text-accent-lime print:text-lime-700">Computer Programming</p>
            </div>

            <p className="text-sm text-gray-400 print:text-gray-600">2019</p>
          </div>
        </div>
      </div>

      {/* Useful Links - Print only */}
      <div className="mt-10 hidden print:block">
        <h3 className="mb-6 text-2xl text-blue-600">Useful Links</h3>

        <div className="flex flex-col gap-2 font-sans">
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-blue-600" size={16} />
            <span className="font-semibold">LinkedIn:</span>
            <span className="text-blue-600">linkedin.com/in/arjunpuri26</span>
          </div>

          <div className="flex items-center gap-2">
            <FaGithub className="text-blue-600" size={16} />
            <span className="font-semibold">GitHub:</span>
            <span className="text-blue-600">github.com/AP2610</span>
          </div>

          <div className="flex items-center gap-2">
            <FaGlobe className="text-blue-600" size={16} />
            <span className="font-semibold">Portfolio:</span>
            <span className="text-blue-600">itsap.dev</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CvPage;
