"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { getSkillByName } from "@/data/skills";
import { scaleFadeItem } from "@/lib/animations";

interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  const skill = getSkillByName(name);
  const colorClass = skill?.color ?? "bg-muted text-muted-foreground";

  return (
    <motion.span
      variants={scaleFadeItem}
      className={clsx(
        colorClass,
        "font-bold rounded-full px-3 py-1.5 text-sm leading-none inline-flex items-center gap-2 [&>svg]:size-4 [&>svg]:block"
      )}
    >
      {skill?.icon && <skill.icon />}
      {name}
    </motion.span>
  );
}
