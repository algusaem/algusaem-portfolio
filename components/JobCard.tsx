"use client";

import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { Job } from "@/data/work";
import { Button } from "@/components/ui/button";
import { AnimatedBorder } from "./AnimatedBorder";
import { JobCardDetails } from "./JobCardDetails";
import { TechBadge } from "./TechBadge";
import { staggerContainer, springTransition, springTransitionSnappy } from "@/lib/animations";

interface JobCardProps {
  job: Job;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export function JobCard({ job, index, isExpanded, onToggle }: JobCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    amount: 0.3,
    margin: "-20% 0px -20% 0px",
  });

  const hasEntered = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isExpanded && ref.current) {
      const timeout = setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isExpanded]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={clsx(
        "flex flex-col md:flex-row items-center gap-4 scroll-mt-24",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
      initial={{ opacity: 0, y: 40 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={springTransition}
    >
      {/* Card */}
      <div className="relative w-full md:w-[calc(50%-1.25rem)]">
        <AnimatedBorder isActive={isInView || isExpanded} />
        <div className="rounded-xl border-2 border-border bg-card p-5">
          <JobCardHeader
            job={job}
            hasEntered={hasEntered}
            onToggle={onToggle}
            isExpanded={isExpanded}
          />

          <JobCardDetails job={job} isExpanded={isExpanded} />

          <JobCardTechnologies
            technologies={job.technologies}
            hasEntered={hasEntered}
          />

          <JobCardToggleButton
            isExpanded={isExpanded}
            hasEntered={hasEntered}
            onToggle={onToggle}
          />
        </div>
      </div>

      {/* Timeline dot */}
      <motion.div
        className={clsx(
          "hidden md:flex size-6 shrink-0 rounded-full border-2 items-center justify-center z-10 bg-background",
          job.current ? "border-primary" : "border-border"
        )}
        initial={{ scale: 0 }}
        animate={hasEntered ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          delay: 0.2,
        }}
      >
        <div
          className={clsx(
            "size-2.5 rounded-full",
            job.current ? "bg-primary" : "bg-border"
          )}
        />
      </motion.div>

      {/* Empty space for alignment */}
      <div className="hidden md:block w-[calc(50%-1.25rem)]" />
    </motion.div>
  );
}

interface JobCardHeaderProps {
  job: Job;
  hasEntered: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

function JobCardHeader({ job, hasEntered, isExpanded, onToggle }: JobCardHeaderProps) {
  return (
    <button
      onClick={onToggle}
      className="w-full text-left group"
      aria-expanded={isExpanded}
    >
      <motion.div
        className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...springTransition, delay: 0 }}
      >
        <div>
          <h3 className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
            {job.role}
          </h3>
          <p className="text-sm font-medium text-foreground">{job.company}</p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1">
          <span className="text-sm text-muted-foreground">{job.period}</span>
          {job.current && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary leading-none">
              Current
            </span>
          )}
        </div>
      </motion.div>

      <motion.p
        className="mt-4 text-foreground/80 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...springTransition, delay: 0.1 }}
      >
        {job.description}
      </motion.p>
    </button>
  );
}

interface JobCardTechnologiesProps {
  technologies: string[];
  hasEntered: boolean;
}

function JobCardTechnologies({ technologies, hasEntered }: JobCardTechnologiesProps) {
  return (
    <motion.div
      className="mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ ...springTransition, delay: 0.2 }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        Technologies used
      </p>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={staggerContainer(0.03)}
        initial="hidden"
        animate={hasEntered ? "visible" : "hidden"}
      >
        {technologies.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </motion.div>
    </motion.div>
  );
}

interface JobCardToggleButtonProps {
  isExpanded: boolean;
  hasEntered: boolean;
  onToggle: () => void;
}

function JobCardToggleButton({ isExpanded, hasEntered, onToggle }: JobCardToggleButtonProps) {
  return (
    <motion.div
      className="flex justify-center mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ ...springTransition, delay: 0.3 }}
    >
      <Button size="sm" variant="outline" onClick={onToggle} className="gap-2">
        {isExpanded ? "Show less" : "View details"}
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={springTransitionSnappy}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </Button>
    </motion.div>
  );
}
