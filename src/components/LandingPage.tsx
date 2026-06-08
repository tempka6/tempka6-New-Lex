import { Scale, Shield, Landmark, BookOpen, Users, Compass, HelpCircle, Check, ArrowRight, MessageSquare, ChevronsUp, MessageCircle, Briefcase, FileCheck } from 'lucide-react';
import React from 'react';
import IPhoneMockup from './IPhoneMockup';
import MacBookMockup from './MacBookMockup';
import IPhoneScrollSection from './IPhoneScrollSection';
import { motion, useScroll, useTransform } from 'motion/react';

interface LandingPageProps {
  onLaunchApp: (initialQuery?: string, role?: 'lawyer' | 'student' | 'citizen') => void;
}

export default function LandingPage({ onLaunchApp }: LandingPageProps) {
  const [heroQuery, setHeroQuery] = React.useState('');
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [scrollPercent, setScrollPercent] = React.useState(0);

  // Scroll parallax reference hooks
  const whyLexpkRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: whyLexpkScrollY } = useScroll({
    target: whyLexpkRef,
    offset: ["start end", "end start"]
  });
  const deviceY = useTransform(whyLexpkScrollY, [0, 1], [30, -35]);

  const desktopRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: desktopScrollY } = useScroll({
    target: desktopRef,
    offset: ["start end", "end start"]
  });
  const desktopY = useTransform(desktopScrollY, [0, 1], [40, -40]);

  // Framer Motion entry stagger parameters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const pct = (window.scrollY / total) * 100;
        setScrollPercent(pct);
      }
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onLaunchApp(heroQuery);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen font-sans text-stone-700 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(200,168,75,0.04)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E7E5DD] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center shadow-md">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-stone-950 tracking-tight">LexPK</span>
              <span className="hidden sm:inline-block text-[10px] text-stone-500 font-semibold tracking-wider uppercase ml-2 border-l border-[#E7E5DD] pl-2">
                Pakistan Legal Intelligence
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#solutions" className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors hidden md:inline-block">Capabilities</a>
            <a href="#transparency" className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors hidden md:inline-block">No Limitations</a>
            <button
              onClick={() => onLaunchApp()}
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-sm font-semibold transition-all shadow-md shadow-emerald-700/10"
            >
              Launch App
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 md:py-32 overflow-hidden">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10 space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-semibold text-emerald-800 uppercase tracking-widest mx-auto animate-none">
            <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
            AI-Powered Legal Hub
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl font-semibold text-stone-900 tracking-tight leading-none">
            LexPK <br />
            <span className="text-emerald-700 italic font-medium font-serif">Legal AI</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-stone-600 text-lg max-w-xl mx-auto font-light leading-relaxed">
            AI-powered legal research, provision-based answers, and court-ready document drafting — in English &amp; Urdu.
          </motion.p>

          {/* Hero search bar */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto pt-4">
            <form onSubmit={handleHeroSearch} className="bg-white border-2 border-[#E7E5DD] focus-within:border-emerald-600 rounded-2xl p-2 shadow-xl flex items-center gap-2 transition-all">
              <input
                type="text"
                value={heroQuery}
                onChange={(e) => setHeroQuery(e.target.value)}
                placeholder="Ask any legal questions in English or Urdu... (e.g. Fundamental Rights under 1973 Constitution)"
                className="flex-1 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 bg-transparent border-0 outline-none"
              />
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
              >
                Ask Vakeel
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Micro-Scale CTA Hover Dual Portal Entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-8">
            {/* Citizen Portal Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.015 }}
              onClick={() => onLaunchApp(undefined, 'citizen')}
              className="p-6 rounded-2xl bg-white border border-[#E7E5DD] hover:border-[#C5A85A] text-left cursor-pointer transition-colors group shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-850 rounded-xl flex items-center justify-center group-hover:bg-[#C5A85A]/10 transition-colors">
                  <span className="font-serif text-xs font-black">Aam</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-1.5 transition-colors group-hover:text-stone-955">
                    Enter Citizen Portal
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#C5A85A] group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-stone-500 text-xs font-light leading-relaxed mt-1">
                    Plain-language guides, step-by-step assistance for police FIRs, family inheritance disputes, and civil rights.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100/70 flex justify-between items-center text-[10px]">
                <span className="text-emerald-800 font-extrabold uppercase">Simple English &amp; Urdu</span>
                <span className="text-stone-400 font-semibold">No account required</span>
              </div>
            </motion.div>

            {/* Lawyer Workspace Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.015 }}
              onClick={() => onLaunchApp(undefined, 'lawyer')}
              className="p-6 rounded-2xl bg-white border border-[#E7E5DD] hover:border-[#C5A85A] text-left cursor-pointer transition-colors group shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 bg-emerald-800/10 text-emerald-850 rounded-xl flex items-center justify-center group-hover:bg-[#C5A85A]/10 transition-colors">
                  <Scale className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-1.5 transition-colors group-hover:text-stone-955">
                    Launch Lawyer Workspace
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#C5A85A] group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-stone-500 text-xs font-light leading-relaxed mt-1">
                    CrPC / PPC citation reasoning, court-ready procedural drafting templates, and deep constitutional research.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100/70 flex justify-between items-center text-[10px]">
                <span className="text-[#C5A85A] font-extrabold uppercase tracking-wide">Litigation Suite</span>
                <span className="text-stone-400 font-semibold">Supreme Court Precedents</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>


      {/* Why LexPK Exists */}
      <section ref={whyLexpkRef} id="why-lexpk-exists-section" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#E7E5DD]/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-extrabold uppercase tracking-widest leading-none">
              <span className="w-8 h-[2px] bg-emerald-800" />
              OUR PURPOSE
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 leading-tight">
              Why LexPK <br />
              Exists
            </h2>
            <div className="space-y-5 text-stone-600 font-sans text-sm md:text-base leading-relaxed font-light">
              <p>
                Access to justice begins with access to knowledge. Yet Pakistani law — spanning over 1,130 federal acts, ordinances, and constitutional provisions from 1948 to 2026 — has remained locked behind complex language, expensive legal databases, and gatekept expertise.
              </p>
              <p>
                LexPK is an AI-powered legal intelligence platform built to democratize access to Pakistani law. Grounded in verified official sources — PakistanCode.gov.pk, Supreme Court databases, FBR, National Assembly — it delivers provision-based answers citing exact sections, acts, and statutory text.
              </p>
              <p>
                From a woman seeking her inheritance rights under Muslim Family Laws, to a startup navigating the Virtual Assets Act 2026, to a lawyer drafting a bail application under Section 498 — LexPK makes the law understandable, searchable, and actionable for every Pakistani.
              </p>
            </div>
          </div>

          {/* Right Column Visual (Device/Laptop Mockup with scroll-linked parallax) */}
          <motion.div style={{ y: deviceY }} className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative p-6 md:p-10 rounded-3xl bg-radial from-stone-200/50 to-stone-100/15 border border-[#E7E5DD]/70 max-w-[480px] lg:max-w-none mx-auto shadow-sm">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-250/50 bg-stone-950 p-2 lg:p-3">
                {/* Screen container */}
                <div className="relative rounded-lg overflow-hidden bg-stone-900 border border-stone-850 aspect-[16/10] flex flex-col">
                  {/* Inner mock interface simulating user/bot conversation representing FIR draft */}
                  <div className="p-3 bg-white flex-1 flex flex-col text-[10px] select-none text-stone-700 justify-between">
                    <div className="flex justify-between items-center border-b border-stone-100 pb-1.5 mb-2 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Scale className="w-3 h-3 text-[#006B44]" />
                        <span className="font-serif font-black text-stone-900 text-[9px] tracking-wide">LexPK Legal Assistant</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      </div>
                    </div>
                    {/* Chat Bubble Simulation */}
                    <div className="flex-1 flex flex-col justify-end gap-2 pb-2">
                      <div className="px-3 py-2 bg-[#006B44] text-white rounded-xl text-[8px] max-w-[80%] self-end font-medium leading-relaxed shadow-sm">
                        How do I file an FIR at a police station?
                      </div>
                      <div className="p-2.5 bg-stone-50 border border-stone-200/60 rounded-xl text-[7.5px] max-w-[90%] self-start text-stone-600 leading-relaxed shadow-xs">
                        <strong className="text-[#006B44]">Filing a First Information Report (FIR)</strong> at a police station is a crucial step in initiating a criminal investigation in Pakistan. The process is governed by the <strong className="text-stone-900">Code of Criminal Procedure 1898</strong>, specifically Section 154, which outlines procedures...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlapping Bottom Badge */}
              <div className="absolute -bottom-4 left-4 right-4 bg-stone-950/95 border border-stone-800/80 backdrop-blur-md rounded-xl p-4 flex items-center gap-3.5 shadow-2xl">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-950/60 flex items-center justify-center text-[#C5A85A] shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#FAF9F5] text-xs font-bold leading-tight">Verified. Cited. Accurate.</h4>
                  <p className="text-stone-300 text-[10px] mt-1 font-light">Every answer cites exact statutory provisions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll-linked iPhone Visual Showcase (Kestrl style) */}
      <IPhoneScrollSection />

      {/* Desktop Experience Section */}
      <section ref={desktopRef} id="desktop-experience-section" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-b border-[#E7E5DD]/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Screenshot Visual representing animated MacBook with scroll-linked parallax */}
          <motion.div style={{ y: desktopY }} className="lg:col-span-7 order-2 lg:order-1 flex justify-center items-center">
            <MacBookMockup />
          </motion.div>

          {/* Right Column Text */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-[#C5A85A] text-xs font-bold uppercase tracking-widest">
              <span className="w-8 h-[1.5px] bg-[#C5A85A]" />
              DESKTOP EXPERIENCE
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight leading-tight">
              LexAI on <br className="hidden lg:block" /> Desktop
            </h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Professional legal assistance with a powerful, full-featured web interface and comprehensive legal tools.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency & "No Limitations" Section */}
      <section className="bg-white border-y border-[#E7E5DD] py-20 px-6" id="transparency">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-serif text-3xl font-semibold text-stone-900 tracking-tight">
              One-Step Solution with <span className="text-emerald-700">No Limitations</span>
            </h2>
            <p className="text-stone-500 text-sm max-w-lg mx-auto">
              LexPK has broken down the barriers of traditional legal access. Gone are the days of sterile tools with dead-ends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FAF9F5] border border-[#E7E5DD] rounded-2xl p-6 space-y-6">
              <h3 className="font-serif text-xl font-semibold text-stone-950 flex items-center gap-2">
                <Landmark className="text-emerald-700 w-5 h-5" />
                The LexPK Advantage
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                LexPK has transformed from a mere diagnostic app into an executive **One-Step Solution**. We don\'t leave users empty-handed with disclaimers; we hand over actionable draft papers and instantly link you with physical legal networks.
              </p>
              <div className="pt-4 border-t border-[#E7E5DD] flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-800">
                  <Check className="w-5 h-5" />
                </div>
                <div className="text-xs text-stone-500 italic">
                  &ldquo;A complete bridging mechanism from AI search to physical court litigation.&rdquo;
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#FAF9F5]/40 border border-[#E7E5DD] rounded-xl p-4 flex gap-4 transition-all hover:bg-[#FAF9F5]">
                <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-emerald-800">01</span>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm mb-1">Direct Legal Representation</h4>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    Need actionable solutions? You can now connect directly to certified legal advisors within the Lex Marketplace for formal legal counsel.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF9F5]/40 border border-[#E7E5DD] rounded-xl p-4 flex gap-4 transition-all hover:bg-[#FAF9F5]">
                <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-emerald-800">02</span>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm mb-1">On-Ground Court Representation</h4>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    Skip the stress. Smoothly bridge into physical litigation by hiring verified advocates for on-ground court representation via our Marketplace.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF9F5]/40 border border-[#E7E5DD] rounded-xl p-4 flex gap-4 transition-all hover:bg-[#FAF9F5]">
                <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-emerald-800">03</span>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm mb-1">Retrieval &amp; Registry Services</h4>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    Easily commission marketplace paralegals to retrieve certified copies of judgments, file FIRs, or obtain certified municipal records.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF9F5]/40 border border-[#E7E5DD] rounded-xl p-4 flex gap-4 transition-all hover:bg-[#FAF9F5]">
                <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-emerald-800">04</span>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm mb-1">Vetted Legal Drafting</h4>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    Every AI-generated draft or plaint can be forwarded instantly to experienced advocates within the database to be vetted, reviewed, and finalized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Core Sections: Solutions */}
      <section className="py-20 px-6 max-w-7xl mx-auto" id="solutions">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-800 tracking-widest uppercase">Comprehensive Modules</span>
          <h2 className="font-serif text-4xl font-semibold text-stone-900 tracking-tight mt-2">Engineered For Pakistani Jurisprudence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

          <div className="bg-white border border-[#E7E5DD] rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-emerald-800" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-950 mb-2">WhatsApp Legal Bot</h3>
              <p className="text-stone-500 text-xs leading-relaxed font-light">
                No app install or logins needed. Forward contracts, take photo snapshots, or send Voice Notes in Urdu to get instant, clause-by-clause cited AI feedback.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-emerald-600 mt-auto">Mass Market Connect →</div>
          </div>

          <div className="bg-white border border-[#E7E5DD] rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-800" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-950 mb-2">Verified Law Library</h3>
              <p className="text-stone-500 text-xs leading-relaxed font-light">
                An exhaustive, searchable legal catalog covering over 220+ verified federal statutes, linking directly and safely to official Pakistan Code PDF documents.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-emerald-800 mt-auto font-mono">1,130+ Statutory Acts →</div>
          </div>

          <div className="bg-white border border-[#E7E5DD] rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-emerald-800" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-950 mb-2">Bespoke Court Drafting</h3>
              <p className="text-stone-500 text-xs leading-relaxed font-light">
                Structure legal drafting with automated templates. Compile stamp records, tenancy agreements, family petitions, and commercial tax warnings instantly.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-emerald-800 mt-auto">1899 Stamp Rules →</div>
          </div>

          <div className="bg-white border border-[#E7E5DD] rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-emerald-800" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-950 mb-2">Legal Job Board</h3>
              <p className="text-stone-500 text-xs leading-relaxed font-light">
                Daily fresh listings from top Pakistan law practices to drive retention and reward junior advocates and law students preparing for High Court bar admissions.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-emerald-800 mt-auto">Daily Returns Hook →</div>
          </div>

          <div className="bg-white border border-[#E7E5DD] rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-emerald-800" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-950 mb-2">Verified Copy Retrieval</h3>
              <p className="text-stone-500 text-xs leading-relaxed font-light">
                Physical lookup and secure attestation copies for certified Punjab police FIR registers, High Court writ appeal records, and Punjab Sub-Registrar land deeds.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-emerald-800 mt-auto">Punjab Gazette Seals →</div>
          </div>
        </div>
      </section>

      {/* Target Audiences / CTA Block */}
      <section className="bg-emerald-950 text-white py-24 px-6 border-t border-emerald-950 relative overflow-hidden">
        {/* Decorative background details */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(200,168,75,0.06)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-800/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-900/60 border border-emerald-800/80 rounded-full text-xs font-extrabold text-[#C5A85A] uppercase tracking-widest">
            Start Now — Free
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-[#FAF9F5] tracking-tight">
            Justice Shouldn't <br />
            Require a Law Degree
          </h2>

          <p className="text-emerald-100 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Explore Pakistani law with AI. Provision-based answers. In English or Urdu. No signup required.
          </p>

          <div className="pt-4 max-w-sm mx-auto flex flex-col items-center gap-4">
            <button
              onClick={() => onLaunchApp()}
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#C5A85A] hover:bg-[#e8cc7a] text-emerald-950 font-bold text-sm tracking-wider rounded-xl uppercase transition-all shadow-xl shadow-amber-900/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Launch LexPK
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-emerald-300 text-[10px] font-mono tracking-wider uppercase select-none opacity-85">
              Free to use · No account required · Pakistani Law Only
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-[#E7E5DD] px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-800 rounded-lg flex items-center justify-center">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <span className="font-serif font-bold text-stone-900">LexPK</span>
          </div>
          <div className="text-xs text-stone-400 text-center md:text-right">
            <span>© 2026 LexPK — Gilded Emerald Light Theme. Certified for Pakistani Jurisprudence.</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button - Bottom Left */}
      <a
        id="whatsapp-floating-button"
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all text-white hover:bg-[#20ba59]"
        title="Chat with Legal Advisor on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white" />
      </a>

      {/* Circular Progress Scroll-To-Top Button - Bottom Right */}
      {showScrollTop && (
        <button
          id="scroll-to-top-progress-button"
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group cursor-pointer"
          title="Scroll to Top"
        >
          {/* Progress circle outline */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="transparent"
              stroke="#FAF9F5"
              strokeWidth="2.5"
            />
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="transparent"
              stroke="#1b1917"
              strokeWidth="3.5"
              strokeDasharray={2 * Math.PI * 22}
              strokeDashoffset={2 * Math.PI * 22 - (scrollPercent / 100) * (2 * Math.PI * 22)}
              strokeLinecap="round"
            />
          </svg>
          <ChevronsUp className="w-5 h-5 text-stone-850 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}
