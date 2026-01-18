"use client";

import { useState, useCallback, useRef } from "react";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Separator } from "@/components/ui/separator";

export function HomeContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const hasLoaded = useRef(false);

  const handleModelLoad = useCallback(() => {
    // Prevent double calls from React Strict Mode
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    // Model is loaded, wait a moment before hiding loading screen
    setTimeout(() => {
      setIsLoading(false);
      // Start hero animations after loading screen fades out
      setTimeout(() => {
        setIsReady(true);
      }, 300);
    }, 800);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="flex w-full flex-col items-center pt-16">
          <Hero isReady={isReady} onModelLoad={handleModelLoad} />
          <Separator />
          <Work />
          <Separator />
          <Skills />
          <Separator />
          <Projects />
          <Separator />
          <Education />
          <Separator />
          <Contact />
        </main>
      </div>
    </>
  );
}
