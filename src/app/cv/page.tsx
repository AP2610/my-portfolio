import { DownloadButton } from '@/components/features/cv/download-button';
import { Experience } from '@/components/features/experience';
import { Section } from '@/components/layout/section';
import { Badge } from '@/components/ui/badge';
import { Headshot } from '@/components/ui/headshot';
import { MyLink } from '@/components/ui/my-link';
import { SocialIconLink } from '@/components/ui/social-icon-link';
import type { Metadata } from 'next';
import { HiOutlineGlobeAsiaAustralia } from 'react-icons/hi2';
import { IoLocationOutline } from 'react-icons/io5';
import { experiences, skillsMethodologies } from './data';

export const metadata: Metadata = {
  title: "Arjun Puri's CV",
  description:
    'Frontend Engineer with expertise in JavaScript, TypeScript, React, Next.js and Tailwind CSS. View my professional experience, skills, and qualifications.',
};

const CvPage = () => {
  return (
    <Section paddingTop="medium" paddingBottom="medium" className="relative space-y-10">
      <header className="flex flex-col items-center gap-8 md:block">
        <Headshot size="medium" className="md:hidden" />

        <h1 className="text-4xl text-foreground md:hidden">
          Arjun <span className="text-accent-electric-blue">Puri</span>
        </h1>

        <div className="space-y-6">
          <p className="text-lg text-foreground md:max-w-[700px]">
            Frontend Engineer | React, Next.js, JavaScript, TypeScript, TailwindCss | Building Reliable, Engaging & User-Centric
            Web Experiences
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-2 text-accent-lime">
              <IoLocationOutline />
              <span>Netherlands</span>
            </p>

            <p className="flex items-center gap-2 text-accent-lime">
              <HiOutlineGlobeAsiaAustralia />
              <span>Indian (Dutch Permanent Residency)</span>
            </p>
          </div>

          <div className="flex items-center gap-4 font-sans text-sm font-medium">
            <SocialIconLink platform="github" />
            <SocialIconLink platform="linkedin" />
            <SocialIconLink platform="email" />

            <DownloadButton className="ml-2" />
          </div>
        </div>
      </header>

      {/* Experience section */}
      <div className="space-y-12 text-foreground">
        <div className="space-y-6">
          <h2 className="text-3xl">Professional Experience</h2>

          <p>
            My CV contains consolidated and condensed information about my experiences. If you'd like a bit more detail on the
            projects I've worked on, including the situation, tasks, results, and technical details check out the{' '}
            <MyLink type="internal" href="/projects">
              projects section
            </MyLink>{' '}
            of my website.
          </p>
        </div>

        <div className="space-y-10 font-sans md:space-y-12">
          {experiences.map((experience, index) => (
            <Experience key={index} {...experience} />
          ))}
        </div>
      </div>

      {/* Skills & Methodologies */}
      <Section isFullWidth paddingTop="small">
        <h4 className="mb-6 text-2xl text-foreground">Skills & Methodologies</h4>

        <ul className="flex flex-wrap gap-2">
          {skillsMethodologies.map((skill) => (
            <li key={skill}>
              <Badge color="electric-blue-700">{skill}</Badge>
            </li>
          ))}
        </ul>
      </Section>

      {/* Languages & Certifications */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-6 text-2xl text-foreground">Languages</h4>

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
          <h4 className="mb-6 text-2xl text-foreground">Certifications</h4>

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
      <Section isFullWidth>
        <h3 className="mb-6 text-2xl text-foreground">Education</h3>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col">
            <div className="mb-2">
              <h4 className="text-xl font-light text-foreground">Ecole hôtelière de Lausanne</h4>
              <p className="text-accent-lime">Bachelor of Science Degree, Hospitality Administration/Management</p>
            </div>

            <p className="text-sm text-gray-400">2014 - 2018</p>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <h4 className="text-xl font-light text-foreground">Le Wagon</h4>
              <p className="text-accent-lime">Computer Programming</p>
            </div>

            <p className="text-sm text-gray-400">2019</p>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default CvPage;
