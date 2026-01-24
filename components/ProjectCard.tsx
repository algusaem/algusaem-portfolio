"use client";

import { useRef } from "react";
import clsx from "clsx";
import { motion, useInView, Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ImageGallery } from "./ImageGallery";
import { TechBadge } from "./TechBadge";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import {
  springTransition,
  staggerContainer,
  fadeUpItem,
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

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    amount: 0.5,
    margin: "-20% 0px -20% 0px",
  });

  const hasEntered = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const hasBeenActive = useInView(ref, {
    once: true,
    amount: 0.5,
    margin: "-20% 0px -20% 0px",
  });

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
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
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
