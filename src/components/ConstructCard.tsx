"use client";

import React, { useState, useEffect, useRef } from "react";

interface ConstructCardProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  accentColor?: "cyan" | "red";
  dimensionPrefix?: string;
}

export default function ConstructCard({
  children,
  className = "",
  delayMs = 0,
  accentColor = "cyan",
  dimensionPrefix = "NODE",
}: ConstructCardProps) {
  const [phase, setPhase] = useState<"blueprint" | "constructing" | "solid">("blueprint");
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 420,
    height: 280,
  });
  const cardRef = useRef<HTMLDivElement | null>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          observer.disconnect();

          const startTimeout = setTimeout(() => {
            if (cardRef.current) {
              const rect = cardRef.current.getBoundingClientRect();
              setDimensions({
                width: Math.round(rect.width) || 420,
                height: Math.round(rect.height) || 280,
              });
            }
            setPhase("constructing");

            // Flash construction bounding box for 350ms, then solidify
            const solidTimeout = setTimeout(() => {
              setPhase("solid");
            }, 450);

            return () => clearTimeout(solidTimeout);
          }, delayMs);

          return () => clearTimeout(startTimeout);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delayMs]);

  const borderColor =
    accentColor === "cyan" ? "border-[#38BDF8]" : "border-cyber-red";
  const tagTextColor =
    accentColor === "cyan" ? "text-[#38BDF8]" : "text-cyber-red";

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-500 ${
        phase === "blueprint"
          ? "border border-dashed border-white/15 bg-black/30 backdrop-blur-sm"
          : phase === "constructing"
          ? `border-2 ${borderColor} bg-[#0A0A0A] shadow-[0_0_25px_rgba(56,189,248,0.25)]`
          : "border border-[#1E1E1E] bg-[#0A0A0A] hover:border-cyber-red hover:shadow-[0_0_20px_rgba(255,30,39,0.15)] group"
      } ${className}`}
    >
      {/* Figma/IDE Corner square handles during construction */}
      {phase === "constructing" && (
        <>
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-[#38BDF8] z-20 pointer-events-none" />
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-[#38BDF8] z-20 pointer-events-none" />
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-[#38BDF8] z-20 pointer-events-none" />
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-[#38BDF8] z-20 pointer-events-none" />

          {/* Construction Scanline laser sweep */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent animate-scanline z-20 pointer-events-none opacity-80" />

          {/* Dimension Tag */}
          <div className="absolute -top-3.5 right-3 px-2 py-0.5 bg-black border border-[#38BDF8] z-20 font-mono text-[9px] font-bold tracking-widest text-[#38BDF8] uppercase pointer-events-none animate-pulse">
            {dimensions.width} × {dimensions.height} // RENDERED
          </div>
        </>
      )}

      {/* Blueprint watermark indicator before construction */}
      {phase === "blueprint" && (
        <div className="absolute top-2 right-2 px-1.5 py-0.5 border border-white/10 font-mono text-[9px] text-white/30 pointer-events-none">
          {dimensionPrefix} // WIREFRAME
        </div>
      )}

      {/* Card Content */}
      <div
        className={`transition-opacity duration-300 ${
          phase === "blueprint" ? "opacity-30 blur-[0.5px]" : "opacity-100 blur-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
