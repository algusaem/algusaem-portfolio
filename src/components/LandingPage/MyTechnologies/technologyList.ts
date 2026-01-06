import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiChakraui,
  SiTailwindcss,
  SiRedux,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiMariadb,
  SiDaisyui,
} from "react-icons/si";
import { GrDocumentMissing } from "react-icons/gr";
import { TbBrandMantine, TbBrandThreejs } from "react-icons/tb";
import { IconType } from "react-icons";

export interface Technology {
  name: string;
  icon: IconType;
  link: string;
}

export interface TechnologyCategory {
  category: string;
  technologies: Technology[];
}

// Frontend Technologies
const frontendTechnologies: Technology[] = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: FaReact,
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    link: "https://nextjs.org/",
  },
  {
    name: "Redux",
    icon: SiRedux,
    link: "https://redux.js.org/",
  },
  {
    name: "Zustand",
    icon: GrDocumentMissing,
    link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Chakra UI",
    icon: SiChakraui,
    link: "https://chakra-ui.com/",
  },
  {
    name: "ShadCN",
    icon: GrDocumentMissing,
    link: "https://ui.shadcn.com/",
  },
  {
    name: "DaisyUI",
    icon: SiDaisyui,
    link: "https://daisyui.com/",
  },
  {
    name: "Mantine UI",
    icon: TbBrandMantine,
    link: "https://mantine.dev/",
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    link: "https://styled-components.com/",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: FaCss3,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

// Backend Technologies
const backendTechnologies: Technology[] = [
  {
    name: "Node.js",
    icon: FaNodeJs,
    link: "https://nodejs.org/en",
  },
  {
    name: "Python",
    icon: FaPython,
    link: "https://www.python.org/",
  },
];

// Database Technologies
const databaseTechnologies: Technology[] = [
  {
    name: "MySQL",
    icon: SiMysql,
    link: "https://www.mysql.com/",
  },
  {
    name: "MariaDB",
    icon: SiMariadb,
    link: "https://mariadb.org/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Prisma ORM",
    icon: SiPrisma,
    link: "https://www.prisma.io/",
  },
];

// DevOps & CI/CD
const devopsTechnologies: Technology[] = [
  {
    name: "Docker",
    icon: FaDocker,
    link: "https://www.docker.com/",
  },
];

// 3D, Maps & Visualization
const visualizationTechnologies: Technology[] = [
  {
    name: "Three.js",
    icon: TbBrandThreejs,
    link: "https://threejs.org/",
  },
];

// Tools & Platforms
const toolsTechnologies: Technology[] = [
  {
    name: "Git",
    icon: FaGitAlt,
    link: "https://git-scm.com/",
  },
];

// Categorized list for display
export const categorizedTechnologies: TechnologyCategory[] = [
  { category: "Frontend", technologies: frontendTechnologies },
  { category: "Backend", technologies: backendTechnologies },
  { category: "Databases", technologies: databaseTechnologies },
  { category: "DevOps & CI/CD", technologies: devopsTechnologies },
  {
    category: "3D, Maps & Visualization",
    technologies: visualizationTechnologies,
  },
  { category: "Tools & Platforms", technologies: toolsTechnologies },
];

// Flat list for backward compatibility (if needed)
export const technologiesList: Technology[] = [
  ...frontendTechnologies,
  ...backendTechnologies,
  ...databaseTechnologies,
  ...devopsTechnologies,
  ...visualizationTechnologies,
  ...toolsTechnologies,
];
