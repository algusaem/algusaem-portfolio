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
    title: "BuyCarMap",
    description:
      "Second-hand car listings from several Spanish marketplaces (Wallapop, coches.net, Milanuncios), merged into one search and plotted on an interactive map. Filter by location, price, make, model, year, mileage, horsepower, fuel and transmission; browse results as a card list and a map that stay in sync.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind",
      "Radix UI",
      "Leaflet",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "NextAuth",
      "Zod",
      "React Hook Form",
      "Vitest",
      "Playwright",
    ],
    highlights: [
      "Aggregates three marketplaces without public APIs through proxy routes normalized into one shared listing shape",
      "Card list and Leaflet map views that stay in sync while filtering",
      "Resilient by design: if a source is down, the others still render",
      "Spec-first development with unit, e2e, visual and contract test suites",
    ],
    images: [
      "/projectImages/buycarmap_1.png",
      "/projectImages/buycarmap_2.png",
      "/projectImages/buycarmap_3.png",
    ],
    liveUrl: "https://buycarmap.vercel.app/",
    repoUrl: "https://github.com/algusaem/buycarmap",
  },
  {
    title: "Simplest Markdown",
    description:
      "A free, open source, local-first markdown editor for Windows that does almost nothing on purpose: open a .md file, edit it, save it. No accounts, no cloud, no sync. It reads and writes files on disk directly, so your notes stay exactly where they already are.",
    technologies: [
      "Tauri",
      "Rust",
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Radix UI",
      "Marked",
      "DOMPurify",
      "Vitest",
    ],
    highlights: [
      "Native desktop app built with Tauri 2 and a React frontend",
      "Sidebar file tree browsing the real filesystem with cross-drive navigation",
      "Multi-tab editing with unsaved-changes state and live markdown preview",
      "Drag and drop files from Explorer to open, or within the sidebar to move them on disk",
      "Light and dark themes that follow the OS automatically",
    ],
    images: [
      "/projectImages/simplestMarkdown_1.png",
      "/projectImages/simplestMarkdown_2.png",
      "/projectImages/simplestMarkdown_3.png",
      "/projectImages/simplestMarkdown_4.png",
    ],
    liveUrl: "https://algusaem.github.io/simplest-markdown/",
    repoUrl: "https://github.com/algusaem/simplest-markdown",
  },
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
];
