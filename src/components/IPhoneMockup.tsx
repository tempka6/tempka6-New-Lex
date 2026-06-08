import React, { useState, useEffect } from 'react';
import { Scale, MessageCircle, ShieldCheck, HelpCircle, FileText, Lock, Landmark, Send, Wifi, Battery } from 'lucide-react';

interface MockQuery {
  question: string;
  answer: string;
  citation: string;
}

const PHONE_QUERIES: MockQuery[] = [
  {
    question: "Is theft under PPC 379 bailable?",
    answer: "Under **Section 379 of the Pakistan Penal Code (PPC)**, theft is categorized as a **non-bailable, cognizable offense**.\n\nKey parameters:\n1. **Punishment**: Imprisonment up to 3 years, fine, or both.\n2. **Appelate Court**: Judicial Magistrate of First Class.\n3. **Precedent**: *2024 SCMR 189* - Standard bail in petty thefts is usually denied if recovery of stolen property is outstanding.",
    citation: "Pakistan Penal Code, Sec 379"
  },
  {
    question: "What rights do I have upon arrest?",
    answer: "Under **Article 10 of the 1973 Constitution of Pakistan**, every arrested citizen has fundamental safeguarded rights:\n\n1. **Grounds of Arrest**: You must be informed of grounds *immediately*.\n2. **Legal Counsel**: Right to consult and be defended by a lawyer of your choice.\n3. **24-Hour Rule**: Must be produced before a Magistrate within **24 hours** excluding transit time.\n4. **Remand Limit**: Police custody requires a custom judicial remand order.",
    citation: "Constitution of Pakistan, Art 10"
  },
  {
    question: "What is the procedure for Khula?",
    answer: "Under the **Muslim Family Laws Ordinance, 1961**, a wife can seek judicial dissolution of marriage via Khula:\n\n1. **Filing Plaint**: Present family court suit.\n2. **Reconciliation**: Court triggers mandatory reconciliation stage within 30 days.\n3. **Dower Consideration**: Return of substantial portions of dower (Haq Mehr) received usually required.\n4. **Degree Issuance**: If reconciliation fails, court issues a decree of Khula.",
    citation: "Family Laws Ord 1961, Sec 7"
  }
];

