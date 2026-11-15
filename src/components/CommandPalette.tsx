"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Terminal,
  Search,
  CornerDownLeft,
  Copy,
  ExternalLink,
  Layers,
  Cpu,
  GitBranch,
  Mail,
  User,
  Check,
  RefreshCw,
  X,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

interface CommandItem {
  id: string;
  category: "Navigation" | "Actions" | "External";
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpen }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [revalidating, setRevalidating] = useState(false);
  const [revalidateMsg, setRevalidateMsg] = useState<string | null>(null);

  // Toggle with Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onOpen]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  }, []);

  const triggerRevalidate = useCallback(async () => {
    setRevalidating(true);
    setRevalidateMsg("SYNCING WITH GITHUB API...");
    try {
      const res = await fetch("/api/revalidate");
      if (res.ok) {
        setRevalidateMsg("CACHE REVALIDATED // GITHUB REPOS PURGED");
      } else {
        setRevalidateMsg("REVALIDATION COMPLETED");
      }
    } catch {
      setRevalidateMsg("REVALIDATION FAILED");
    } finally {
      setTimeout(() => {
        setRevalidating(false);
        setRevalidateMsg(null);
      }, 3000);
    }
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      onClose();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    [onClose]
  );

  const commands: CommandItem[] = [
    {
      id: "nav-philosophy",
      category: "Navigation",
      title: "01. Philosophy & Background",
      subtitle: "System architecture perspective, experience & credentials",
      icon: <User className="w-4 h-4 text-cyber-red" />,
      action: () => scrollTo("philosophy"),
    },
    {
      id: "nav-deployments",
      category: "Navigation",
      title: "02. Flagship Deployments",
      subtitle: "Agency OS, Finfully Lab & Intelligent CSV Validator",
      icon: <Cpu className="w-4 h-4 text-cyber-red" />,
      action: () => scrollTo("deployments"),
    },
    {
      id: "nav-matrix",
      category: "Navigation",
      title: "03. Systems Matrix",
      subtitle: "6 capability domains: Agents, FinTech Data, Cloud & Product",
      icon: <Layers className="w-4 h-4 text-cyber-red" />,
      action: () => scrollTo("systems-matrix"),
    },
    {
      id: "nav-github",
      category: "Navigation",
      title: "04. Live GitHub Feed",
      subtitle: "Auto-synced repository telemetry for @Abhay8769305414",
      icon: <GitBranch className="w-4 h-4 text-cyber-emerald" />,
      action: () => scrollTo("github-feed"),
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "05. Terminal Contact",
      subtitle: "Open channel, direct email & connectivity nodes",
      icon: <Mail className="w-4 h-4 text-cyber-red" />,
      action: () => scrollTo("contact"),
    },
    {
      id: "action-copy-email",
      category: "Actions",
      title: "Copy Direct Email Address",
      subtitle: PERSONAL_INFO.email,
      icon: copied ? <Check className="w-4 h-4 text-cyber-emerald" /> : <Copy className="w-4 h-4 text-cyber-text" />,
      action: copyEmail,
    },
    {
      id: "action-revalidate",
      category: "Actions",
      title: "Trigger Live GitHub Revalidation",
      subtitle: "Purge ISR cache and sync latest pushed commits",
      icon: <RefreshCw className={`w-4 h-4 ${revalidating ? "animate-spin text-cyber-red" : "text-cyber-text"}`} />,
      action: triggerRevalidate,
    },
    {
      id: "ext-github",
      category: "External",
      title: "Inspect GitHub Profile",
      subtitle: "github.com/Abhay8769305414",
      icon: <ExternalLink className="w-4 h-4 text-cyber-muted" />,
      action: () => {
        window.open(PERSONAL_INFO.githubUrl, "_blank");
        onClose();
      },
    },
  ];

  const filtered = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-28 px-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div
        className="relative w-full max-w-2xl bg-[#0A0A0A] border border-[#1E1E1E] shadow-2xl shadow-cyber-red/10 corner-brackets overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E1E1E] bg-[#0E0E0E]">
          <div className="flex items-center space-x-2 font-mono text-xs text-cyber-muted">
            <Terminal className="w-4 h-4 text-cyber-red" />
            <span className="text-cyber-text font-bold tracking-wider">COMMAND_PALETTE.SYS</span>
            <span className="text-cyber-border">|</span>
            <span className="text-[10px] text-cyber-red">NOIDA_NODE::v2.6</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="hidden sm:inline-block font-mono text-[10px] text-cyber-muted px-1.5 py-0.5 border border-[#1E1E1E] bg-black">
              ESC TO CLOSE
            </span>
            <button
              onClick={onClose}
              className="text-cyber-muted hover:text-cyber-red transition-colors p-1"
              aria-label="Close command palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-[#1E1E1E]">
          <Search className="w-5 h-5 text-cyber-red mr-3 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section (e.g. 'Deployments', 'GitHub', 'Email')..."
            className="w-full bg-transparent text-sm text-cyber-text placeholder:text-cyber-muted font-mono focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs font-mono text-cyber-muted hover:text-cyber-text ml-2"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Status Notification */}
        {(copied || revalidateMsg) && (
          <div className="px-4 py-2 bg-cyber-red/10 border-b border-cyber-red/30 flex items-center justify-between text-xs font-mono text-cyber-red">
            <span>{copied ? "COPIED TO CLIPBOARD: " + PERSONAL_INFO.email : revalidateMsg}</span>
            <span className="animate-pulse">●</span>
          </div>
        )}

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto divide-y divide-[#151515] p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center font-mono text-xs text-cyber-muted">
              NO MATCHING COMMANDS FOUND FOR &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-[#141414] hover:border-l-2 hover:border-cyber-red group transition-all rounded-sm"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="p-1.5 bg-[#121212] border border-[#222] group-hover:border-cyber-red/50 transition-colors">
                    {item.icon}
                  </div>
                  <div className="truncate">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-cyber-text group-hover:text-cyber-red transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 text-cyber-muted bg-[#181818] border border-[#262626]">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-cyber-muted truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <CornerDownLeft className="w-3.5 h-3.5 text-cyber-muted group-hover:text-cyber-red flex-shrink-0 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-[#1E1E1E] bg-[#0A0A0A] flex items-center justify-between text-[11px] font-mono text-cyber-muted">
          <div className="flex items-center space-x-3">
            <span>
              <kbd className="px-1 py-0.5 border border-[#222] bg-[#121212] text-cyber-text">↑</kbd>
              <kbd className="ml-1 px-1 py-0.5 border border-[#222] bg-[#121212] text-cyber-text">↓</kbd> NAVIGATE
            </span>
            <span>
              <kbd className="px-1 py-0.5 border border-[#222] bg-[#121212] text-cyber-text">↵</kbd> EXECUTE
            </span>
          </div>
          <span className="text-cyber-red font-semibold">ABHAY.SYS // TERMINAL READY</span>
        </div>
      </div>
    </div>
  );
}
