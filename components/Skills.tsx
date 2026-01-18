"use client";

import { useRef } from "react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import MainSection from "./MainSection";
import { skillCategories } from "@/data/skills";
import {
  staggerContainer,
  fadeUpItem,
  scaleFadeItem,
} from "@/lib/animations";

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <MainSection id="skills">
      <motion.div
        ref={ref}
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl font-bold tracking-tight text-foreground"
          variants={fadeUpItem}
        >
          Skills
        </motion.h2>
        <motion.p className="mt-2 text-foreground/80" variants={fadeUpItem}>
          Technologies and tools I work with
        </motion.p>

        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-2"
          variants={staggerContainer(0.15)}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-5"
              variants={fadeUpItem}
            >
              <div className="absolute bottom-2 right-2 text-primary/5">
                <category.icon size={80} strokeWidth={1} />
              </div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <category.icon size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>
                <motion.div
                  className="mt-3 flex flex-wrap gap-2"
                  variants={staggerContainer(0.03)}
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      variants={scaleFadeItem}
                      className={clsx(
                        category.color,
                        "font-bold rounded-full px-3 py-1.5 text-sm leading-none inline-flex items-center gap-2 [&>svg]:size-4 [&>svg]:block"
                      )}
                    >
                      {skill.icon && <skill.icon />}
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </MainSection>
  );
}
