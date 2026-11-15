"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Briefcase,
  Award,
  ChevronRight,
  Shield,
  Layers,
  Database,
  Cpu,
} from "lucide-react";
import { PHILOSOPHY_NARRATIVE, EXPERIENCES, CREDENTIALS } from "@/lib/data";
import TypewriterReveal from "@/components/TypewriterReveal";
import ConstructCard from "@/components/ConstructCard";

export default function BackgroundPhilosophy() {
  return (
    <section id="philosophy" className="py-24 border-b border-[#1E1E1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 font-mono text-xs text-cyber-red mb-2">
            <span className="w-2 h-2 bg-cyber-red" />
            <span>01 // ARCHITECTURE & PHILOSOPHY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            <TypewriterReveal
              text="Deterministic Systems For A Stochastic World."
              mode="heading"
              accentColor="red"
            />
          </h2>
          <div className="w-16 h-0.5 bg-cyber-red mt-4" />
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & Architectural Mindset */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Architectural Manifesto Card wrapped in ConstructCard */}
            <ConstructCard
              accentColor="cyan"
              dimensionPrefix="MANIFESTO"
              className="p-6 corner-brackets relative"
            >
              <div className="flex items-center space-x-2 font-mono text-[11px] text-cyber-muted pb-4 border-b border-[#1E1E1E] mb-5">
                <Terminal className="w-4 h-4 text-cyber-red" />
                <span className="text-cyber-text font-bold uppercase tracking-wider">
                  MANIFESTO.LOG
                </span>
                <span className="text-cyber-red ml-auto font-mono text-[10px]">PARADIGM::STRICT</span>
              </div>

              <div className="space-y-5 text-sm sm:text-base text-cyber-text leading-relaxed">
                {PHILOSOPHY_NARRATIVE.map((paragraph, idx) => (
                  <div key={idx} className="font-sans text-cyber-muted">
                    <span className="font-mono text-cyber-red mr-2 font-bold">
                      [{String(idx + 1).padStart(2, "0")}]
                    </span>
                    <TypewriterReveal
                      text={paragraph}
                      mode="stream"
                      delayMs={idx * 150}
                      accentColor="cyan"
                    />
                  </div>
                ))}
              </div>

              {/* Guiding Principles Pills */}
              <div className="mt-6 pt-5 border-t border-[#1E1E1E] grid grid-cols-2 gap-2 font-mono text-[11px]">
                <div className="flex items-center space-x-2 p-2 bg-[#050505] border border-[#1a1a1a]">
                  <Shield className="w-3.5 h-3.5 text-cyber-emerald" />
                  <span className="text-cyber-text">IDEMPOTENT WRITES</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-[#050505] border border-[#1a1a1a]">
                  <Cpu className="w-3.5 h-3.5 text-cyber-red" />
                  <span className="text-cyber-text">GUARDED AGENTS</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-[#050505] border border-[#1a1a1a]">
                  <Database className="w-3.5 h-3.5 text-cyber-red" />
                  <span className="text-cyber-text">AUDITABLE STATE</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-[#050505] border border-[#1a1a1a]">
                  <Layers className="w-3.5 h-3.5 text-cyber-emerald" />
                  <span className="text-cyber-text">FAIL-SAFE ROUTING</span>
                </div>
              </div>
            </ConstructCard>

            {/* Quote block */}
            <div className="p-4 border-l-2 border-cyber-red bg-[#080808] font-mono text-xs text-cyber-muted">
              <span className="text-cyber-red font-bold">&quot;</span>
              Reliability is not an afterthought; it is a defensive contract enforced at every serialization layer.
              <span className="text-cyber-red font-bold">&quot;</span>
            </div>
          </motion.div>

          {/* Right Column: Experience Stack & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Experience Timeline Stack */}
            <div>
              <div className="flex items-center space-x-2 font-mono text-xs text-cyber-text mb-6 pb-2 border-b border-[#1E1E1E]">
                <Briefcase className="w-4 h-4 text-cyber-red" />
                <span className="font-bold tracking-widest uppercase">
                  OPERATIONAL EXPERIENCE & ROLES
                </span>
              </div>

              <div className="space-y-6">
                {EXPERIENCES.map((exp, idx) => (
                  <ConstructCard
                    key={exp.company}
                    delayMs={idx * 120}
                    accentColor={idx % 2 === 0 ? "cyan" : "red"}
                    dimensionPrefix={`EXP_0${idx + 1}`}
                    className="p-5 corner-brackets relative"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-cyber-red group-hover:scale-125 transition-transform" />
                        <h3 className="font-display font-bold text-lg text-white group-hover:text-cyber-red transition-colors">
                          {exp.company}
                        </h3>
                      </div>
                      <span className="font-mono text-[11px] text-cyber-muted px-2 py-0.5 bg-[#141414] border border-[#222]">
                        {exp.period}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-cyber-red font-medium mb-3">
                      {exp.role}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start space-x-2 text-xs sm:text-sm text-cyber-muted"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-cyber-red flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#161616]">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] text-cyber-muted bg-[#050505] px-2 py-0.5 border border-[#1E1E1E]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </ConstructCard>
                ))}
              </div>
            </div>

            {/* Credentials & Honors Grid */}
            <div>
              <div className="flex items-center space-x-2 font-mono text-xs text-cyber-text mb-6 pb-2 border-b border-[#1E1E1E]">
                <Award className="w-4 h-4 text-cyber-red" />
                <span className="font-bold tracking-widest uppercase">
                  CREDENTIALS & COMPETITIVE HONORS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CREDENTIALS.map((cred, idx) => (
                  <ConstructCard
                    key={cred.title}
                    delayMs={idx * 60}
                    accentColor="cyan"
                    dimensionPrefix={`CRED_0${idx + 1}`}
                    className="p-3.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-cyber-red/10 text-cyber-red border border-cyber-red/30">
                          {cred.badge}
                        </span>
                      </div>
                      <div className="font-mono text-xs font-bold text-cyber-text line-clamp-2">
                        {cred.title}
                      </div>
                    </div>
                    <div className="font-mono text-[10px] text-cyber-muted mt-2 border-t border-[#161616] pt-1.5">
                      {cred.organization}
                    </div>
                  </ConstructCard>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
