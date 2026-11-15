# Cyber-Architect & AI Systems Engineer Portfolio
## Real-Time Autonomous Multi-Agent Construction Engine

A dark-mode, high-contrast, cyberpunk terminal-aesthetic portfolio engineered for **Abhay Pratap Singh** (AI Systems Engineer • Data & FinTech Analyst • Product-Minded Builder).

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## ⚡ Autonomous Multi-Agent Construction Systems

### 1. Multi-Agent Cursor Swarm (`<AgentCursorSwarm />`)
- **Global `z-50` Pointer-Events-None Layer**: Displays 12 autonomous builder agents (`arch-01`, `llm-sync`, `ui-node`, `data-agent`, `recon-sub`, `agent-core`, `qa-audit`, `sec-guard`, `stream-09`, `perf-opt`, `cloud-eng`, `db-shard`) in electric cyan (`#38BDF8`), crimson red (`#FF1E27`), and crisp white (`#FFFFFF`).
- **Initial Boot Sequence (0.0s – 2.5s)**: Starts in an orbital center vortex with a `GENERATING PORTFOLIO...` progress telemetry dialog. At 800ms, the swarm bursts outward, scattering to draw temporary wireframe bounding boxes across the Hero section before snapping into full render.
- **Scroll-Triggered Live Construction**: As the user scrolls into any new section (`Philosophy`, `Deployments`, `GitHub Feed`, `Systems Matrix`, `Contact`), 3 to 4 agents glide to the target coordinates, draw a live Figma-style bounding box (`1px solid #38BDF8` with 4 corner square handles and builder badges), and return to ambient patrol orbits.
- **60fps GPU Performance**: Interpolated smooth motion (`lerp`) rendered via hardware-accelerated `translate3d(x, y, 0)`.

### 2. Scroll-Triggered Cyber-Scramble & Token Stream (`<TypewriterReveal />`)
- **Headings**: Rapid cyberpunk glyph decode (`01X#_/%&!@<>`) resolving into white/red typography over `450ms`.
- **Paragraphs & Telemetry**: High-speed LLM-style token streaming (~18ms) complete with glowing cyan/red caret cursor and subtle translucent cyan selection sweep behind newly generated lines.

### 3. Wireframe-to-Solid Card Materialization (`<ConstructCard />`)
- Wraps all cards across Hero, Philosophy, Experience, Flagship Deployments, GitHub Repositories, and Systems Matrix.
- **Before Viewport**: Faint wireframe blueprint state (`border-dashed border-white/15 bg-black/30`).
- **On Scroll into View**: Flashes an electric cyan/crimson corner-bracket bounding box with 4 corner square handles and a live pixel dimension tag (`420 × 280 // RENDERED`), then illuminates into the dark obsidian card (`#080808` / `#0A0A0A`) with subtle crimson ambient radial glow on hover.

### 4. Atmospheric Polish & Glassmorphic Command Dock (`<FloatingDock />`)
- **Background Atmosphere**: `#030303` base, subtle dot-matrix grid overlay, CRT scanline raster effect, and a crimson radial spotlight (`radial-gradient(circle, rgba(255,30,39,0.18) 0%, transparent 70%)`) centered behind the hero typography.
- **Floating Bottom Command Dock**:
  - Centered glassmorphic dock (`backdrop-blur-md bg-black/80 border border-white/15 rounded-full px-4 py-2`).
  - Pulsing beacon with live `AGENTS ACTIVE: 12` indicator.
  - Section quick-jump icons with hover tooltips (`Philosophy`, `Deployments`, `GitHub Feed`, `Systems Matrix`, `Contact`).
  - Swarm FX toggle switch: `SWARM FX: [ON / OFF]`.
  - Instant `Cmd+K` / `Ctrl+K` command palette launcher.

### 5. Preserved Data & Live GitHub Auto-Sync (`Abhay8769305414`)
- Server-side data layer (`src/lib/github.ts`) fetching live repository telemetry with Next.js ISR (`revalidate: 60`).
- Webhook route `/api/revalidate` supporting GitHub `push` and `repository` events.
- Interactive search bar and language filter tabs (`All`, `TypeScript`, `Python`, `JavaScript`).
- Verified CV experience (**Highspring**, **Credeau Solutions**, **Lummra AI**), 6 credentials & competitive honors, and flagship deployments (**Agency OS**, **Finfully Automation Lab**, **Intelligent CSV Validator**).

---

## 🛠️ Development & Production

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm start
```
