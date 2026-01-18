import {
  Code2,
  Layers,
  Palette,
  Database,
  Server,
  Wrench,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMantine,
  SiShadcnui,
  SiChakraui,
  SiMui,
  SiStyledcomponents,
  SiPostcss,
  SiRedux,
  SiNodedotjs,
  SiPrisma,
  SiMysql,
  SiMariadb,
  SiMongodb,
  SiGit,
  SiDocker,
  SiVercel,
  SiFigma,
  SiLeaflet,
  SiThreedotjs,
  SiGooglegemini,
  SiDaisyui,
  SiReacthookform,
  SiCloudinary,
  SiReactquery,
  SiAuth0,
} from "react-icons/si";
import { RiNotification3Line } from "react-icons/ri";
import { VscGear } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";

interface Skill {
  name: string;
  icon?: IconType;
}

interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
  color: string;
}

export interface SkillWithColor {
  name: string;
  icon?: IconType;
  color: string;
}

export function getSkillByName(name: string): SkillWithColor | undefined {
  for (const category of skillCategories) {
    const skill = category.skills.find(
      (s) => s.name.toLowerCase() === name.toLowerCase()
    );
    if (skill) {
      return { ...skill, color: category.color };
    }
  }
  return undefined;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: Code2,
    color: "bg-amber-200/70 text-amber-900",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: FaDatabase },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
    ],
  },
  {
    name: "Frontend Frameworks",
    icon: Layers,
    color: "bg-sky-200/70 text-sky-900",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: SiReact },
    ],
  },
  {
    name: "Styling & UI",
    icon: Palette,
    color: "bg-pink-200/70 text-pink-900",
    skills: [
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Mantine", icon: SiMantine },
      { name: "Shadcn", icon: SiShadcnui },
      { name: "DaisyUI", icon: SiDaisyui },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Material-UI", icon: SiMui },
      { name: "Tailwind Material" },
      { name: "EmotionJS" },
      { name: "styled-components", icon: SiStyledcomponents },
      { name: "PostCSS", icon: SiPostcss },
    ],
  },
  {
    name: "State & Data",
    icon: Database,
    color: "bg-violet-200/70 text-violet-900",
    skills: [
      { name: "Redux", icon: SiRedux },
      { name: "Zustand" },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "React Hook Form", icon: SiReacthookform },
    ],
  },
  {
    name: "Backend & APIs",
    icon: Server,
    color: "bg-emerald-200/70 text-emerald-900",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Prisma", icon: SiPrisma },
      { name: "NextAuth", icon: SiAuth0 },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Neon" },
      { name: "MySQL", icon: SiMysql },
      { name: "MariaDB", icon: SiMariadb },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    name: "Tools & Services",
    icon: Wrench,
    color: "bg-orange-200/70 text-orange-900",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "CI/CD", icon: VscGear },
      { name: "Figma", icon: SiFigma },
      { name: "Leaflet", icon: SiLeaflet },
    ],
  },
  {
    name: "Other",
    icon: Sparkles,
    color: "bg-rose-200/70 text-rose-900",
    skills: [
      { name: "Three.js", icon: SiThreedotjs },
      { name: "Google Gemini", icon: SiGooglegemini },
      { name: "Lucide" },
      { name: "Sonner", icon: RiNotification3Line },
      { name: "clsx" },
      { name: "Agile Methodologies" },
    ],
  },
];
