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
    slug: "orekait",
    company: "Oreka IT",
    role: "Fullstack Developer | Technical Owner",
    period: "May 2025 - Present",
    description:
      "Technical definition and execution of web products, including architectural decisions, technology selection, end-to-end development, and production deployment.",
    details: [
      "Full technical ownership of web products: architecture, stack, development and deployment.",
      "Daily code review and quality control before production releases.",
      "Technical decision-making and support for complex team issues.",
      "Management of deployments, infrastructure, and CI/CD pipelines for the department.",
      "Technical time estimation and development planning.",
      "Design and development from scratch of the water meter reading application for the Vitoria-Gasteiz city council.",
      "Complete redesign and modernization of an Industry 4.0 MES application.",
      "Full rewrite of a multimedia project management web platform.",
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
    current: true,
  },
  {
    slug: "gestioma",
    company: "GESTIOMA",
    role: "Fullstack Developer",
    period: "December 2022 - May 2025",
    description:
      "Development of technical web platforms for engineering and 3D modeling, contributing to fullstack architecture, data management, and application deployment.",
    details: [
      "Fullstack development of technical web platforms for engineering and 3D modeling.",
      "Key participation in the 3D model viewer, the company's main product.",
      "Implementation of advanced features: 360° images, GeoJSON maps, traffic cameras.",
      "Development of the internal 3D model manager (users, permissions, data, and uploads).",
      "Complete redesign of the viewer's 2.0 interface and refactoring of over 40,000 lines of code.",
      "Design and implementation of CI/CD and Docker deployments in production.",
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
