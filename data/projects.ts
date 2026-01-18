export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Layera",
    description:
      "A perfume layering platform that allows users to build their fragrance collection and discover personalized layering combinations. Features AI-powered recommendations for creating unique scent profiles tailored to different occasions, weather conditions, and personal preferences.",
    technologies: [
      "Google Gemini",
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind",
      "DaisyUI",
      "clsx",
      "React Hook Form",
      "NextAuth",
      "Sonner",
      "Lucide",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Cloudinary",
      "Vercel",
    ],
    highlights: [
      "AI-powered fragrance recommendations using Google Generative AI",
      "User authentication with NextAuth 5",
      "Cloud image storage with Cloudinary",
      "Personalized layering suggestions based on occasion and weather",
    ],
    images: [
      "/projectImages/layera_1.png",
      "/projectImages/layera_2.png",
      "/projectImages/layera_3.png",
      "/projectImages/layera_4.png",
      "/projectImages/layera_5.png",
    ],
    liveUrl: "https://layera-fragrances.vercel.app/",
    repoUrl: "https://github.com/algusaem/layera",
  },
  {
    title: "GameQueue",
    description:
      "Information platform showcasing video games releasing this month, featuring images, store links, and detailed info about selected titles. Uses the rawg.io API to fetch comprehensive game data and multimedia.",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "Next.js",
      "React.js",
      "Tailwind",
      "Shadcn",
      "TanStack Query",
    ],
    highlights: [
      "Integration with rawg.io API for real-time game data",
      "Monthly release calendar with filtering options",
      "Detailed game pages with screenshots and store links",
      "Responsive grid layout with smooth animations",
    ],
    images: [
      "/projectImages/gameQueue_1.png",
      "/projectImages/gameQueue_2.png",
    ],
    liveUrl: "https://game-queue.vercel.app/",
    repoUrl: "https://github.com/algusaem/GameQueue",
  },
  {
    title: "Lift Monitor",
    description:
      "Web application designed for tracking and recording strength training sessions, allowing users to store lifted weights in a structured way for each workout. Includes login and registration system with JWT-based authentication.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "React.js",
      "Mantine",
      "PostCSS",
      "PostgreSQL",
    ],
    highlights: [
      "JWT-based authentication for secure user sessions",
      "Workout history tracking with progress visualization",
      "Custom exercise creation and management",
      "Analytics dashboard with Recharts",
    ],
    images: [
      "/projectImages/liftMonitor1.png",
      "/projectImages/liftMonitor2.png",
      "/projectImages/liftMonitor3.png",
    ],
    liveUrl: "https://lift-monitor.vercel.app/",
    repoUrl: "https://github.com/algusaem/Lift-Monitor",
  },
  {
    title: "Task Manager",
    description:
      "A task management application that allows users to create, organize, and delete tasks within customizable lists. Includes a simple yet fully functional authentication system.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux",
      "Tailwind",
      "Tailwind Material",
      "Node.js",
      "MongoDB",
    ],
    highlights: [
      "Drag-and-drop task organization",
      "Customizable task lists and categories",
      "Full CRUD operations with MongoDB backend",
      "User authentication with session management",
    ],
    images: [
      "/projectImages/taskManager1.png",
      "/projectImages/taskManager2.png",
    ],
    liveUrl: "https://task-manager-mu-neon.vercel.app/",
    repoUrl: "https://github.com/algusaem/task-manager",
  },
];
