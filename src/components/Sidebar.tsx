import React, { useState, useEffect } from 'react';
import { UserRole } from '../types';
import { Scale, MessageSquare, BookOpen, FileText, Users, HelpCircle, Hourglass, Landmark, Bell, FileSearch, HelpCircle as HelpIcon, Sparkles, Trash2, Menu, X, ArrowLeft, Briefcase, MessageCircle, FileCheck, Settings, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { auth, googleProvider, signInWithPopup, signOut } from '../firebase';
import { User } from 'firebase/auth';

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  userRole: UserRole;
  onChangeRole: () => void;
  historyList: { question: string }[];
  onLoadHistoryItem: (question: string) => void;
  onClearHistory: () => void;
  isOpen: boolean;
  onClose: () => void;
  onNavigateHome: () => void;
  onOpenSettings: () => void;
  currentUser: User | null;
}

export default function Sidebar({
  activeTab,
  onSelectTab,
  userRole,
  onChangeRole,
  historyList,
  onLoadHistoryItem,
  onClearHistory,
  isOpen,
  onClose,
  onNavigateHome,
  onOpenSettings,
  currentUser
}: SidebarProps) {
  const [researchExpanded, setResearchExpanded] = useState(true);

  // Auto-expand if active tab falls in one of the research sub-tabs
  useEffect(() => {
    if (['library', 'drafts', 'limitation', 'research'].includes(activeTab)) {
      setResearchExpanded(true);
    }
  }, [activeTab]);

  const topMenuItems = [
    { id: 'chat', label: 'AI Chat (Vakeel Mode)', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'whatsapp-bot', label: 'WhatsApp Bot Assistant', icon: <MessageCircle className="w-4 h-4 text-emerald-600 font-bold" /> },
    { id: 'document-services', label: 'Verified Copy Service', icon: <FileCheck className="w-4 h-4 text-emerald-750" /> },
  ];

  const subResearchItems = [
    { id: 'library', label: 'Law Library', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'drafts', label: 'Legal Drafts', icon: <FileText className="w-4 h-4" /> },
    { id: 'limitation', label: 'Limitation Act Lookup', icon: <Hourglass className="w-4 h-4" /> },
    { id: 'research', label: 'Case Databases', icon: <Scale className="w-4 h-4" /> },
  ];

  const bottomMenuItems = [
    { id: 'lawyers', label: 'Lawyer Marketplace', icon: <Users className="w-4 h-4" /> },
    { id: 'jobs', label: 'Legal Job Board', icon: <Briefcase className="w-4 h-4 text-amber-600 font-bold" /> },
    { id: 'wotd', label: 'Glossary & Maxims', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'court-fee', label: 'Court Fee Calculator', icon: <Landmark className="w-4 h-4" /> },
    { id: 'gazette', label: 'Gazette Alerts', icon: <Bell className="w-4 h-4" /> },
    { id: 'doc-analyzer', label: 'Document Analyzer', icon: <FileSearch className="w-4 h-4" /> },
    { id: 'feedback', label: 'Feedback / Review', icon: <HelpIcon className="w-4 h-4" /> },
  ];

  const getRoleLabel = (role: UserRole) => {
    switch (role) {
      case 'lawyer': return 'Vakeel (Lawyer)';
      case 'student': return 'Talib-e-Ilm (Student)';
      case 'citizen': return 'Aam Shehri (Citizen)';
      default: return 'No Role Assigned';
    }
  };

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'lawyer': return 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40';
      case 'student': return 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40';
      case 'citizen': return 'text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900/40';
      default: return 'text-stone-400 bg-stone-50 border-stone-200 dark:border-slate-800';
    }
  };

  const isResearchActive = ['library', 'drafts', 'limitation', 'research'].includes(activeTab);

  return (
    <>
      {/* Sidebar background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside className={`fixed top-0 left-0 z-45 h-screen max-h-screen w-72 bg-[#FAF9F5] dark:bg-bg-sidebar border-r border-[#E7E5DD] dark:border-border-main flex flex-col transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-[#E7E5DD] dark:border-border-main flex justify-between items-center bg-white/70 dark:bg-bg-sidebar/70">
          <button onClick={onNavigateHome} className="flex items-center gap-2 text-left group bg-transparent border-0 cursor-pointer">
            <div className="w-8 h-8 bg-emerald-800 rounded-lg flex items-center justify-center shadow-sm">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-serif font-bold text-stone-900 dark:text-stone-100 leading-tight block group-hover:text-emerald-800 transition-colors">LexPK</span>
              <span className="text-[9px] text-[#C5A85A] font-extrabold tracking-wider uppercase block leading-none">Pakistan Law AI</span>
            </div>
          </button>
          
          <button
            onClick={onClose}
            className="p-1.5 bg-stone-100 dark:bg-slate-800 hover:bg-stone-200 dark:hover:bg-slate-700 rounded text-stone-600 dark:text-stone-300 transition-colors border-0 cursor-pointer flex items-center justify-center"
            title="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Unified Scrollable Container for all sidebar options */}
        <div className="flex-grow flex-1 overflow-y-auto flex flex-col space-y-4 py-3 scrollbar-thin">
          {/* Google Account Block */}
          <div className="px-3">
            <div className="text-[9px] text-stone-400 dark:text-stone-500 font-bold uppercase tracking-wider mb-1.5">Cloud Storage Sync</div>
            {currentUser ? (
              <div className="p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-900/40 bg-white dark:bg-bg-card flex items-center justify-between gap-2 shadow-xs">
                <div className="flex items-center gap-2 overflow-hidden bg-transparent">
                  {currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt="Profile" className="w-7 h-7 rounded-full object-cover shrink-0" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {currentUser.displayName?.[0] || currentUser.email?.[0] || '?'}
                    </div>
                  )}
                  <div className="overflow-hidden flex flex-col justify-center leading-normal bg-transparent">
                    <span className="text-xs font-bold text-stone-800 dark:text-stone-105 truncate block">
                      {currentUser.displayName || 'Authorized User'}
                    </span>
                    <span className="text-[9px] text-stone-400 truncate block">
                      {currentUser.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={async () => {
                    if (confirm('Sign out from LexPK Cloud?')) {
                      await signOut(auth);
                    }
                  }}
                  className="p-1 px-1.5 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-750 dark:hover:text-red-400 text-stone-400 transition-colors rounded text-[10px] font-bold cursor-pointer border border-[#E7E5DD] dark:border-slate-800 shrink-0 bg-transparent"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="p-2.5 rounded-lg border border-dashed border-stone-300 dark:border-slate-800 bg-white dark:bg-bg-card space-y-2 shadow-xs">
                <p className="text-[10px] text-stone-500 dark:text-stone-400 leading-snug">
                  Sign in with Google to enable real-time cloud backups, persistent draft reviews, and live precedent index uploads!
                </p>
                <button
                  onClick={async () => {
                    try {
                      await signInWithPopup(auth, googleProvider);
                    } catch (err) {
                      console.error('Google Sign-In Error:', err);
                    }
                  }}
                  className="w-full py-1.5 bg-emerald-800 hover:bg-emerald-950 border-0 text-white text-[10.5px] font-bold rounded flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <Scale className="w-3.5 h-3.5" />
                  Connect Google Account
                </button>
              </div>
            )}
          </div>

          {/* Personalized Role block */}
          <div className="px-3">
            <div className="text-[9px] text-stone-400 dark:text-stone-500 font-bold uppercase tracking-wider mb-1.5">My Legal Profile</div>
            <div className={`p-2.5 rounded-lg border flex flex-col gap-1.5 ${getRoleColor(userRole)}`}>
              <div className="flex justify-between items-center bg-transparent">
                <span className="text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 leading-none">
                  <Sparkles className="w-3.5 h-3.5" />
                  {getRoleLabel(userRole)}
                </span>
              </div>
              <button
                onClick={() => {
                  onChangeRole();
                  onClose();
                }}
                className="text-[10px] text-stone-400 font-semibold underline self-start transition-colors bg-transparent border-0 cursor-pointer"
              >
                Switch Role
              </button>
            </div>
          </div>

          {/* Legal Modules menu */}
          <nav className="px-2 space-y-0.5 shrink-0">
            <div className="px-3 text-[9px] text-stone-400 dark:text-stone-500 font-bold uppercase tracking-wider mb-1.5">Legal Modules</div>
            
            {/* Top items */}
            {topMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  onClose();
                }}
                className={`w-full flex items-center gap-2 px-3 py-1 rounded-md text-[13px] font-medium transition-all border-0 cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-emerald-700 dark:bg-emerald-600 text-white shadow-md'
                    : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-slate-850 hover:text-stone-900 dark:hover:text-white bg-transparent'
                }`}
              >
                <span className={`shrink-0 ${activeTab === item.id ? 'text-white' : 'text-stone-400'}`}>{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </button>
            ))}

            {/* Legal Research Dropdown Head */}
            <div className="pt-1.5 pb-1">
              <button
                onClick={() => setResearchExpanded(!researchExpanded)}
                className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-[13px] font-bold transition-all border-[#E7E5DD] dark:border-border-main-opacity cursor-pointer ${
                  isResearchActive
                    ? 'bg-emerald-100/40 dark:bg-emerald-950/15 text-emerald-850 dark:text-emerald-400 border border-emerald-100/30'
                    : 'text-stone-605 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-slate-850 hover:text-stone-900 dark:hover:text-white bg-transparent border-0'
                }`}
              >
                <div className="flex items-center gap-2 bg-transparent">
                  <Search className="w-4 h-4 text-emerald-800 dark:text-[#C5A85A] shrink-0" />
                  <span>Legal Research</span>
                </div>
                {researchExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {/* Nested Sub-Tabs */}
              {researchExpanded && (
                <div className="ml-4 pl-3.5 border-l border-[#E7E5DD] dark:border-stone-800 mt-1 space-y-0.5">
                  {subResearchItems.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        onSelectTab(sub.id);
                        onClose();
                      }}
                      className={`w-full flex items-center gap-2 px-2.5 py-1 rounded-md text-[12.5px] font-medium transition-all border-0 cursor-pointer ${
                        activeTab === sub.id
                          ? 'bg-emerald-700 dark:bg-emerald-600 text-white shadow-sm'
                          : 'text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-slate-850 hover:text-stone-950 dark:hover:text-white bg-transparent'
                      }`}
                    >
                      <span className={`shrink-0 ${activeTab === sub.id ? 'text-white' : 'text-stone-400'}`}>{sub.icon}</span>
                      <span className="truncate">{sub.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom items */}
            {bottomMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  onClose();
                }}
                className={`w-full flex items-center gap-2 px-3 py-1 rounded-md text-[13px] font-medium transition-all border-0 cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-emerald-700 dark:bg-emerald-600 text-white shadow-md'
                    : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-slate-850 hover:text-stone-900 dark:hover:text-white bg-transparent'
                }`}
              >
                <span className={`shrink-0 ${activeTab === item.id ? 'text-white' : 'text-stone-400'}`}>{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Chat Threads history section */}
          {historyList.length > 0 && (
            <div className="p-3 border-t border-[#E7E5DD] dark:border-border-main bg-white/30 dark:bg-bg-sidebar/30 flex flex-col shrink-0">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[9px] text-stone-400 dark:text-stone-500 font-bold uppercase tracking-wider">Recent Queries</span>
                <button
                  onClick={onClearHistory}
                  className="text-stone-400 hover:text-red-600 dark:hover:text-red-400 p-1 rounded transition-colors bg-transparent border-0 cursor-pointer flex items-center justify-center"
                  title="Clear Chat History"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="space-y-1 pr-1 max-h-40 overflow-y-auto">
                {historyList.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      onLoadHistoryItem(item.question);
                      onClose();
                    }}
                    className="w-full text-left px-2 py-1 rounded text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-slate-800 hover:text-stone-900 dark:hover:text-white transition-all truncate block font-medium border border-transparent hover:border-[#E7E5DD] dark:hover:border-slate-800 bg-transparent cursor-pointer"
                    title={item.question}
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-[#E7E5DD] dark:border-border-main bg-white dark:bg-bg-sidebar flex flex-col gap-2">
          <div className="flex justify-between items-center bg-transparent">
            <button
              onClick={() => {
                onOpenSettings();
                onClose();
              }}
              className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-emerald-800 dark:hover:text-emerald-400 font-semibold transition-colors bg-transparent border-0 cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              App Settings
            </button>
            <span className="text-[10px] text-stone-400 dark:text-stone-500 font-semibold tracking-wide uppercase">v2.1</span>
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-[#E7E5DD]/60 dark:border-border-main/60 bg-transparent">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-emerald-800 dark:hover:text-emerald-400 font-medium transition-colors bg-transparent border-0 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Landing Page
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
