import React, { useState, useEffect } from 'react';
import { Scale, FileText, ChevronRight, CheckCircle, Clock, Search, Folder, Shield, Download } from 'lucide-react';

interface TabContent {
  title: string;
  badge: string;
  filename: string;
  content: string[];
}

const DESKTOP_TABS: TabContent[] = [
  {
    title: "Pre-Arrest Bail Application",
    badge: "CrPC Sec 498",
    filename: "Bail_Application_498_CrPC.docx",
    content: [
      "IN THE COURT OF THE SESSIONS JUDGE, LAHORE",
      "Criminal Miscellaneous No. 40821-B / 2026",
      "",
      "Mian Faisal, S/o Muhammad Sharif,",
      "Resident of House 12-A, Gulberg III, Lahore, Pakistan. ... Petitioner",
      "VERSUS",
      "The State & Another ... Respondents",
      "",
      "APPLICATION UNDER SECTION 498 OF CODE OF CRIMINAL PROCEDURE 1898",
      "FOR THE GRANT OF AD-INTERIM PRE-ARREST BAIL IN FIR NO. 452/2026",
      "UNDER SECTION 379 PPC, POLICE STATION GULBERG, LAHORE.",
      "",
      "Respectfully Sheweth:",
      "1. That the Petitioner has been falsely and maliciously implicated in the above-mentioned FIR",
      "   at the behest of a local business rival with absolute mala-fide intentions.",
      "2. That the Petitioner is a law-abiding respectable citizen, has no previous criminal record,",
      "   and is ready and willing to join the investigation to establish absolute innocence.",
      "3. That the custodial interrogation of the Petitioner is neither useful nor warranted under",
      "   established Pakistani jurisprudence as no physical query remains pending.",
      "4. That the Petitioner is willing to furnish reliable surety bonds for absolute satisfaction",
      "   of this Honourable Court.",
      "",
      "PRAYER:",
      "It is therefore most respectfully prayed that ad-interim pre-arrest bail may kindly be granted",
      "to the Petitioner, and the police concerned be directed not to arrest him till decision.",
      "",
      "Petitioner | Through Counsel Advocate Supreme Court of Pakistan"
    ]
  },
  {
    title: "Commercial Lease Agreement",
    badge: "Punjab Rented Premises 2009",
    filename: "Commercial_Lease_Agreement.docx",
    content: [
      "COMMERCIAL LEASE DEED",
      "This Commercial Lease Agreement is executed at Karachi on 30th May, 2026 by and between:",
      "",
      "Syed Ahmed Ali, CNIC: 42101-1234567-1, hereinafter referred to as LANDLORD.",
      "AND",
      "Vertex Tech Pvt Ltd, through CEO Muhammad Khan, CNIC: 35201-9876543-1, hereinafter referred to as TENANT.",
      "",
      "TERMS AND CONDITIONS:",
      "1. PREMISES: The Landlord hereby leases out Office No. 402, 4th Floor, Clifton Centre, Clifton Road, Karachi.",
      "2. DURATION: This lease is granted for a fixed term of 3 (three) years commencing from 1st June, 2026.",
      "3. RENT & ESCALATION: The monthly rent is fixed at PKR 150,000/- (One Hundred & Fifty Thousand only),",
      "   escalating at a flat rate of 10% annually at the end of each completed year.",
      "4. SECURITY DEPOSIT: The Tenant has paid a security deposit of PKR 450,000/- (Three Months' Rent)",
      "   which shall be refundable without interest upon peaceful vacation of properties.",
      "5. DISPUTES: Governed by the Sindh Rented Premises Ordinance, 1979.",
      "",
      "In Witness Whereof, both parties have set hands and signatures on the date mentioned above.",
      "",
      "Landlord Representative _________ | Tenant Representative _________ | Witness 1 & 2"
    ]
  },
  {
    title: "Legal Recovery Notice",
    badge: "Contract Act 1872",
    filename: "Legal_Notice_Debt_Recovery.docx",
    content: [
      "LEGAL NOTICE FOR THE RECOVERY OF OUTSTANDING CONTRACTUAL DEBT",
      "To:",
      "Apex Logistics House, Plot 89-B, Industrial Area, Sector I-9, Islamabad.",
      "",
      "Dear Sirs,",
      "Under instructions and on behalf of our client, Messrs Zenith Hardware Traders, Lahore,",
      "we hereby serve you with this formal Legal Notice under Section 73 of the Contract Act, 1872:",
      "",
      "1. That our client supplied high-grade hardware fittings to your company under verified purchase orders",
      "   bearing No. PO-4592, total invoice value amounting to PKR 2,800,000/-.",
      "2. That despite multiple written notices, reminders, and delivery confirmations, you have filed",
      "   to clear the outstanding balance of PKR 1,200,000/- inside the agreed credit window of 45 days.",
      "3. That your willful withholding of payments constitutes a severe breach of contract and has",
      "   inflicted severe pecuniary damage to our client's business liquidity.",
      "",
      "REQUIREMENT:",
      "You are hereby called upon to pay the balance of PKR 1,200,000/- along with legal fees in the amount of",
      "PKR 50,000/- within 14 days of receipt of this Legal Notice, failing which we hold clear instructions to",
      "initiate civil litigation and file winding-up petitions before high courts of competent jurisdiction.",
      "",
      "For & On Behalf of Zenith Hardware Traders,",
      "Chaudhary & Partners, Advocates & Legal Consultants, Mall Road, Lahore."
    ]
  }
];

