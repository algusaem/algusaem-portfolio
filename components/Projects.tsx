"use client";

import { motion } from "framer-motion";
import MainSection from "./MainSection";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import { springTransition } from "@/lib/animations";

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
