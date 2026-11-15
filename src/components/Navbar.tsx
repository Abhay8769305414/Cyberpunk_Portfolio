"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Command, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "01. Philosophy", href: "#philosophy" },
    { label: "02. Deployments", href: "#deployments" },
    { label: "03. Systems Matrix", href: "#systems-matrix" },
    { label: "04. GitHub Feed", href: "#github-feed" },
    { label: "05. Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-[#1E1E1E] py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Monospace Logo ABHAY.SYS with blinking cursor */}
          <Link
            href="/"
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-8 h-8 bg-[#0A0A0A] border border-[#222] group-hover:border-cyber-red flex items-center justify-center transition-colors">
              <Terminal className="w-4 h-4 text-cyber-red" />
            </div>
            <div className="flex items-baseline space-x-1 font-mono text-sm tracking-widest font-bold text-cyber-text group-hover:text-cyber-red transition-colors">
              <span>ABHAY.SYS</span>
              <span className="w-2 h-4 bg-cyber-red cursor-blink inline-block translate-y-[2px]" />
            </div>
          </Link>

          {/* Center: Desktop Navigation links */}
          <nav className="hidden lg:flex items-center space-x-6 font-mono text-xs text-cyber-muted">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-cyber-text transition-colors relative py-1 hover:border-b-2 hover:border-cyber-red"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Command palette trigger + GitHub Sync Badge + Resume button */}
          <div className="flex items-center space-x-3">
            {/* Cmd+K trigger button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center space-x-2 px-2.5 py-1.5 bg-[#0A0A0A] border border-[#1E1E1E] hover:border-cyber-red text-cyber-muted hover:text-cyber-text text-xs font-mono transition-all rounded-sm"
              title="Open Command Palette (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-cyber-red" />
              <span className="text-[11px]">CMD+K</span>
            </button>

            {/* Live GitHub sync badge */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-[#0A0A0A] border border-[#1E1E1E] text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
              <span className="text-cyber-muted">SYNCED:</span>
              <span className="text-cyber-text font-semibold">
                {PERSONAL_INFO.githubUsername}
              </span>
            </div>

            {/* Resume button */}
            <a
              href="#contact"
              className="relative inline-flex items-center space-x-1 px-3.5 py-1.5 text-xs font-mono font-bold text-white bg-cyber-red hover:bg-[#D9141C] transition-all corner-brackets shadow-neon-red"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-cyber-muted hover:text-cyber-red border border-[#1E1E1E] bg-[#0A0A0A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-2 border-t border-[#1E1E1E] bg-[#0A0A0A]/95 backdrop-blur-md px-2 space-y-3 font-mono text-xs">
            {/* Live status badge in mobile menu */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#111] border border-[#222]">
              <span className="text-cyber-muted text-[11px]">GITHUB SYNC</span>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
                <span className="text-cyber-text text-[11px] font-bold">LIVE // @{PERSONAL_INFO.githubUsername}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-between px-3 py-2 bg-[#121212] border border-cyber-red/40 text-cyber-text text-left"
            >
              <div className="flex items-center space-x-2">
                <Command className="w-4 h-4 text-cyber-red" />
                <span>OPEN TERMINAL PALETTE</span>
              </div>
              <span className="text-[10px] bg-cyber-red/20 text-cyber-red px-1.5 py-0.5">CMD+K</span>
            </button>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-cyber-muted hover:text-cyber-text hover:bg-[#141414] hover:border-l-2 hover:border-cyber-red transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
