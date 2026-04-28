// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: İşlem Geçmişi Modalı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface IslemGecmisiModaliProps {}

export function IslemGecmisiModali(props: IslemGecmisiModaliProps) {
  return (
    <>
      {/* Background Mock Content (To show it's an overlay) */}
      <div className="flex-1 p-6 blur-sm opacity-50 flex flex-col items-center justify-center pointer-events-none">
      <h1 className="text-display-lg font-bold text-primary tracking-tight mb-4">42</h1>
      <p className="text-body-lg text-on-surface-variant">Ana Sayaç</p>
      </div>
      {/* Modal Overlay Backdrop */}
      <div className="fixed inset-0 bg-surface-lowest/80 backdrop-blur-xl z-40 flex items-end md:items-center justify-center p-0 md:p-6">
      {/* Modal Sheet/Card */}
      <div className="bg-surface-container-highest w-full max-w-lg rounded-t-xl md:rounded-xl shadow-[0_20px_50px_rgba(6,14,32,0.5)] flex flex-col max-h-[870px] md:max-h-[716px] border border-outline-variant/15 transform transition-transform">
      {/* Modal Header */}
      <div className="flex items-center justify-between px-6 py-5 bg-surface-container-low rounded-t-xl">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-xl">history</span>
      <h2 className="text-headline-md font-semibold text-on-surface tracking-tight">İşlem Geçmişi</h2>
      </div>
      <button className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50">
      <span className="material-symbols-outlined">close</span>
      </button>
      </div>
      {/* Modal Body (List of Activities) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
      {/* Activity Item: Artırıldı */}
      <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-secondary text-[20px]">add</span>
      </div>
      <div>
      <p className="text-body-lg font-medium text-on-surface">Artırıldı</p>
      <p className="text-label-md text-on-surface-variant mt-0.5">14:25:30</p>
      </div>
      </div>
      <div className="text-right">
      <span className="text-headline-md font-bold text-secondary">+1</span>
      <p className="text-label-md text-on-surface-variant mt-0.5">Sonuç: 42</p>
      </div>
      </div>
      {/* Activity Item: Azaltıldı */}
      <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-tertiary text-[20px]">remove</span>
      </div>
      <div>
      <p className="text-body-lg font-medium text-on-surface">Azaltıldı</p>
      <p className="text-label-md text-on-surface-variant mt-0.5">14:20:15</p>
      </div>
      </div>
      <div className="text-right">
      <span className="text-headline-md font-bold text-tertiary">-1</span>
      <p className="text-label-md text-on-surface-variant mt-0.5">Sonuç: 41</p>
      </div>
      </div>
      {/* Activity Item: Artırıldı */}
      <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-secondary text-[20px]">add</span>
      </div>
      <div>
      <p className="text-body-lg font-medium text-on-surface">Artırıldı</p>
      <p className="text-label-md text-on-surface-variant mt-0.5">14:15:00</p>
      </div>
      </div>
      <div className="text-right">
      <span className="text-headline-md font-bold text-secondary">+1</span>
      <p className="text-label-md text-on-surface-variant mt-0.5">Sonuç: 42</p>
      </div>
      </div>
      {/* Activity Item: Sıfırlandı */}
      <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-[20px]">restart_alt</span>
      </div>
      <div>
      <p className="text-body-lg font-medium text-on-surface">Sıfırlandı</p>
      <p className="text-label-md text-on-surface-variant mt-0.5">10:00:00</p>
      </div>
      </div>
      <div className="text-right">
      <span className="text-headline-md font-bold text-primary">0</span>
      <p className="text-label-md text-on-surface-variant mt-0.5">Önceki: 120</p>
      </div>
      </div>
      {/* Activity Item: Artırıldı */}
      <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/10 opacity-70">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-secondary text-[20px]">add</span>
      </div>
      <div>
      <p className="text-body-lg font-medium text-on-surface">Artırıldı</p>
      <p className="text-label-md text-on-surface-variant mt-0.5">Dün, 18:45</p>
      </div>
      </div>
      <div className="text-right">
      <span className="text-headline-md font-bold text-secondary">+5</span>
      <p className="text-label-md text-on-surface-variant mt-0.5">Sonuç: 120</p>
      </div>
      </div>
      </div>
      {/* Modal Footer */}
      <div className="p-6 bg-surface-container-low rounded-b-xl border-t border-surface-container">
      <button className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-error-container/20 text-error hover:bg-error-container/30 hover:text-error-container active:bg-error-container/40 rounded-lg transition-colors font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-error/50">
      <span className="material-symbols-outlined text-[20px]">delete_sweep</span>
      <span>Geçmişi Temizle</span>
      </button>
      </div>
      </div>
      </div>
    </>
  );
}