export default function MacBookMockup() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [linesShown, setLinesShown] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [isGenerating, setIsGenerating] = useState(true);

  const activeTab = DESKTOP_TABS[activeTabIdx];

  // When changing tabs, reset typing simulation
  useEffect(() => {
    setLinesShown([]);
    setCurrentLineIdx(0);
    setCurrentCharIdx(0);
    setIsGenerating(true);
  }, [activeTabIdx]);

  // Typing effect simulation line by line for code block appearance
  useEffect(() => {
    if (!isGenerating) return;

    if (currentLineIdx < activeTab.content.length) {
      const lineText = activeTab.content[currentLineIdx];

      if (lineText === "") {
        // Empty line, head straight to next
        setLinesShown((prev) => [...prev, ""]);
        setCurrentLineIdx((prev) => prev + 1);
        setCurrentCharIdx(0);
      } else {
        const timer = setTimeout(() => {
          setLinesShown((prev) => {
            const next = [...prev];
            if (next[currentLineIdx] === undefined) {
              next[currentLineIdx] = "";
            }
            next[currentLineIdx] += lineText[currentCharIdx];
            return next;
          });

          if (currentCharIdx < lineText.length - 1) {
            setCurrentCharIdx((prev) => prev + 1);
          } else {
            setCurrentLineIdx((prev) => prev + 1);
            setCurrentCharIdx(0);
          }
        }, 12); // fast typing speed for lines
        return () => clearTimeout(timer);
      }
    } else {
      setIsGenerating(false);
    }
  }, [isGenerating, currentLineIdx, currentCharIdx, activeTab]);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-6 select-none animate-fade-in">
      
      {/* Tab Selectors placed outside MacBook bezel to represent a dashboard */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {DESKTOP_TABS.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTabIdx(idx)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 border shadow-sm cursor-pointer ${
              activeTabIdx === idx
                ? 'bg-emerald-800 text-[#FAF9F5] border-emerald-700'
                : 'bg-white text-stone-600 border-stone-200/80 hover:bg-[#FAF9F5] hover:text-stone-900'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeTabIdx === idx ? 'bg-[#C5A85A] animate-pulse' : 'bg-stone-300'}`} />
            {tab.title}
          </button>
        ))}
      </div>

      {/* Realistic MacBook Pro CSS Frame */}
      <div className="relative mx-auto max-w-[760px]">
        
        {/* Top Screen Shell Lid */}
        <div className="relative rounded-t-[20px] bg-stone-950 p-[9px] pb-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-stone-800">
          
          {/* Bezel inner border */}
          <div className="relative rounded-lg overflow-hidden bg-stone-900 border border-stone-850 aspect-[16/10] flex flex-col">
            
            {/* Screen Reflective overlay glass */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-30" />

            {/* Camera Bezel dot and screen glass top border */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#1e293b]/0 flex justify-center items-center z-40">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-950 flex items-center justify-center border border-stone-800/40">
                <span className="w-0.5 h-0.5 rounded-full bg-blue-500/80" />
              </div>
            </div>

            {/* Actual screen inside MacBook */}
            <div className="bg-[#FAF9F5] flex-1 flex flex-col text-[10px] text-stone-700 h-full relative">
              
              {/* Internal Workspace Header */}
              <div className="bg-white border-b border-stone-200/60 px-4 py-2.5 flex justify-between items-center shrink-0 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-lg bg-emerald-800 flex items-center justify-center text-white font-serif">
                    <Scale className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="font-serif font-black text-stone-900 text-[10px] tracking-wide">
                      LexPK Workspace <span className="font-sans font-medium text-[8px] text-emerald-800 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-100/50">Vakeel Pro</span>
                    </h5>
                  </div>
                </div>
                
                {/* Search Bar & Stats */}
                <div className="flex items-center gap-3">
                  <div className="bg-stone-50 border border-stone-200 rounded-lg px-2 py-0.5 w-44 flex items-center justify-between text-[7.5px] text-stone-400">
                    <span>Search laws, rulings, precedents...</span>
                    <Search className="w-2.5 h-2.5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[8px] text-stone-400 font-mono">
                    <Clock className="w-2.5 h-2.5" />
                    <span>10:24 AM PKT</span>
                  </div>
                </div>
              </div>

              {/* Workspace Layout Columns */}
              <div className="flex-1 flex overflow-hidden">
                
                {/* Sidebar */}
                <div className="w-32 bg-stone-50 border-r border-stone-200/60 p-2.5 space-y-3 flex flex-col justify-between shrink-0">
                  <div className="space-y-2">
                    <div className="text-[7.5px] font-extrabold text-stone-400 tracking-wider uppercase px-1">WORKSPACE MENU</div>
                    <ul className="space-y-1">
                      <li className="bg-emerald-800/10 border border-emerald-800/20 px-2 py-1 rounded text-emerald-950 font-semibold flex items-center gap-1.5">
                        <Scale className="w-3 h-3 text-emerald-800" />
                        AI Draft Studio
                      </li>
                      <li className="px-2 py-1 rounded text-stone-500 hover:text-stone-850 hover:bg-stone-150 flex items-center gap-1.5 cursor-default transition-colors">
                        <Folder className="w-3 h-3 text-stone-400" />
                        Verified Codes
                      </li>
                      <li className="px-2 py-1 rounded text-stone-505 hover:text-stone-850 hover:bg-stone-150 flex items-center gap-1.5 cursor-default transition-colors">
                        <FileText className="w-3 h-3 text-stone-400" />
                        Case Citations
                      </li>
                    </ul>
                  </div>
                  
                  {/* Security certificate badge */}
                  <div className="p-2 bg-[#006B44]/5 border border-[#006B44]/15 rounded-lg">
                    <div className="flex items-center gap-1 text-[7.5px] font-bold text-stone-900">
                      <Shield className="w-3 h-3 text-emerald-800" />
                      Grounded Safe
                    </div>
                    <p className="text-[6.5px] text-stone-400 font-light mt-0.5">Strictly citing original gazette statutes</p>
                  </div>
                </div>

                {/* Right Side Editor pane */}
                <div className="flex-1 p-3.5 bg-white flex flex-col justify-between overflow-y-auto">
                  
                  {/* Current drafting file info bar */}
                  <div className="flex justify-between items-center border-b border-stone-100 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-emerald-800" />
                      <div>
                        <span className="text-[8.5px] font-bold text-stone-900">{activeTab.filename}</span>
                        <p className="text-[7px] text-stone-400 font-light">Status: {isGenerating ? 'Drafting...' : 'Complete • Vetted Ready'}</p>
                      </div>
                    </div>

                    <div className="flex gap-1.5 items-center">
                      <span className="text-[7.5px] text-stone-400 flex items-center gap-1">
                        <CheckCircle className="w-2.5 h-2.5 text-emerald-600" /> Autoclipped
                      </span>
                      <button className="px-2 py-1 bg-stone-50 border border-stone-200/80 hover:bg-stone-150 rounded text-[7.5px] font-bold text-stone-700 flex items-center gap-1 cursor-default transition-colors">
                        <Download className="w-2.5 h-2.5" /> Export Word
                      </button>
                    </div>
                  </div>

                  {/* Document Writing Content Area */}
                  <div className="flex-1 bg-stone-50 border border-stone-100 rounded-lg p-3 font-mono text-[7px] leading-normal overflow-y-auto min-h-[140px] text-stone-700">
                    <div className="space-y-1">
                      {linesShown.map((line, idx) => (
                        <div key={idx} className={line.startsWith("IN THE COURT") || line.includes("APPLICATION UNDER") || line.includes("COMMERCIAL LEASE") || line.includes("LEGAL NOTICE") ? "font-bold text-stone-950 tracking-tight" : ""}>
                          {line || <span className="inline-block h-2" />}
                        </div>
                      ))}
                      {isGenerating && (
                        <span className="inline-block w-1.5 h-3 bg-emerald-800 animate-pulse ml-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Grounded Citation footnotes bottom banner */}
                  <div className="mt-3 pt-2 border-t border-stone-100 flex justify-between items-center shrink-0">
                    <span className="text-[7px] font-extrabold text-[#C5A85A] tracking-wider uppercase flex items-center gap-1">
                      <ChevronRight className="w-2.5 h-2.5" /> GROUNDED LEGAL CITATION MAP
                    </span>
                    <span className="text-[7.5px] font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/50">
                      {activeTab.badge}
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Lower Keyboard/Chassis Deck Bed representing MacBook Body */}
        <div className="relative bg-stone-300 h-3 w-full border-t border-stone-100/40 rounded-b-md" />
        <div className="relative bg-stone-400 h-2.5 w-[96%] mx-auto rounded-b-[18px] border-t border-stone-200 flex justify-center shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
          {/* Open lid indentation/recess groove list */}
          <div className="w-16 h-1 bg-stone-500 rounded-b-md" />
        </div>

      </div>

    </div>
  );
}
