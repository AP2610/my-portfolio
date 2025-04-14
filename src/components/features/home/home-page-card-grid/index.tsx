import { Button } from '@/components/ui/button';
import { MyLink } from '@/components/ui/my-link';
import { SocialIconLink } from '@/components/ui/social-icon-link';
import { FaArrowDown } from 'react-icons/fa';
import { HomepageCard } from '../homepage-card';
import { SpecialisationsIconList } from '../specialisations-icon-list';

export const HomepageCardGrid = () => {
  return (
    <div className="grid h-full auto-rows-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-12">
      <HomepageCard className="lg:col-span-3">
        <h2 className="mb-4 text-3xl font-light">5 years</h2>
        <p className="text-card-body-text-color">Of frontend development experience</p>
      </HomepageCard>

      <HomepageCard className="lg:col-span-3">
        <h2 className="mb-4 text-3xl font-light">10+ Projects</h2>
        <p className="text-card-body-text-color">Delivered Successfully</p>
      </HomepageCard>

      <HomepageCard className="gap-4 sm:col-span-2 lg:col-span-6 lg:row-span-2" textAlign="left" alignItems="start">
        <h2 className="text-3xl font-light">About me</h2>

        <p className="flex-grow text-card-body-text-color">
          I'm a frontend engineer with a passion for creating beautiful, interactive, and accessible applications that prioritise
          the user experience. While trained as a full-stack developer, I gravitated towards the frontend for its direct impact on
          users. I thrive on transforming ideas into functional, visually appealing web applications and believe in clear, honest
          communication—no beating around the bush, just constructive and transparent discussions.
        </p>

        <Button variant="secondary" scrollTo="about" className="ml-auto">
          Read More <FaArrowDown className="bounce-vertical ml-2" />
        </Button>
      </HomepageCard>

      <HomepageCard className="lg:col-span-6" textAlign="left" alignItems="start">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-light">Tech</h2>

          <SpecialisationsIconList />
        </div>

        <p className="text-card-body-text-color">Next.js, React, JavaScript, TypeScript, Tailwind CSS, Sanity CMS</p>
      </HomepageCard>

      <HomepageCard className="lg:col-span-4 xl:col-span-3">
        <MyLink type="internal" href="/cv" showIcon className="text-3xl font-light">
          CV
        </MyLink>
      </HomepageCard>

      <HomepageCard className="lg:col-span-4 xl:col-span-3">
        <MyLink type="internal" href="/projects" showIcon className="text-3xl font-light">
          Projects
        </MyLink>
      </HomepageCard>

      <HomepageCard className="gap-4 lg:col-span-4 xl:col-span-6" shouldWrap flexDirection="row">
        <p className="text-2xl font-light">Get in touch</p>

        <div className="flex gap-4">
          <SocialIconLink platform="linkedin" size={32} />
          <SocialIconLink platform="github" size={32} />
          <SocialIconLink platform="email" size={32} />
        </div>
      </HomepageCard>
    </div>
  );
};
