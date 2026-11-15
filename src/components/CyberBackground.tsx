"use client";

// Atmospheric Cyberpunk Background with Dot-Matrix, Radial Spotlights & Animated CRT Scanlines
export default function CyberBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030303]">
      {/* 1px technical grid overlay */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-30" />

      {/* Subtle Dot-Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Hero Crimson Radial Spotlight: Behind typography & portrait */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 30, 39, 0.18) 0%, transparent 70%)",
        }}
      />

      {/* Cyan secondary ambient glow */}
      <div
        className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] pointer-events-none opacity-40 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Subtle bottom corner ambient glow */}
      <div className="absolute -bottom-40 right-[-10%] w-[600px] h-[400px] bg-cyber-red/5 blur-[120px] rounded-full pointer-events-none" />

      {/* CRT Scanline Texture Layer */}
      <div className="absolute inset-0 scanline-layer opacity-25 pointer-events-none" />

      {/* Animated Traveling Scanline Beam */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF1E27]/25 to-transparent animate-scanline opacity-60 pointer-events-none" />
    </div>
  );
}
