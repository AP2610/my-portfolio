import { ProjectCard } from '@/components/project-card';
import { projectsData } from './data';
import { Section } from '@/components/section';
import { Button } from '@/components/buttons';
import { FaArrowDown } from 'react-icons/fa';

const ProjectsPage = () => {
  return (
    <Section className="mt-[var(--header-height)]" hasTopPadding hasBottomPadding>
      <div className="space-y-12">
        <header>
          <h1 className="text-4xl mb-8">My Projects</h1>

          <div className="space-y-6">
            <p className="text-lime">
              You might find some duplication here from the content on the CV page, for that, I sincerely apologise. I&apos;ve
              done my best to keep the information unique to each section.
            </p>

            <div className="flex items-center justify-between gap-4 md:w-1/4">
              <Button isLinkButton href="/cv" className="w-full">
                View my CV here
              </Button>

              <Button variant="secondary" scrollTo="featured-projects" className="w-full md:hidden">
                Projects <FaArrowDown className="ml-2" />
              </Button>
            </div>

            <p>
              What you will see below are not all the projects I have worked on in my career. I have included the ones which have
              been most impactful to me as a developer and to the users of the applications. Besides what is listed, I have worked
              on a few custom wordpress sites (fully custom theme) on both the frontend and backend early in my career. These
              sites utilised the then new Gutenberg editor, which as you may know makes heavy use of React. This was my first
              professional forray into the world of React.
            </p>

            <p>
              I have also built a couple of tools for internal use at my previous companies. Two of the most impactful ones were a
              randomizer for my team at the Coronavirus dashboard, and an XML parser for my team at VodafoneZiggo, both built with
              React. The randomizer was used to help our team pick a team member who was to lead each sprint. The XML parser was
              used to parse very large XML files from Salesforce Commerce Cloud and convert them into a format that could be used
              by our team.
            </p>

            <p>
              I do have access to the code for the randomizer and the XML parser, and will be adding them to my portfolio in due
              time. My first use of React was for a code assignment when i was interviewing with Clockwork. I built a weather
              widget. The API is no longer free, however the code lives on my github page if you would like to see it. Be kind
              though, this was my first time using React, at which point it had been only a few months since i learned how to
              code.
            </p>
          </div>
        </header>

        <Section isFullWidth id="featured-projects">
          <div className="mb-8">
            <h2 className="text-2xl mb-4">Featured Projects</h2>
            <p className="text-lime">Projects are listed in chronological order, more or less.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                slug={project.slug}
                company={project.company}
                role={project.role}
                situation={project.situation}
                image={project.image}
              />
            ))}
          </div>
        </Section>
      </div>
    </Section>
  );
};

export default ProjectsPage;
