import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, useMotionValueEvent, motion, AnimatePresence } from 'motion/react';
import { 
  Scale, MessageCircle, ShieldCheck, HelpCircle, FileText, Lock, 
  Landmark, Send, Wifi, Battery, Check, Users, Calculator, Download, Phone, MapPin, Star
} from 'lucide-react';

interface ScrollStep {
  id: number;
  badge: string;
  title: string;
  description: string;
  phoneScreen: {
    title: string;
    subtitle: string;
    badgeText: string;
    icon: React.ComponentType<any>;
  };
}

const SCROLL_STEPS: ScrollStep[] = [
  {
    id: 0,
    badge: "LexAI Vakeel",
    title: "Instant Answers Decoded by Jurisprudence",
    description: "Type legal doubts in plain Roman Urdu, English, or Urdu. Vakeel processes statutory structures and replies citing precise Supreme Court Precedents or Pakistan Penal Code (PPC) sections.",
    phoneScreen: {
      title: "LexAI Vakeel",
      subtitle: "Pakistan Legal Assistant",
      badgeText: "PKR Laws",
      icon: Scale
    }
  },
  {
    id: 1,
    badge: "Draft Studio",
    title: "Court-Ready Legal Document Drafter",
    description: "Generate bulletproof Petitions, Tenancy Deeds, Promissory Notes, and Civil Suits tailored to Pakistani regulations. Just input necessary parties, let the AI format correctly, and export instantly.",
    phoneScreen: {
      title: "Draft Studio",
      subtitle: "Bespoke Pleadings & Stamps",
      badgeText: "PDF Export",
      icon: FileText
    }
  },
  {
    id: 2,
    badge: "Statutes Library",
    title: "1,130+ Verified Acts & Codes",
    description: "Browse constitutional chapters, FBR regulations, SECP rules, and specific ordinances without legal paywalls. Get link verification pointing straight to PakistanCode.gov.pk.",
    phoneScreen: {
      title: "Pakistan Law Library",
      subtitle: "Verified Official Archives",
      badgeText: "Grounded Portal",
      icon: Landmark
    }
  },
  {
    id: 3,
    badge: "Advocate Booking",
    title: "Direct Connect with Verified Advocates",
    description: "Bridge the gap from online research to human action. Book formal legal guidance, commission certified document retrieval, or request physical court representation in Lahore, Karachi, or Islamabad.",
    phoneScreen: {
      title: "Lawyer Booking",
      subtitle: "Verified Bar Members",
      badgeText: "Direct Connect",
      icon: Users
    }
  },
  {
    id: 4,
    badge: "Smart Utilities",
    title: "Dynamic Calculators & Limitation Lookups",
    description: "Instantly evaluate requisite judicial stamp charges under the Court Fees Act 1870, or query absolute limitations periods for appeals under the Limitation Act 1908 in seconds.",
    phoneScreen: {
      title: "Legal Calculations",
      subtitle: "Statutory Fee & Limits",
      badgeText: "1908 & 1870 Acts",
      icon: Calculator
    }
  }
];

