import React, { useState, useEffect } from 'react';
import { UserRole, Message } from './types';
import { LAWS, VERIFIED_CASES } from './data/legalData';
import Sidebar from './components/Sidebar';
import OnboardingModal from './components/OnboardingModal';
import LandingPage from './components/LandingPage';
import ChatInterface from './components/ChatInterface';
import LawLibrary from './components/LawLibrary';
import CaseResearch from './components/CaseResearch';
import LegalDrafts from './components/LegalDrafts';
import LawyerMarketplace from './components/LawyerMarketplace';
import FeedbackPage from './components/FeedbackPage';
import WhatsAppBot from './components/WhatsAppBot';
import LegalJobBoard from './components/LegalJobBoard';
import DocumentRetrieval from './components/DocumentRetrieval';
import IntroScreen from './components/IntroScreen';
import AppSettingsModal from './components/AppSettingsModal';
import { Menu, Scale, Settings, Sun, Moon } from 'lucide-react';
import {
  LimitationLookup,
  CourtFeeCalculator,
  GazetteAlerts,
  DocumentAnalyzer,
  LegalCorner
} from './components/OtherTools';
import { auth } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [activeTab, setActiveTab] = useState('chat');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [hasServerGroqKey, setHasServerGroqKey] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [historyList, setHistoryList] = useState<{ question: string }[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [prepopulatedQuery, setPrepopulatedQuery] = useState<string | undefined>(undefined);

  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    return (localStorage.getItem('lexpk_theme') as 'light' | 'dark' | 'system') || 'system';
  });
  const [language, setLanguage] = useState<'english' | 'urdu'>(() => {
    return (localStorage.getItem('lexpk_language') as 'english' | 'urdu') || 'english';
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Apply theme class to document element
  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = (currentTheme: 'light' | 'dark' | 'system') => {
      if (isLandingPage) {
        root.classList.remove('dark');
        return;
      }

      if (currentTheme === 'dark') {
        root.classList.add('dark');
      } else if (currentTheme === 'light') {
        root.classList.remove('dark');
      } else {
        // System preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQuery.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    };

    applyTheme(theme);
    localStorage.setItem('lexpk_theme', theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (isLandingPage) {
          root.classList.remove('dark');
          return;
        }
        if (e.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, isLandingPage]);

  // Persist language choice
  useEffect(() => {
    localStorage.setItem('lexpk_language', language);
  }, [language]);

  // Load preferences from local storage
  useEffect(() => {
    const role = localStorage.getItem('lexpk_role') as UserRole;
    if (role) {
      setUserRole(role);
    } else {
      // Defer onboarding opening until workspace is accessed
    }

    const key = localStorage.getItem('lexpk3') || '';
    setApiKey(key);

    const hist = JSON.parse(localStorage.getItem('lexpk_question_history') || '[]');
    setHistoryList(hist);
  }, []);

  // Fetch server Groq secret capability
  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.hasGroqKey === 'boolean') {
          setHasServerGroqKey(data.hasGroqKey);
        }
      })
      .catch(err => console.error('Failed to load server Groq config', err));
  }, []);

  // Listen to Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSelectRole = (role: UserRole) => {
    if (role) {
      setUserRole(role);
      localStorage.setItem('lexpk_role', role);
      // Keep chat empty initially representing the beautiful background welcome state
      setMessages([]);
    }
    setOnboardingOpen(false);
  };

  const generateRoleGreeting = (role: UserRole) => {
    const time = new Date().toLocaleTimeString('en-PK', { hour: 'numeric', minute: '2-digit' });
    let greeting = '';
    
    if (role === 'lawyer') {
      greeting = `⚖️ **Welcome to Vakeel (Lawyer) Workspace.**\n\nI have configured the reasoning engine for senior-level Pakistani litigation. I will prioritize precise citations from the Pakistan Penal Code (PPC), Code of Criminal Procedure (CrPC), and verified judgments of the Supreme Court of Pakistan and provincial High Courts. What case, provision, or litigation strategy can we deconstruct today?`;
    } else if (role === 'student') {
      greeting = `📚 **Welcome to Talib-e-Ilm (Student) Hub.**\n\nI have aligned my knowledge-base to emphasize core legal academic doctrines, Latin legal maxims, constitutional histories, and definitions. Ideal for LLB studies, statutory research papers, and bar exam preparations. Ask me anything to deconstruct!`;
    } else {
      greeting = `💬 **Welcome to Citizen Helper (Aam Shehri).**\n\nMy legal engine is ready to assist you in simple, plain human English or Urdu without confusing legalese. I can guide you step-by-step through basic civil rights, filing of police FIRs, Khula divorce procedures, or tenant disputes. \n\n*Note: For official representation, please utilize the Legal Marketplace on the sidebar to instantly dispatch your brief to a human lawyer.*`;
    }

    setMessages([
      {
        id: 'initial-greet',
        role: 'assistant',
        content: greeting,
        timestamp: time
      }
    ]);
  };

  const handleOpenApp = (initialQuery?: string, role?: 'lawyer' | 'student' | 'citizen') => {
    setIsLandingPage(false);
    if (role) {
      setUserRole(role);
      localStorage.setItem('lexpk_role', role);
      setMessages([]);
    } else if (!userRole) {
      setOnboardingOpen(true);
    } else if (messages.length === 0) {
      setMessages([]);
    }

    if (initialQuery) {
      setPrepopulatedQuery(initialQuery);
    }
  };

  const handleChangeRole = () => {
    setUserRole(null);
    setOnboardingOpen(true);
  };

  const generateThoughtSteps = (text: string, role: string | null): string[] => {
    const queryLower = text.toLowerCase();
    
    if (queryLower.includes('fir') || queryLower.includes('ایف آئی آر') || queryLower.includes('درج') || queryLower.includes('302') || queryLower.includes('murder') || queryLower.includes('theft') || queryLower.includes('chori')) {
      return [
        "Defining the Situation: Analyzing the criminal allegation of a Cognizable Offence matching the Pakistan Penal Code (PPC).",
        "Assessing the Query's Scope: Reviewing the statutory boundaries of registered First Information Reports under Section 154 CrPC.",
        "Analyzing the Procedural Steps: Mapping physical arrest liabilities and investigation reports submitted under Section 173 CrPC.",
        "Outlining the Response: Establishing the paramount importance of immediate defense counsel.",
        "Refining the Response Structure: Formulating optimal pre-arrest/post-arrest bail strategies under Sections 497 and 498 of the Code of Criminal Procedure.",
        "Incorporating the Details: Mapping critical Supreme Court landmarks, including Bakhti Rahman (2023) and Muhammad Bashir (2007) precedents."
      ];
    }
    
    if (queryLower.includes('bail') || queryLower.includes('ضمانت') || queryLower.includes('arrest') || queryLower.includes('custody') || queryLower.includes('گرفتار')) {
      return [
        "Defining the Situation: Gauging arrest and detention protocols in the context of personal liberties protected in Pakistan.",
        "Assessing the Query's Scope: Examining the constitutional mandate of Article 10 (Safeguards on Arrest) and Article 10-A (Due Process).",
        "Analyzing the Procedural Steps: Reviewing Section 497/498 CrPC bail jurisprudence concerning the 'prohibitory clause'.",
        "Outlining the Response: Evaluating 'further inquiry' thresholds to prevent malicious or malafide prosecution.",
        "Refining the Response Structure: Detailing ad-interim security and protective bail filing pathways in High Court Jurisdictions.",
        "Incorporating the Details: Referencing Bashir Ahmed v. The State (2022) with respect to procedural anomalies."
      ];
    }

    if (queryLower.includes('khula') || queryLower.includes('divorce') || queryLower.includes('marriage') || queryLower.includes('طلاق') || queryLower.includes('خلع')) {
      return [
        "Defining the Situation: Investigating the dissolution of marriage via Khula under Muslim Family Law guidelines.",
        "Assessing the Query's Scope: Referencing the West Pakistan Family Courts Act, 1964 and Muslim Family Laws Ordinance, 1961.",
        "Analyzing the Procedural Steps: Delineating pre-trial reconciliation mandatories under Section 10 of the Family Courts Act.",
        "Outlining the Response: Determining the exact return of dower (Zar-e-Khula) without prejudice to child custody.",
        "Refining the Response Structure: Organizing procedural steps from filing plaint in Family Court to obtaining final decree.",
        "Incorporating the Details: Standardizing family courts precedents for domestic and overseas Pakistanis."
      ];
    }

    if (queryLower.includes('limitation') || queryLower.includes('period') || queryLower.includes('تحدد') || queryLower.includes('expiry') || queryLower.includes('delay')) {
      return [
        "Defining the Situation: Examining chronological statutory deadlines for civil litigation under the Limitation Act, 1908.",
        "Assessing the Query's Scope: Analyzing Section 3 strict dismissal requirements for suit, appeal or applications.",
        "Analyzing the Procedural Steps: Verifying Article 113, 115, 57, 142/144 parameters of the First Schedule.",
        "Outlining the Response: Reviewing Section 5 sufficient cause criteria for condonation of delay (limited to appeals/applications).",
        "Refining the Response Structure: Formulating legal maxim precedents ('Vigilantibus et non dormientibus jura subveniunt').",
        "Incorporating the Details: Highlighting difference of limitation timelines in civil courts vs appellate forums."
      ];
    }

    if (queryLower.includes('rights') || queryLower.includes('constitutional') || queryLower.includes('constitution') || queryLower.includes('بنیادی') || queryLower.includes('آئین')) {
      return [
        "Defining the Situation: Reviewing human rights and governmental restrictions in the 1973 Constitution.",
        "Assessing the Query's Scope: Examining Chapter I Fundamental Rights (Articles 8-28) structure.",
        "Analyzing the Procedural Steps: Assessing the enforceability of fundamental liberties under the High Court's Article 199 writ jurisdiction.",
        "Outlining the Response: Identifying specific violations corresponding to Article 9 (Security) and Article 14 (Dignity).",
        "Refining the Response Structure: Formulating actionable judicial protection and remedy processes.",
        "Incorporating the Details: Citing senior jurist reviews on administrative overreach in Pakistan."
      ];
    }

    return [
      "Defining the Situation: Contextualizing query with active civil and criminal statutes of Pakistan.",
      "Assessing the Query's Scope: Isolating relevant codifications (PPC, CrPC, CPC, or special regulatory acts).",
      "Analyzing the Procedural Steps: Checking precedents of Lahore, Sindh, and Peshawar High Courts.",
      "Outlining the Response: Formulating balanced, provision-grounded legal guidance matching user profile.",
      "Incorporating the Details: Structuring bilingual statutory text snippets and prompt for formal advocate engagement."
    ];
  };

  const retrieveGroundingData = (query: string) => {
    const queryLower = query.toLowerCase();
    
    // Find matching laws
    const matchedLaws = LAWS.filter((law) => {
      const nameLower = law.n.toLowerCase();
      return queryLower.includes(nameLower) || 
             (law.n.includes('Penal Code') && (queryLower.includes('ppc') || queryLower.includes('302') || queryLower.includes('murder') || queryLower.includes('criminal') || queryLower.includes('punishment') || queryLower.includes('qatl') || queryLower.includes('murder'))) ||
             (law.n.includes('Criminal Procedure') && (queryLower.includes('crpc') || queryLower.includes('bail') || queryLower.includes('police') || queryLower.includes('fir') || queryLower.includes('arrest') || queryLower.includes('remand'))) ||
             (law.n.includes('Civil Procedure') && (queryLower.includes('cpc') || queryLower.includes('civil') || queryLower.includes('injunction') || queryLower.includes('plaint') || queryLower.includes('decree'))) ||
             (law.n.includes('Limitation Act') && (queryLower.includes('limitation') || queryLower.includes('delay') || queryLower.includes('expiry') || queryLower.includes('condonation'))) ||
             (law.n.includes('Family Courts') && (queryLower.includes('khula') || queryLower.includes('marriage') || queryLower.includes('divorce') || queryLower.includes('custody') || queryLower.includes('maher')));
    }).slice(0, 3);

    // Find matching cases
    const matchedCases: any[] = [];
    Object.entries(VERIFIED_CASES).forEach(([citation, caseData]) => {
      const titleLower = caseData.title.toLowerCase();
      const principleLower = caseData.principle.toLowerCase();
      
      let isRelevance = false;
      
      if ((queryLower.includes('302') || queryLower.includes('murder') || queryLower.includes('qatl')) && 
          (titleLower.includes('state') || titleLower.includes('prov') || principleLower.includes('302') || principleLower.includes('murder') || principleLower.includes('common intention') || principleLower.includes('exceptions'))) {
        isRelevance = true;
      }
      else if ((queryLower.includes('bail') || queryLower.includes('security') || queryLower.includes('custody') || queryLower.includes('arrest')) && 
               (principleLower.includes('bail') || principleLower.includes('arrest') || principleLower.includes('497') || principleLower.includes('498') || principleLower.includes('prohibitory') || titleLower.includes('shada') || titleLower.includes('rahman'))) {
        isRelevance = true;
      }
      else if ((queryLower.includes('khula') || queryLower.includes('divorce') || queryLower.includes('marriage') || queryLower.includes('family')) && 
               (principleLower.includes('family') || principleLower.includes('marriage') || principleLower.includes('divorce') || principleLower.includes('dower') || principleLower.includes('khula'))) {
        isRelevance = true;
      }
      else if ((queryLower.includes('limitation') || queryLower.includes('delay') || queryLower.includes('condonation') || queryLower.includes('expired')) && 
               (principleLower.includes('limitation') || principleLower.includes('delay') || principleLower.includes('sufficient cause') || principleLower.includes('condonation'))) {
        isRelevance = true;
      }
      else {
        const keywords = queryLower.split(/\s+/).filter(w => w.length > 3);
        const matchesKeyword = keywords.some(kw => titleLower.includes(kw) || principleLower.includes(kw));
        if (matchesKeyword) isRelevance = true;
      }

      if (isRelevance) {
        matchedCases.push({
          citation,
          court: caseData.court,
          title: caseData.title,
          year: caseData.year,
          principle: caseData.principle
        });
      }
    });

    return {
      laws: matchedLaws,
      cases: matchedCases.slice(0, 4)
    };
  };

  const handleSendMessage = async (text: string, vakeelMode: boolean) => {
    if (!text.trim()) return;

    const time = new Date().toLocaleTimeString('en-PK', { hour: 'numeric', minute: '2-digit' });
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: time
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);

    // Save strictly to local question history
    const isNew = !historyList.some(item => item.question === text);
    if (isNew) {
      const newHist = [...historyList, { question: text }].slice(-15);
      setHistoryList(newHist);
      localStorage.setItem('lexpk_question_history', JSON.stringify(newHist));
    }

    setIsSending(true);

    // Dynamic role capability system prompting
    let roleSystemDirective = '';
    if (userRole === 'lawyer') {
      roleSystemDirective = `\n[ROLE SPECIFIC DIRECTIVE - USER IS A LAWYER: Analyze this query strictly from the perspective of a seasoned Pakistani courtroom litigator. Reference exact section numbers, CPC/CrPC codes, Income Tax Ordinance clauses, or transfer acts. Cite verified court precedents in detail. Explain core appellate options, litigation strategy, and procedural pathways.]`;
    } else if (userRole === 'student') {
      roleSystemDirective = `\n[ROLE SPECIFIC DIRECTIVE - USER IS A LAW STUDENT: Focus on deconstructing theory, explaining key components of legally crucial definitions, referencing historical milestones of Pakistani judicial review, or explaining statutory root principles and Latin maxims (e.g. Audi Alteram Partem, Stare Decisis) explicitly.]`;
    } else {
      roleSystemDirective = `\n[ROLE SPECIFIC DIRECTIVE - USER IS A CITIZEN (AAM SHEHRI): Rely exclusively on plain human language. Do not overwhelm the user with complex legal terminology or citations unless absolutely critical. Outline straightforward, actionable steps (e.g. going to a local division, filing an FIR, obtaining attested copies). Heavily advocate for and prompt the user to consult or hire a human advocate from the Lex Marketplace for official court filing.]`;
    }

    // Check if Groq API Key is present in state/localStorage
    const token = apiKey || localStorage.getItem('lexpk3') || '';

    try {
      let resText = '';
      let followUpList: string[] = [];

      if (!token && !hasServerGroqKey) {
        // Mock offline high-fidelity responses if no Groq Key is saved
        await new Promise(resolve => setTimeout(resolve, 1500));
        const queryLower = text.toLowerCase();
        
        if (language === 'urdu') {
          if (queryLower.includes('fir') || queryLower.includes('ایف آئی آر') || queryLower.includes('درج')) {
            resText = `پاکستان میں فرسٹ انفارمیشن رپورٹ (ایف آئی آر) کا اندراج فوجداری نظامِ انصاف کو متحرک کرنے اور مجرمانہ تحقیقات کے آغاز کے لیے پہلا اور بنیادی قدم ہے۔ یہ عمل بنیادی طور پر ضابطہ فوجداری 1898 اور پولیس آرڈر 2002 کے تحت باقاعدہ منظم کیا جاتا ہے۔

قانون کے مطابق، جب بھی کوئی شہری کسی قابلِ دست اندازی پولیس جرم (Cognizable Offense) کی اطلاع دینے تھانے پہنچتا ہے، تو متعلقہ پولیس افسران اس کی رپورٹ درج کرنے کے پابند ہوتے ہیں۔ قابلِ دست اندازی جرم سے مراد ایسا سنگین جرم ہے جس میں پولیس ملزم کو وارنٹ کے بغیر گرفتار کرنے کا اختیار رکھتی ہے۔ ایف آئی آر ایک تحریری دستاویز ہوتی ہے جس میں جرم کی بنیادی تفصیلات درج کی جاتی ہیں۔

پاکستان میں ایف آئی آر دائر کرنے کا بنیادی قانونی فریم ورک ضابطہ فوجداری 1898 کی دفعہ 154 کے تحت فراہم کیا گیا ہے۔ یہ دفعہ واضح طور پر بیان کرتی ہے کہ قابلِ دست اندازی جرم کے کمیشن سے متعلق ہر معلومات کو مجاز پولیس افسر مقررہ کتاب میں درج کرے گا، جسے عام قانون میں فرسٹ انفارمیشن رپورٹ کہا جاتا ہے۔

معروف اور تاریخی عدالتی فیصلے محمد بشیر بنام اسٹیشن ہاؤس آفیسر، اوکاڑہ (2007 SCMR 539) میں سپریم کورٹ آف پاکستان نے واشگاف الفاظ میں رولنگ دی کہ ضابطہ فوجداری کی دفعہ 154 کے تحت ایف آئی آر کا اندراج ایک لازمی مرحلہ ہے، اور پولیس افسر محض ابتدائی تحقیقات کے بہانے ایف آئی آر کے اندراج سے انکار نہیں کر سکتا۔

⚖️ نوٹ: اگر آپ کو عدالتی کارروائی یا ایف آئی آر کے اندراج میں پولیس کی طرف سے مزاحمت کا سامنا ہے، تو قانونی کارروائیوں کو کامیابی سے انجام دینے کے لیے Lex Marketplace سے کسی مستند پاکستانی وکیل سے رابطہ کریں۔`;
          } else if (queryLower.includes('arrest') || queryLower.includes('گرفتار') || queryLower.includes('حقوق')) {
            resText = `پاکستان میں کسی بھی شہری کی گرفتاری ایک انتہائی حساس قانونی عمل ہے، جس میں فرد کے حقوق اور ریاست کے اختیارات کا توازن برقرار رکھنا ضروری ہوتا ہے۔ 

آئین پاکستان کا آرٹیکل 10 واضح طور پر یہ تحفظ فراہم کرتا ہے کہ کسی بھی شخص کو گرفتاری کی وجوہات بتائے بغیر حراست میں نہیں رکھا جا سکتا۔ مزید برآں، گرفتار شخص کو اپنی پسند کے کسی قانونی ماہر اور وکیل سے مشورہ کرنے اور ان سے دفاع حاصل کرنے کے حق سے محروم نہیں کیا جا سکتا۔ آئین کے اسی آرٹیکل کے مطابق، پولیس کے ہاتھوں گرفتار ہونے والے ہر شخص کو چوبیس گھنٹے کے اندر اندر مجاز مجسٹریٹ کی عدالت میں پیش کرنا قانونی طور پر لازمی ہوتا ہے۔

معروف عدالتی نظیر محمد بشیر بنام اسٹیشن ہاؤس آفیسر، اوکاڑہ (2007 SCMR 539) میں سپریم کورٹ آف پاکستان نے گرفتاری کے عمل کی سخت جانچ پر زور دیا اور پولیس کے من مانے اختیارات کو آئینی حدود کا پابند بنانے کا اعادہ کیا۔

⚖️ نوٹ: ذاتی بقا اور عدالتی دفاع کے لیے Lex Marketplace کے پینل پر موجود ممتاز وکلاء سے فی اول رابطہ کریں۔`;
          } else if (queryLower.includes('bail') || queryLower.includes('ضمانت')) {
            resText = `پاکستان کے فوجداری قوانین میں ضمانت کا بنیادی فلسفہ بے گناہی کے مفروضے (Presumption of Innocence) پر مبنی ہے، یعنی جب تک الزام ثابت نہ ہو جائے، ملزم کو بے گناہ تصور کیا جائے گا۔

ضمانت کا طریقہ کار اور اس کی قسمیں ضابطہ فوجداری 1898 کے تحت ریگولیٹ کی جاتی ہیں۔ چوری یا پاکستان پینل کوڈ کی مختلف دیگر دفعات جیسے کہ دفعہ 379 کے تحت، مقدمات میں ضمانت بعد از گرفتاری (Post-Arrest Bail) کے لیے درخواست ضابطہ فوجداری 1898 کی دفعہ 497 کے تحت مجاز عدالت میں دائر کی جاتی ہے۔

ضمانت کی ایک اور انتہائی اہم قسم ضمانت قبل از گرفتاری (Pre-Arrest Bail) ہے، جو ضابطہ فوجداری 1898 کی دفعہ 498 کے تحت حاصل کی جاتی ہے۔ یہ ضمانت بنیادی طور پر پولیس کی بدنیتی، سیاسی انتقام، یا مضحکہ خیز جھوٹے الزامات پر مبنی بے بنیاد گرفتاری کے اندیشے کی صورت میں حاصل کی جاتی ہے۔

معروف عدالتی فیصلے نظاماتِ ضمانت میں رہنمائی فراہم کرتے ہیں، بشمول سپریم کورٹ کا فیصلہ محمد بشیر بنام اسٹیشن ہاؤس آفیسر، اوکاڑہ (2007 SCMR 539)۔

⚖️ نوٹ: ضمانت کے مقدمات، عارضی رہائی، اور پولیس تفتیش سے نمٹنے کے لیے Lex Marketplace کے سینیئر وکلاء سے رجوع کریں۔`;
          } else if (queryLower.includes('khula') || queryLower.includes(' divorce') || queryLower.includes('طلاق') || queryLower.includes('خلع')) {
            resText = `پاکستان کے عائلی قوانین میں شادی کے خاتمے کا ایک معتبر اور قانونی ذریعہ خلع ہے، جس کے تحت مسلمان عورت اپنے شوہر سے نباہ ممکن نہ ہونے کی صورت میں علیحدگی حاصل کرنے کے لیے عدالت سے رجوع کر سکتی ہے۔

خلع کا قانونی طریقہ کار بنیادی طور پر مسلم فیملی لاز آرڈیننس 1961 اور ویسٹ پاکستان فیملی کواٹس ایکٹ 1964 کے تحت چلایا جاتا ہے۔ جب ایک بیوی یہ محسوس کرے کہ وہ شوہر کے ساتھ مروجہ حدود کے اندر رہ کر اچھے تعلقات قائم نہیں رکھ سکتی، تو وہ فیملی کورٹ میں تنسیخِ نکاح کا دعویٰ دائر کرنے کی مجاز ہے۔

فیملی کورٹ مروجہ قوانین کے تحت دونو فریقین کے درمیان مصالحت (Pre-Trial Reconciliation) کروانے کی سنجیدہ کوشش کرتی ہے۔ اگر شوہر اور بیوی کے مابین مصالحت کے تمام امکانات معدوم ہو جائیں، تو عدالت بغیر کسی لمبی تاخیر کے خلع کی بنیاد پر نکاح کی تنسیخ کی ڈگری صادر کر دیتی ہے۔

⚖️ نوٹ: خاندانی و ازدواجی مسائل کے پرامن عدالتی حل کے لیے Lex Marketplace پر ازدواجی قوانین کے پورٹ فولیو وکلاء سے فوری رابطہ قائم کریں۔`;
          } else if (queryLower.includes('rights') || queryLower.includes('بنیادی') || queryLower.includes('حقوق') || queryLower.includes('constitution') || queryLower.includes('آئین')) {
            resText = `آئین پاکستان 1973 کے تحت ہر شہری کو دیے گئے بنیادی حقوق ریاست کے انتظامیہ اور مقننہ کے من مانے اختیارات پر ایک مضبوط آہنی قدغن ہیں، جو پاکستان کی سرزمین پر انسانی وقار، حریت، مساوات، اور جمہوری اقدار کی پاسداری کو یقینی بناتے ہیں۔

آئین کا دوسرا باب، جس میں آرٹیکل 8 سے لے کر آرٹیکل 28 تک تمام بنیادی حقوق درج ہیں، ریاست کو ایسے قوانین بنانے سے مکمل طور پر روکتا ہے جو شہریوں کے ان حقوق کو سلب یا محدود کرتے ہوں۔ ان میں سب سے اہم آرٹیکل 9 ہے جو سلامتیِ ذات (Security of Person) کا ضامن ہے۔ آرٹیکل 10 من مانی گرفتاری کے خلاف تحفظ دیتا ہے اور آرٹیکل 10-A فیئر ٹرائل کا حق دیتا ہے۔

عدالتِ عظمیٰ نے متعدد بار، بشمول محمد بشیر بنام ایس ایچ او اوکاڑہ (2007 SCMR 539)، یہ واضح کیا ہے کہ بنیادی حقوق کی کسی بھی سطح پر پامالی پر ہائی کورٹ یا سپریم کورٹ میں براہِ راست پٹیشن دائر کر کے دادرسی حاصل کی جا سکتی ہے۔

⚖️ نوٹ: بنیادی حقوق کے نفاذ اور آئینی رٹ دائر کرنے کے لیے Lex Marketplace سے آئینی امور کے مایه ناز وکلاء سے مشاورت فرمائیں۔`;
          } else if (queryLower.includes('limitation') || queryLower.includes('limitations act') || queryLower.includes('تحدد') || queryLower.includes('expiry') || queryLower.includes('delayed')) {
            resText = `**Limitation Act, 1908** پاکستان کا ایک بنیادی اور انتہائی اہم قانون ہے جو یہ متعین کرتا ہے کہ کسی بھی دیوانی دعویٰ، اپیل یا درخواست کو کتنے عرصے کے اندر عدالتِ مجاز میں دائر کیا جانا ضروری ہے۔ یہ قانون لاطینی ضرب المثل *Vigilantibus et non dormientibus jura subveniunt* پر مبنی ہے (یعنی قانون ان کی مدد کرتا ہے جو بیدار ہيں، ان کی نہیں جو اپنے حقوق پر سوئے رہتے ہیں)۔

قانونِ تحددِ معیاد (Limitation Act) کے بنیادی اصول درجِ ذیل ہیں:
1. **دفعہ 3 (مقررہ معیاد کے بعد دعویٰ خارج کرنا)**: اگر کوئی دعویٰ، اپیل یا درخواست مقررہ معیاد گزرنے کے بعد عدالت میں دائر کی جائے تو عدالت اسے فوراً خارج کرنے کی پابند ہے، چاہے مدعا علیہ کی طرف سے حدِ معیاد کا اعتراض اٹھایا جائے یا نہیں۔
2. **دفعہ 5 (معیاد میں توسیع - تاخیر کی معافی)**: اپیلوں اور متفرق درخواستوں میں اگر درخواست گزار عدالت کو تاخیر کی کوئی معقول اور قابلِ قبول وجہ (Sufficient Cause) مطمئن کرنے میں کامیاب ہو جائے، تو عدالت تاخیر معاف کر سکتی ہے۔ لیکن یاد رہے کہ دفعہ 5 کا اطلاق بنیادی دیوانی دعووں پر نہیں ہوتا۔
3. **دیوانی نوعیت کی مثالیں (First Schedule)**:
   - **معاہدے کی خلاف ورزی (Breach of Contract)**: 3 سال (Article 115)
   - **رقم / قرض کی واپسی**: 3 سال (Article 57/64)
   - **غیر منقولہ جائیداد پر قبضہ حاصل کرنا (مالک کی طرف سے)**: 12 سال (Article 142/144)
   - **مخصوص تکمیلِ معاہدہ (Specific Performance)**: 3 سال (Article 113)
   - **ڈسٹرکٹ جج کے خلاف ہائی کورٹ میں اپیل**: 90 دن (Article 156)

⚖️ نوٹ: اس مسئلے کے حل کے لیے اپنے پرسنل Groq API Key کو اوپر موجود بکس میں درج فرمائیں تاکہ جدید Llama 3.3 انجن باقاعدہ عدالتی حوالوں کے ساتھ آپ کی مدد کر سکے، یا فیملی سائیڈ بار کے Lex Marketplace سے مستند وکلاء سے رابطہ کری‏‏ں۔`;
          } else {
            resText = `پاکستانی قانون کا دیباچہ دیوانی، فوجداری اور آئینی قوانین کے مضبوط فریم ورک پر مشتمل ہے، جس کا مقصد معاشرے میں انصاف کی فراہمی، بنیادی انسانی حقوق کا تحفظ، اور قانون کی برتری کو برقرار رکھنا ہے۔

انصاف کے عمل کو باقاعدہ چلانے کے لیے ضابطہ دیوانی 1908، قانونِ تحددِ معیاد 1908 اور فوجداری معاملات میں ضابطہ فوجداری 1898 اور مجموعہ تعزیراتِ پاکستان 1860 اہم کلیدی ستون ہیں۔

آپ کے سوال کے درست اور ریسرچ لیس جوابات فراہم کرنے کے لیے ہم اوپر موجود ٹاپ بار فیلڈ پر Groq API Key دائر کرنے کی پرزور تجویز دیتے ہیں تاکہ جدید Llama 3.3-70b متحرک ہو سکے۔

⚖️ ہم سے باقاعدہ عدالتی نمائندگی حاصل کرنے کے لیے سائیڈ بار پر موجود Lex Marketplace کے ایکٹو وکلاء سے ابھی رابطہ فرمائیں۔`;
          }
        } else {
          if (queryLower.includes('fir') || queryLower.includes('file an fir') || queryLower.includes('complain') || queryLower.includes('police')) {
            resText = `Filing a First Information Report (FIR) is a crucial step in initiating a criminal investigation in Pakistan. The process is governed by the Code of Criminal Procedure, 1898, and the Police Order, 2002.

The statutory framework for filing an FIR is provided under Section 154 of the Code of Criminal Procedure, 1898. This section states that every information relating to the commission of a cognizable offense must be recorded by the police.

In the case of Muhammad Bashir v. Station House Officer, Okara (2007 SCMR 539), the Supreme Court of Pakistan held that the registration of an FIR is a mandatory requirement under the law, and the police cannot refuse to register it under pretexts of preliminary inquiries.

⚖️ Note: For personalized legal advice tailored to your specific circumstances, consulting a qualified Pakistani lawyer is recommended.`;
          } else if (queryLower.includes('arrest') || queryLower.includes('arrested') || queryLower.includes('police custody') || queryLower.includes('custody')) {
            resText = `If you are arrested in Pakistan, you have certain rights protected under the Constitution of Pakistan (1973) and statutory codes.

Key Safeguards:
1. **Article 10**: Right to be informed of the grounds of arrest immediately.
2. **Article 10(1)**: Right to consult and be defended by a legal practitioner of choice.
3. **Article 10(2)**: Right to be produced before a Magistrate within 24 hours of arrest.

The landmark precedent is Muhammad Bashir v. Station House Officer, Okara (2007 SCMR 539), where the Supreme Court of Pakistan re-emphasized procedural compliance and strict judicial oversight of police power to prevent arbitrary detention.

⚖️ Note: To safeguard your liberties, immediately seek human legal representation on the Lex Marketplace.`;
          } else if (queryLower.includes('bail') || queryLower.includes('theft') || queryLower.includes('ppc 379')) {
            resText = `In cases concerning offences such as theft under Section 379 of the Pakistan Penal Code, the application for bail is governed by Section 497 of the Code of Criminal Procedure, 1898.

If the offence falls under a non-bailable category, the defence advocate must prove that there are no reasonable grounds to believe that the accused has committed the offence and that the matter instead requires further inquiry under Section 497(2).

Conversely, if the accused fears arrest due to malicious intent, they can submit an application for pre-arrest bail under Section 498 CrPC to protect their dignity.

⚖️ Note: To file a bail petition, hire an experienced criminal defense lawyer on the Lex Marketplace.`;
          } else if (queryLower.includes('khula') || queryLower.includes('divorce') || queryLower.includes('marriage')) {
            resText = `The dissolution of marriage through Khula is an established legal right for Muslim women in Pakistan, governed by the West Pakistan Family Courts Act, 1964 and Muslim Family Laws Ordinance, 1961.

Under Section 10 of the Family Courts Act 1964, the court must conduct pre-trial reconciliation. If reconciliation fails, the court is legally bound to dissolve the marriage by granting a decree of Khula.

Upon khula, a wife waves or returns her dower (Maher) to the husband as Zar-e-Khula, but this does not affect minor custody or childhood maintenance rules.

⚖️ Note: To safeguard custody and dower interests, consult marital experts on the Lex Marketplace.`;
          } else if (queryLower.includes('limitation') || queryLower.includes('limitations act') || queryLower.includes('period') || queryLower.includes('condonation') || queryLower.includes('expiry') || queryLower.includes('delayed')) {
            resText = `The **Limitation Act, 1908** is a critical statutory enactment in Pakistan that governs the prescribed time limits within which a civil suit, appeal, or application must be filed in a court of law. This is based on the legal maxim *Vigilantibus et non dormientibus jura subveniunt* (laws assist those who are vigilant, not those who sleep over their rights).

Key concepts under the Limitation Act 1908:
1. **Section 3 (Dismissal of Suits after Limitation Period)**: Subject to sections 4 to 25, every suit instituted, appeal preferred, and application made after the prescribed period of limitation shall be dismissed, although limitation has not been set up as a defense.
2. **Section 5 (Extension of Period in Certain Cases - Condonation of Delay)**: Allows the court to admit appeals or applications after the limitation period if the appellant/applicant satisfies the court of "sufficient cause" for the delay. Note: Section 5 does NOT apply to original suits.
3. **Prescribed Periods (The First Schedule)**: Let's look at common categories:
   - **Breach of Contract**: 3 years (Article 115)
   - **Recovery of Money / Debt**: 3 years (Article 57/64)
   - **Possession of Immovable Property (by owner)**: 12 years (Article 142/144)
   - **Specific Performance of Contract**: 3 years (Article 113)
   - **Appeals to High Court (from District Judge)**: 90 days (Article 156)

⚖️ Note: To get precise real-time custom analysis from Llama 3.3 for this issue, please enter your Groq API Key in the topbar badge above! Or consult with a litigation expert in our Lawyer Marketplace.`;
          } else if (queryLower.includes('fundamental') || queryLower.includes('constitution') || queryLower.includes('rights')) {
            resText = `The fundamental rights of citizens in Pakistan represent the bedrock of constitutional democracy, enshrined within Chapter I (Articles 8 to 28) of the Constitution of Pakistan, 1973.

Key Articles:
1. **Article 8**: Any law custom inconsistent with fundamental rights is void.
2. **Article 9**: Security of person – no person shall be deprived of life or liberty save in accordance with law.
3. **Article 10**: Robust procedural safeguards against arbitrary arrest and detention.
4. **Article 10-A**: Right to a fair trial and due process.
5. **Article 25**: Equality of citizens before law without gender discrimination.

⚖️ Note: To enforce your fundamental liberties, contact high-court jurists on the Lex Marketplace.`;
          } else {
            resText = `The Pakistani legal landscape relies on a robust combination of statutory enactments, federal codifications, and senior judicial precedents that govern civil, criminal, and commercial relationships.

The primary framework of civil disputes is structured under the Code of Civil Procedure (CPC) 1908 and the Limitation Act 1908, while criminal trials follow the Pakistan Penal Code (PPC) 1860 and the Code of Criminal Procedure (CrPC) 1898.

To obtain tailored, high-fidelity legal briefs citing precise court rulings for your unique query, we recommend entering your personal Groq API Key in our topbar badge to activate Llama 3.3.

⚖️ Note: For official litigation consulting and drafting, please explore the active advocate profiles in our Lex Marketplace on the sidebar.`;
          }
        }
      } else {
        // Run using user's custom Groq API Key or server environment key via secure proxy!
        const grounding = retrieveGroundingData(text);
        const res = await fetch('/api/chat-groq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messages: updatedMessages.slice(-6),
            userRole,
            language,
            customKey: token || undefined,
            groundingContext: grounding
          })
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.error?.message || 'Groq server proxy error');
        }
        resText = data.text || 'No text was generated.';
        followUpList = data.followUpQuestions || [];
      }

      const thoughts = generateThoughtSteps(text, userRole);

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: resText,
          timestamp: new Date().toLocaleTimeString('en-PK', { hour: 'numeric', minute: '2-digit' }),
          thoughtSteps: thoughts,
          followUpQuestions: followUpList
        }
      ]);
    } catch (err: any) {
      const thoughts = generateThoughtSteps(text, userRole);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          role: 'assistant',
          content: `⚠️ Failed to fetch legal intellect: ${err.message}. Please verify your Groq API Key and internet connection.`,
          timestamp: new Date().toLocaleTimeString('en-PK', { hour: 'numeric', minute: '2-digit' }),
          isError: true,
          thoughtSteps: thoughts
        }
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleLoadHistoryItem = (question: string) => {
    setMessages([]);
    handleSendMessage(question, false);
    setActiveTab('chat');
  };

  const handleClearHistory = () => {
    if (confirm('Clear all local query history?')) {
      setHistoryList([]);
      localStorage.removeItem('lexpk_question_history');
    }
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'library':
        return <LawLibrary />;
      case 'research':
        return <CaseResearch currentUser={currentUser} />;
      case 'drafts':
        return <LegalDrafts apiKey={apiKey} hasServerGroqKey={hasServerGroqKey} />;
      case 'lawyers':
        return <LawyerMarketplace />;
      case 'wotd':
        return <LegalCorner />;
      case 'limitation':
        return <LimitationLookup />;
      case 'court-fee':
        return <CourtFeeCalculator />;
      case 'gazette':
        return <GazetteAlerts />;
      case 'doc-analyzer':
        return <DocumentAnalyzer apiKey={apiKey} hasServerGroqKey={hasServerGroqKey} />;
      case 'whatsapp-bot':
        return <WhatsAppBot />;
      case 'jobs':
        return <LegalJobBoard />;
      case 'document-services':
        return <DocumentRetrieval />;
      case 'feedback':
        return <FeedbackPage currentUser={currentUser} />;
      case 'chat':
      default:
        return (
          <ChatInterface
            userRole={userRole}
            messages={messages}
            onSendMessage={handleSendMessage}
            isSending={isSending}
            prepopulatedQuery={prepopulatedQuery}
            onClearPrepopulatedQuery={() => setPrepopulatedQuery(undefined)}
            language={language}
          />
        );
    }
  };

  if (showIntro) {
    return <IntroScreen onComplete={() => setShowIntro(false)} />;
  }

  if (isLandingPage) {
    return <LandingPage onLaunchApp={handleOpenApp} />;
  }

  return (
    <div className="flex g-0 h-screen overflow-hidden bg-[#FAF9F5] dark:bg-bg-app text-stone-900 dark:text-stone-100">
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        userRole={userRole}
        onChangeRole={handleChangeRole}
        historyList={historyList}
        onLoadHistoryItem={handleLoadHistoryItem}
        onClearHistory={handleClearHistory}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigateHome={() => setIsLandingPage(true)}
        onOpenSettings={() => setSettingsOpen(true)}
        currentUser={currentUser}
      />

      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Unified Top Navigation Header */}
        <header className="h-[34px] md:h-[36px] shrink-0 border-b border-[#E7E5DD] dark:border-border-main bg-white dark:bg-bg-sidebar px-2.5 md:px-4 flex justify-between items-center z-20">
          <div className="flex items-center gap-1.5 animate-fade-in">
            {/* Hamburger menu toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-0.5 rounded text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-slate-800 transition-colors bg-transparent border-0 cursor-pointer flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <Menu className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-emerald-800 dark:text-[#C5A85A]" />
              <span className="font-serif font-bold text-stone-900 dark:text-stone-100 text-[11px] md:text-xs tracking-tight">
                LexPK Workspace
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Live AI Processing Indicator (Green Dot active) */}
            <div className="flex items-center gap-1.5 bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 px-2 py-0.5 rounded-full text-[9px] font-semibold text-emerald-800 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse inline-block" />
              <span>Lex AI Active</span>
            </div>

            {/* Custom CopyCase-Style Sliding Theme Toggle */}
            <div 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center bg-stone-100 dark:bg-stone-950 p-0.5 rounded-full border border-[#E7E5DD] dark:border-stone-800 w-10 h-5 relative cursor-pointer select-none transition-colors duration-300"
              title="Toggle theme"
            >
              {/* Sliding background capsule */}
              <div
                className={`absolute top-0.5 bottom-0.5 w-[16px] rounded-full bg-white dark:bg-stone-850 shadow-sm border border-transparent dark:border-stone-800 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  theme === 'dark' ? 'left-[20px]' : 'left-0.5'
                }`}
              />
              {/* Sun icon */}
              <div className={`w-[16px] h-full flex items-center justify-center z-10 transition-colors duration-300 ${theme === 'dark' ? 'text-stone-500' : 'text-[#C5A85A]'}`}>
                <Sun className="w-2.5 h-2.5" />
              </div>
              {/* Moon icon */}
              <div className={`w-[16px] h-full flex items-center justify-center z-10 transition-colors duration-300 ${theme === 'dark' ? 'text-yellow-400' : 'text-stone-400'}`}>
                <Moon className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        </header>

        {/* Active Tab Screen */}
        <div className="flex-1 min-h-0 relative">
          {renderActiveTab()}
        </div>
      </main>

      <OnboardingModal
        isOpened={onboardingOpen}
        currentRole={userRole}
        onSelectRole={handleSelectRole}
      />

      <AppSettingsModal
        isOpened={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        theme={theme}
        onSelectTheme={setTheme}
        language={language}
        onSelectLanguage={setLanguage}
      />
    </div>
  );
}
