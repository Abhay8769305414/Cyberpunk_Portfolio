"use client";

import React, { useState, useEffect, useRef } from "react";

interface TypewriterRevealProps {
  text: string;
  mode?: "heading" | "stream";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  accentColor?: "cyan" | "red";
  delayMs?: number;
  onComplete?: () => void;
}

const CYBER_GLYPHS = "01X#_/%&!@<>[]*+=~?";

export default function TypewriterReveal({
  text,
  mode = "stream",
  className = "",
  as: Component = "span",
  accentColor = "cyan",
  delayMs = 0,
  onComplete,
}: TypewriterRevealProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          observer.disconnect();

          const timeout = setTimeout(() => {
            setIsTyping(true);
            if (mode === "heading") {
              runHeadingScramble();
            } else {
              runTokenStream();
            }
          }, delayMs);

          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [text, mode, delayMs]);

  // Heading Cyber-Scramble decode: 450ms rapid resolve
  const runHeadingScramble = () => {
    const totalDuration = 450;
    const startTime = performance.now();
    const length = text.length;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      const revealedCount = Math.floor(progress * length);

      let result = "";
      for (let i = 0; i < length; i++) {
        if (i < revealedCount) {
          result += text[i];
        } else if (text[i] === " " || text[i] === "\n") {
          result += text[i];
        } else {
          result += CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
        }
      }

      setDisplayText(result);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayText(text);
        setIsTyping(false);
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(tick);
  };

  // Live streaming typewriter: token/character stream at high speed (~15ms)
  const runTokenStream = () => {
    let index = 0;
    const length = text.length;
    // Chunk size: reveal 2-4 chars per tick for smooth LLM stream feel
    const step = Math.max(1, Math.floor(length / 45));

    const interval = setInterval(() => {
      index += step;
      if (index >= length) {
        setDisplayText(text);
        clearInterval(interval);
        setIsTyping(false);
        setIsComplete(true);
        if (onComplete) onComplete();
      } else {
        setDisplayText(text.slice(0, index));
      }
    }, 18);
  };

  const caretColorClass =
    accentColor === "cyan" ? "bg-[#38BDF8] text-[#38BDF8]" : "bg-cyber-red text-cyber-red";

  return (
    <Component
      ref={containerRef as React.Ref<never>}
      className={`relative inline-block transition-colors ${className}`}
    >
      <span
        className={
          isTyping && mode === "stream"
            ? "bg-[#38BDF8]/10 text-white transition-colors duration-200"
            : ""
        }
      >
        {hasTriggered.current ? displayText : ""}
      </span>

      {/* Live typing caret */}
      {isTyping && (
        <span
          className={`inline-block w-2 h-[1.1em] ml-0.5 align-middle animate-pulse ${caretColorClass} shadow-[0_0_8px_currentColor]`}
        />
      )}
    </Component>
  );
}
