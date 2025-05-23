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
import { Heading } from '@/components/ui/heading';

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

        <Heading level="h2" className="md:hidden">
          Arjun <span className="text-accent-electric-blue">Puri</span>
        </Heading>

        <div className="space-y-6">
          <Heading level="h1" as="h5" weight="normal" className="md:max-w-[700px]">
            Frontend Engineer | React, Next.js, JavaScript, TypeScript, TailwindCss | Building Reliable, Engaging & User-Centric
            Web Experiences
          </Heading>

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

          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-4 font-sans">
              <li>
                <SocialIconLink platform="github" />
              </li>
              <li>
                <SocialIconLink platform="linkedin" />
              </li>
              <li>
                <SocialIconLink platform="email" />
              </li>
            </ul>

            <DownloadButton className="ml-2" />
          </div>
        </div>
      </header>

      {/* Experience section */}
      <div className="space-y-12 text-foreground">
        <div className="space-y-6">
          <Heading level="h2">Professional Experience</Heading>

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
      <Section isFullWidth animateOnScroll paddingTop="small" paddingBottom="small">
        <Heading level="h2" className="mb-6">
          Skills & Methodologies
        </Heading>

        <ul className="flex flex-wrap gap-2">
          {skillsMethodologies.map((skill) => (
            <li key={skill}>
              <Badge color="electric-blue">{skill}</Badge>
            </li>
          ))}
        </ul>
      </Section>

      {/* Languages & Certifications */}
      <Section
        isFullWidth
        animateOnScroll
        paddingTop="small"
        paddingBottom="small"
        className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6"
      >
        <div>
          <Heading level="h2" className="mb-6">
            Languages
          </Heading>

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
          <Heading level="h2" className="mb-6">
            Certifications
          </Heading>

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
      </Section>

      {/* Education section */}
      <Section isFullWidth animateOnScroll>
        <Heading level="h2" className="mb-6">
          Education
        </Heading>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col">
            <div className="mb-2">
              <Heading level="h4" weight="light">
                Ecole hôtelière de Lausanne
              </Heading>

              <p className="text-accent-lime">Bachelor of Science Degree, Hospitality Administration/Management</p>
            </div>

            <p className="text-sm text-foreground">2014 - 2018</p>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <Heading level="h4" weight="light">
                Le Wagon
              </Heading>
              <p className="text-accent-lime">Computer Programming</p>
            </div>

            <p className="text-sm text-foreground">2019</p>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default CvPage;