export default function IPhoneMockup() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  const activeQuery = PHONE_QUERIES[currentIdx];

  // Typing effect for the question
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTyping) {
      if (charIdx < activeQuery.question.length) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev + activeQuery.question[charIdx]);
          setCharIdx((prev) => prev + 1);
        }, 50);
      } else {
        // Finished typing question
        timer = setTimeout(() => {
          setIsTyping(false);
          setIsAnalyzing(true);
        }, 1200);
      }
    }
    return () => clearTimeout(timer);
  }, [isTyping, charIdx, currentIdx, activeQuery]);

  // Analyzing status bar simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAnalyzing) {
      timer = setTimeout(() => {
        setIsAnalyzing(false);
        setShowResponse(true);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [isAnalyzing]);

  // Cycles through queries
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showResponse) {
      timer = setTimeout(() => {
        // Reset state & go next
        setShowResponse(false);
        setDisplayText('');
        setCharIdx(0);
        setIsTyping(true);
        setCurrentIdx((prevIdx) => (prevIdx + 1) % PHONE_QUERIES.length);
      }, 8000); // Read time
    }
    return () => clearTimeout(timer);
  }, [showResponse]);

  return (
    <div className="relative mx-auto w-full max-w-[310px] animate-fade-in group select-none">
      {/* Phone Case Bezel Frame (iPhone 15 Pro look) */}
      <div className="relative mx-auto rounded-[52px] bg-stone-900 p-3 shadow-2xl border-4 border-stone-800 transition-all hover:shadow-[#006b44]/10 hover:shadow-2xl">
        {/* Absolute internal screen glare overlay */}
        <div className="absolute inset-0 rounded-[48px] border-[1.5px] border-white/10 pointer-events-none z-30" />
        
        {/* Buttons decor */}
        <div className="absolute -left-1 top-28 w-[3px] h-10 bg-stone-800 rounded-r-sm" /> {/* Action Button */}
        <div className="absolute -left-1 top-44 w-[3px] h-12 bg-stone-800 rounded-r-sm" /> {/* Volume Up */}
        <div className="absolute -left-1 top-60 w-[3px] h-12 bg-stone-800 rounded-r-sm" /> {/* Volume Down */}
        <div className="absolute -right-1 top-48 w-[3px] h-16 bg-stone-800 rounded-l-sm" /> {/* Power Button */}

        {/* Screen Area (aspect-ratio 9/19) */}
        <div className="relative rounded-[38px] bg-[#FAF9F5] overflow-hidden aspect-[9/19.5] flex flex-col z-20 shadow-inner">
          
          {/* Status Bar */}
          <div className="h-10 px-6 pt-2 select-none flex justify-between items-center text-[10px] font-bold text-stone-950 font-sans tracking-wide z-20 shrink-0">
            <span>12:00</span>
            {/* Dynamic Island Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-stone-950 rounded-full flex items-center justify-center transition-all group-hover:w-24 group-hover:h-5.5 z-50">
              {/* Camera green status dot */}
              <div className="absolute right-4 w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 pt-0.5">
              <Wifi className="w-3 h-3 text-stone-900" />
              <Battery className="w-3.5 h-3.5 text-stone-900" />
            </div>
          </div>

          {/* Phone Header App Bar */}
          <div className="px-4 py-2 border-b border-stone-200/60 bg-white flex justify-between items-center z-10 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#006B44]/10 border border-[#006B44]/20 flex items-center justify-center text-[#006B44] shadow-inner">
                <Scale className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-serif font-black text-stone-905 text-[10px] leading-tight flex items-center gap-1">
                  LexAI Vakeel
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse inline-block" />
                </h4>
                <p className="text-[7.5px] text-stone-400 font-medium leading-none">Pakistan Legal Assistant</p>
              </div>
            </div>
            <span className="text-[7px] text-emerald-800 font-extrabold uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
              PKR Laws
            </span>
          </div>

          {/* Interactive UI Screen Body */}
          <div className="flex-1 p-3 flex flex-col justify-between overflow-y-auto text-stone-700 bg-[#FAF9F5]/40 h-full relative scrollbar-none z-10">
            
            <div className="space-y-3.5 pb-4">
              {/* Ambient system instructions marker */}
              <div className="text-center">
                <span className="inline-block text-[7px] text-stone-400 uppercase font-bold tracking-widest bg-stone-100 rounded-full px-2.5 py-0.5">
                  Today • Pakistan Standard Time
                </span>
              </div>

              {/* User Bubble */}
              {displayText && (
                <div className="flex flex-col gap-1 items-end animate-fade-in">
                  <div className="px-3 py-2 bg-[#006B44] text-white rounded-2xl rounded-tr-xs text-[9.5px] max-w-[85%] font-medium leading-relaxed shadow-sm">
                    {displayText}
                    {isTyping && <span className="inline-block w-1.5 h-3 bg-white ml-0.5 animate-pulse" />}
                  </div>
                  <span className="text-[7px] text-stone-450 mr-1">Sent</span>
                </div>
              )}

              {/* Analyzing Indicator */}
              {isAnalyzing && (
                <div className="flex gap-2 items-start animate-fade-in">
                  <div className="w-6 h-6 rounded-full bg-emerald-800/10 flex items-center justify-center text-emerald-800 shrink-0">
                    <Scale className="w-3 h-3 animate-pulse" />
                  </div>
                  <div className="px-2.5 py-1.5 bg-white border border-stone-200/50 rounded-2xl rounded-tl-xs shadow-xs">
                    <div className="flex gap-1 items-center py-1 px-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-bounce" style={{ animationDelay: '0s' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}

              {/* AI response content */}
              {showResponse && (
                <div className="flex flex-col gap-1.5 items-start animate-scale-in">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-800 flex items-center justify-center text-white shrink-0">
                      <Scale className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-[7px] font-extrabold uppercase text-[#C5A85A] tracking-wider">
                      Verified AI Answer
                    </span>
                  </div>

                  <div className="px-3 py-2.5 bg-white border border-stone-200/70 rounded-2xl rounded-tl-xs shadow-sm text-[8px] text-stone-600 leading-relaxed font-light space-y-1.5 w-full">
                    {/* Render basic bold formatting manually for cleaner design inside Phone */}
                    <div className="whitespace-pre-line text-stone-700">
                      {activeQuery.answer.split('\n\n').map((chunk, itemIdx) => {
                        return (
                          <p key={itemIdx}>
                            {chunk.split('**').map((subText, subIdx) => {
                              return subIdx % 2 === 1 ? (
                                <strong key={subIdx} className="font-semibold text-stone-950">{subText}</strong>
                              ) : (
                                subText
                              );
                            })}
                          </p>
                        );
                      })}
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex justify-between items-center text-[7px] text-[#C5A85A] font-extrabold uppercase tracking-wide">
                      <span className="flex items-center gap-1 bg-amber-50/70 px-1 py-0.5 rounded border border-amber-200/35">
                        <ShieldCheck className="w-2 h-2 text-amber-700" />
                        Grounded Citation
                      </span>
                      <span>{activeQuery.citation}</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Quick Input Bar Simulation */}
          <div className="p-2 border-t border-stone-200/60 bg-white flex gap-2 items-center shrink-0 z-10">
            <div className="flex-1 bg-[#FAF9F5] border border-stone-200 rounded-full px-3 py-1 flex justify-between items-center">
              <span className="text-[8.5px] text-stone-400 select-none">Ask Pakistan Code...</span>
              <HelpCircle className="w-3.5 h-3.5 text-stone-400" />
            </div>
            <div className="w-7 h-7 bg-emerald-800 text-white rounded-full flex items-center justify-center cursor-default">
              <Send className="w-3 h-3" />
            </div>
          </div>

          {/* iPhone Home Swipe Indicator Pill */}
          <div className="h-5 flex items-center justify-center shrink-0 bg-white z-10">
            <div className="w-24 h-1 bg-stone-950 rounded-full" />
          </div>

        </div>
      </div>

      {/* Floating Category Pills below or around mockup device */}
      <div className="absolute -left-12 top-11 bg-[#1C2024]/90 border border-stone-800 text-[#C5A85A] px-2.5 py-1 rounded-full text-[8.5px] font-bold shadow-lg flex items-center gap-1 animate-pulse select-none hidden sm:flex">
        <span>🇵🇰</span> 1130+ Federal Acts
      </div>
      <div className="absolute -right-12 bottom-12 bg-emerald-900 border border-emerald-800 text-[#FAF9F5] px-2.5 py-1 rounded-full text-[8.5px] font-bold shadow-lg flex items-center gap-1 select-none hidden sm:flex">
        <ShieldCheck className="w-3 h-3 text-[#C5A85A]" /> Legal Guard active
      </div>
    </div>
  );
}
