"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Star,
  ExternalLink,
  Code2,
  Search,
  Clock,
  RefreshCw,
} from "lucide-react";
import { GitHubRepo } from "@/types/portfolio";
import { formatRelativeTime, GITHUB_USERNAME } from "@/lib/github";
import TypewriterReveal from "@/components/TypewriterReveal";
import ConstructCard from "@/components/ConstructCard";

interface GitHubFeedProps {
  initialRepos: GitHubRepo[];
}

export default function GitHubFeed({ initialRepos }: GitHubFeedProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshNotice, setRefreshNotice] = useState<string | null>(null);

  // Derive unique languages
  const languages = useMemo(() => {
    const set = new Set<string>();
    initialRepos.forEach((r) => {
      if (r.language) set.add(r.language);
    });
    return ["All", ...Array.from(set)];
  }, [initialRepos]);

  // Filter repos based on search and language tab
  const filteredRepos = useMemo(() => {
    return initialRepos.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        repo.topics.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesLang =
        selectedLanguage === "All" ||
        (repo.language && repo.language.toLowerCase() === selectedLanguage.toLowerCase());

      return matchesSearch && matchesLang;
    });
  }, [initialRepos, searchTerm, selectedLanguage]);

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    setRefreshNotice("POLLING REPOSITORIES...");
    try {
      const res = await fetch("/api/revalidate");
      if (res.ok) {
        setRefreshNotice("CACHE PURGED // FRESH REPOS SYNCED");
      }
    } catch {
      setRefreshNotice("SYNC COMPLETE");
    } finally {
      setTimeout(() => {
        setIsRefreshing(false);
        setRefreshNotice(null);
      }, 3000);
    }
  };

  return (
    <section id="github-feed" className="py-24 border-b border-[#1E1E1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Visual Status Indicator */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-cyber-red mb-2">
              <span className="w-2 h-2 bg-cyber-red" />
              <span>04 // AUTOMATIC GITHUB REPOSITORY TELEMETRY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              <TypewriterReveal
                text="Live Systems Feed & Source Artifacts."
                mode="heading"
                accentColor="red"
              />
            </h2>
            <div className="w-16 h-0.5 bg-cyber-red mt-3" />
          </div>

          {/* Visual GITHUB SYNC: LIVE Status Indicator */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-[#0A0A0A] border border-[#1E1E1E] text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald" />
              </span>
              <span className="text-cyber-muted">GITHUB SYNC:</span>
              <span className="text-cyber-emerald font-bold">LIVE</span>
              <span className="text-cyber-border">|</span>
              <span className="text-cyber-text">@{GITHUB_USERNAME}</span>
            </div>

            <button
              onClick={handleManualRefresh}
              disabled={isRefreshing}
              className="p-1.5 bg-[#0A0A0A] border border-[#1E1E1E] hover:border-cyber-red text-cyber-muted hover:text-white transition-colors"
              title="Force GitHub Revalidate"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-cyber-red" : ""}`} />
            </button>
          </div>
        </div>

        {refreshNotice && (
          <div className="mb-6 p-2.5 bg-cyber-red/10 border border-cyber-red/30 text-xs font-mono text-cyber-red flex items-center justify-between">
            <span>&gt; {refreshNotice}</span>
            <span className="animate-pulse font-bold">●</span>
          </div>
        )}

        {/* Live Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-[#0A0A0A] border border-[#1E1E1E] p-3 corner-brackets">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-cyber-red absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search repos by name, description, or topic..."
              className="w-full bg-[#050505] border border-[#1E1E1E] pl-9 pr-4 py-2 text-xs font-mono text-cyber-text placeholder:text-cyber-muted focus:outline-none focus:border-cyber-red"
            />
          </div>

          {/* Language filter pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="font-mono text-[11px] text-cyber-muted mr-1 hidden md:inline">
              LANG:
            </span>
            {["All", "TypeScript", "Python", "JavaScript"].map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`font-mono text-xs px-2.5 py-1 transition-all border ${
                  selectedLanguage.toLowerCase() === lang.toLowerCase()
                    ? "bg-cyber-red text-white border-cyber-red font-bold"
                    : "bg-[#050505] text-cyber-muted border-[#1E1E1E] hover:border-cyber-red hover:text-cyber-text"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Repositories 3-Column Grid wrapped in ConstructCard */}
        {filteredRepos.length === 0 ? (
          <div className="text-center py-16 bg-[#0A0A0A] border border-[#1E1E1E] p-8 font-mono text-xs text-cyber-muted">
            NO REPOSITORIES MATCHED QUERY: &quot;{searchTerm}&quot;
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo, idx) => (
              <ConstructCard
                key={repo.id}
                delayMs={(idx % 6) * 70}
                accentColor={idx % 3 === 0 ? "cyan" : "red"}
                dimensionPrefix={`REPO_0${idx + 1}`}
                className="p-5 corner-brackets flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top telemetry line: sync status & star count */}
                  <div className="flex items-center justify-between text-[10px] font-mono border-b border-[#161616] pb-2.5 mb-3.5">
                    <div className="flex items-center space-x-1.5 text-cyber-muted">
                      <Clock className="w-3 h-3 text-cyber-red" />
                      <span>{formatRelativeTime(repo.pushed_at)}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-cyber-text">
                      {repo.language && (
                        <span className="px-1.5 py-0.5 bg-[#141414] border border-[#222] text-[10px] text-cyber-red font-bold">
                          {repo.language}
                        </span>
                      )}
                      <div className="flex items-center space-x-1 text-cyber-muted">
                        <Star className="w-3 h-3 text-cyber-text" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                    </div>
                  </div>

                  {/* Repository Name */}
                  <h3 className="font-display font-bold text-base text-white group-hover:text-cyber-red transition-colors mb-2 break-all">
                    {repo.name}
                  </h3>

                  {/* Repository Description */}
                  <p className="font-sans text-xs text-cyber-muted leading-relaxed line-clamp-3 mb-4">
                    {repo.description || "Active engineering repository with continuous integration and automated builds."}
                  </p>

                  {/* Topics Pills */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="font-mono text-[9px] px-1.5 py-0.5 bg-[#050505] text-[#777] border border-[#1a1a1a]"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Links: Source Code + Live Deployment */}
                <div className="pt-3 border-t border-[#161616] flex items-center justify-between font-mono text-xs">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-cyber-text hover:text-cyber-red transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5 text-cyber-red" />
                    <span>SOURCE</span>
                  </a>

                  {repo.homepage ? (
                    <a
                      href={repo.homepage.startsWith("http") ? repo.homepage : `https://${repo.homepage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-cyber-emerald hover:text-white transition-colors"
                    >
                      <span>LIVE</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] text-cyber-border font-mono">
                      CLI / REPO ONLY
                    </span>
                  )}
                </div>
              </ConstructCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
