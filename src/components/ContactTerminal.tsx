"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Terminal,
  Github,
  Phone,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import TypewriterReveal from "@/components/TypewriterReveal";
import ConstructCard from "@/components/ConstructCard";

export default function ContactTerminal() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-24 relative pb-36">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered High-Contrast Container with Red Top Accent Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0A0A0A] border border-[#1E1E1E] corner-brackets shadow-2xl overflow-hidden"
        >
          {/* Top 3px Crimson Accent Line */}
          <div className="h-1 w-full bg-cyber-red shadow-neon-red" />

          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-[#1E1E1E] bg-[#0E0E0E] font-mono text-xs text-cyber-muted">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-cyber-red" />
              <span className="text-cyber-text font-bold">TRANSMISSION_PORT::SECURE</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px]">
              <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
              <span className="text-cyber-emerald">SIGNAL READY</span>
            </div>
          </div>

          <div className="p-8 sm:p-12 text-center space-y-6">
            {/* Tag */}
            <div className="inline-block font-mono text-xs font-bold px-3 py-1 bg-cyber-red/10 text-cyber-red border border-cyber-red/30">
              05 // INITIATE DIRECT TRANSMISSION
            </div>

            {/* Headline with Typewriter Scramble */}
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              <TypewriterReveal
                text="Let's Architect Something Extraordinary."
                mode="heading"
                accentColor="red"
              />
            </h2>

            {/* Subtext */}
            <p className="font-mono text-sm sm:text-base text-cyber-muted max-w-2xl mx-auto">
              Open to Product, Data Analytics, and AI/Backend Engineering opportunities.
            </p>

            {/* Interactive Email Bar */}
            <div className="max-w-xl mx-auto mt-8">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#050505] border border-[#222] p-2 corner-plus">
                <div className="flex items-center space-x-3 px-3 py-2 flex-1">
                  <Mail className="w-4 h-4 text-cyber-red flex-shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-cyber-text tracking-wider truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-1.5 px-4 py-2 bg-cyber-red hover:bg-[#D9141C] text-white font-mono text-xs font-bold transition-all shadow-neon-red"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center justify-center p-2 bg-[#141414] hover:bg-[#1E1E1E] text-cyber-text hover:text-white border border-[#333] transition-colors"
                    title="Open mail client"
                  >
                    <Send className="w-4 h-4 text-cyber-red" />
                  </a>
                </div>
              </div>

              {/* Toast Notification */}
              {copied && (
                <div className="mt-3 font-mono text-xs text-cyber-emerald flex items-center justify-center space-x-1 animate-in fade-in">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>COPIED TO CLIPBOARD // READY TO PASTE</span>
                </div>
              )}
            </div>

            {/* Links Row wrapped in ConstructCard */}
            <div className="pt-8 border-t border-[#181818] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono text-xs">
              {/* GitHub */}
              <ConstructCard
                delayMs={50}
                accentColor="cyan"
                dimensionPrefix="LINK_GITHUB"
                className="p-3 bg-[#050505] transition-colors"
              >
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center justify-between text-cyber-muted group-hover:text-cyber-red mb-1">
                    <Github className="w-4 h-4" />
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  </div>
                  <div className="text-[10px] text-cyber-muted">GITHUB</div>
                  <div className="text-cyber-text font-bold truncate">
                    @{PERSONAL_INFO.githubUsername}
                  </div>
                </a>
              </ConstructCard>

              {/* Direct Email */}
              <ConstructCard
                delayMs={100}
                accentColor="red"
                dimensionPrefix="LINK_EMAIL"
                className="p-3 bg-[#050505] transition-colors"
              >
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="block group"
                >
                  <div className="flex items-center justify-between text-cyber-muted group-hover:text-cyber-red mb-1">
                    <Mail className="w-4 h-4" />
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  </div>
                  <div className="text-[10px] text-cyber-muted">DIRECT EMAIL</div>
                  <div className="text-cyber-text font-bold truncate">
                    {PERSONAL_INFO.email}
                  </div>
                </a>
              </ConstructCard>

              {/* Phone */}
              <ConstructCard
                delayMs={150}
                accentColor="cyan"
                dimensionPrefix="LINK_PHONE"
                className="p-3 bg-[#050505] transition-colors"
              >
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="block group"
                >
                  <div className="flex items-center justify-between text-cyber-muted group-hover:text-cyber-red mb-1">
                    <Phone className="w-4 h-4" />
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  </div>
                  <div className="text-[10px] text-cyber-muted">TELEMETRY LINE</div>
                  <div className="text-cyber-text font-bold truncate">
                    {PERSONAL_INFO.phone}
                  </div>
                </a>
              </ConstructCard>

              {/* Location */}
              <ConstructCard
                delayMs={200}
                accentColor="red"
                dimensionPrefix="NODE_BASE"
                className="p-3 bg-[#050505]"
              >
                <div>
                  <div className="text-cyber-muted mb-1">
                    <MapPin className="w-4 h-4 text-cyber-red" />
                  </div>
                  <div className="text-[10px] text-cyber-muted">BASE OF OPERATIONS</div>
                  <div className="text-cyber-text font-bold truncate">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </ConstructCard>
            </div>
          </div>

          {/* Terminal Footer Strip */}
          <div className="px-6 py-4 bg-[#050505] border-t border-[#1E1E1E] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-cyber-muted">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-cyber-red inline-block" />
              <span>ABHAY PRATAP SINGH © 2026</span>
              <span className="text-[#333]">|</span>
              <span className="text-cyber-text">HIGH-RELIABILITY ARCHITECT</span>
            </div>

            <div className="flex items-center space-x-3 text-[10px]">
              <span>STACK: NEXT.JS 15 • TS • TAILWIND</span>
              <span className="text-[#333]">|</span>
              <span className="text-cyber-emerald">SYSTEMS: ALL GREEN</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
