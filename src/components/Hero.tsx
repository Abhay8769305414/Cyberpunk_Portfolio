"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ExternalLink,
  Cpu,
  Terminal,
  Activity,
  Code2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO, TELEMETRY_METRICS } from "@/lib/data";
import TypewriterReveal from "@/components/TypewriterReveal";
import ConstructCard from "@/components/ConstructCard";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-[#1E1E1E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column (Content) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 bg-[#0A0A0A] border border-[#1E1E1E] rounded-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald" />
              </span>
              <span className="font-mono text-[11px] font-bold tracking-wider text-cyber-text uppercase">
                {PERSONAL_INFO.systemStatus}
              </span>
            </div>

            {/* Massive Display Title with Cyber-Scramble Decode */}
            <div className="relative pt-2 select-none">
              <div className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-cyber-red opacity-90 leading-none">
                <TypewriterReveal
                  text="PORTFOLIO"
                  mode="heading"
                  accentColor="red"
                  className="text-cyber-red"
                />
              </div>
              <div className="sm:-mt-8 -mt-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
                  <span>Hello, I&apos;m</span>
                  <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                    <TypewriterReveal
                      text={PERSONAL_INFO.name}
                      mode="heading"
                      delayMs={200}
                      accentColor="cyan"
                    />
                  </span>
                </h2>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-cyber-red font-mono font-medium tracking-wide">
              {PERSONAL_INFO.title}
            </p>

            {/* Bio Summary Monospace Paragraph with live streaming typewriter */}
            <div className="font-mono text-sm sm:text-base text-cyber-muted leading-relaxed max-w-2xl border-l-2 border-cyber-red/50 pl-4 bg-gradient-to-r from-cyber-red/5 to-transparent py-2">
              <span className="text-cyber-red mr-1 font-bold">&gt;</span>
              <TypewriterReveal
                text={PERSONAL_INFO.bioSummary}
                mode="stream"
                delayMs={300}
                accentColor="cyan"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#deployments"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-cyber-red hover:bg-[#E01720] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-neon-red corner-brackets"
              >
                <span>EXPLORE DEPLOYMENTS</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#0A0A0A] hover:bg-[#121212] text-cyber-text hover:text-white border border-[#2A2A2A] hover:border-cyber-red font-mono text-xs font-bold tracking-wider uppercase transition-all corner-plus"
              >
                <span>INSPECT GITHUB</span>
                <ExternalLink className="w-4 h-4 text-cyber-muted" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Cyber-Architect Avatar / Silhouette Frame wrapped in ConstructCard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <ConstructCard
              accentColor="cyan"
              dimensionPrefix="HERO_AVATAR"
              className="mx-auto max-w-md w-full p-4 corner-brackets shadow-2xl"
            >
              {/* Header Telemetry Bar */}
              <div className="flex items-center justify-between border-b border-[#1E1E1E] pb-3 mb-4 font-mono text-[10px] text-cyber-muted">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-3.5 h-3.5 text-cyber-red" />
                  <span className="text-cyber-text font-bold">SYSTEM_ARCHITECT.SYS</span>
                </div>
                <div className="flex items-center space-x-1.5 text-cyber-emerald">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Graphic Silhouette / Blueprint Display */}
              <div className="relative h-72 sm:h-80 w-full bg-[#050505] border border-[#1a1a1a] overflow-hidden flex flex-col justify-between p-5">
                {/* Internal grid & scanline effect */}
                <div className="absolute inset-0 cyber-grid-overlay opacity-30" />
                <div className="absolute inset-0 scanline-layer opacity-40 pointer-events-none" />

                {/* Corner Crosshairs */}
                <span className="absolute top-2 left-2 font-mono text-[10px] text-cyber-red">+</span>
                <span className="absolute top-2 right-2 font-mono text-[10px] text-cyber-red">+</span>
                <span className="absolute bottom-2 left-2 font-mono text-[10px] text-cyber-red">+</span>
                <span className="absolute bottom-2 right-2 font-mono text-[10px] text-cyber-red">+</span>

                {/* Center Schematic Art */}
                <div className="relative z-10 my-auto text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-[#0A0A0A] border-2 border-cyber-red flex items-center justify-center relative shadow-neon-red">
                    <Cpu className="w-10 h-10 text-cyber-red animate-pulse-slow" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyber-red" />
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-white" />
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                      ABHAY PRATAP SINGH
                    </div>
                    <div className="font-mono text-[11px] text-cyber-red flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>HIGH-RELIABILITY ARCHITECT</span>
                    </div>
                  </div>
                </div>

                {/* Floating telemetry lines inside the frame */}
                <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-[#555] border-t border-[#1a1a1a] pt-2">
                  <span>MEM: 64GB ALLOC</span>
                  <span>ENCLAVE: HARDENED</span>
                  <span>LATENCY: 4.2ms</span>
                </div>
              </div>

              {/* Metadata Tags */}
              <div className="mt-4 space-y-2 font-mono text-[11px]">
                <div className="flex items-center space-x-2 px-2.5 py-1.5 bg-[#050505] border border-[#1E1E1E]">
                  <Activity className="w-3.5 h-3.5 text-cyber-red flex-shrink-0" />
                  <span className="text-cyber-muted truncate">{PERSONAL_INFO.currentRole}</span>
                </div>
                <div className="flex items-center space-x-2 px-2.5 py-1.5 bg-[#050505] border border-[#1E1E1E]">
                  <Code2 className="w-3.5 h-3.5 text-cyber-emerald flex-shrink-0" />
                  <span className="text-cyber-muted truncate">{PERSONAL_INFO.coreStack}</span>
                </div>
                <div className="flex items-center space-x-2 px-2.5 py-1.5 bg-[#050505] border border-[#1E1E1E]">
                  <MapPin className="w-3.5 h-3.5 text-cyber-red flex-shrink-0" />
                  <span className="text-cyber-muted truncate">{PERSONAL_INFO.systemNode}</span>
                </div>
              </div>
            </ConstructCard>
          </motion.div>
        </div>

        {/* Bottom Hero Telemetry Strip (4 metric blocks wrapped in ConstructCard) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {TELEMETRY_METRICS.map((metric, idx) => (
            <ConstructCard
              key={metric.label}
              delayMs={idx * 80}
              accentColor="cyan"
              dimensionPrefix={`METRIC_0${idx + 1}`}
              className="p-6 relative group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-cyber-muted tracking-widest">
                  METRIC_0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 bg-cyber-red group-hover:bg-[#38BDF8] transition-colors" />
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-1 group-hover:text-cyber-red transition-colors">
                <TypewriterReveal
                  text={metric.value}
                  mode="heading"
                  delayMs={idx * 100}
                  accentColor="cyan"
                />
              </div>
              <div className="font-mono text-xs font-bold text-cyber-text tracking-wide uppercase">
                {metric.label}
              </div>
              <div className="font-mono text-[10px] text-cyber-muted mt-1">
                {metric.subtext}
              </div>
            </ConstructCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
