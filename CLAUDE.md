# CLAUDE.md

## Project Overview

Personal developer portfolio website for Alex Gutierrez, Fullstack Developer.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4 with tw-animate-css
- Framer Motion for animations
- Three.js with React Three Fiber/Drei for 3D graphics
- TypeScript (strict mode)
- Radix UI primitives (dialog, navigation-menu, separator, slot)
- Utility libraries: clsx, class-variance-authority, tailwind-merge, lucide-react, react-icons

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with KH Teka fonts
├── page.tsx            # Home page
├── globals.css         # Tailwind config and CSS custom properties
├── gestioma/page.tsx   # Job detail page
└── orekait/page.tsx    # Job detail page

components/
├── ui/                 # Reusable UI primitives (button, card, badge, etc.)
├── Contact.tsx         # Contact section
├── Education.tsx       # Education section
├── Hero.tsx            # Hero section with 3D scene
├── HomeContent.tsx     # Client wrapper with loading state coordination
├── ImageGallery.tsx    # Project image carousel with zoom animations
├── ImageModal.tsx      # Fullscreen image viewer
├── JobDetail.tsx       # Job detail page layout
├── LoadingScreen.tsx   # Initial loading screen
├── MainSection.tsx     # Section wrapper component
├── Navbar.tsx          # Navigation with active section highlighting
├── Projects.tsx        # Projects showcase with scroll animations
├── Scene3D.tsx         # Three.js 3D scene with spin-in animation
├── Skills.tsx          # Skills grid
├── Typewriter.tsx      # Typewriter text effect with first phrase support
└── Work.tsx            # Work experience timeline

data/
├── clanker.ts          # Clanker robot phrases
├── education.ts        # Education data
├── projects.ts         # Projects data
├── skills.ts           # Skills categories and items
└── work.ts             # Work experience data

lib/
├── animations.ts       # Shared Framer Motion animation variants
└── utils.ts            # Utility functions (cn for className merging)
```

## Styling Architecture

Tailwind CSS 4 with shadcn/ui-inspired theming:

- CSS custom properties in `globals.css` using OKLCH color space
- Theme tokens: `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, `--muted`, `--card`, `--popover`, `--border`, `--input`, `--ring`
- Color palette: Light lavender background, Red primary (#ff4b44), Purple accent (#9b5cff)
- Custom cursors for default and pointer states
- KH Teka font family (sans and mono variants)

Use theme tokens via Tailwind classes (e.g., `bg-background`, `text-primary`, `border-border`).

## Path Aliases

- `@/*` maps to project root (e.g., `@/components/Button`, `@/data/projects`)

## Rules for Claude

### TypeScript

- Never use `any` or `unknown`
- Use `interface` instead of `type`
- Reusable typings go in `/interfaces`
- Small, non-reusable typings stay in the component
- Do not over-type trivial values

### Code Style

- Prefer readability over cleverness
- No unused variables, hooks, or imports
- Avoid speculative abstractions
- Never introduce patterns "just in case"
- Never over-engineer

### React

- Avoid unnecessary `useEffect`
- Never add effects just to sync state unless required
- Prefer `.map` over `forEach`
- Do not refactor working code unless it improves correctness or clarity

### Components

- Keep components focused on a single responsibility
- Split components for readability, especially when they go beyond 250 lines.
- Reuse components **only when it reduces duplication**, not preemptively

### Styling & Layout

- Follow the existing visual design patterns
- Respect the current styling solution (Tailwind, Chakra, CSS, etc.)
- Never use absolute positioning unless strictly necessary
- Do not add arbitrary paddings or margins
- Maintain a logical and consistent spacing system
- All web apps must be responsive
- Use `clsx` for conditional class names, not template literals or ternaries

### Animations

- Reuse shared animation variants from `lib/animations.ts`
- Available exports: `springTransition`, `springTransitionSnappy`, `staggerContainer()`, `fadeUpItem`, `scaleFadeItem`, `visibilityVariants`
- Only create component-specific variants when the animation is truly unique

### UX

- Prefer pages over modals unless a modal is clearly the better UX

### Communication

- Be direct and concise
- No emojis, filler, or motivational language
- If something is a bad idea, say it clearly

### Data Fetching

- Prefer established tools for data fetching and caching (e.g. TanStack Query)
- When such a tool is available, use it instead of manual `fetch` + `useEffect`
- Avoid duplicating API logic across components

- If not using a data-fetching library:

  - Never call `fetch` directly inside components
  - Extract API logic into reusable hooks
  - Components should only consume hooks, not manage request lifecycle

### API

- API structure: one folder per resource, one file per endpoint.
- Never create aggregated or global API files (e.g. `brands.ts`, `index.ts`).
