import React from 'react';
import { X, Check, ChevronLeft, Globe, Milestone } from 'lucide-react';

interface AppSettingsModalProps {
  isOpened: boolean;
  onClose: () => void;
  theme: 'light' | 'dark' | 'system';
  onSelectTheme: (theme: 'light' | 'dark' | 'system') => void;
  language: 'english' | 'urdu';
  onSelectLanguage: (lang: 'english' | 'urdu') => void;
}

export default function AppSettingsModal({
  isOpened,
  onClose,
  theme,
  onSelectTheme,
  language,
  onSelectLanguage,
}: AppSettingsModalProps) {
  if (!isOpened) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-[#FAF9F5] dark:bg-bg-card border border-[#E7E5DD] dark:border-border-main w-full max-w-md rounded-2xl p-6 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        
        {/* Header with back chevron and Title */}
        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#E7E5DD] dark:border-border-main">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 dark:hover:bg-bg-input text-stone-600 dark:text-stone-300 transition-colors bg-transparent border-0 cursor-pointer"
            title="Go back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="font-sans text-xl font-extrabold text-stone-900 dark:text-stone-100">
            App settings
          </h2>
        </div>

        {/* Section 1: APPEARANCE */}
        <div className="mb-6">
          <div className="text-[10px] text-stone-400 dark:text-stone-500 font-black uppercase tracking-wider mb-4">
            Appearance
          </div>

          <div className="grid grid-cols-3 gap-3">
            {/* LIGHT CARD */}
            <button
              onClick={() => onSelectTheme('light')}
              className="flex flex-col items-center gap-2 group text-left bg-transparent border-0 cursor-pointer"
            >
              <div
                className={`relative w-full aspect-[4/3] rounded-xl bg-[#FAF9F5] border p-3 flex items-end justify-center transition-all ${
                  theme === 'light'
                    ? 'border-emerald-700 ring-2 ring-emerald-700/20'
                    : 'border-[#E7E5DD] hover:border-stone-400'
                }`}
              >
                <div className="bg-white border border-[#E7E5DD] shadow-sm rounded-lg w-full h-10 flex items-center justify-center font-bold text-stone-900 text-sm">
                  Aa
                </div>
                {theme === 'light' && (
                  <span className="absolute top-2 right-2 bg-emerald-700 text-white rounded-full p-0.5 shadow-sm">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-stone-750 dark:text-stone-400">
                Light
              </span>
            </button>

            {/* DARK CARD */}
            <button
              onClick={() => onSelectTheme('dark')}
              className="flex flex-col items-center gap-2 group text-left bg-transparent border-0 cursor-pointer"
            >
              <div
                className={`relative w-full aspect-[4/3] rounded-xl bg-stone-900 dark:bg-bg-app border p-3 flex items-end justify-center transition-all ${
                  theme === 'dark'
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                    : 'border-stone-850 dark:border-border-main'
                }`}
              >
                <div className="bg-stone-950 dark:bg-bg-card border border-stone-800 dark:border-border-main shadow-sm rounded-lg w-full h-10 flex items-center justify-center font-bold text-stone-105 dark:text-stone-100 text-sm">
                  Aa
                </div>
                {theme === 'dark' && (
                  <span className="absolute top-2 right-2 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-stone-750 dark:text-stone-400">
                Dark
              </span>
            </button>

            {/* SYSTEM CARD */}
            <button
              onClick={() => onSelectTheme('system')}
              className="flex flex-col items-center gap-2 group text-left bg-transparent border-0 cursor-pointer"
            >
              <div
                className={`relative w-full aspect-[4/3] rounded-xl bg-gradient-to-r from-stone-900 to-[#FAF9F5] dark:from-bg-sidebar dark:to-bg-app border p-3 flex items-end justify-center transition-all ${
                  theme === 'system'
                    ? 'border-emerald-700 dark:border-emerald-500 ring-2 ring-emerald-700/20'
                    : 'border-[#E7E5DD] dark:border-border-main'
                }`}
              >
                <div className="flex w-full h-10 rounded-lg overflow-hidden border border-[#E7E5DD] dark:border-border-main shadow-sm">
                  <div className="flex-1 bg-stone-950 dark:bg-bg-sidebar text-stone-100 flex items-center justify-center font-bold text-sm">
                    Aa
                  </div>
                  <div className="flex-1 bg-white dark:bg-bg-card text-stone-900 dark:text-stone-100 flex items-center justify-center font-bold text-sm">
                    Aa
                  </div>
                </div>
                {theme === 'system' && (
                  <span className="absolute top-2 right-2 bg-emerald-700 text-white rounded-full p-0.5 shadow-sm">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-stone-750 dark:text-stone-400">
                System
              </span>
            </button>
          </div>
        </div>

        {/* Section 2: LANGUAGE */}
        <div className="mb-4">
          <div className="text-[10px] text-stone-400 dark:text-stone-500 font-black uppercase tracking-wider mb-4">
            Language
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* ENGLISH CARD */}
            <button
              onClick={() => onSelectLanguage('english')}
              className={`p-4 rounded-xl border flex flex-col items-start gap-1.5 transition-all text-left cursor-pointer ${
                language === 'english'
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-600 shadow-md ring-1 ring-emerald-600/30'
                  : 'bg-white dark:bg-bg-card border-[#E7E5DD] dark:border-border-main hover:border-emerald-500'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${language === 'english' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300' : 'bg-stone-100 dark:bg-bg-input'}`}>
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-900 dark:text-stone-100 block">English</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 font-light mt-0.5 block leading-tight">Default System Voice</span>
              </div>
            </button>

            {/* URDU CARD */}
            <button
              onClick={() => onSelectLanguage('urdu')}
              className={`p-4 rounded-xl border flex flex-col items-start gap-1.5 transition-all text-left cursor-pointer ${
                language === 'urdu'
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-600 shadow-md ring-1 ring-emerald-600/30'
                  : 'bg-white dark:bg-bg-card border-[#E7E5DD] dark:border-border-main hover:border-emerald-500'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${language === 'urdu' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300' : 'bg-stone-100 dark:bg-bg-input'}`}>
                <Milestone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-900 dark:text-stone-100 block">اردو (Urdu)</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 font-light mt-0.5 block leading-tight">پاکستانی قانون اور چیٹ</span>
              </div>
            </button>
          </div>
        </div>

        {/* Save button / enter platform */}
        <div className="flex justify-end gap-3 pt-4 border-t border-[#E7E5DD] dark:border-border-main">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-stone-900 dark:bg-emerald-600 hover:bg-stone-950 dark:hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            Apply &amp; Dismiss
          </button>
        </div>

      </div>
    </div>
  );
}
