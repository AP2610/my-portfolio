export type Project = {
  name: string;
  description?: string;
  bulletPoints?: string[];
};

export type ExperienceType = {
  company: string;
  role: string;
  period: string;
  location?: string;
  subText?: string;
  description: string;
  projects?: Project[];
  additionalProjects?: string[];
  carriedOverProjects?: string[];
};

export const experiences: ExperienceType[] = [
  {
    company: 'Sopra Steria',
    role: 'Frontend Engineer',
    period: 'December 2023 - March 2025 (1 year 4 months)',
    location: 'Netherlands',
    subText: '(Previously Ordina, which merged with Sopra Steria in late 2023)',
    description:
      'Continued working on existing projects while taking on new responsibilities in AI enablement and team leadership.',
    projects: [
      {
        name: 'Project - 1: CapaCare (NGO Platform – Next.js, Typescript, Tailwind, Sanity CMS)',
        description:
          'The goal was to provide them with a platform they could use for at least 5 years with no developer involvement.',
        bulletPoints: [
          'Led the development of a long-term web platform for CapaCare, an NGO providing medical training in Africa',
          'Responsible for architecture, visual design (Figma), and frontend delivery using Next.js, Sanity CMS, Tailwind and NextUI (HeroUI)',
          'Developed a scalable, editor-friendly CMS using Sanity',
          'Reviewed code, coached teammates, and led technical discussions around maintainability',
          'Served as primary client contact: ran demos, gathered feedback, and aligned on goals throughout',
          'Built CI/CD pipelines using Github actions to deploy on Vercel',
        ],
      },
      {
        name: 'Project - 2: ToTheRoot (Developer Blog – Vue, Strapi CMS, Typescript)',
        description: "Extended and maintained ToTheRoot, Sopra Steria's internal developer blog platform.",
        bulletPoints: [
          'Worked with Vue and Nuxt to implement layout and design improvements',
          "Led the rebranding to reflect Sopra Steria's brand identity, created the new designs and implemented the frontend changes",
          'Extended and configured Strapi CMS to streamline content creation',
        ],
      },
      {
        name: 'Project - 3: rAIse Program (AI Enablement – Internal)',
        description: "Contributed 1–2 days/week to Sopra Steria's internal initiative for scaling AI tools across teams.",
        bulletPoints: [
          'Helped onboard over 2,000 developers to GitHub Copilot',
          'Designed usage tracking strategies to identify workflows where Github Copilot had the most impact',
          'Analysed and presented the collected data to inform internal decision-making and demonstrate AI benefits to clients',
          'Hosted bi-weekly workshops with AI experts in the company to build networks and help with knowledge sharing',
        ],
      },
    ],
  },
  {
    company: 'Ordina',
    role: 'Frontend Engineer',
    period: 'January 2021 - August 2024 (3 years 8 months)',
    location: 'Amsterdam, North Holland, Netherlands',
    subText: '(Merged with Sopra Steria in 2023/2024)',
    description:
      'Worked as a frontend engineer on an array of projects: e-commerce, telecom & open-source public sector platforms. I tackled complex frontend implementations, integrated APIs, working with designers and backenders across stacks to deliver scalable, reliable solutions. After Ordina fully absorbed Clockwork (where I started), I continued working on carried over projects, while branching into new domains and technologies.',
    carriedOverProjects: ['Prenatal', 'Schuurman Schoenen'],
    projects: [
      {
        name: 'Project - 1: VodafoneZiggo (Salesforce Commerce Cloud)',
        bulletPoints: [
          'Built a product configurator using Web Components, allowing customers to customise telecom bundles with real-time pricing and validation',
          'Created an advanced address validation component to check bandwidth availability per postcode',
          'Developed custom HTML emails',
          'Worked with modern ES6+ standards and Web Components to implement a single-page application',
          'Implemented a drag-and-drop-style page builder',
          'Led project handover',
        ],
      },
      {
        name: 'Project - 2: Corona Dashboard (Dutch Ministry of Health, Next.js, Typescript, Styled Components)',
        description:
          "Worked on the Dutch government's open-source COVID-19 dashboard, a high-traffic public health platform used by millions during the pandemic. The project required reliability, accessibility, and accurate data presentation under constant scrutiny.",
        bulletPoints: [
          'Built and maintained features using Next.js, focused on performance, stability, and clarity',
          'Developed data visualisations using Visx to communicate various data points with graphs and charts',
          "Migrated the CMS from Sanity v2 to v3, preserving all content structures with minimal disruption to content managers' workflow",
          'Coached juniors to help them grow within the domains of React, Next.js, CSS and web fundamentals',
          'Worked closely with analysts, designers, and backenders to ensure the platform remained clear, and usable at all times',
          'Handled sensitive data and urgent updates, balancing speed and precision under time-sensitive conditions',
          'Led project handover',
        ],
      },
    ],
  },
  {
    company: 'Clockwork',
    role: 'Frontend Engineer',
    subText: '(Absorbed by parent entity, Ordina, in early 2021)',
    period: 'March 2020 - March 2021 (1 year 1 month)',
    location: 'Amsterdam, North Holland, Netherlands',
    description:
      'Worked as a frontend engineer on multiple projects (few simultaneously) spanning custom WordPress builds and large-scale e-commerce platforms on Salesforce Commerce Cloud. This role marked my first professional experience using React.',
    projects: [
      {
        name: 'First Projects: WordPress Projects (Bindinc & Paazl)',
        bulletPoints: [
          'Built two fully custom WordPress websites using the Gutenberg block editor (React-based)',
          'Developed a bespoke theme from scratch — no reliance on theme libraries — tailored to advanced visual designs',
          'Customised and extended Gutenberg blocks to support unique content and layout needs',
          'Used PHP and SCSS to create modular, responsive layouts with strong accessibility and editor usability in mind',
        ],
      },
      {
        name: 'Project - 2: Prenatal (E-commerce, Salesforce Commerce Cloud)',
        bulletPoints: [
          'Integrated the PostNL API for dynamic address validation and completion',
          'Worked on a product configurator feature for complex item customisation',
          'Developed advanced form validation logic to handle edge cases in the checkout flow',
          'Built reusable UI components in vanilla JavaScript within SFCC templates',
          'Contributed to the complete redesign of the checkout process, improving flow and reliability',
        ],
      },
      {
        name: 'Project - 3: Schuurman Schoenen (E-commerce, Salesforce Commerce Cloud)',
        bulletPoints: [
          'Built a custom JavaScript countdown component for campaign promotions, designed for reuse by non-developers',
          'Developed advanced UI layouts including masonry-style product grids for seasonal campaigns',
          'Worked on dynamic components that pulled and displayed promotion-specific content',
          'Contributed to email redesign work, improving consistency and readability across devices',
        ],
      },
    ],
    additionalProjects: ['Denham E-commerce store', 'Sole E-commerce Store', 'LaDress E-commerce Store'],
  },
];

export const skillsMethodologies: string[] = [
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
