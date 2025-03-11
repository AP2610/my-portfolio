import { Section } from '@/components/section';
import styles from './cv.module.css';

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
          <p className="text-lime text-lg">A comprehensive overview of my career journey</p>
        </header>

        <div className={`space-y-12 font-sans ${styles.printBody}`}>
          <div className="space-y-16">
            {/* Sopra Steria */}
            <article className={`space-y-4 ${styles.printArticle}`}>
              <header>
                <h2 className="text-2xl text-blue">Sopra Steria</h2>
                <p className="text-xl font-medium">Frontend Developer</p>
                <p className="text-lime-600">December 2023 - November 2024 (1 year) | Netherlands</p>
              </header>
              <div className="space-y-4">
                <p>
                  Aside from my projects as a frontend developer, I also worked as a project manager on the rAIse program from
                  January to October 2024.
                </p>
                <div>
                  <p className="mb-2">
                    Invited to contribute to the rAIse Program, an initiative focused on integrating AI into various business
                    verticals. My role centred on AI for software engineering, leveraging my technical expertise to build a strong
                    knowledge-sharing ecosystem.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Led the creation of a community of AI experts focused on AI in software development.</li>
                    <li>
                      Designed and circulated a comprehensive questionnaire to over 2,000 developers, gathering insights on AI
                      assistants and their impact on development work.
                    </li>
                    <li>
                      Analysed and presented the collected data to inform internal decision-making and demonstrate AI benefits to
                      clients.
                    </li>
                    <li>
                      Led bi-monthly community meetings, sharing insights, updates, and fostering discussions on AI-driven
                      software development.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* CapaCare */}
            <article className={`space-y-4 ${styles.printArticle}`}>
              <header>
                <h2 className="text-2xl text-blue">CapaCare</h2>
                <p className="text-xl font-medium">Frontend Developer and Designer</p>
                <p className="text-sm text-lime-600">(via Sopra Steria and Ordina, a Sopra Steria Company)</p>
                <p className="text-lime-600">May 2024 - October 2024 (6 months) | Netherlands</p>
              </header>
              <div className="space-y-4">
                <p>
                  Contributed and led the development of the Capacare platform, a customisable web application designed for an NGO
                  committed to providing medical aid and training in Africa.
                </p>
                <p>
                  The goal was to provide them with a platform which they could use for the next 5 years without the need for
                  further developer intervention.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Led the team for part of the project, overseeing both technical direction and client communication.</li>
                  <li>Designed the website architecture and UI, ensuring a balance of functionality and aesthetics.</li>
                  <li>Built dynamic and reusable components</li>
                  <li>Developed a custom content management system using Sanity</li>
                </ul>
                <p className="italic">(At the time of writing, the new website has yet to go live.)</p>
              </div>
            </article>

            {/* Ordina */}
            <article className={`space-y-4 ${styles.printArticle}`}>
              <header>
                <h2 className="text-2xl text-blue">Ordina</h2>
                <p className="text-xl font-medium">Frontend Developer</p>
                <p className="text-lime-600">
                  January 2021 - August 2024 (3 years 8 months) | Amsterdam, North Holland, Netherlands
                </p>
              </header>
              <div className="space-y-4">
                <p>
                  Worked on various client projects across different industries, including e-commerce, telecom, and public sector.
                  For details on specific projects, see the experience section of my profile.
                </p>
              </div>
            </article>

            {/* ToTheRoot */}
            <article className={`space-y-4 ${styles.printArticle}`}>
              <header>
                <h2 className="text-2xl text-blue">ToTheRoot</h2>
                <p className="text-xl font-medium">Frontend Developer (Via Ordina)</p>
                <p className="text-lime-600">November 2023 - July 2024 (9 months) | Netherlands</p>
              </header>
              <div className="space-y-4">
                <p>
                  Worked on the development and maintenance of TotheRoot, a technical blog platform built by Ordina with Vue and
                  Nuxt.js, requiring me to expand my skill set into new technologies. Later, in 2024, I led the redesign of the
                  website, transitioning it from Ordina branding to Sopra Steria branding, handling both design and development
                  aspects.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed and maintained features using Vue and Nuxt.js, adapting to a new frontend ecosystem.</li>
                  <li>Led the rebranding initiative in 2024, executing both design and frontend implementation.</li>
                </ul>
                <a
                  href="https://totheroot.io/"
                  className={`text-blue hover:underline ${styles.printLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://totheroot.io/
                </a>
              </div>
            </article>

            {/* Ministerie van VWS */}
            <article className={`space-y-4 ${styles.printArticle}`}>
              <header>
                <h2 className="text-2xl text-blue">Ministerie van Volksgezondheid, Welzijn en Sport</h2>
                <p className="text-xl font-medium">Frontend Engineer (Via Ordina)</p>
                <p className="text-lime-600">October 2022 - November 2023 (1 year 2 months) | Netherlands</p>
              </header>
              <div className="space-y-4">
                <p>
                  Maintained, optimized, and expanded the open-source COVID-19 dashboard for the Dutch government, ensuring
                  accessibility, performance, and up-to-date data representation. The platform saw over 250,000 daily visitors at
                  its peak, making it a crucial tool for public health information.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Utilised Next.js, TypeScript and React to develop a highly performant, static site capable of handling vast
                    amounts of real-time data.
                  </li>
                  <li>
                    Built responsive, styled components, adhering to a custom design system while incorporating bespoke UI
                    elements.
                  </li>
                  <li>
                    Applied accessibility best practices and semantic standards, ensuring inclusivity and usability across diverse
                    user groups.
                  </li>
                  <li>
                    Created interactive and intuitive data visualisations using D3 and Visx, making complex information accessible
                    to a wide audience.
                  </li>
                  <li>Led aspects of the project handover, ensuring a smooth transition for continued development.</li>
                  <li>
                    Mentored junior colleagues through weekly coaching sessions and pair programming on feature development,
                    fostering team growth and knowledge sharing.
                  </li>
                  <li>Led the migration from Sanity CMS version 2 to version 3.</li>
                </ul>
                <p className="font-medium">
                  Outcome: Helped build and maintain a reliable and widely used public information platform, providing clear and
                  accessible COVID-19 data to the Dutch population.
                </p>
              </div>
            </article>

            {/* VodafoneZiggo */}
            <article className={`space-y-4 ${styles.printArticle}`}>
              <header>
                <h2 className="text-2xl text-blue">VodafoneZiggo</h2>
                <p className="text-xl font-medium">Frontend Developer (Via Ordina)</p>
                <p className="text-lime-600">April 2021 - June 2022 (1 year 3 months) | Netherlands</p>
              </header>
              <div className="space-y-4">
                <p>
                  Worked on the development of an entirely new B2B platform for Vodafone Ziggo, built on Salesforce Commerce
                  Cloud. Initially brought in as a temporary replacement, my role evolved into a long-term, key development
                  position due to the value I brought to the project.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Developed modern, scalable web components, leveraging cutting-edge techniques not previously used in my
                    Salesforce Commerce Cloud projects.
                  </li>
                  <li>
                    Contributed to new feature development and performance optimisation, ensuring a seamless B2B user experience.
                  </li>
                  <li>
                    Worked closely with product owners and multiple departments within Vodafone to align technical solutions with
                    business needs.
                  </li>
                  <li>
                    Grew significantly as a developer, working under the guidance of a highly skilled mentor who pushed me beyond
                    my comfort zone.
                  </li>
                  <li>
                    Worked on the project until completion and played an integral role in handing it over to the next company for
                    continued development.
                  </li>
                </ul>
                <p className="font-medium">
                  Outcome: Helped build a modern, efficient, and scalable B2B platform, improving Vodafone Ziggo&apos;s digital
                  presence and user experience.
                </p>
              </div>
            </article>

            {/* Prenatal */}
            <article className={`space-y-4 ${styles.printArticle}`}>
              <header>
                <h2 className="text-2xl text-blue">Prenatal Moeder en Kind B.V.</h2>
                <p className="text-xl font-medium">Frontend Developer (Via Clockwork and Ordina)</p>
                <p className="text-lime-600">October 2020 - May 2022 (1 year 8 months) | Netherlands</p>
              </header>
              <div className="space-y-4">
                <p>
                  Worked on the continuous optimisation and feature development of Prenatal&apos;s e-commerce platform, ensuring a
                  more interactive and seamless user experience. Played a key role in redesigning and rebuilding the checkout
                  flow, integrating new shipping and payment methods to improve conversion rates. This was a project I worked on
                  while at Clockwork and Ordina. I worked on multiple projects simultaneously.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed and optimised UI to enhance user experience.</li>
                  <li>Contributed to a major checkout flow overhaul, improving usability and flexibility.</li>
                  <li>Implemented performance improvements and new features to keep the platform modern and competitive.</li>
                  <li>
                    Worked in an Agile environment, participating in sprint planning, refinements, and retrospectives to ensure
                    smooth delivery.
                  </li>
                  <li>
                    Maintained direct communication with the client, answering questions and guiding technical decisions to align
                    with business goals.
                  </li>
                </ul>
                <p className="font-medium">
                  Outcome: Helped improve site interactivity and streamline the checkout process, leading to a better user
                  experience and increased efficiency for customers.
                </p>
              </div>
            </article>

            {/* Clockwork */}
            <article className={`space-y-4 ${styles.printArticle}`}>
              <header>
                <h2 className="text-2xl text-blue">Clockwork</h2>
                <p className="text-xl font-medium">Frontend Developer</p>
                <p className="text-lime-600">March 2020 - March 2021 (1 year 1 month) | Amsterdam, North Holland, Netherlands</p>
              </header>
            </article>
          </div>
        </div>
      </Section>
    </>
  );
}
