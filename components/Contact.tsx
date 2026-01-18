"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import MainSection from "./MainSection";
import { Button } from "@/components/ui/button";
import {
  staggerContainer,
  fadeUpItem,
  springTransitionSnappy,
} from "@/lib/animations";

const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    borderColor: "var(--border)",
  },
  hover: {
    scale: 1.02,
    borderColor: "var(--primary)",
    transition: springTransitionSnappy,
  },
};

const iconVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -10, 10, -5, 5, 0],
    scale: 1.1,
    transition: { duration: 0.5 },
  },
};

interface ContactLink {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  description: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "algusaem@gmail.com",
    href: "mailto:algusaem@gmail.com",
    description: "Drop me a line anytime",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Alex Gutierrez",
    href: "https://linkedin.com/in/algusaem",
    description: "Let's connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@algusaem",
    href: "https://github.com/algusaem",
    description: "Check out my code",
  },
];

function ContactCard({ link, index }: { link: ContactLink; index: number }) {
  const Icon = link.icon;

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="group block h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      custom={index}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
          variants={iconVariants}
        >
          <Icon className="size-6" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {link.label}
          </p>
          <p className="mt-1 text-base font-bold text-foreground">
            {link.value}
          </p>
          <p className="mt-1 text-sm text-foreground/60">{link.description}</p>
        </div>

        <motion.div
          className="text-muted-foreground/50 group-hover:text-primary transition-colors"
          initial={{ x: 0, opacity: 0.5 }}
          whileHover={{ x: 4, opacity: 1 }}
        >
          <Send className="size-5" />
        </motion.div>
      </div>
    </motion.a>
  );
}

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <MainSection id="contact">
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
          Get in Touch
        </motion.h2>
        <motion.p className="mt-2 text-foreground/80" variants={fadeUpItem}>
          Let&apos;s build something together
        </motion.p>

        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.1)}
        >
          {contactLinks.map((link, index) => (
            <motion.div key={link.label} variants={fadeUpItem}>
              <ContactCard link={link} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 rounded-xl border border-border bg-card p-8 text-center"
          variants={fadeUpItem}
        >
          <p className="text-lg text-foreground/80">
            Currently available for{" "}
            <span className="font-semibold text-primary">
              freelance projects
            </span>{" "}
            and{" "}
            <span className="font-semibold text-accent">
              full-time positions
            </span>
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="mailto:algusaem@gmail.com">
                <Mail />
                Send me an email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com/in/algusaem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </MainSection>
  );
}
