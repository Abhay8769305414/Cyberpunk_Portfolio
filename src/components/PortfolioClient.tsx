"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundPhilosophy from "@/components/BackgroundPhilosophy";
import FlagshipDeployments from "@/components/FlagshipDeployments";
import GitHubFeed from "@/components/GitHubFeed";
import SystemsMatrix from "@/components/SystemsMatrix";
import ContactTerminal from "@/components/ContactTerminal";
import CommandPalette from "@/components/CommandPalette";
import CyberBackground from "@/components/CyberBackground";
import AgentCursorSwarm from "@/components/AgentCursorSwarm";
import FloatingDock from "@/components/FloatingDock";
import { GitHubRepo } from "@/types/portfolio";

interface PortfolioClientProps {
  initialRepos: GitHubRepo[];
}

export default function PortfolioClient({ initialRepos }: PortfolioClientProps) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [swarmEnabled, setSwarmEnabled] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#030303] text-[#F5F5F5] selection:bg-cyber-red selection:text-white">
      {/* Background Cyber Ambient, Dot-Matrix & Scanline Layers */}
      <CyberBackground />

      {/* Autonomous Multi-Agent Builder Cursor Swarm (z-50) */}
      <AgentCursorSwarm enabled={swarmEnabled} />

      {/* Global Interactive Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpen={() => setIsCommandPaletteOpen(true)}
      />

      {/* Top Cyber Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Section 01: Background & Philosophy */}
        <BackgroundPhilosophy />

        {/* Section 02: Flagship Deployments */}
        <FlagshipDeployments />

        {/* Section 04: GitHub Feed */}
        <GitHubFeed initialRepos={initialRepos} />

        {/* Section 03: The Systems Matrix */}
        <SystemsMatrix />

        {/* Section 05: Contact & Terminal Footer */}
        <ContactTerminal />
      </main>

      {/* Floating Bottom Glassmorphic Command Dock */}
      <FloatingDock
        swarmEnabled={swarmEnabled}
        onToggleSwarm={() => setSwarmEnabled((prev) => !prev)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />
    </div>
  );
}
