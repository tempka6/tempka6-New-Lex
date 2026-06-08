import React, { useState } from 'react';
import { X, ExternalLink, Download, Copy, Check, FileText, Landmark, ShieldCheck } from 'lucide-react';

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl?: string; // Original PDF URL
  fallbackUrl?: string; // Fallback web URL
}

export default function PDFViewerModal({
  isOpen,
  onClose,
  title,
  pdfUrl,
  fallbackUrl
}: PDFViewerModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const resolvedWebUrl = fallbackUrl || 'https://pakistancode.gov.pk/english/index.php';

  const handleCopyLink = () => {
    if (pdfUrl) {
      navigator.clipboard.writeText(pdfUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 md:p-4 z-[9999] animate-fade-in font-sans">
      <div className="bg-[#FAF9F5] dark:bg-[#1E1B16] rounded-2xl w-full max-w-xl flex flex-col overflow-hidden shadow-2xl border border-[#E7E5DD] dark:border-stone-850">
        
        {/* Header */}
        <div className="shrink-0 px-5 py-4 border-b border-[#E7E5DD] dark:border-stone-850 bg-white dark:bg-zinc-900 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-emerald-800 dark:text-[#C5A85A]">
            <FileText className="w-5 h-5 shrink-0" />
            <div>
              <h3 className="font-serif font-black text-sm text-stone-900 dark:text-stone-100 uppercase tracking-wide leading-none">
                {title}
              </h3>
              <span className="text-[9px] font-bold font-mono tracking-wider uppercase block mt-1 text-stone-400">
                Official Statute Reference
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5">
            {pdfUrl && (
              <button
                onClick={handleCopyLink}
                className="w-8 h-8 rounded-full border border-stone-200 dark:border-stone-850 bg-white dark:bg-stone-900 flex items-center justify-center cursor-pointer text-stone-500 dark:text-stone-300 hover:text-emerald-800 dark:hover:text-[#C5A85A] transition-colors"
                title="Copy original document link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-stone-200 dark:border-stone-850 bg-white dark:bg-stone-900 flex items-center justify-center cursor-pointer text-stone-500 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Verification Strip */}
        <div className="shrink-0 px-5 py-2.5 bg-emerald-50/50 dark:bg-emerald-950/10 border-b border-[#E7E5DD] dark:border-stone-850 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
            <Landmark className="w-4 h-4 text-emerald-700 dark:text-[#C5A85A]" />
            <span>Verified Source: <strong className="text-stone-800 dark:text-white font-semibold">Gazette of Pakistan</strong></span>
          </div>
          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-[#C5A85A] uppercase tracking-wider font-mono bg-emerald-100/30 dark:bg-emerald-900/10 px-2 py-0.5 rounded-md">
            <ShieldCheck className="w-3.5 h-3.5" /> Approved Citation
          </span>
        </div>

        {/* Body */}
        <div className="flex-1 p-6 space-y-6 text-center">
          
          <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-[#C5A85A]/10 text-emerald-800 dark:text-[#C5A85A] flex items-center justify-center mx-auto border border-emerald-100 dark:border-[#C5A85A]/20">
            <FileText className="w-7 h-7" />
          </div>

          <div className="space-y-1.5 animate-fade-in">
            <h4 className="font-serif font-black text-stone-950 dark:text-stone-100 text-base uppercase tracking-normal">
              {title}
            </h4>
            <p className="text-xs text-stone-550 dark:text-stone-400 max-w-sm mx-auto leading-relaxed">
              Open the attested digital gazette copy to view compiled laws, schedules, and active amendments.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-col gap-2.5 max-w-sm mx-auto">
            {pdfUrl ? (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-900 hover:to-emerald-800 text-white font-bold text-xs py-3.5 px-6 rounded-xl border-0 shadow-md cursor-pointer transition-all transform hover:scale-[1.01] no-underline"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>Open &amp; Download Original PDF</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-80" />
              </a>
            ) : (
              <div className="w-full p-3 bg-stone-100 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-850 text-xs text-stone-500">
                Official document is not hosted as a public PDF.
              </div>
            )}

            <a
              href={resolvedWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-stone-50 dark:bg-stone-900 dark:hover:bg-stone-850 border border-stone-250 dark:border-stone-800 text-stone-700 dark:text-stone-300 font-bold text-xs py-2.5 px-6 rounded-xl transition-all no-underline"
            >
              <span>Visit Statute Web Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="shrink-0 px-5 py-3 border-t border-[#E7E5DD] dark:border-stone-850 flex items-center justify-center bg-white dark:bg-zinc-900">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-stone-150 hover:bg-stone-200 dark:bg-stone-850 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border-0 font-bold text-xs rounded-lg cursor-pointer transition-colors"
          >
            Close Gate
          </button>
        </div>

      </div>
    </div>
  );
}
