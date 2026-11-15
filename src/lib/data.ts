import {
  FlagshipProject,
  SystemsMatrixItem,
  ExperienceItem,
  CredentialItem,
} from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "ABHAY PRATAP SINGH",
  title: "AI Systems Engineer • Data & FinTech Analyst • Product-Minded Builder",
  systemStatus: "SYSTEM STATUS: OPERATIONAL // NOIDA, IN",
  systemNode: "NODE: 28.5355° N, 77.3910° E",
  currentRole: "ROLE: ASSOCIATE ANALYST @ HIGHSPRING",
  coreStack: "STACK: PYTHON • TS • SQL • LLMS",
  education: "Computer Science graduate (VIT Bhopal '26)",
  bioSummary:
    "Computer Science graduate (VIT Bhopal '26) architecting multi-agent orchestration platforms, deterministic financial automation pipelines, and high-reliability data workflows.",
  email: "abhays0702@gmail.com",
  phone: "+91-8769305414",
  location: "Noida / Delhi NCR, India",
  githubUsername: "Abhay8769305414",
  githubUrl: "https://github.com/Abhay8769305414",
  resumeUrl: "#contact",
};

export const TELEMETRY_METRICS = [
  {
    value: "99.9%",
    label: "PRODUCTION UPTIME (LUMMRA AI)",
    subtext: "Fault-tolerant agent gateway & microservices",
  },
  {
    value: "5,000+",
    label: "RECORDS VALIDATED (>95% ACCURACY)",
    subtext: "High-throughput reconciliation pipeline",
  },
  {
    value: "70%",
    label: "MANUAL EFFORT REDUCTION",
    subtext: "Automated anomaly & ingestion pipelines",
  },
  {
    value: "8.20",
    label: "B.TECH CSE CGPA (VIT BHOPAL)",
    subtext: "Class of 2026 • Core Systems & CS",
  },
];

export const PHILOSOPHY_NARRATIVE = [
  "I operate at the intersection of backend engineering, financial data reconciliation, and AI agent reliability. Traditional software engineering relies on deterministic state, whereas modern AI systems introduce stochastic outputs that require defensive architectural boundaries. My core engineering philosophy is simple: build systems where agents are constrained by standardized contracts, deterministic routing, idempotency, retries, and human-in-the-loop oversight.",
  "Whether validating multi-thousand row international client datasets at Highspring, debugging distributed microservice transaction pipelines with Datadog APM at Credeau Solutions, or shipping 99.9% uptime LLM features at Lummra AI, I engineer systems designed to fail safely, recover gracefully, and produce verifiable outputs.",
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Highspring",
    role: "Associate Analyst",
    period: "Oct 2026 – Present",
    type: "Current Role",
    bullets: [
      "Overseeing international client dataset completeness, consistency, exception investigation, and automated operational reporting.",
      "Architecting automated anomaly detection workflows that identify systemic variances before client delivery.",
      "Partnering cross-functionally across engineering and client delivery teams to streamline high-volume analytical pipelines.",
    ],
    techStack: ["Python", "SQL", "Data Quality", "Exception Triaging", "Analytics"],
  },
  {
    company: "Credeau Solutions Pvt. Ltd. (FinTech)",
    role: "Data & Software Engineering Intern",
    period: "Mar 2026 – Jun 2026",
    type: "FinTech Internship",
    bullets: [
      "Engineered Python/SQL financial and transaction pipelines ensuring rigorous balance ledger integrity.",
      "Developed automated MySQL and REST reconciliation microservices to trace transaction state discrepancies.",
      "Utilized Datadog APM for microservice tracing, latency optimization, and rapid Root Cause Analysis (RCA).",
    ],
    techStack: ["Python", "FastAPI", "MySQL", "REST APIs", "Datadog APM", "Docker"],
  },
  {
    company: "Lummra AI",
    role: "SDE Intern",
    period: "Nov 2025 – Mar 2026",
    type: "AI Platform Internship",
    bullets: [
      "Shipped full-stack React, TypeScript, and Node.js features with real-time LLM API integrations.",
      "Maintained 99.9% production uptime through structured fallback routing and token-budget rate limiting.",
      "Implemented responsive UI components with stateful streaming completions and asynchronous evaluation steps.",
    ],
    techStack: ["TypeScript", "React", "Node.js", "OpenAI API", "PostgreSQL", "Tailwind CSS"],
  },
];

