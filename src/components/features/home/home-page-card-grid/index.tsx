import { Button } from '@/components/ui/button';
import { MyLink } from '@/components/ui/my-link';
import { SocialIconLink } from '@/components/ui/social-icon-link';
import { FaArrowDown } from 'react-icons/fa';
import { SpecialisationsIconList } from '../specialisations-icon-list';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';

export const HomepageCardGrid = () => {
  return (
    <div className="grid h-full auto-rows-auto grid-cols-2 gap-6 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-12">
      <Card className="lg:col-span-3">
        <Heading level="h2" weight="light" className="mb-4">
          5 years
        </Heading>

        <p className="text-card-body-text-color">Of frontend experience</p>
      </Card>

      <Card className="lg:col-span-3">
        <Heading level="h2" weight="light" className="mb-4">
          10+ Projects
        </Heading>

        <p className="text-card-body-text-color">Delivered Successfully</p>
      </Card>

      <Card className="col-span-2 gap-4 lg:col-span-6 lg:row-span-2" textAlign="left" alignItems="start">
        <Heading level="h2" weight="light">
          About me
        </Heading>

        <p className="flex-grow text-card-body-text-color">
          I'm a frontend engineer with 5 years of experience. I create beautiful, interactive and accessible applications that
          prioritise UX. While trained as a full-stack developer, I leaned into frontend because of its direct user impact. With a
          user-centric mindset, I'm always looking for ways to improve the experience.
        </p>

        <Button variant="secondary" scrollTo="about" className="ml-auto">
          Read More <FaArrowDown className="bounce-vertical ml-2" />
        </Button>
      </Card>

      <Card className="col-span-2 lg:col-span-6" textAlign="left" alignItems="start">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <Heading level="h2" weight="light">
            Tech
          </Heading>

          <SpecialisationsIconList />
        </div>

        <p className="text-card-body-text-color">Next.js, React, JavaScript, TypeScript, Tailwind CSS, Sanity CMS</p>
      </Card>

      <Card className="lg:col-span-4 xl:col-span-3">
        <MyLink type="internal" href="/cv" showIcon className="text-2xl font-light md:text-3xl">
          CV
        </MyLink>
      </Card>

      <Card className="lg:col-span-4 xl:col-span-3">
        <MyLink type="internal" href="/projects" showIcon className="text-2xl font-light md:text-3xl">
          Projects
        </MyLink>
      </Card>

      <Card className="col-span-2 gap-4 lg:col-span-4 xl:col-span-6" shouldWrap flexDirection="row">
        <Heading level="h2" weight="light">
          Get in touch
        </Heading>

        <ul className="flex gap-4">
          <li>
            <SocialIconLink platform="linkedin" size={32} />
          </li>
          <li>
            <SocialIconLink platform="github" size={32} />
          </li>
          <li>
            <SocialIconLink platform="email" size={32} />
          </li>
        </ul>
      </Card>
    </div>
  );
};
