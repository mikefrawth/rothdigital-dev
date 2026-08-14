export const summary =
  "Software engineer and AWS Certified Solutions Architect with 11+ years of experience designing, building, and delivering enterprise web applications, systems integrations, and business-critical software. I've led projects from requirements through deployment, partnering directly with executives and business stakeholders — and I'm increasingly focused on putting AI tooling to work as a force multiplier across that whole lifecycle.";

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Cloud & Infrastructure",
    items: [
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
      "AWS Lambda",
      "AWS IAM",
      "Elastic Load Balancing (ELB)",
      "Auto Scaling",
      "Amazon DynamoDB",
      "Amazon SQS",
      "Amazon SNS",
    ],
  },
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "Python", "PHP", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Django", "WordPress", "Bootstrap"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Integration & APIs",
    items: [
      "REST APIs",
      "Salesforce CRM",
      "ActiveCampaign",
      "Zapier",
      "Stripe",
      "JSON",
    ],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "Linux", "Bash", "Postman", "Jira", "VS Code"],
  },
  {
    category: "Generative AI Tools",
    items: ["ChatGPT", "Claude.ai", "Google Gemini", "OpenAI Codex", "Claude Code"],
  },
];

export const experience = [
  {
    company: "MorseLife Health System",
    location: "West Palm Beach, FL",
    title: "Software Developer",
    dates: "January 2020 — Present",
    bullets: [
      "Designed, developed, and deployed seven production web platforms supporting recruiting, fundraising, marketing, and customer engagement across multiple business departments.",
      "Served as the primary technical resource for multiple departments, translating business goals into scalable software solutions through direct collaboration with executives, HR, marketing, and business stakeholders.",
      "Led projects from requirements gathering through architecture, development, testing, deployment, documentation, and ongoing production support.",
      "Designed and implemented integrations between WordPress, Salesforce CRM, ActiveCampaign, Zapier, payment platforms, and third-party REST APIs to streamline business workflows.",
      "Built responsive customer-facing applications using JavaScript, PHP, HTML5, CSS3, PostgreSQL, and REST APIs.",
      "Managed 3–5 concurrent software initiatives while maintaining ownership of architecture decisions, implementation strategy, and production delivery.",
      "Performed quality assurance, regression testing, debugging, and production validation to ensure stable and reliable software releases.",
    ],
    projects: [
      {
        name: "Recruiting Platform",
        bullets: [
          "Designed and built a custom recruiting platform integrated with Salesforce CRM to improve the candidate application experience.",
          "Collaborated with HR leadership to modernize recruiting workflows and automate candidate data synchronization.",
        ],
      },
      {
        name: "Foundation Website",
        bullets: [
          "Led redevelopment of the organization's fundraising website supporting donor engagement and digital fundraising campaigns.",
          "Integrated CRM and marketing automation systems to improve campaign management and donor communications.",
        ],
      },
    ],
  },
  {
    company: "Relli Technology",
    location: "Boca Raton, FL",
    title: "Systems Operations Assistant",
    dates: "February 2018 — March 2019",
    bullets: [
      "Managed customer orders for military vehicle components while maintaining high standards of accuracy and compliance.",
      "Maintained data integrity across legacy systems through validation and quality control.",
    ],
  },
  {
    company: "Honorlock",
    location: "Boca Raton, FL",
    title: "Quality Assurance Engineer",
    dates: "August 2015 — January 2018",
    bullets: [
      "Executed manual and automated testing across multiple web applications within Agile software development teams.",
      "Partnered closely with software engineers to identify, reproduce, prioritize, and resolve software defects before production releases.",
      "Developed expertise in software development lifecycle (SDLC), Agile methodologies, regression testing, release management, and software quality engineering.",
      "Improved software reliability through comprehensive validation, regression testing, and defect prioritization.",
    ],
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "June 2026",
  },
  {
    name: "Full Stack Web Development Certificate",
    issuer: "Ironhack",
    date: "2019",
  },
];

export const education = [
  {
    degree: "Associate of Arts – General Studies",
    school: "University of Maryland, College Park",
  },
];

export const projects = [
  {
    name: "Cloud-Native Blogging Platform",
    status: "In Progress",
    description:
      "A full-stack application built with Next.js, Django, PostgreSQL, Docker, and AWS — applying cloud architecture principles, containerization, and modern software engineering practices.",
    stack: ["Next.js", "Django", "PostgreSQL", "Docker", "AWS"],
    href: null as string | null,
  },
];
