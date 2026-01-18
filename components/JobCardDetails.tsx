"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Job } from "@/data/work";
import { staggerContainer, fadeUpItem, expandVariants } from "@/lib/animations";

interface JobCardDetailsProps {
  job: Job;
  isExpanded: boolean;
}

export function JobCardDetails({ job, isExpanded }: JobCardDetailsProps) {
  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          variants={expandVariants}
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          className="overflow-hidden"
        >
          <div className="rounded-lg overflow-hidden bg-muted/30 mb-4">
            <Image
              src={job.banner}
              alt={`${job.company} banner`}
              width={600}
              height={150}
              className="w-full h-20 object-contain"
            />
          </div>

          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Key Responsibilities
            </p>
            <motion.ul
              className="space-y-2"
              variants={staggerContainer(0.05)}
              initial="hidden"
              animate="visible"
            >
              {job.details.map((detail, i) => (
                <motion.li
                  key={i}
                  variants={fadeUpItem}
                  className="flex gap-2 text-sm text-foreground/80"
                >
                  <Check className="size-4 shrink-0 text-primary mt-0.5" />
                  <span>{detail}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
