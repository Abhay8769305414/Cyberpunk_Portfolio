"use client";

import React, { useState, useEffect, useRef } from "react";

export interface Agent {
  id: string;
  label: string;
  color: string;
  role: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  angle: number;
  speed: number;
  state: "vortex" | "scatter" | "building" | "patrol";
  targetElement?: string;
}

interface AgentCursorSwarmProps {
  enabled?: boolean;
}

const AGENT_CONFIGS = [
  { id: "arch-01", label: "arch-01", color: "#38BDF8", role: "ARCHITECT" },
  { id: "llm-sync", label: "llm-sync", color: "#FF1E27", role: "LLM STREAM" },
  { id: "ui-node", label: "ui-node", color: "#38BDF8", role: "UI RENDERER" },
  { id: "data-agent", label: "data-agent", color: "#FFFFFF", role: "DATA PIPELINE" },
  { id: "recon-sub", label: "recon-sub", color: "#38BDF8", role: "RECONCILE" },
  { id: "agent-core", label: "agent-core", color: "#FF1E27", role: "CORE ORCHESTRATOR" },
  { id: "qa-audit", label: "qa-audit", color: "#38BDF8", role: "QA MATRIX" },
  { id: "sec-guard", label: "sec-guard", color: "#FF1E27", role: "SECURITY GATEWAY" },
  { id: "stream-09", label: "stream-09", color: "#FFFFFF", role: "TOKEN STREAM" },
  { id: "perf-opt", label: "perf-opt", color: "#38BDF8", role: "APM TRACER" },
  { id: "cloud-eng", label: "cloud-eng", color: "#FFFFFF", role: "INFRA PROVISION" },
  { id: "db-shard", label: "db-shard", color: "#38BDF8", role: "STATE PERSIST" },
];

interface ActiveSelectionBox {
  id: string;
  rect: { top: number; left: number; width: number; height: number };
  agentName: string;
  color: string;
}

