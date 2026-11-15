"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Database,
  Server,
  Layout,
  Cloud,
  Target,
  CheckCircle,
  Cpu,
} from "lucide-react";
import { SYSTEMS_MATRIX } from "@/lib/data";
import TypewriterReveal from "@/components/TypewriterReveal";
import ConstructCard from "@/components/ConstructCard";

export default function SystemsMatrix() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Systems" },
    { id: "ai", label: "AI & Agents" },
    { id: "data", label: "Data & FinTech" },
    { id: "fullstack", label: "Full-Stack & Cloud" },
  ];

  const filteredMatrix = SYSTEMS_MATRIX.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-5 h-5 text-cyber-red" />;
      case "Database":
        return <Database className="w-5 h-5 text-cyber-red" />;
      case "Server":
        return <Server className="w-5 h-5 text-cyber-red" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-cyber-red" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-cyber-red" />;
      case "Target":
        return <Target className="w-5 h-5 text-cyber-red" />;
      default:
        return <Cpu className="w-5 h-5 text-cyber-red" />;
    }
  };

  return (
    <section id="systems-matrix" className="py-24 border-b border-[#1E1E1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-cyber-red mb-2">
              <span className="w-2 h-2 bg-cyber-red" />
              <span>03 // THE SYSTEMS MATRIX</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              <TypewriterReveal
                text="Architectural Capabilities & Stacks."
                mode="heading"
                accentColor="red"
              />
            </h2>
            <div className="w-16 h-0.5 bg-cyber-red mt-4" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0A0A0A] border border-[#1E1E1E] p-1.5 corner-brackets">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-mono text-xs px-3.5 py-1.5 transition-all ${
                  activeTab === tab.id
                    ? "bg-cyber-red text-white font-bold shadow-neon-red"
                    : "text-cyber-muted hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Capability Cards Grid wrapped in ConstructCard */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMatrix.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ConstructCard
                  delayMs={idx * 70}
                  accentColor={idx % 2 === 0 ? "cyan" : "red"}
                  dimensionPrefix={`CAPABILITY_0${idx + 1}`}
                  className="p-6 corner-brackets flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Red Header Tag & Telemetry Badge */}
                    <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-3 mb-4">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-cyber-red/10 text-cyber-red border border-cyber-red/30 tracking-wider">
                        {item.metricsBadge}
                      </span>
                      <div className="p-1.5 bg-[#050505] border border-[#222]">
                        {getIcon(item.icon)}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-cyber-red transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-cyber-muted mb-5">
                      {item.subtitle}
                    </p>

                    {/* Skills Grid */}
                    <div className="space-y-2">
                      {item.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2 text-xs font-mono text-[#AAA] py-0.5"
                        >
                          <span className="w-1.5 h-1.5 bg-cyber-red/70 flex-shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Matrix Index Indicator */}
                  <div className="pt-4 mt-6 border-t border-[#161616] flex items-center justify-between font-mono text-[10px] text-cyber-muted">
                    <span>SYSTEM::SPEC_CHECK</span>
                    <span className="text-cyber-emerald flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-cyber-emerald" />
                      CERTIFIED
                    </span>
                  </div>
                </ConstructCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
