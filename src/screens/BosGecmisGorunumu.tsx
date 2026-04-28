// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Geçmiş Görünümü
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosGecmisGorunumuProps {}

export function BosGecmisGorunumu(props: BosGecmisGorunumuProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-16 bg-[#0b1326]/80 backdrop-blur-xl bg-[#161d2e] shadow-2xl shadow-[#060e20]/50 docked full-width top-0">
      <div className="flex-1"></div>
      <div className="flex-1 text-center">
      <h1 className="text-[#b4c5ff] font-['Inter'] font-medium tracking-tight text-lg font-bold">Sayaç Uygulaması</h1>
      </div>
      <div className="flex-1 flex justify-end gap-4">
      <button className="text-[#b4c5ff]/60 hover:bg-[#161d2e] transition-colors duration-300 active:scale-95 transition-transform p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50">
      <span className="material-symbols-outlined" data-icon="history">history</span>
      </button>
      <button className="text-[#b4c5ff]/60 hover:bg-[#161d2e] transition-colors duration-300 active:scale-95 transition-transform p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50">
      <span className="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
      </button>
      </div>
      </header>
      {/* Main Content: Empty State for History */}
      <main className="flex-1 overflow-y-auto pt-24 pb-28 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-surface-container-low rounded-xl p-8 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(6,14,32,0.5)] border border-outline-variant/10 relative overflow-hidden group">
      {/* Ambient Glow for Empty State */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none opacity-50"></div>
      {/* Icon Wrapper with Glassmorphism touch */}
      <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6 relative z-10 shadow-inner">
      <div className="absolute inset-0 rounded-full border border-outline-variant/20"></div>
      <span className="material-symbols-outlined text-5xl text-outline-variant group-hover:text-primary transition-colors duration-500" style={{fontVariationSettings: "'wght' 300"}}>hourglass_empty</span>
      </div>
      {/* Text Content */}
      <h2 className="font-headline text-xl font-semibold text-on-surface mb-3 relative z-10 tracking-tight">Henüz işlem kaydı yok</h2>
      <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-[280px] relative z-10">Sayaçla işlem yapmaya başladığınızda burada görünecek.</p>
      {/* Optional Call to Action (Implicitly guiding back to counter) */}
      <div className="mt-8 relative z-10">
      <div className="h-1 w-12 bg-surface-container-high rounded-full mx-auto"></div>
      </div>
      </div>
      </main>
      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-[#0b1326]/90 backdrop-blur-lg bg-[#161d2e] shadow-[0_-10px_40px_rgba(6,14,32,0.8)] docked full-width bottom-0 rounded-t-2xl md:hidden">
      <button className="flex flex-col items-center justify-center text-[#b4c5ff]/40 px-6 py-2 hover:text-[#b4c5ff] active:scale-90 transition-all duration-200 focus:outline-none">
      <span className="material-symbols-outlined mb-1 text-[24px]" data-icon="add_circle">add_circle</span>
      <span className="text-[11px] font-semibold uppercase tracking-widest">Sayaç</span>
      </button>
      <button className="flex flex-col items-center justify-center bg-[#b4c5ff]/10 text-[#b4c5ff] rounded-xl px-6 py-2 hover:text-[#b4c5ff] active:scale-90 transition-all duration-200 focus:outline-none">
      <span className="material-symbols-outlined mb-1 text-[24px]" data-icon="history" style={{fontVariationSettings: "'FILL' 1"}}>history</span>
      <span className="text-[11px] font-semibold uppercase tracking-widest">Geçmiş</span>
      </button>
      </nav>
      {/* SideNav for Web (Hidden on Mobile) */}
      <nav className="hidden md:flex fixed left-0 top-16 bottom-0 w-64 bg-surface-container-low border-r border-outline-variant/10 flex-col py-6 px-4 z-40">
      <div className="flex flex-col gap-2">
      <button className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors focus:outline-none w-full text-left">
      <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
      <span className="font-label font-medium tracking-wide">Sayaç</span>
      </button>
      <button className="flex items-center gap-4 px-4 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors focus:outline-none w-full text-left">
      <span className="material-symbols-outlined" data-icon="history" style={{fontVariationSettings: "'FILL' 1"}}>history</span>
      <span className="font-label font-medium tracking-wide">Geçmiş</span>
      </button>
      </div>
      </nav>
    </>
  );
}
