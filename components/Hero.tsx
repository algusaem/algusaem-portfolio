"use client";

import { ArrowRight, Github } from "lucide-react";
import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scene3D } from "@/components/Scene3D";
import MainSection from "./MainSection";
import { Typewriter } from "./Typewriter";
import { springTransition, springTransitionSnappy } from "@/lib/animations";
import { CLANKER_INTRO, CLANKER_PHRASES } from "@/data/clanker";

// Hero entrance animations
const nameVariants: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ...springTransition, delay: 0.1 },
  },
};

const titleVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ...springTransition, delay: 0.3 },
  },
};

const paragraphContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: springTransition,
  },
};

const ctaContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.0,
    },
  },
};

const ctaVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: springTransitionSnappy,
  },
};

const sceneVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ...springTransition, delay: 0.2 },
  },
};

const typewriterVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...springTransition, delay: 0.8 },
  },
};

interface HeroProps {
  isReady?: boolean;
  onModelLoad?: () => void;
}

export function Hero({ isReady = true, onModelLoad }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setPointer({ x, y });
  };

  const animationState = isReady ? "visible" : "hidden";

  return (
    <MainSection
      ref={sectionRef}
      id="about"
      className="min-h-[calc(100vh-4rem)] flex items-center pt-0"
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col-reverse items-stretch gap-12 md:flex-row md:items-start md:justify-between w-full">
        <div className="md:flex-1">
          <motion.h1
            className="text-5xl font-medium tracking-tight text-foreground md:text-6xl"
            variants={nameVariants}
            initial="hidden"
            animate={animationState}
          >
            Alex Gutierrez
          </motion.h1>

          <motion.p
            className="mt-2 text-xl font-semibold text-primary"
            variants={titleVariants}
            initial="hidden"
            animate={animationState}
          >
            Fullstack Developer
          </motion.p>

          <motion.div
            variants={paragraphContainerVariants}
            initial="hidden"
            animate={animationState}
          >
            <Paragraph>
              I am a Fullstack Developer specialized in building{" "}
              <Highlight>modern, accessible, and maintainable</Highlight> web
              applications, with a strong focus on <Highlight>UI/UX</Highlight>,
              clean code, and best practices.
            </Paragraph>
            <Paragraph>
              I have participated in the{" "}
              <Highlight>technical direction of projects</Highlight>, coordinating
              teams and taking responsibility for{" "}
              <Highlight>code review and validation</Highlight> before deployment,
              ensuring quality and consistency.
            </Paragraph>
            <Paragraph>
              I work <Highlight>end-to-end</Highlight>, covering Frontend,
              Backend, and deployments. Based in the Basque Country, with
              availability for <Highlight>remote work</Highlight> and
              collaboration in international environments.
            </Paragraph>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            variants={ctaContainerVariants}
            initial="hidden"
            animate={animationState}
          >
            <motion.div variants={ctaVariants}>
              <Button size="lg" asChild>
                <a href="#projects">
                  View my work
                  <ArrowRight />
                </a>
              </Button>
            </motion.div>
            <motion.div variants={ctaVariants}>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/algusaem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="relative h-48 self-stretch md:h-auto md:flex-1"
          variants={sceneVariants}
          initial="hidden"
          animate={animationState}
        >
          <motion.div
            className="absolute top-4 left-1/2 z-0 -translate-x-1/2 md:top-8"
            variants={typewriterVariants}
            initial="hidden"
            animate={animationState}
          >
            <p className="text-xs font-mono text-foreground/60 italic text-center">
              <Typewriter phrases={CLANKER_PHRASES} firstPhrase={CLANKER_INTRO} firstPhraseDelay={5000} />
            </p>
          </motion.div>
          <div className="relative z-10 h-full">
            <Scene3D pointer={pointer} onLoad={onModelLoad} isReady={isReady} />
          </div>
        </motion.div>
      </div>
    </MainSection>
  );
}

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.p
      className="mt-4 max-w-lg text-foreground/80"
      variants={paragraphVariants}
    >
      {children}
    </motion.p>
  );
};

const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-medium text-foreground">{children}</span>;
};
