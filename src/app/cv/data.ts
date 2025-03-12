export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  subText?: string;
  description: string | string[];
  bulletPoints?: string[];
  link?: {
    url: string;
    text: string;
  };
};

export const experiences: Experience[] = [
  {
    company: 'Sopra Steria',
    role: 'Project Manager',
    period: 'December 2023 - November 2024 (1 year)',
    location: 'Netherlands',
    description:
      'Aside from my projects as a frontend developer, I also worked as a project manager on the rAIse program from January to October 2024.',
    bulletPoints: [
      'Led the creation of a community of AI experts focused on AI in software development.',
      'Designed and circulated a comprehensive questionnaire to over 2,000 developers, gathering insights on AI assistants and their impact on development work.',
      'Analysed and presented the collected data to inform internal decision-making and demonstrate AI benefits to clients.',
      'Led bi-monthly community meetings, sharing insights, updates, and fostering discussions on AI-driven software development.',
    ],
  },
  {
    company: 'CapaCare',
    role: 'Frontend Developer and Designer',
    period: 'May 2024 - October 2024 (6 months)',
    location: 'Netherlands',
    subText: '(via Sopra Steria and Ordina, a Sopra Steria Company)',
    description:
      'Contributed and led the development of the Capacare platform, a customisable web application for an NGO providing medical aid and training in Africa, designed to be self-sustainable for 5 years without developer intervention.',
    bulletPoints: [
      'Led the team, overseeing both technical direction and client communication',
      'Designed the website architecture and UI, ensuring a balance of functionality and aesthetics',
      'Developed a custom content management system using Sanity',
    ],
  },
  {
    company: 'Ordina',
    role: 'Frontend Developer',
    period: 'January 2021 - August 2024 (3 years 8 months)',
    location: 'Amsterdam, North Holland, Netherlands',
    description:
      'Worked on various client projects across different industries, including e-commerce, telecom, and public sector. For details on specific projects, see the rest of my CV.',
  },
  {
    company: 'ToTheRoot',
    role: 'Frontend Developer (Via Ordina)',
    period: 'November 2023 - July 2024 (9 months)',
    location: 'Netherlands',
    description:
      'Worked on the development and maintenance of TotheRoot, a technical blog platform built by Ordina with Vue and Nuxt.js, requiring me to expand my skill set into new technologies like VueJS and Nuxt. Later, in 2024, I led the redesign of the website, transitioning it from Ordina branding to Sopra Steria branding, handling both design and development aspects.',
    bulletPoints: [
      'Developed and maintained features using Vue and Nuxt.js, adapting to a new frontend ecosystem.',
      'Led the rebranding initiative in 2024, executing both design and frontend implementation.',
    ],
    link: {
      url: 'https://totheroot.io/',
      text: 'https://totheroot.io/',
    },
  },
  {
    company: 'Ministry of Health, Wellness, and Sport',
    role: 'Frontend Engineer (Via Ordina)',
    period: 'October 2022 - November 2023 (1 year 2 months)',
    location: 'Netherlands',
    description:
      'Maintained and expanded the open-source COVID-19 dashboard for the Dutch government, a critical platform serving over 250,000 daily visitors with real-time public health information.',
    bulletPoints: [
      'Built high-performance components using Next.js, TypeScript and React',
      'Created data visualizations using D3 and Visx to present complex information',
      'Led the Sanity CMS version 3 migration',
      'Mentored junior developers through coaching sessions and pair programming',
    ],
  },
  {
    company: 'VodafoneZiggo',
    role: 'Frontend Developer (Via Ordina)',
    period: 'April 2021 - June 2022 (1 year 3 months)',
    location: 'Netherlands',
    description:
      'Worked on the development of an entirely new B2B platform for Vodafone Ziggo, built on Salesforce Commerce Cloud.',
    bulletPoints: [
      'Developed modern, scalable web components using cutting-edge techniques',
      'Contributed to new feature development and performance optimisation',
      'Worked closely with product owners and designers to align technical solutions with business needs',
      'Played a key role in project completion and handover',
    ],
  },
  {
    company: 'Prenatal Moeder en Kind B.V.',
    role: 'Frontend Developer (Via Clockwork and Ordina)',
    period: 'October 2020 - May 2022 (1 year 8 months)',
    location: 'Netherlands',
    description:
      "Worked on the continuous optimisation and feature development of Prenatal's e-commerce platform, with a focus on redesigning and rebuilding the checkout flow to improve conversion rates.",
    bulletPoints: [
      'Developed and optimised UI to enhance user experience',
      'Contributed to a major checkout flow overhaul',
      'Implemented performance improvements and new features',
      'Maintained direct communication with the client, guiding technical decisions',
    ],
  },
  {
    company: 'Blokker',
    role: 'Frontend Developer (Via Ordina)',
    period: 'August 2021 - March 2022 (8 months)',
    location: 'Netherlands',
    description:
      'Led the frontend development for integrating a new delivery system on Blokker.nl, focusing on enhancing the checkout experience with the Packaly shipping method.',
    bulletPoints: [
      'Collaborated with design team on checkout UX improvements',
      'Led frontend development efforts and requirements implementation',
      'Worked closely with backend team to ensure seamless integration',
    ],
  },
  {
    company: 'Schuurman Schoenen',
    role: 'Frontend Developer (Via Clockwork)',
    period: 'April 2020 - March 2022 (1 year 11 months)',
    location: 'Netherlands',
    description:
      'Maintained and enhanced the e-commerce platform for Schuurman Schoenen, focusing on improving user experience and implementing new features.',
    bulletPoints: ['Implemented new features and improvements', 'Collaborated with the team on technical solutions'],
  },
  {
    company: 'Clockwork',
    role: 'Frontend Developer',
    period: 'March 2020 - March 2021 (1 year 1 month)',
    location: 'Amsterdam, North Holland, Netherlands',
    description:
      'Started my career as a frontend developer at Clockwork, working on various client projects including Prenatal, VodafoneZiggo (Carried over to Ordina), Schuurman Schoenen, and more.',
  },
];
