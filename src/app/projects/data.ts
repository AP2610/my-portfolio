export type ProjectType = {
  role: string;
  company: string;
  period: string;
  situation: string;
  tasks: string[];
  results: string;
  specializations: string[];
  slug: string;
  image?: string;
  githubUrl?: string;
  websiteUrl?: string;
  additionalInfo?: string;
};

// TODO: Remove period
export const projectsData: ProjectType[] = [
  {
    slug: 'capacare',
    role: 'Team Lead, Frontend Developer, Designer',
    company: 'Capacare',
    period: 'May 2024 - November 2024',
    additionalInfo:
      'Please note that the website URL has not been inlcuded as at the time of writing, the website is not live. This is because the client has yet to fill in the content into the new content management system. Additionally, the Github repository lives inside of a private organisation, therefore, I am unable to share it.',
    situation:
      "Capacare, a non-profit organisation dedicated to improving access to surgical care in underdeveloped regions of Africa, particularly Sierra Leone, required a complete renewal of their existing website. The goal was to create a modern, stable, and user-friendly platform that could serve the organisation's needs for at least the next five years without requiring ongoing developer intervention.",
    tasks: [
      'Managing and guiding the team through the entire project lifecycle',
      'Acting as the primary point of contact with the client to gather requirements, provide updates, and ensure alignment with their vision',
      'Leading the design process to create a modern, user-friendly interface, along with overseeing and contributing to the implementation',
      'Creating and assigning tasks via tickets',
      'Facilitating team meetings',
      'Ensuring project milestones are on track',
      'Implementing the website using NextJS, React, Typescript, Tailwind, NextUI, and Sanity CMS',
    ],
    results:
      "Successfully completed the initial design phase, delivering modern and intuitive designs that meet the client's needs. The project is on track to meet its goals, with the final product expected to provide a stable and maintainable website that will effectively support Capacare's mission in the years to come.",
    specializations: ['Agile', 'JavaScript', 'React', 'TailwindCSS', 'TypeScript', 'Git', 'NextJS', 'Sanity', 'Scrum'],
  },
  {
    slug: 'totheroot',
    role: 'Frontend Engineer',
    company: 'ToTheRoot',
    period: 'November 2023 - July 2024',
    image: '/project-images/totheroot.png',
    websiteUrl: 'https://totheroot.io/',
    situation:
      'Worked on the development and maintenance of ToTheRoot, a technical blog platform built by Ordina with Vue and Nuxt.js. Later, in 2024, I led the redesign of the website, transitioning it from Ordina branding to Sopra Steria branding, handling both design and development aspects.',
    tasks: [
      'Developed and maintained features using Vue and Nuxt.js, adapting to a new frontend ecosystem',
      'Led the rebranding initiative in 2024, executing both design and frontend implementation',
      'Worked with and extended functionality of the Strapi CMS',
    ],
    results:
      'Successfully delivered the rebranding project and maintained the platform, ensuring a smooth transition from Ordina to Sopra Steria branding while keeping the technical blog platform running efficiently.',
    specializations: ['Vue.js', 'Nuxt.js', 'JavaScript', 'TypeScript', 'CSS', 'SCSS', 'Strapi', 'Git', 'Scrum'],
  },
  {
    slug: 'ministry-of-health',
    role: 'Frontend Engineer',
    company: 'Ministry of Health, Wellness, and Sport',
    period: 'October 2022 - November 2023',
    image: '/project-images/coronavirus-dashboard.png',
    githubUrl: 'https://github.com/minvws/nl-covid19-data-dashboard',
    websiteUrl: 'https://web.archive.org/web/20230320185659/https://coronadashboard.government.nl/',
    additionalInfo:
      'The website is no longer live as the pandemic has subsided, this is why the wesbite URL points to a web archive link.',
    situation:
      "In 2020, as COVID-19 gripped the world, the government faced the urgent need to inform the public about the virus's evolving status. The information had to be accessible to civilians yet rooted in complex data from the National Institute for Public Health and the Environment. We managed the dashboard through some of the worst times of Covid, ensuring that the public received a fantastic user experience while observing data represented in user-friendly ways.",
    tasks: [
      'Maintain the codebase',
      'Maintain and configure a headless CMS using Sanity',
      'Migration to the latest version of Sanity CMS',
      'Find creative and intuitive ways to represent various data types so it would be understandable to all audiences',
      'Collaborate with various stakeholders to bring new features and data to the dashboard',
      'Work with designers to redesign various parts of the dashboard',
      'Build user-friendly interfaces',
      'Coaching junior colleagues which included organising pair-programming sessions and coaching calls',
    ],
    results:
      'A user-friendly, accurate dashboard that effectively communicated vital COVID-19 information to the public, fostering informed decision-making during a critical time. With my team, we successfully delivered all tasks, with releases on a 3-week basis. The website would receive more than 300,000 visitors on a daily basis. The project was and continues to be open source, so all code, including my contributions, can be found on GitHub.',
    specializations: [
      'Agile',
      'AJAX',
      'JavaScript',
      'React',
      'HTML 5',
      'CSS',
      'SCSS',
      'TypeScript',
      'Git',
      'NextJS',
      'visx',
      'Sanity',
      'Styled Components',
      'Scrum',
    ],
  },
  {
    slug: 'vodafone-ziggo',
    role: 'Frontend Engineer',
    company: 'VodafoneZiggo',
    period: 'April 2021 - June 2022',
    image: '/project-images/vodafone.png',
    websiteUrl:
      'https://www.vodafone.nl/zakelijk/mobiel/abonnement/sim-only?duration=24&together-extra-subscription-count=0&red-pro-unlimited=1',
    additionalInfo:
      'I am unable to share the link to the repository for this website as it is within a private organisation. Also, the product has changed since I worked on it 3 years ago.',
    situation:
      "A collaboration between VodafoneZiggo, Salesforce, and Ordina, the goal of the project was to build an entirely new portal for VodafoneZiggo's business customers on Salesforce Commerce Cloud.",
    tasks: [
      'Develop a cutting-edge new site from scratch using a B2C platform for B2B customers',
      'Built a complex product configurator using Web Components, allowing businesses to customise their telecom solutions with real-time pricing and validation',
      'Implemented advanced asynchronous JavaScript functionality to handle dynamic product configurations and dependencies',
      'Using the most modern approaches – Web components for the frontend, creation of a single page application, using the latest Vanilla Javascript ES6 features',
      'Build and improve the website with new features',
      'Add new configurator products to the website',
      'Enablement of a page builder similar to a drag and drop editor',
    ],
    results:
      'The website has been successfully launched with numerous versions already. This has given VodafoneZiggo an entirely new presence on the web and enables it to better serve its business customers.',
    specializations: [
      'Agile',
      'AJAX',
      'JavaScript',
      'HTML 5',
      'CSS',
      'SCSS',
      'Git',
      'Cypress',
      'Salesforce Commerce Cloud',
      'Bootstrap',
      'Web Components',
      'Scrum',
    ],
  },
  {
    slug: 'prenatal',
    role: 'Frontend Developer',
    company: 'Prenatal',
    period: 'October 2020 - June 2022',
    image: '/project-images/prenatal.png',
    websiteUrl: 'https://www.prenatal.nl',
    additionalInfo: 'I am unable to share the link to the repository for this website as it is within a private organisation.',
    situation:
      'The objective was to enhance the existing website by introducing innovative features aimed at optimising performance and elevating the overall customer experience. Upon joining the project, I worked towards a series of substantial improvement initiatives, including a comprehensive redesign of the checkout process, enabling international shipping capabilities, and the integration of diverse shipping and delivery methods, among other enhancements.',
    tasks: [
      'Developed and optimised UI to enhance user experience',
      'Contributed to a major checkout flow overhaul, improving usability and flexibility',
      'Implemented performance improvements and new features to keep the platform modern and competitive',
      'Worked in an Agile environment, participating in sprint planning, refinements, and retrospectives to ensure smooth delivery',
      'Maintained direct communication with the client, answering questions and guiding technical decisions to align with business goals',
    ],
    results:
      'The implemented features on the website, now live on Prenatal.nl, are functioning seamlessly, providing users with an enhanced and efficient online experience. Introducing new shipping methods resulted in expanded delivery capabilities to two additional countries, leading to a tangible increase in sales and broader market reach.',
    specializations: [
      'Agile',
      'AJAX',
      'JavaScript',
      'HTML 5',
      'CSS',
      'SCSS',
      'TypeScript',
      'Git',
      'Cypress',
      'Bootstrap',
      'jQuery',
      'Scrum',
    ],
  },
  {
    slug: 'blokker',
    role: 'Frontend Developer',
    company: 'Blokker',
    period: 'August 2021 - March 2022',
    image: '/project-images/blokker.png',
    websiteUrl: 'https://web.archive.org/web/20240718234101/https://www.blokker.nl/',
    additionalInfo:
      'I am unable to share the link the repository for this website as it is within a private organisation. Additionally, due to a rough time during the pandemic, Blokker had to declate bankruptcy, therefore the website URL points to a web archive link. The good news is that Blokker should be returning in 2025 as per the news.',
    situation:
      'To elevate the online customer experience, Blokker.nl sought to revolutionise its product delivery system. The project aimed to introduce Packaly as a new shipping method, necessitating a complete overhaul of the delivery process, including a redesign of user interactions during checkout.',
    tasks: [
      'Collaborated with the design team to implement enhancements to the user experience during the checkout process',
      'Took charge of developing all front-end requirements for the project',
      'Worked closely with the backend team to ensure seamless collaboration and integration',
    ],
    results:
      'Successfully delivered all front-end requirements for the project, navigating through iterative feedback and implementing numerous dynamic changes to meet constantly evolving requirements.',
    specializations: ['Agile', 'AJAX', 'JavaScript', 'HTML 5', 'CSS', 'SCSS', 'Git', 'Cypress', 'Bootstrap', 'jQuery', 'Scrum'],
  },
  {
    slug: 'schuurman-schoenen',
    role: 'Frontend Developer',
    company: 'Schuurman Schoenen',
    period: 'April 2020 - March 2022',
    image: '/project-images/schuurman-schoenen.png',
    websiteUrl: 'https://www.schuurman-schoenen.nl',
    additionalInfo: 'I am unable to share the link to the repository for this website as it is within a private organisation.',
    situation:
      'Upon joining this project, our team had already constructed the website. My role then shifted towards maintaining the site, improving performance, progressing with the development of outstanding features, and concurrently enhancing the overall functionality and user experience.',
    tasks: [
      'Collaborate with the client to ideate and implement novel features and enhancements',
      'Address frontend tickets during sprint cycles to ensure prompt issue resolution and continuous improvement',
      'Collaborate with the backend to ensure seamless integration of new features',
    ],
    results:
      "To date, the site has consistently operated smoothly, contributing to the client's receipt of several awards, recognizing it as one of the best webshops in the country.",
    specializations: ['Agile', 'AJAX', 'JavaScript', 'HTML 5', 'CSS', 'SCSS', 'Git', 'Cypress', 'Bootstrap', 'jQuery', 'Scrum'],
  },
];
