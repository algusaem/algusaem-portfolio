"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { motion, useInView, Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import MainSection from "./MainSection";
import { ImageGallery } from "./ImageGallery";
import { projects, Project } from "@/data/projects";
import { getSkillByName } from "@/data/skills";
import { Button } from "@/components/ui/button";
import {
  springTransition,
  staggerContainer,
  fadeUpItem,
  scaleFadeItem,
  visibilityVariants,
} from "@/lib/animations";

const cornerVariants: Variants = {
  idle: {
    scaleX: 0,
    scaleY: 0,
    opacity: 0,
  },
  hover: {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [hasBeenActive, setHasBeenActive] = useState(false);

  const isInView = useInView(ref, {
    amount: 0.5,
    margin: "-20% 0px -20% 0px",
  });

  const hasEntered = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  // Track first time the project becomes active (not blurred)
  if (isInView && !hasBeenActive) {
    setHasBeenActive(true);
  }

  const opacity = hasEntered ? (isInView ? 1 : 0.25) : 0;

  return (
    <motion.article
      ref={ref}
      className={clsx(
        "flex flex-col gap-6 lg:gap-10 lg:items-center",
        index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity, y: hasEntered ? 0 : 60 }}
      transition={{
        delay: hasEntered ? 0 : index * 0.15,
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
    >
      {/* Image Gallery */}
      <motion.div
        className="relative lg:w-[55%] shrink-0 group"
        initial="idle"
        whileHover="hover"
      >
        {/* Corner accents */}
        <motion.span
          className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-md origin-top-left"
          variants={cornerVariants}
        />
        <motion.span
          className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-md origin-top-right"
          variants={cornerVariants}
        />
        <motion.span
          className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-md origin-bottom-left"
          variants={cornerVariants}
        />
        <motion.span
          className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-md origin-bottom-right"
          variants={cornerVariants}
        />
        {/* Content */}
        <div className="relative rounded-lg border-2 border-border bg-muted overflow-hidden">
          <div className="relative aspect-16/10">
            <ImageGallery
              images={project.images}
              alt={`${project.title} screenshot`}
            />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative flex-1"
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate={hasBeenActive ? "visible" : "hidden"}
      >
        <motion.div
          className={clsx(
            "hidden lg:block absolute top-0 bottom-0 w-1 rounded-full bg-primary origin-center",
            index % 2 === 1 ? "-right-6" : "-left-6"
          )}
          variants={visibilityVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={springTransition}
        />
        <motion.h3
          className="text-xl font-bold text-primary"
          variants={fadeUpItem}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="mt-2 text-foreground/80"
          variants={fadeUpItem}
        >
          {project.description}
        </motion.p>

        <motion.div className="mt-4" variants={fadeUpItem}>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Technologies
          </p>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={staggerContainer(0.05)}
          >
            {project.technologies.map((tech) => {
              const skill = getSkillByName(tech);
              const colorClass =
                skill?.color ?? "bg-muted text-muted-foreground";
              return (
                <motion.span
                  key={tech}
                  variants={scaleFadeItem}
                  className={clsx(
                    colorClass,
                    "font-bold rounded-full px-3 py-1.5 text-sm leading-none inline-flex items-center gap-2 [&>svg]:size-4 [&>svg]:block"
                  )}
                >
                  {skill?.icon && <skill.icon />}
                  {tech}
                </motion.span>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div className="mt-4 flex gap-2" variants={fadeUpItem}>
          {project.liveUrl && (
            <Button size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
                <ExternalLink className="size-4" />
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
                <Github className="size-4" />
              </a>
            </Button>
          )}
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <MainSection id="projects" className="max-w-7xl">
      <motion.h2
        className="text-3xl font-bold tracking-tight text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={springTransition}
      >
        My Projects
      </motion.h2>
      <motion.p
        className="mt-2 text-foreground/80"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ ...springTransition, delay: 0.1 }}
      >
        Things I&apos;ve built
      </motion.p>

      <div className="mt-8 flex flex-col gap-16 lg:gap-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </MainSection>
  );
}
