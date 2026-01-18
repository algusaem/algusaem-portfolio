"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import MainSection from "./MainSection";
import { JobCard } from "./JobCard";
import { jobs } from "@/data/work";
import { staggerContainer, fadeUpItem } from "@/lib/animations";

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const handleToggle = (index: number) => {
    setExpandedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <MainSection id="work" className="max-w-7xl">
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
          Work Experience
        </motion.h2>
        <motion.p className="mt-2 text-foreground/80" variants={fadeUpItem}>
          My professional journey
        </motion.p>
      </motion.div>

      <div className="mt-8 flex flex-col gap-12 relative before:hidden md:before:block before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-border">
        {jobs.map((job, index) => (
          <JobCard
            key={job.slug}
            job={job}
            index={index}
            isExpanded={expandedIndices.has(index)}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </MainSection>
  );
}
