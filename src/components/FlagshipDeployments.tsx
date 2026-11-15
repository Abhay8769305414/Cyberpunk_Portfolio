"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Activity,
  ShieldAlert,
  ExternalLink,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { FLAGSHIP_SPOTLIGHT, SECONDARY_FLAGSHIPS } from "@/lib/data";
import TypewriterReveal from "@/components/TypewriterReveal";
import ConstructCard from "@/components/ConstructCard";

export default function FlagshipDeployments() {
  return (
    <section id="deployments" className="py-24 border-b border-[#1E1E1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 font-mono text-xs text-cyber-red mb-2">
            <span className="w-2 h-2 bg-cyber-red" />
            <span>02 // FLAGSHIP DEPLOYMENTS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            <TypewriterReveal
              text="Production Agent Architectures & Pipelines."
              mode="heading"
              accentColor="red"
            />
          </h2>
          <div className="w-16 h-0.5 bg-cyber-red mt-4" />
        </div>

        {/* Full-Width Spotlight Card: Agency OS wrapped in ConstructCard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <ConstructCard
            accentColor="cyan"
            dimensionPrefix="FLAGSHIP_AGENCY_OS"
            className="p-6 sm:p-8 corner-brackets relative shadow-2xl"
          >
            {/* Spotlight Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1E1E1E] pb-5 mb-6">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-cyber-red/10 text-cyber-red border border-cyber-red/40 tracking-wider">
                  {FLAGSHIP_SPOTLIGHT.badge}
                </span>
                <span className="hidden sm:inline-block font-mono text-[11px] text-cyber-emerald flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-ping" />
                  VERIFIED ARCHITECTURE
                </span>
              </div>

              <div className="flex items-center space-x-3">
                {FLAGSHIP_SPOTLIGHT.githubUrl && (
                  <a
                    href={FLAGSHIP_SPOTLIGHT.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#050505] border border-[#222] hover:border-cyber-red font-mono text-xs text-cyber-text transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5 text-cyber-red" />
                    <span>SOURCE REPO</span>
                  </a>
                )}
                {FLAGSHIP_SPOTLIGHT.liveUrl && (
                  <a
                    href={FLAGSHIP_SPOTLIGHT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-cyber-red hover:bg-[#D9141C] font-mono text-xs text-white font-bold transition-all shadow-neon-red"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-4 mb-8">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                {FLAGSHIP_SPOTLIGHT.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-cyber-muted leading-relaxed max-w-4xl">
                {FLAGSHIP_SPOTLIGHT.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {FLAGSHIP_SPOTLIGHT.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 bg-[#111] border border-[#222] text-cyber-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 3 Telemetry Sub-Cards inside the Spotlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#1E1E1E]">
              {FLAGSHIP_SPOTLIGHT.metrics.map((subCard, idx) => (
                <div
                  key={subCard.label}
                  className="p-4 bg-[#050505] border border-[#1a1a1a] hover:border-cyber-red/50 transition-colors relative"
                >
                  <div className="flex items-center space-x-2 font-mono text-xs font-bold text-cyber-red mb-2">
                    {idx === 0 && <Activity className="w-4 h-4 text-cyber-red" />}
                    {idx === 1 && <ShieldAlert className="w-4 h-4 text-cyber-emerald" />}
                    {idx === 2 && <Cpu className="w-4 h-4 text-cyber-red" />}
                    <span>{subCard.label}</span>
                  </div>
                  <p className="font-mono text-xs text-cyber-muted leading-relaxed">
                    {subCard.description}
                  </p>
                </div>
              ))}
            </div>
          </ConstructCard>
        </motion.div>

        {/* Secondary Flagship Cards (2-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SECONDARY_FLAGSHIPS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <ConstructCard
                delayMs={idx * 150}
                accentColor={idx === 0 ? "cyan" : "red"}
                dimensionPrefix={`SECONDARY_0${idx + 1}`}
                className="p-6 sm:p-7 corner-brackets relative flex flex-col justify-between h-full"
              >
                <div>
                  {/* Header Tag & Repo Link */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#1E1E1E] pb-3 mb-4">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-cyber-red/10 text-cyber-red border border-cyber-red/30">
                      {project.badge}
                    </span>

                    <div className="flex items-center space-x-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyber-muted hover:text-cyber-red transition-colors p-1"
                          title="View Source on GitHub"
                        >
                          <Code2 className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyber-muted hover:text-white transition-colors p-1"
                          title="Live Deployment"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-cyber-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Telemetry Metric Sub-Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 bg-[#050505] border border-[#181818]"
                      >
                        <div className="font-mono text-[10px] font-bold text-cyber-red mb-1">
                          {m.label}
                        </div>
                        <div className="font-mono text-[11px] text-cyber-muted">
                          {m.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Pills Footer */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#161616]">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-cyber-muted bg-[#121212] px-2 py-0.5 border border-[#222]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </ConstructCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
