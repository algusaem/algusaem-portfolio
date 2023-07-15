import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaAngular,
  FaBootstrap,
  FaSass,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiChakraui,
  SiMui,
  SiTailwindcss,
  SiRedux,
  SiMysql,
} from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { GrDocumentMissing } from "react-icons/gr";
import { TbBrandThreejs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

import { IconType } from "react-icons";

export interface Technology {
  name: string;
  icon: IconType;
  link: string;
}

export const technologiesList: Technology[] = [
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
  {
    name: "JavaScript",
    icon: FaJsSquare,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
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
    name: "Angular",
    icon: FaAngular,
    link: "https://angular.io/",
  },
  {
    name: "Emotion",
    icon: GrDocumentMissing,
    link: "https://emotion.sh/docs/introduction",
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    link: "https://styled-components.com/",
  },
  {
    name: "Chakra UI",
    icon: SiChakraui,
    link: "https://chakra-ui.com/",
  },
  {
    name: "Material UI",
    icon: SiMui,
    link: "https://mui.com/",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    link: "https://getbootstrap.com/",
  },
  {
    name: "SASS",
    icon: FaSass,
    link: "https://sass-lang.com/",
  },
  {
    name: "Zustand",
    icon: GrDocumentMissing,
    link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
  {
    name: "Redux",
    icon: SiRedux,
    link: "https://redux.js.org/",
  },
  {
    name: "Three.js",
    icon: TbBrandThreejs,
    link: "https://threejs.org/",
  },
  {
    name: "Node",
    icon: FaNodeJs,
    link: "https://nodejs.org/en",
  },
  {
    name: "Java",
    icon: FaJava,
    link: "https://www.java.com/es/",
  },
  {
    name: "Python",
    icon: FaPython,
    link: "https://www.python.org/",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    link: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    icon: BiLogoMongodb,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Git",
    icon: BsGit,
    link: "https://git-scm.com/",
  },
];
