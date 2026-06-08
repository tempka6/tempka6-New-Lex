export type UserRole = 'lawyer' | 'student' | 'citizen' | null;

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  isError?: boolean;
  thoughtSteps?: string[];
  followUpQuestions?: string[];
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  role: 'lawyer' | 'student' | 'citizen';
  timestamp: string;
}

export interface Law {
  n: string; // Name
  y: number; // Year
  c: string; // Category code
  web?: string; // Web link
  pdf?: string; // PDF link
}

export interface CategoryDetails {
  l: string; // Label
  b: string; // Style badge class
}

export interface CourtJudgment {
  id: number;
  title: string;
  court: string;
  courtName: string;
  citation: string;
  date: string;
  summary: string;
  pdfUrl?: string;
}

export interface LegalGlossaryTerm {
  term: string;
  origin: string;
  category: string;
  meaning: string;
  usage: string;
  example?: string;
}

export interface GazetteAlert {
  date: string;
  title: string;
  body: string;
  summary: string;
  tags: string[];
  source: string;
  url: string;
}

export interface LimitationArticle {
  art: string;
  desc: string;
  period: string;
  from: string;
  cat: 'contract' | 'property' | 'tort' | 'recovery' | 'family' | 'appeal' | 'execution' | 'other';
}

export interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  city: string;
  experience: number;
  rating: number;
  reviewCount: number;
  reviewText: string;
  freeConsultation: boolean;
  phone: string;
  email?: string;
}

export interface DraftType {
  id: string;
  cat: 'Criminal' | 'Civil' | 'Family' | 'Property' | 'Commercial' | 'General' | 'Employment' | 'Banking';
  icon: string;
  name: string;
  desc: string;
  badge: string;
  fields: string[];
  prompt: (fields: string[]) => string;
}

export interface LocalReview {
  name: string;
  stars: number;
  type: string;
  text: string;
  date: string;
}

export interface StatuteSection {
  sectionId: string;
  statuteName: string;
  sectionNumber: string;
  title: string;
  content: string;
  urduContent?: string;
  sourceUrl: string;
  category: string;
  provinces?: string[];
}

