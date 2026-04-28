// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Tema Ayarları Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface TemaAyarlariOverlayProps {}

export function TemaAyarlariOverlay(props: TemaAyarlariOverlayProps) {
  return (
    <>
      {/* TopAppBar Structure */}
      <header className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 h-16 bg-[#0b1326]/80 backdrop-blur-xl shadow-2xl shadow-[#060e20]/50">
      <div className="text-lg font-bold text-[#b4c5ff] font-['Inter'] font-medium tracking-tight">
                  Sayaç Uygulaması
              </div>
      <div className="flex items-center gap-2">
      <button className="text-[#b4c5ff]/60 hover:bg-[#161d2e] transition-colors duration-300 active:scale-95 transition-transform p-2.5 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">history</span>
      </button>
      {/* Active state for the trigger button to show it's selected */}
      <button className="text-[#b4c5ff] bg-[#161d2e] hover:bg-[#161d2e] transition-colors duration-300 active:scale-95 transition-transform p-2.5 rounded-full flex items-center justify-center relative">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dark_mode</span>
      </button>
      </div>
      </header>
      {/* Simulated Content Area (Blurred/Dimmed to focus on overlay) */}
      <main className="flex-1 pt-24 px-6 flex flex-col items-center justify-center opacity-30 pointer-events-none">
      <div className="bg-surface-container rounded-xl p-8 flex flex-col items-center gap-4 w-full max-w-sm">
      <div className="text-on-surface-variant font-medium tracking-wide">AKTİF SAYAÇ</div>
      <div className="text-7xl font-display font-bold text-primary tracking-tighter">1,024</div>
      </div>
      </main>
      {/* Overlay Backdrop (Subtle interaction blocking layer) */}
      <div className="fixed inset-0 z-40 bg-surface-container-lowest/10 backdrop-blur-[2px]"></div>
      {/* Theme Settings Dropdown Overlay */}
      <div className="fixed top-20 right-6 w-[240px] bg-surface-container-highest/85 backdrop-blur-xl rounded-xl shadow-[0_24px_50px_-12px_rgba(6,14,32,0.9)] ring-1 ring-outline-variant/30 z-50 overflow-hidden flex flex-col py-2 transform origin-top-right">
      {/* Dropdown Header (Optional contextual grounding) */}
      <div className="px-4 py-2 mb-1">
      <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest">Görünüm</span>
      </div>
      {/* Option: Açık Mod */}
      <button className="w-full flex items-center justify-between px-4 py-3 hover:bg-surface-container-low/50 transition-colors duration-200 group outline-none focus:bg-surface-container-low">
      <div className="flex items-center gap-3 text-on-surface-variant group-hover:text-on-surface transition-colors">
      <span className="material-symbols-outlined text-[20px]">light_mode</span>
      <span className="font-medium text-sm tracking-tight">Açık Mod</span>
      </div>
      </button>
      {/* Option: Koyu Mod (Active Selection) */}
      {/* Utilizing Tonal Layering: primary container tint on top of surface-container-highest */}
      <button className="w-full flex items-center justify-between px-4 py-3 bg-primary/10 hover:bg-primary/15 transition-colors duration-200 relative overflow-hidden outline-none">
      <div className="flex items-center gap-3 text-primary">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>dark_mode</span>
      <span className="font-medium text-sm tracking-tight">Koyu Mod</span>
      </div>
      {/* Active Checkmark */}
      <span className="material-symbols-outlined text-primary text-[18px]">check</span>
      </button>
      {/* Option: Sistem Tercihi */}
      <button className="w-full flex items-center justify-between px-4 py-3 hover:bg-surface-container-low/50 transition-colors duration-200 group outline-none focus:bg-surface-container-low">
      <div className="flex items-center gap-3 text-on-surface-variant group-hover:text-on-surface transition-colors">
      <span className="material-symbols-outlined text-[20px]">brightness_auto</span>
      <span className="font-medium text-sm tracking-tight">Sistem Tercihi</span>
      </div>
      </button>
      </div>
    </>
  );
}
