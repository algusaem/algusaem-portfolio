export interface Job {
  slug: string;
  company: string;
  role: string;
  period: string;
  description: string;
  details: string[];
  technologies: string[];
  banner: string;
  current?: boolean;
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export const jobs: Job[] = [
  {
    slug: "babooni",
    company: "Babooni Technologies",
    role: "Full-Stack Developer",
    period: "February 2026 - Present",
    description:
      "Full-stack development of web platforms as part of a cross-functional team, covering frontend, backend, and database across the full delivery cycle — from technical design to production.",
    details: [
      "Designed and developed full-stack web applications, from database and API architecture to frontend implementation.",
      "Built distributed backend systems using GraphQL gateways and REST microservices backed by PostgreSQL.",
      "Developed modern, responsive frontends with Next.js, React, and TypeScript.",
      "Designed relational database schemas, managed versioned SQL migrations, and optimized complex queries.",
      "Implemented authentication, role-based access control (RBAC), and real-time communication with WebSockets.",
      "Established end-to-end testing and quality assurance using Playwright and Vitest.",
      "Owned features independently from technical design through deployment to production.",
      "Designed and built from scratch a comprehensive CRM/ERP platform for a telecommunications company, managing customer relationships, sales, contracts, product inventory, employee time tracking, and sales targets.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Next.js",
      "React.js",
      "Redux",
      "Tailwind",
      "GraphQL",
      "Apollo GraphQL",
      "Node.js",
      "WebSockets",
      "PostgreSQL",
      "SQL",
      "Playwright",
      "Vitest",
      "CI/CD",
      "Figma",
      "AI",
      "Git",
      "Agile Methodologies",
    ],
    banner: "/babooni-banner.svg",
    current: true,
  },
  {
    slug: "orekait",
    company: "Oreka IT",
    role: "Full-Stack Developer | Technical Owner",
    period: "May 2025 - February 2026",
    description:
      "Technical definition and execution of web products, including architectural decisions, technology selection, end-to-end development, and production deployment.",
    details: [
      "Owned the full technical lifecycle of web products, including architecture, technology stack, development, and deployment.",
      "Reviewed code daily and ensured quality control before production releases.",
      "Provided technical leadership and support for complex engineering challenges.",
      "Managed deployments, infrastructure, and CI/CD pipelines for the department.",
      "Estimated technical effort and planned development work.",
      "Designed and developed from scratch a water meter reading application for Vitoria-Gasteiz City Council.",
      "Completely redesigned and modernized an Industry 4.0 MES application.",
      "Rebuilt a multimedia project management platform from the ground up.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Next.js",
      "React.js",
      "Tailwind",
      "Material-UI",
      "Chakra UI",
      "Shadcn",
      "Zustand",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "Git",
      "Docker",
      "CI/CD",
      "Figma",
      "Leaflet",
      "Agile Methodologies",
    ],
    banner: "/oreka-banner.png",
  },
  {
    slug: "gestioma",
    company: "GESTIOMA",
    role: "Full-Stack Developer",
    period: "December 2022 - May 2025",
    description:
      "Development of technical web platforms for engineering and 3D modeling, contributing to full-stack architecture, data management, and application deployment.",
    details: [
      "Developed full-stack technical web platforms for engineering and 3D modeling.",
      "Contributed significantly to the 3D model viewer, the company's main product.",
      "Implemented advanced features including 360° images, GeoJSON maps, and traffic cameras.",
      "Developed the internal 3D model manager for users, permissions, data, and uploads.",
      "Redesigned the viewer's 2.0 interface and refactored over 40,000 lines of code.",
      "Designed and implemented Docker-based deployments and CI/CD pipelines for production.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "HTML",
      "CSS",
      "Next.js",
      "React.js",
      "Tailwind",
      "Material-UI",
      "Chakra UI",
      "EmotionJS",
      "styled-components",
      "Redux",
      "Zustand",
      "Node.js",
      "MySQL",
      "MongoDB",
      "Git",
      "Docker",
      "CI/CD",
      "Leaflet",
      "Three.js",
      "Agile Methodologies",
    ],
    banner: "/gestioma-banner.png",
  },
];
