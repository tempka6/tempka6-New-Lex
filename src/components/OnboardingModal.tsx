import React from 'react';
import { UserRole } from '../types';
import { Scale, GraduationCap, User, ArrowRight } from 'lucide-react';

interface OnboardingModalProps {
  onSelectRole: (role: UserRole) => void;
  currentRole: UserRole;
  isOpened: boolean;
}

export default function OnboardingModal({ onSelectRole, currentRole, isOpened }: OnboardingModalProps) {
  if (!isOpened) return null;

  const rolesList: { id: 'lawyer' | 'student' | 'citizen'; title: string; subtitle: string; description: string; icon: React.ReactNode }[] = [
    {
      id: 'lawyer',
      title: 'Lawyer (Vakeel)',
      subtitle: 'Legal Professional',
      description: 'Advanced legal analysis with precise constitutional provisions, court precedents, litigation strategy, and procedural pathways.',
      icon: <Scale className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 'student',
      title: 'Student (Talib-e-Ilm)',
      subtitle: 'Academic Research',
      description: 'Educational explanations, academic theories, definitions, historical landmark judgments, and Latin maxims.',
      icon: <GraduationCap className="w-6 h-6 text-amber-600" />
    },
    {
      id: 'citizen',
      title: 'Citizen',
      subtitle: 'Aam Shehri',
      description: 'Sought-after, jargon-free legal guides, step-by-step citizen rights, simple guidance, and marketplace lawyer dispatch.',
      icon: <User className="w-6 h-6 text-sky-600" />
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-[#FAF9F5] border border-[#E7E5DD] max-width-xl w-full max-w-lg rounded-2xl p-6 shadow-2xl animate-scale-in">
        <div className="text-center mb-6">
          <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 border border-emerald-100">
            <Scale className="w-6 h-6 text-emerald-700" />
          </div>
          <h2 className="font-serif text-2xl font-semibold text-stone-900 tracking-tight">Personalize Your Experience</h2>
          <p className="text-stone-500 text-sm mt-1">Select your profile to align LexPK\'s answering intelligence and legal definitions with your specific needs.</p>
        </div>

        <div className="space-y-3 mb-6">
          {rolesList.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectRole(item.id)}
              className={`w-full text-left p-4 rounded-xl border flex gap-4 transition-all duration-300 ${
                currentRole === item.id
                  ? 'bg-emerald-50/70 border-emerald-600 shadow-md ring-1 ring-emerald-600'
                  : 'bg-white border-[#E7E5DD] hover:border-emerald-500 hover:bg-stone-50/50'
              }`}
            >
              <div className={`p-2.5 rounded-lg flex items-center justify-center self-start ${
                currentRole === item.id ? 'bg-white shadow-sm' : 'bg-stone-100'
              }`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="font-medium text-stone-900 text-base">{item.title}</span>
                  <span className="text-xs font-semibold text-stone-400 tracking-wider uppercase">{item.subtitle}</span>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-3 pt-3 border-t border-[#E7E5DD]">
          <button
            onClick={() => onSelectRole('citizen')}
            className="px-4 py-2 text-stone-500 hover:text-stone-800 text-sm font-medium transition-colors"
          >
            Assign Default (Citizen)
          </button>
          <button
            disabled={!currentRole}
            onClick={() => onSelectRole(currentRole)}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-lg text-sm font-semibold transition-all shadow-lg shadow-emerald-700/20"
          >
            Enter Platform
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