export const CREDENTIALS: CredentialItem[] = [
  {
    title: "AWS Academy Cloud Practitioner",
    organization: "Amazon Web Services",
    badge: "CLOUD ARCHITECTURE",
    type: "certification",
  },
  {
    title: "Oracle Cloud 2025 Generative AI Professional",
    organization: "Oracle",
    badge: "GEN-AI SPECIALIST",
    type: "certification",
  },
  {
    title: "IBM AI Fundamentals",
    organization: "IBM",
    badge: "AI FOUNDATIONS",
    type: "certification",
  },
  {
    title: "McKinsey Forward Program",
    organization: "McKinsey & Company",
    badge: "STRATEGY & LEADERSHIP",
    type: "fellowship",
  },
  {
    title: "Top Selected Team — Johns Hopkins International Hackathon",
    organization: "Johns Hopkins University",
    badge: "GLOBAL TOP 5% (550+ TEAMS)",
    type: "award",
  },
  {
    title: "National Hackathon Runner-Up",
    organization: "National Technical Summit",
    badge: "TEAM LEAD (10 MEMBERS)",
    type: "award",
  },
];

export const FLAGSHIP_SPOTLIGHT: FlagshipProject = {
  id: "agency-os",
  badge: "FLAGSHIP ARCHITECTURE // AGENTIC ORCHESTRATION",
  title: "Agency OS — Multi-Agent Orchestration & Execution Platform",
  stack: ["TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "Docker", "Next.js"],
  description:
    "Production-grade agent execution engine designed to manage autonomous workflows through standardized schema contracts, deterministic tool execution, automated evaluation steps, retry policies, timeout circuit-breakers, asynchronous cancellation, and confidence-based human-in-the-loop review.",
  metrics: [
    {
      label: "EXECUTION TELEMETRY",
      description:
        "Continuously persists task state, confidence ratings, token consumption, per-step latency, and retry tallies to PostgreSQL for complete auditability.",
      icon: "Activity",
    },
    {
      label: "GUARDED PERSISTENCE",
      description:
        "Confidence-threshold human-in-the-loop routing: tasks with confidence < 0.85 route to human triage queues before destructive commits.",
      icon: "ShieldAlert",
    },
    {
      label: "FAULT TOLERANCE",
      description:
        "Deterministic exponential backoff retry policies, hard timeout circuit-breakers, and graceful SIGTERM cancellation hooks.",
      icon: "Cpu",
    },
  ],
  githubUrl: "https://github.com/Abhay8769305414/Agency-OS",
  liveUrl: "https://agency-os.dev",
  featured: true,
};

export const SECONDARY_FLAGSHIPS: FlagshipProject[] = [
  {
    id: "finfully-automation-lab",
    badge: "FINTECH OPS // DETERMINISTIC AGENTS",
    title: "Finfully Automation Lab",
    stack: ["Python", "FastAPI", "SQLite", "REST APIs", "Pydantic", "LLMs"],
    description:
      "Financial operations automation platform featuring streaming CSV validation, transaction balance reconciliation, structured customer-intent classification, deterministic idempotency checks, and adversarial prompt-injection safeguards.",
    metrics: [
      {
        label: "DETERMINISTIC ROUTING",
        description: "Zero hallucination risk on money movement using Pydantic strict schemas & state machines.",
      },
      {
        label: "PROMPT SAFEGUARDS",
        description: "Layered injection sanitization and heuristic balance reconciliation before database writes.",
      },
    ],
    githubUrl: "https://github.com/Abhay8769305414/finfully-automation-lab",
    liveUrl: "https://finfully.vercel.app",
  },
  {
    id: "intelligent-csv-validator",
    badge: "DATA PIPELINE // 5K+ RECORDS",
    title: "Intelligent CSV Import & Data Validation System",
    stack: ["Python", "SQL", "React", "Node.js", "MongoDB", "Pandas"],
    description:
      "Automated ingestion and anomaly detection pipeline engineered to process 5,000+ complex transaction records at >95% accuracy while cutting manual validation effort by ~70% via intelligent column mapping and semantic type inference.",
    metrics: [
      {
        label: "ACCURACY RATE",
        description: ">95% accuracy across multi-source heterogenous schema structures.",
      },
      {
        label: "EFFORT REDUCTION",
        description: "Automated 70% of manual reconciliation overhead with instant anomaly telemetry.",
      },
    ],
    githubUrl: "https://github.com/Abhay8769305414/intelligent-csv-validator",
    liveUrl: "https://csv-validator.app",
  },
];

export const SYSTEMS_MATRIX: SystemsMatrixItem[] = [
  {
    id: "agentic-workflows",
    category: "ai",
    title: "AGENTIC WORKFLOWS",
    subtitle: "Orchestration, Tools & Safeguards",
    skills: [
      "OpenAI API",
      "LangChain",
      "RAG Architecture",
      "FAISS Vector Search",
      "Tool Calling Protocols",
      "Pydantic Structured Outputs",
      "Prompt Engineering",
      "Human-in-the-Loop Triage",
    ],
    icon: "Bot",
    metricsBadge: "CONFIDENCE-BASED ROUTING",
  },
  {
    id: "data-reconciliation",
    category: "data",
    title: "DATA & RECONCILIATION",
    subtitle: "High-Volume Integrity & Exception Triaging",
    skills: [
      "SQL (PostgreSQL / MySQL / SQLite)",
      "MongoDB",
      "Data Cleaning & Ingestion",
      "Anomaly & Variance Detection",
      "Transaction Ledger Matching",
      "KPI & Operational Reporting",
      "Pandas / NumPy",
      "Data Quality Pipelines",
    ],
    icon: "Database",
    metricsBadge: ">95% VALIDATION ACCURACY",
  },
  {
    id: "backend-apis",
    category: "fullstack",
    title: "BACKEND & APIS",
    subtitle: "High-Reliability Distributed Microservices",
    skills: [
      "Python (FastAPI / Flask)",
      "Node.js / Express.js",
      "RESTful API Architecture",
      "Idempotency & Deduplication",
      "Exponential Backoff Retries",
      "Timeout & Circuit Breaking",
      "Asynchronous Task Queues",
      "Database Indexing & Query Tuning",
    ],
    icon: "Server",
    metricsBadge: "SUB-100MS LATENCY TARGETS",
  },
  {
    id: "frontend-product",
    category: "fullstack",
    title: "FRONTEND & PRODUCT",
    subtitle: "Interactive, High-Performance Cyber UI",
    skills: [
      "React.js / Next.js 15 (App Router)",
      "TypeScript",
      "Tailwind CSS / PostCSS",
      "Framer Motion / Micro-Interactions",
      "Agile / Scrum Methodologies",
      "PRD & Spec Writing",
      "Root-Cause Analysis (RCA)",
      "Feature Decomposition",
    ],
    icon: "Layout",
    metricsBadge: "99.9% UPTIME INTERFACES",
  },
  {
    id: "cloud-observability",
    category: "fullstack",
    title: "CLOUD & OBSERVABILITY",
    subtitle: "Traceability, Infrastructure & CI/CD",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Docker & Containerization",
      "Datadog APM & Distributed Tracing",
      "Git & GitHub Workflows",
      "GitHub Actions & CI/CD",
      "Structured Logging & Auditing",
      "Linux Server Administration",
      "Environment Hardening",
    ],
    icon: "Cloud",
    metricsBadge: "DATADOG APM PROFILED",
  },
  {
    id: "product-strategy",
    category: "all",
    title: "PRODUCT STRATEGY",
    subtitle: "Data-Driven Discovery & SaaS Metrics",
    skills: [
      "B2B SaaS Metrics (CAC, LTV, Retention)",
      "User Problem Discovery",
      "Cohort & Trend Analysis",
      "Cross-Functional Team Leadership",
      "A/B Testing Frameworks",
      "User Story Mapping",
      "KPI Definition & Tracking",
      "Executive Dashboard Reporting",
    ],
    icon: "Target",
    metricsBadge: "DATA-DRIVEN DECISIONS",
  },
];
