"use client";

import React from "react";
import {
  User,
  Cpu,
  GitBranch,
  Layers,
  Mail,
  Command,
  Sparkles,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

interface FloatingDockProps {
  swarmEnabled: boolean;
  onToggleSwarm: () => void;
  onOpenCommandPalette: () => void;
}

export default function FloatingDock({
  swarmEnabled,
  onToggleSwarm,
  onOpenCommandPalette,
}: FloatingDockProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "philosophy", label: "Philosophy", icon: <User className="w-3.5 h-3.5" /> },
    { id: "deployments", label: "Deployments", icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: "github-feed", label: "GitHub Feed", icon: <GitBranch className="w-3.5 h-3.5" /> },
    { id: "systems-matrix", label: "Systems Matrix", icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <aside
      aria-label="Agent workspace controls"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-full px-4"
    >
      <div className="flex items-center space-x-1 sm:space-x-3 px-3 sm:px-4 py-2 bg-black/80 backdrop-blur-md border border-white/15 rounded-full shadow-2xl shadow-cyber-red/10 text-xs font-mono">
        {/* Live Swarm Active Status */}
        <div className="flex items-center space-x-1.5 px-2 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] text-cyber-muted">
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                swarmEnabled ? "bg-cyber-emerald" : "bg-gray-500"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                swarmEnabled ? "bg-cyber-emerald" : "bg-gray-500"
              }`}
            />
          </span>
          <span className="font-bold text-cyber-text hidden sm:inline">
            AGENTS ACTIVE:
          </span>
          <span className={swarmEnabled ? "text-cyber-emerald font-bold" : "text-gray-400"}>
            {swarmEnabled ? "12" : "0"}
          </span>
        </div>

        {/* Separator */}
        <div className="h-4 w-px bg-white/10 hidden sm:block" />

        {/* Section Quick Icons */}
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="p-1.5 rounded-full text-cyber-muted hover:text-white hover:bg-white/10 transition-colors relative group"
              title={item.label}
              aria-label={`Jump to ${item.label}`}
            >
              {item.icon}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black border border-white/20 text-[10px] rounded text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className="h-4 w-px bg-white/10" />

        {/* Swarm FX Toggle */}
        <button
          onClick={onToggleSwarm}
          className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] text-cyber-muted hover:text-white transition-colors"
          title="Toggle Multi-Agent Swarm Visualization"
          aria-label="Toggle autonomous agent cursor swarm"
        >
          <Sparkles className="w-3 h-3 text-[#38BDF8]" />
          <span className="hidden md:inline">SWARM FX:</span>
          <span className={swarmEnabled ? "text-[#38BDF8] font-bold" : "text-gray-400"}>
            {swarmEnabled ? "ON" : "OFF"}
          </span>
          {swarmEnabled ? (
            <ToggleRight className="w-4 h-4 text-[#38BDF8]" />
          ) : (
            <ToggleLeft className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {/* Separator */}
        <div className="h-4 w-px bg-white/10 hidden sm:block" />

        {/* Command Palette Trigger */}
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-cyber-red/20 hover:bg-cyber-red/30 border border-cyber-red/40 text-[10px] text-cyber-red font-bold transition-all shadow-neon-red"
          title="Open Command Palette (Cmd+K)"
          aria-label="Open command palette"
        >
          <Command className="w-3 h-3 text-cyber-red" />
          <span>CMD+K</span>
        </button>
      </div>
    </aside>
  );
}
