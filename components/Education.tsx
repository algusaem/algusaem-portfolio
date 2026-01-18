"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import MainSection from "./MainSection";
import { education } from "@/data/education";
import { staggerContainer, fadeUpItem } from "@/lib/animations";

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <MainSection id="studies">
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
          Education
        </motion.h2>
        <motion.p className="mt-2 text-foreground/80" variants={fadeUpItem}>
          My academic background
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-4"
          variants={staggerContainer(0.1)}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-border bg-card p-6 flex gap-5"
              variants={fadeUpItem}
            >
              <div className="size-12 rounded-full overflow-hidden shrink-0">
                <Image
                  src={edu.logo}
                  alt={edu.institution}
                  width={48}
                  height={48}
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 grow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {edu.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </MainSection>
  );
}
