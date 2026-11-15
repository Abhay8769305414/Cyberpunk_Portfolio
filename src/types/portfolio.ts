export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  language: string | null;
  topics: string[];
  pushed_at: string;
  updated_at: string;
  created_at: string;
  open_issues_count: number;
  archived: boolean;
  visibility: string;
}

export interface FlagshipProject {
  id: string;
  badge: string;
  title: string;
  stack: string[];
  description: string;
  metrics: {
    label: string;
    description: string;
    icon?: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SystemsMatrixItem {
  id: string;
  category: "all" | "ai" | "data" | "fullstack";
  title: string;
  subtitle: string;
  skills: string[];
  icon: string;
  metricsBadge: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  bullets: string[];
  techStack: string[];
}

export interface CredentialItem {
  title: string;
  organization: string;
  badge: string;
  type: "certification" | "award" | "fellowship";
}