export default function IPhoneScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Framer motion scroll bounds tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll mapping for 3D iPhone transformation on desktop
  // Starts angled, rotates facing front, rotates slightly back, zooms in, and settles flat
  const rotateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-22, 0, 18, -10, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [12, 0, -8, 8, 4]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.92, 1.05, 0.98, 1.1, 0.96]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.5, 1], [20, -10, 10]);

  // Update active step state reactively when scrolling down
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 5 steps -> splits 0.0 to 1.0 into 5 segments
    const step = Math.min(
      Math.floor(latest * 5),
      SCROLL_STEPS.length - 1
    );
    setActiveStep(step);
  });

  const jumpToStep = (index: number) => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Calculate progress offset inside container scroll track
    const totalHeight = element.scrollHeight - window.innerHeight;
    const targetScroll = scrollTop + rect.top + (totalHeight * (index / (SCROLL_STEPS.length - 1)));
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#111418] border-y border-stone-850 py-12 md:py-0 w-full"
    >
      {/* Absolute progress indicator line on the very top of section */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-stone-800 z-10">
        <motion.div 
          className="h-full bg-emerald-500 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        
        {/* Desktop Showcase: Sticky/Fixed Screen Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Column: Descriptive Cards (flows naturally) */}
          <div className="col-span-1 md:col-span-6 space-y-[40vh] py-[10vh] md:py-[22vh]">
            <div className="space-y-4 pr-4">
              <span className="text-[#C5A85A] text-xs font-bold uppercase tracking-wider block">Innovative Mobile Experience</span>
              <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight">
                Pakistan Legal AI <br />
                <span className="text-emerald-400 italic font-medium font-serif">In Your Pocket</span>
              </h2>
              <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light">
                Discover the state-of-the-art interface of LexPK designed for quick actions. Scroll to witness the exact navigation systems, custom templates, and real-time processing fields.
              </p>
              
              {/* Custom Steps Control Nav Buttons */}
              <div className="flex flex-wrap gap-2 pt-4">
                {SCROLL_STEPS.map((step) => (
                  <button 
                    key={step.id}
                    onClick={() => jumpToStep(step.id)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-tight uppercase transition-all duration-300 border ${
                      activeStep === step.id 
                        ? "bg-emerald-800 border-emerald-600 text-[#FAF9F5] shadow-md shadow-emerald-950/40" 
                        : "bg-[#1E2228] border-stone-800 text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    {step.badge}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrolling Steps Sections */}
            {SCROLL_STEPS.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <div 
                  key={step.id}
                  className={`scroll-mt-36 p-6 md:p-8 rounded-2xl border transition-all duration-500 ${
                    isActive 
                      ? "bg-stone-900 border-stone-800 text-white shadow-xl shadow-stone-950/50" 
                      : "bg-[#161a1e]/30 border-transparent text-stone-500"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black border transition-all ${
                      isActive 
                        ? "bg-[#C5A85A]/15 border-[#C5A85A] text-[#C5A85A]" 
                        : "bg-stone-800/40 border-stone-800 text-stone-500"
                    }`}>
                      0{step.id + 1}
                    </span>
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest ${
                      isActive ? "text-[#C5A85A]" : "text-stone-600"
                    }`}>
                      {step.badge}
                    </span>
                  </div>

                  <h3 className={`font-serif text-xl md:text-2xl font-bold tracking-tight mb-3 transition-colors ${
                    isActive ? "text-[#FAF9F5]" : "text-stone-400"
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-xs md:text-sm leading-relaxed font-light transition-colors ${
                    isActive ? "text-stone-300" : "text-stone-500"
                  }`}>
                    {step.description}
                  </p>

                  {/* Tiny mobile inline visual indicator of current step screen */}
                  <div className="md:hidden mt-4 inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Viewing Mockup Inside Phone Screen
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky iPhone Container */}
          <div className="col-span-1 md:col-span-6 md:sticky md:top-20 md:h-[100vh] flex justify-center items-center py-8 md:py-0 w-full overflow-hidden">
            
            {/* 3D Perspective wrapper */}
            <div className="relative w-full max-w-[320px] flex justify-center items-center" style={{ perspective: '1200px' }}>
              
              <motion.div 
                style={{ 
                  rotateY, 
                  rotateX, 
                  scale,
                  y: yTranslate,
                  transformStyle: 'preserve-3d'
                }}
                className="relative w-full z-20"
              >
                {/* Real-time Phone Body (iPhone 15 Pro Aesthetic) */}
                <div className="relative rounded-[50px] bg-[#1a1e22] p-3 shadow-2xl border-[3.5px] border-stone-850">
                  
                  {/* Subtle Screen Glare */}
                  <div className="absolute inset-0 rounded-[46px] border border-white/10 pointer-events-none z-30" />
                  
                  {/* Outer Mechanical Buttons */}
                  <div className="absolute -left-1 top-24 w-[3.5px] h-8 bg-stone-800 rounded-r-sm" />
                  <div className="absolute -left-1 top-36 w-[3.5px] h-11 bg-stone-800 rounded-r-sm" />
                  <div className="absolute -left-1 top-[204px] w-[3.5px] h-11 bg-stone-800 rounded-r-sm" />
                  <div className="absolute -right-1 top-40 w-[3.5px] h-14 bg-stone-800 rounded-l-sm" />

                  {/* Inner Screen Surface */}
                  <div className="relative rounded-[36px] bg-[#FAF9F5] overflow-hidden aspect-[9/19.5] flex flex-col z-20 shadow-inner">
                    
                    {/* Status Bar */}
                    <div className="h-10 px-5 pt-2 flex justify-between items-center text-[10px] font-bold text-stone-900 tracking-wide z-20 shrink-0 select-none">
                      <span>12:00</span>
                      {/* Dynamic Island */}
                      <div className="absolute top-2.5 left-1/2 -translateX-1/2 w-20 h-5 bg-stone-950 rounded-full flex items-center justify-center z-50">
                        <div className="absolute right-4 w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <Battery className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* App Bar / Header */}
                    <div className="px-4 py-2 border-b border-stone-200/60 bg-white flex justify-between items-center z-10 shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="w-6.5 h-6.5 rounded-full bg-[#006B44]/8 border border-[#006B44]/20 flex items-center justify-center text-emerald-800 shadow-inner">
                          {React.createElement(SCROLL_STEPS[activeStep].phoneScreen.icon, { className: "w-3.5 h-3.5" })}
                        </div>
                        <div>
                          <h4 className="font-serif font-black text-stone-950 text-[10px] leading-tight flex items-center gap-1">
                            {SCROLL_STEPS[activeStep].phoneScreen.title}
                            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping inline-block" />
                          </h4>
                          <p className="text-[7px] text-stone-400 font-bold leading-none">{SCROLL_STEPS[activeStep].phoneScreen.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-[6.5px] text-emerald-800 font-extrabold uppercase bg-emerald-50/70 border border-emerald-100/90 px-1.5 py-0.5 rounded">
                        {SCROLL_STEPS[activeStep].phoneScreen.badgeText}
                      </span>
                    </div>

                    {/* Dynamic App Screens showing current feature */}
                    <div className="flex-1 overflow-y-auto bg-stone-50 p-3 flex flex-col justify-between relative scrollbar-none">
                      
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeStep}
                          initial={{ opacity: 0, x: 12, filter: 'blur(3px)' }}
                          animate={{ opacity: 1, x: 0, filter: 'blur(0)' }}
                          exit={{ opacity: 0, x: -12, filter: 'blur(3px)' }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="flex-1 flex flex-col justify-between text-stone-800 h-full py-1.5"
                        >
                          {/* ================= STEP 0: VAKEEL CHAT ================= */}
                          {activeStep === 0 && (
                            <div className="space-y-4 flex-1 flex flex-col justify-end">
                              <div className="text-center">
                                <span className="inline-block text-[6.5px] text-stone-400 uppercase font-black tracking-widest bg-stone-100 px-2 py-0.5 rounded-full">
                                  Statutory Intelligence Bot
                                </span>
                              </div>
                              <div className="space-y-2 flex-1 flex flex-col justify-end">
                                <div className="p-2 bg-emerald-800 text-white rounded-xl rounded-tr-xs text-[8.5px] max-w-[85%] self-end font-medium leading-relaxed leading-snug">
                                  Is inheritance law grounded in Article 23?
                                </div>
                                <div className="p-2 bg-white border border-stone-200 rounded-xl rounded-tl-xs text-[7.5px] text-stone-600 leading-relaxed font-light space-y-1.5 shadow-xs">
                                  <p>Yes. **Article 23 of the 1973 Constitution** guarantees the right to acquire, hold and dispose of property.</p>
                                  <p className="text-[7px] text-emerald-800 font-extrabold border-t border-stone-100 pt-1 uppercase tracking-wider flex justify-between">
                                    <span>Verified Source</span>
                                    <span>Const. Art 23</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* ================= STEP 1: DRAFT STUDIO ================= */}
                          {activeStep === 1 && (
                            <div className="space-y-2.5 flex-1 flex flex-col justify-start">
                              <div className="bg-white border border-stone-200/80 rounded-xl p-2 shadow-xs">
                                <h5 className="font-serif font-bold text-[9px] text-stone-900 border-b border-stone-100 pb-1 flex justify-between items-center">
                                  <span>Tenancy Agreement</span>
                                  <span className="text-[6.5px] text-[#C5A85A] font-extrabold bg-amber-50 rounded border border-amber-200/50 px-1 py-0.2 uppercase">1872 Contract Act</span>
                                </h5>
                                <div className="mt-1.5 space-y-1">
                                  <label className="text-[6px] text-stone-400 block font-bold uppercase tracking-wide">First Party (Owner)</label>
                                  <div className="text-[7.5px] bg-[#FAF9F5] border border-stone-150 px-2 py-0.5 rounded italic font-medium">Ahmed Raza, Lahore</div>
                                  <label className="text-[6px] text-stone-400 block font-bold uppercase tracking-wide">Second Party (Tenant)</label>
                                  <div className="text-[7.5px] bg-[#FAF9F5] border border-stone-150 px-2 py-0.5 rounded italic font-medium">Bilal Mahmood</div>
                                </div>
                              </div>

                              <div className="border border-dashed border-emerald-300 rounded-xl p-2 bg-emerald-50/40 text-center space-y-1.5">
                                <div className="text-[7px] text-emerald-900 font-black flex items-center justify-center gap-1">
                                  <Check className="w-2.5 h-2.5" /> Stamp Paper Ready (PPC §12)
                                </div>
                                <div className="inline-flex items-center gap-1 bg-emerald-800 text-white text-[7px] font-bold px-2 py-1 rounded-md shadow-xs justify-center w-full">
                                  <Download className="w-2 h-2" /> Download Complete PDF
                                </div>
                              </div>
                            </div>
                          )}

                          {/* ================= STEP 2: STATUTES LIBRARY ================= */}
                          {activeStep === 2 && (
                            <div className="space-y-2 flex-1 flex flex-col justify-start select-none">
                              <div className="text-[7px] text-stone-400 font-bold uppercase tracking-wider mb-1">Interactive Statutory Repository</div>
                              
                              <div className="p-2 border border-stone-200 bg-white rounded-xl flex justify-between items-center shadow-xs">
                                <div>
                                  <h6 className="font-serif font-black text-[8px] text-stone-900">Constitution of Pakistan, 1973</h6>
                                  <p className="text-[6px] text-stone-400">Verifiable Code portal citation</p>
                                </div>
                                <span className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-[6.5px] font-bold px-1.5 py-0.5 rounded">
                                  PDF Active
                                </span>
                              </div>

                              <div className="p-2 border border-stone-200 bg-white rounded-xl flex justify-between items-center shadow-xs">
                                <div>
                                  <h6 className="font-serif font-black text-[8px] text-stone-900">Pakistan Penal Code, 1860</h6>
                                  <p className="text-[6px] text-stone-400">Section 302, 379, 420, etc.</p>
                                </div>
                                <span className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-[6.5px] font-bold px-1.5 py-0.5 rounded">
                                  PDF Active
                                </span>
                              </div>

                              <div className="p-2 border border-[#E7E5DD] bg-stone-100/50 rounded-xl flex justify-between items-center">
                                <div>
                                  <h6 className="font-serif font-bold text-[8px] text-stone-400">Muslim Family Laws Ord, 1961</h6>
                                  <p className="text-[6px] text-stone-350">Pending cloud registration</p>
                                </div>
                                <span className="text-stone-400 text-[6.5px] font-bold px-1.5 py-0.5">
                                  Offline
                                </span>
                              </div>
                            </div>
                          )}

                          {/* ================= STEP 3: ADVOCATE BOOKING ================= */}
                          {activeStep === 3 && (
                            <div className="space-y-2 flex-1 flex flex-col justify-start">
                              <div className="text-[7px] text-stone-400 font-bold uppercase tracking-wider mb-1">Advocates Nearby (Active Online)</div>
                              
                              <div className="p-2 bg-white border border-stone-200 rounded-xl space-y-1.5 shadow-xs">
                                <div className="flex justify-between items-start">
                                  <div className="flex gap-1.5 items-center">
                                    <div className="w-5 h-5 rounded-full bg-emerald-950 font-black text-[7.5px] text-white flex items-center justify-center shadow-sm">SK</div>
                                    <div>
                                      <h6 className="font-serif font-bold text-[8px] text-stone-950 leading-none">Sarah Khan, Adv.</h6>
                                      <p className="text-[6px] text-stone-400">High Court Family Expert</p>
                                    </div>
                                  </div>
                                  <span className="flex items-center gap-0.5 text-[6.5px] text-[#C5A85A] font-extrabold">
                                    <Star className="w-1.5 h-1.5 fill-current" /> 4.9
                                  </span>
                                </div>
                                <div className="flex justify-between items-center border-t border-stone-100 pt-1">
                                  <span className="text-[6.5px] text-emerald-800 font-bold flex items-center gap-0.5"><MapPin className="w-1.5 h-1.5" /> Lahore</span>
                                  <button className="bg-emerald-800 text-white text-[6.5px] font-bold px-2 py-0.5 rounded">Book Now</button>
                                </div>
                              </div>

                              <div className="p-2 bg-white border border-stone-200 rounded-xl space-y-1.5 shadow-xs">
                                <div className="flex justify-between items-start">
                                  <div className="flex gap-1.5 items-center">
                                    <div className="w-5 h-5 rounded-full bg-emerald-950 font-black text-[7.5px] text-white flex items-center justify-center shadow-sm">MA</div>
                                    <div>
                                      <h6 className="font-serif font-bold text-[8px] text-stone-950 leading-none">Mian Ali, Adv.</h6>
                                      <p className="text-[6px] text-stone-400">PPC Criminal Law Specialist</p>
                                    </div>
                                  </div>
                                  <span className="flex items-center gap-0.5 text-[6.5px] text-[#C5A85A] font-extrabold">
                                    <Star className="w-1.5 h-1.5 fill-current" /> 4.8
                                  </span>
                                </div>
                                <div className="flex justify-between items-center border-t border-stone-100 pt-1">
                                  <span className="text-[6.5px] text-emerald-800 font-bold flex items-center gap-0.5"><MapPin className="w-1.5 h-1.5" /> Islamabad</span>
                                  <button className="bg-emerald-800 text-white text-[6.5px] font-bold px-2 py-0.5 rounded">Book Now</button>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* ================= STEP 4: SMART UTILITIES ================= */}
                          {activeStep === 4 && (
                            <div className="space-y-2 flex-1 flex flex-col justify-start">
                              <div className="text-[7.5px] text-stone-400 font-bold uppercase tracking-wider mb-1">Fee &amp; Limitation Tools</div>
                              
                              <div className="bg-white border border-stone-200 rounded-xl p-2 shadow-xs space-y-2">
                                <div className="border-b border-stone-100 pb-1">
                                  <span className="text-[6.5px] text-stone-400 font-bold uppercase tracking-wide">Court Fees Act, 1870</span>
                                  <div className="flex justify-between items-center mt-0.5">
                                    <span className="text-[8px] font-bold text-stone-900">Suit for Partition Rent</span>
                                    <span className="text-[8px] font-black text-emerald-700">PKR 15.00</span>
                                  </div>
                                </div>

                                <div>
                                  <span className="text-[6.5px] text-stone-400 font-bold uppercase tracking-wide font-mono">Limitation Act, 1908</span>
                                  <div className="flex justify-between items-center mt-0.5">
                                    <span className="text-[8px] font-bold text-stone-900">Civil Appeal (High Court)</span>
                                    <span className="text-[7.5px] text-stone-500 font-black">90 Days</span>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-[#FAF9F5] border border-[#C5A85A]/30 rounded-xl p-1.5 text-center text-[7px] text-[#C5A85A] font-medium leading-relaxed">
                                Statutory parameters synced precisely with latest Federal and High Court gazette amendments 2026.
                              </div>
                            </div>
                          )}

                        </motion.div>
                      </AnimatePresence>

                      {/* iPhone Type Box */}
                      <div className="mt-1 p-2 border-t border-stone-200/60 bg-white flex gap-2 items-center shrink-0 rounded-b-xl z-10">
                        <div className="flex-1 bg-[#FAF9F5] border border-stone-200 rounded-full px-2 py-1.5 flex justify-between items-center">
                          <span className="text-[7.5px] text-stone-400">Secure Sandboxed Portal...</span>
                          <HelpCircle className="w-3 h-3 text-stone-400" />
                        </div>
                        <div className="w-6 h-6 bg-emerald-850 text-white rounded-full flex items-center justify-center">
                          <Send className="w-2.5 h-2.5" />
                        </div>
                      </div>

                    </div>

                    {/* Home Sweep Line */}
                    <div className="h-4 flex items-center justify-center shrink-0 bg-white z-10">
                      <div className="w-18 h-1 bg-stone-950 rounded-full" />
                    </div>

                  </div>
                </div>

                {/* Perspective depth decor backplates */}
                <div 
                  className="absolute inset-0 bg-[#0e1114] rounded-[50px] shadow-2xl pointer-events-none" 
                  style={{ transform: 'translateZ(-15px)', filter: 'brightness(0.65)' }} 
                />
                
              </motion.div>

              {/* Floor Reflex / Shadow */}
              <div className="absolute -bottom-10 left-1/2 -translateX-1/2 w-[85%] h-5 bg-[#000]/40 rounded-full filter blur-xl z-0 pointer-events-none" />
              
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}
