"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface TypewriterText {
  text: string;
  className?: string;
}

interface TypewriterProps {
  texts: TypewriterText[];
  typingSpeed?: number;
  deletingDelay?: number;
  deletingSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorBlinkSpeed?: number;
  className?: string;
  onComplete?: () => void;
  direction?: "ltr" | "rtl" | "auto";
  cursorClassName?: string;
}

export function Typewriter({
  texts,
  typingSpeed = 85,
  deletingDelay = 1800,
  deletingSpeed = 45,
  loop = false,
  showCursor = true,
  cursorBlinkSpeed = 0.7,
  className = "",
  onComplete,
  direction = "auto",
  cursorClassName = "",
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const [displayedChars, setDisplayedChars] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);

  const [isPaused, setIsPaused] = useState(false);

  const detectRTL = useCallback((text: string): boolean => {
    const rtlChars =
      /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;

    return rtlChars.test(text);
  }, []);

  const currentItem = texts[currentTextIndex];

  const isRTL =
    direction === "auto" ? detectRTL(currentItem.text) : direction === "rtl";

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, deletingDelay);

      return () => clearTimeout(pauseTimer);
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedChars.length < currentItem.text.length) {
          setDisplayedChars(
            currentItem.text.slice(0, displayedChars.length + 1),
          );
        } else if (loop || currentTextIndex < texts.length - 1) {
          setIsPaused(true);
        } else {
          onComplete?.();
        }
      } else {
        if (displayedChars.length > 0) {
          setDisplayedChars(
            currentItem.text.slice(0, displayedChars.length - 1),
          );
        } else {
          setIsDeleting(false);

          const nextIndex = (currentTextIndex + 1) % texts.length;

          if (currentTextIndex === texts.length - 1 && !loop) {
            onComplete?.();
            return;
          }

          setCurrentTextIndex(nextIndex);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [
    displayedChars,
    currentItem,
    isDeleting,
    isPaused,
    typingSpeed,
    deletingSpeed,
    deletingDelay,
    loop,
    texts.length,
    currentTextIndex,
    onComplete,
  ]);

  return (
    <span className={`inline ${className}`} dir={isRTL ? "rtl" : "ltr"}>
      <span className={currentItem.className}>{displayedChars}</span>

      {showCursor && (
        <motion.span
          aria-hidden="true"
          className={cn(
            "mx-1 inline-block h-[0.9em] w-1 translate-y-[10%] rounded-full bg-(--brand-orange)",
            cursorClassName,
          )}
          animate={{
            opacity: [1, 1, 0, 0],
          }}
          transition={{
            duration: cursorBlinkSpeed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </span>
  );
}