export default function AgentCursorSwarm({ enabled = true }: AgentCursorSwarmProps) {
  const [bootPhase, setBootPhase] = useState<"vortex" | "scatter" | "done">("vortex");
  const [bootProgress, setBootProgress] = useState(0);
  const [activeBoxes, setActiveBoxes] = useState<ActiveSelectionBox[]>([]);
  const agentsRef = useRef<Agent[]>([]);
  const cursorElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lastSectionRef = useRef<string>("");
  const animFrameRef = useRef<number | null>(null);

  // Initialize agents at screen center
  useEffect(() => {
    if (typeof window === "undefined") return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    agentsRef.current = AGENT_CONFIGS.map((cfg, idx) => ({
      ...cfg,
      x: centerX,
      y: centerY,
      targetX: centerX + (Math.random() - 0.5) * 80,
      targetY: centerY + (Math.random() - 0.5) * 80,
      angle: (idx / AGENT_CONFIGS.length) * Math.PI * 2,
      speed: 0.05 + Math.random() * 0.04,
      state: "vortex",
    }));

    // Boot timeline:
    // 0 -> 800ms: center vortex
    // 800ms -> 2200ms: scatter outward to hero targets
    // 2500ms: boot finished, snap to live view
    const progressInterval = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    const scatterTimeout = setTimeout(() => {
      setBootPhase("scatter");
      agentsRef.current.forEach((agent) => {
        agent.state = "scatter";
        // Target scattered locations in Hero
        agent.targetX = 60 + Math.random() * (window.innerWidth - 120);
        agent.targetY = 80 + Math.random() * (window.innerHeight - 180);
      });

      // Temporary wireframe bounding boxes in Hero
      const heroBoxes: ActiveSelectionBox[] = [
        {
          id: "box-hero-title",
          rect: {
            top: window.innerHeight * 0.28,
            left: Math.max(20, window.innerWidth * 0.08),
            width: Math.min(580, window.innerWidth * 0.5),
            height: 140,
          },
          agentName: "arch-01",
          color: "#38BDF8",
        },
        {
          id: "box-hero-avatar",
          rect: {
            top: window.innerHeight * 0.25,
            left: Math.max(window.innerWidth * 0.55, 300),
            width: Math.min(380, window.innerWidth * 0.35),
            height: 320,
          },
          agentName: "ui-node",
          color: "#FF1E27",
        },
      ];
      setActiveBoxes(heroBoxes);
    }, 800);

    const doneTimeout = setTimeout(() => {
      setBootPhase("done");
      setActiveBoxes([]);
      agentsRef.current.forEach((agent) => {
        agent.state = "patrol";
      });
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(scatterTimeout);
      clearTimeout(doneTimeout);
    };
  }, []);

  // Scroll observer: when entering a section, dispatch 3-5 agents to construct it
  useEffect(() => {
    if (typeof window === "undefined" || !enabled) return;

    const sections = [
      { id: "philosophy", label: "01 // PHILOSOPHY" },
      { id: "deployments", label: "02 // DEPLOYMENTS" },
      { id: "github-feed", label: "04 // GITHUB FEED" },
      { id: "systems-matrix", label: "03 // SYSTEMS MATRIX" },
      { id: "contact", label: "05 // TERMINAL CONTACT" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== lastSectionRef.current) {
            lastSectionRef.current = entry.target.id;
            const targetEl = entry.target as HTMLElement;
            const rect = targetEl.getBoundingClientRect();

            // Pick 3-4 agents to fly over and construct
            const assignedAgents = agentsRef.current.slice(0, 4);
            assignedAgents.forEach((agent, i) => {
              agent.state = "building";
              agent.targetX = Math.max(40, rect.left + 50 + (i * rect.width) / 4);
              agent.targetY = Math.max(40, rect.top + 40 + Math.random() * 120);
            });

            // Add visible construction bounding box
            const newBox: ActiveSelectionBox = {
              id: `box-${entry.target.id}-${Date.now()}`,
              rect: {
                top: Math.max(20, rect.top + 20),
                left: Math.max(20, rect.left + 20),
                width: Math.min(window.innerWidth - 40, rect.width - 40),
                height: Math.min(window.innerHeight - 80, rect.height - 40),
              },
              agentName: assignedAgents[0].label,
              color: assignedAgents[0].color,
            };

            setActiveBoxes((prev) => [...prev.slice(-2), newBox]);

            // Release after 1.4s
            setTimeout(() => {
              assignedAgents.forEach((agent) => {
                agent.state = "patrol";
              });
              setActiveBoxes((prev) => prev.filter((b) => b.id !== newBox.id));
            }, 1400);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [enabled]);

  // Main 60fps Animation Loop
  useEffect(() => {
    if (!enabled) return;

    let time = 0;

    const loop = () => {
      time += 0.02;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const centerX = width / 2;
      const centerY = height / 2;

      agentsRef.current.forEach((agent, idx) => {
        if (agent.state === "vortex") {
          // Center swirl
          agent.angle += 0.08;
          const radius = 60 + Math.sin(time * 3 + idx) * 35;
          agent.x = centerX + Math.cos(agent.angle) * radius;
          agent.y = centerY + Math.sin(agent.angle) * radius;
        } else if (agent.state === "scatter" || agent.state === "building") {
          // Smooth lerp to target
          agent.x += (agent.targetX - agent.x) * 0.12;
          agent.y += (agent.targetY - agent.y) * 0.12;
        } else {
          // Ambient patrol orbit with gentle sine wave drift
          const wanderX = Math.cos(time + idx * 1.5) * 45;
          const wanderY = Math.sin(time * 0.8 + idx * 1.2) * 35;

          // Slowly shift target around viewport
          if (Math.abs(agent.targetX - agent.x) < 20 && Math.abs(agent.targetY - agent.y) < 20) {
            agent.targetX = 60 + Math.random() * (width - 120);
            agent.targetY = 60 + Math.random() * (height - 120);
          }

          agent.x += (agent.targetX + wanderX - agent.x) * 0.02;
          agent.y += (agent.targetY + wanderY - agent.y) * 0.02;
        }

        // Apply hardware-accelerated transform directly to DOM
        const el = cursorElementsRef.current[idx];
        if (el) {
          el.style.transform = `translate3d(${agent.x}px, ${agent.y}px, 0)`;
        }
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Initial Boot Sequence Curtain (First 2.5s) */}
      {bootPhase !== "done" && (
        <div className="fixed inset-0 bg-[#050505]/90 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-opacity duration-700">
          <div className="p-6 bg-[#0A0A0A] border border-[#1E1E1E] corner-brackets text-center max-w-md w-full shadow-2xl relative">
            <div className="flex items-center justify-between text-xs font-mono text-cyber-muted pb-3 mb-3 border-b border-[#1E1E1E]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
                <span className="text-[#38BDF8] font-bold">SWARM::INIT</span>
              </span>
              <span className="text-white font-bold">{bootProgress}%</span>
            </div>

            <div className="space-y-2">
              <div className="font-display font-extrabold text-lg text-white tracking-wide">
                GENERATING PORTFOLIO...
              </div>
              <p className="font-mono text-xs text-cyber-muted">
                &gt; 12 Autonomous Agents compiling contracts, data matrix &amp; live feeds
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#111] h-1.5 mt-4 overflow-hidden border border-[#222]">
              <div
                className="h-full bg-gradient-to-r from-cyber-red via-[#38BDF8] to-white transition-all duration-150"
                style={{ width: `${bootProgress}%` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-[#555]">
              <span>CLUSTER: NOIDA_NODE</span>
              <span>12 WORKERS ORCHESTRATING</span>
            </div>
          </div>
        </div>
      )}

      {/* Temporary Wireframe Selection Bounding Boxes during construction */}
      {activeBoxes.map((box) => (
        <div
          key={box.id}
          className="fixed pointer-events-none border border-dashed transition-all duration-300 z-40"
          style={{
            top: `${box.rect.top}px`,
            left: `${box.rect.left}px`,
            width: `${box.rect.width}px`,
            height: `${box.rect.height}px`,
            borderColor: box.color,
            boxShadow: `0 0 15px ${box.color}33`,
          }}
        >
          {/* Corner Square Handles */}
          <span
            className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white border"
            style={{ borderColor: box.color }}
          />
          <span
            className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border"
            style={{ borderColor: box.color }}
          />
          <span
            className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white border"
            style={{ borderColor: box.color }}
          />
          <span
            className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border"
            style={{ borderColor: box.color }}
          />

          {/* Builder tag */}
          <div
            className="absolute -top-3.5 left-2 px-1.5 py-0.2 bg-black border font-mono text-[9px] font-bold tracking-wider uppercase"
            style={{ borderColor: box.color, color: box.color }}
          >
            {box.agentName}: CONSTRUCTING...
          </div>
        </div>
      ))}

      {/* 12 Autonomous Builder Cursors */}
      {AGENT_CONFIGS.map((cfg, idx) => (
        <div
          key={cfg.id}
          ref={(el) => {
            cursorElementsRef.current[idx] = el;
          }}
          className="absolute top-0 left-0 will-change-transform z-50 pointer-events-none select-none"
          style={{
            transform: "translate3d(-100px, -100px, 0)",
          }}
        >
          {/* Crisp Figma Vector Cursor */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] -translate-x-1 -translate-y-1"
          >
            <path
              d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
              fill={cfg.color}
              stroke="#000000"
              strokeWidth="1.5"
            />
          </svg>

          {/* Tiny Monospace Agent Badge */}
          <div
            className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-sm shadow-md border text-[9px] font-mono font-bold tracking-tight -mt-1 ml-3 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.88)",
              borderColor: cfg.color,
              color: cfg.color,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: cfg.color }}
            />
            <span>{cfg.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
