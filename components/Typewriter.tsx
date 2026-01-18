"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  phrases: string[];
  firstPhrase?: string;
  firstPhraseDelay?: number;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function Typewriter({ phrases, firstPhrase, firstPhraseDelay = 4000 }: TypewriterProps) {
  const isFirstPhrase = useRef(!!firstPhrase);

  const [{ currentPhrase }, setState] = useState(() => {
    if (firstPhrase) {
      return { queue: shuffleArray(phrases), currentPhrase: firstPhrase };
    }
    const shuffled = shuffleArray(phrases);
    return { queue: shuffled.slice(1), currentPhrase: shuffled[0] };
  });

  const setQueue = (updater: (q: string[]) => string[]) => {
    setState((prev) => ({ ...prev, queue: updater(prev.queue) }));
  };

  const setCurrentPhrase = (phrase: string) => {
    setState((prev) => ({ ...prev, currentPhrase: phrase }));
  };
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentPhrase.length) {
            setText(currentPhrase.slice(0, text.length + 1));
          } else {
            const delay = isFirstPhrase.current ? firstPhraseDelay : 2000;
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          if (text.length > 0) {
            setText(text.slice(0, -1));
          } else {
            isFirstPhrase.current = false;
            setIsDeleting(false);
            setQueue((currentQueue) => {
              let nextQueue = currentQueue;
              if (nextQueue.length === 0) {
                nextQueue = shuffleArray(phrases);
              }
              const next = nextQueue[0];
              setCurrentPhrase(next);
              return nextQueue.slice(1);
            });
          }
        }
      },
      isDeleting ? 30 : 50
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentPhrase, phrases, firstPhraseDelay]);

  return (
    <span>
      &quot;{text}&quot;
      <span className="inline-block w-0.5 h-4.5 bg-foreground/60 ml-0.5 align-text-bottom animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}
