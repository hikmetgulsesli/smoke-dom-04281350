// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaProps {}

export function AnaSayfa(props: AnaSayfaProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-[#0b1326]/80 backdrop-blur-xl font-['Inter'] font-medium tracking-tight shadow-2xl shadow-[#060e20]/50 fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-16 border-b border-[#161d2e]">
      <div className="text-lg font-bold text-[#b4c5ff]">Sayaç Uygulaması</div>
      <div className="flex items-center gap-4 text-[#b4c5ff]">
      <button aria-label="History" className="hover:bg-[#161d2e] transition-colors duration-300 p-2 rounded-full active:scale-95 transition-transform">
      <span className="material-symbols-outlined" data-icon="history">history</span>
      </button>
      <button aria-label="Dark Mode" className="hover:bg-[#161d2e] transition-colors duration-300 p-2 rounded-full active:scale-95 transition-transform">
      <span className="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center pt-16 pb-20 px-6">
      {/* Counter Display Area */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-sm aspect-square bg-surface-container-low rounded-xl shadow-[0_30px_50px_rgba(6,14,32,0.08)] mb-12">
      {/* Glassmorphism overlay for depth */}
      <div className="absolute inset-0 bg-surface-container/20 backdrop-blur-sm rounded-xl"></div>
      <div className="relative z-10 flex flex-col items-center">
      <span className="text-[0.75rem] font-medium text-primary tracking-[0.2em] uppercase mb-4">Mevcut Değer</span>
      {/* The Number */}
      <div className="text-[6rem] font-bold text-on-surface leading-none tracking-tighter" style={{fontFamily: "'Inter', sans-serif", letterSpacing: "-0.05em"}}>
                          42
                      </div>
      </div>
      </div>
      {/* Controls */}
      <div className="w-full max-w-sm flex flex-col gap-6">
      {/* Plus / Minus Row */}
      <div className="flex gap-4 w-full">
      <button className="flex-1 h-20 bg-surface-container-high hover:bg-surface-container-highest active:bg-surface-container rounded-lg flex items-center justify-center text-on-surface shadow-[0_10px_20px_rgba(6,14,32,0.05)] transition-all duration-200">
      <span className="material-symbols-outlined text-4xl" data-icon="remove">remove</span>
      </button>
      <button className="flex-1 h-20 bg-primary-container hover:bg-[#3b82f6] active:bg-[#1d4ed8] rounded-lg flex items-center justify-center text-on-primary-container shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all duration-200">
      <span className="material-symbols-outlined text-4xl" data-icon="add">add</span>
      </button>
      </div>
      {/* Reset Button */}
      <button className="w-full h-14 bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 active:scale-[0.98] rounded-lg flex items-center justify-center gap-2 text-on-surface-variant font-medium transition-all duration-200">
      <span className="material-symbols-outlined text-xl" data-icon="refresh">refresh</span>
      <span>Sıfırla</span>
      </button>
      </div>
      </main>
      {/* BottomNavBar */}
      <nav className="bg-[#0b1326]/90 backdrop-blur-lg text-[11px] font-semibold uppercase tracking-widest shadow-[0_-10px_40px_rgba(6,14,32,0.8)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe rounded-t-2xl border-t border-[#161d2e] md:hidden">
      {/* Active Tab: Sayaç */}
      <button className="flex flex-col items-center justify-center bg-[#b4c5ff]/10 text-[#b4c5ff] rounded-xl px-6 py-2 active:scale-90 transition-all duration-200">
      <span className="material-symbols-outlined mb-1" data-icon="add_circle" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
      <span>Sayaç</span>
      </button>
      {/* Inactive Tab: Geçmiş */}
      <button className="flex flex-col items-center justify-center text-[#b4c5ff]/40 px-6 py-2 hover:text-[#b4c5ff] active:scale-90 transition-all duration-200">
      <span className="material-symbols-outlined mb-1" data-icon="history">history</span>
      <span>Geçmiş</span>
      </button>
      </nav>
    </>
  );
}
