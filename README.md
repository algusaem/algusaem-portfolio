# Alex Gutierrez - Portfolio

Personal developer portfolio showcasing my work as a Fullstack Developer.

**Live site:** [algusaem.dev](https://algusaem.dev) (or your deployed URL)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, Radix UI primitives
- **Animations:** Framer Motion
- **3D Graphics:** Three.js with React Three Fiber and Drei
- **Language:** TypeScript (strict mode)
- **Fonts:** KH Teka (custom local fonts)

## Getting Started

**Requirements:** Node.js 22.x

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts and metadata
├── page.tsx            # Home page
└── globals.css         # Tailwind config and CSS custom properties

components/
├── ui/                 # Reusable UI primitives (button, card, badge, etc.)
├── Hero.tsx            # Hero section with 3D scene
├── Scene3D.tsx         # Three.js 3D scene
├── Navbar.tsx          # Navigation with section highlighting
├── Projects.tsx        # Projects showcase with scroll animations
├── Work.tsx            # Work experience timeline
├── Skills.tsx          # Skills grid
├── Education.tsx       # Education section
├── Contact.tsx         # Contact section
├── HomeContent.tsx     # Client wrapper with loading coordination
├── LoadingScreen.tsx   # Initial loading screen
├── ImageGallery.tsx    # Project image carousel
├── ImageModal.tsx      # Fullscreen image viewer
└── Typewriter.tsx      # Typewriter text effect

data/
├── projects.ts         # Projects data
├── work.ts             # Work experience data
├── skills.ts           # Skills categories
├── education.ts        # Education data
└── clanker.ts          # Robot phrases for 3D scene

lib/
├── animations.ts       # Shared Framer Motion variants
└── utils.ts            # Utility functions
```

## Features

- Responsive layout for all screen sizes
- Interactive 3D scene with animated robot
- Smooth scroll animations and transitions
- Project showcase with image galleries
- Custom theming with OKLCH color space

## License

MIT
