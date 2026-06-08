import React, { useState, useEffect } from 'react';
import { 
  Briefcase, MapPin, Calendar, Search, Filter, Bookmark, PlusCircle, Check, 
  Send, DollarSign, X, ChevronRight, Award, GraduationCap, Building2, Upload
} from 'lucide-react';

interface JobListing {
  id: string;
  title: string;
  firm: string;
  logoColor: string;
  logoLetter: string;
  city: 'Lahore' | 'Karachi' | 'Islamabad' | 'Peshawar' | 'Quetta' | 'Remote';
  experience: 'Internship' | 'Junior Associate' | 'Senior Associate' | 'Legal Advisor' | 'Research Fellow';
  category: 'Corporate' | 'Litigation' | 'Tax & Regulatory' | 'Family Law' | 'Intellectual Property' | 'Criminal Law';
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
  isBookmarked?: boolean;
}

const INITIAL_JOBS: JobListing[] = [
  {
    id: 'job-1',
    title: 'Junior Litigation Advocate',
    firm: 'Bhandari, Naqvi & Riaz (BNR)',
    logoColor: 'bg-indigo-900',
    logoLetter: 'BR',
    city: 'Lahore',
    experience: 'Junior Associate',
    category: 'Litigation',
    salary: 'PKR 85,000 - 120,000 / month',
    postedDate: 'Today',
    description: 'We are seeking an active bar-licensed junior advocate to assist with civil suits, writ petitions and high court filings in Lahore. You will compose administrative drafts and shadow lead partners in the Lahore High Court.',
    requirements: [
      'Active License to Practice at District Courts (Lahore Bar Association)',
      'LLB from a reputable local or international university (LUMS, University of London, PU)',
      'At least 1 year of rigorous chambers experience'
    ]
  },
  {
    id: 'job-2',
    title: 'Legal Counsel — Corporate Compliance',
    firm: 'Engro Corporation Limited',
    logoColor: 'bg-emerald-800',
    logoLetter: 'EC',
    city: 'Karachi',
    experience: 'Legal Advisor',
    category: 'Corporate',
    salary: 'PKR 180,000 - 240,000 / month',
    postedDate: 'Yesterday',
    description: 'Engro Corp is hiring a Corporate Counsel for our headquarters in Clifton. This role oversees compliance with SECP guidelines, draft corporate resolutions, and handles Joint Venture agreements.',
    requirements: [
      'LLB / LLM with specialized coursework in Commercial Arbitration or Company Law',
      '3-5 years experience drafting corporate agreements in SECP jurisdictions',
      'Familiarity with the Companies Act 2017'
    ]
  },
  {
    id: 'job-3',
    title: 'Corporate Tax Associate',
    firm: 'Haidermota & Co. Advocates',
    logoColor: 'bg-sky-900',
    logoLetter: 'HM',
    city: 'Karachi',
    experience: 'Junior Associate',
    category: 'Tax & Regulatory',
    salary: 'PKR 110,000 - 150,000 / month',
    postedDate: '3 days ago',
    description: 'Join Pakistan’s leading transactional and financial services legal practice. Provide strategic counsel to clients on indirect taxation, custom tribunal challenges, and advisory regarding FBR gazette notifications.',
    requirements: [
      'LLB with high academic standing',
      'Advanced knowledge of Sales Tax Act 1990 and Income Tax Ordinance 2001',
      'Outstanding drafting skills in English'
    ]
  },
  {
    id: 'job-4',
    title: 'Legal Research Internship',
    firm: 'Supreme Court of Pakistan (Judicial Academy)',
    logoColor: 'bg-stone-900',
    logoLetter: 'SC',
    city: 'Islamabad',
    experience: 'Internship',
    category: 'Corporate',
    salary: 'PKR 40,000 / month (Stipend)',
    postedDate: '4 days ago',
    description: 'An exclusive opportunity for raw law students and recent LLBs to serve as Research Interns assisting the honorable bench. Analyze civil appeal precedents and translate Urdu trial court records.',
    requirements: [
      'Currently enrolled in LLB (3rd Year or higher) or recent graduate with high CGPA',
      'Strong research capabilities on PakistanCode, PLD, and SCMR databases',
      'Impeccable academic writing skills'
    ]
  },
  {
    id: 'job-5',
    title: 'Family Court Associate',
    firm: 'Sherazi & Associates Law Chambers',
    logoColor: 'bg-amber-800',
    logoLetter: 'SA',
    city: 'Lahore',
    experience: 'Junior Associate',
    category: 'Family Law',
    salary: 'PKR 70,000 - 90,000 / month',
    postedDate: '1 week ago',
    description: 'Highly dynamic boutique chambers specialized in Family Dispute Resolution seeking a compassionate, hard-working advocate. Direct client interfacing, custody suit preparation and Khula representation.',
    requirements: [
      'Excellent oral communication in both Urdu and Punjabi',
      'Basic knowledge of Guardian & Wards Act 1890 and Family Courts Act 1964',
      'Compassionate demeanor for dealing with challenging social files'
    ]
  },
  {
    id: 'job-6',
    title: 'Associate Attorney (Intellectual Property)',
    firm: 'Ali & Associates IP Advocates',
    logoColor: 'bg-purple-900',
    logoLetter: 'AA',
    city: 'Karachi',
    experience: 'Senior Associate',
    category: 'Intellectual Property',
    salary: 'PKR 140,000 - 190,000 / month',
    postedDate: '2 weeks ago',
    description: 'Manage a wide portfolio of domestic and international trademark litigation files. Conduct patentability, copyright, and design audits at IPO offices in Islamabad and Karachi.',
    requirements: [
      'At least 3 years experience dealing directly with the IPO Pakistan registry',
      'LLM with IP specialization is highly preferred',
      'Capable of managing client litigation portfolios independently'
    ]
  }
];

export default function LegalJobBoard() {
  const [jobs, setJobs] = useState<JobListing[]>(INITIAL_JOBS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedExp, setSelectedExp] = useState<string>('All');
  
  // Modals state
  const [applyJob, setApplyJob] = useState<JobListing | null>(null);
  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Job Application form state
  const [appName, setAppName] = useState('');
  const [appEmail, setAppEmail] = useState('');
  const [appPhone, setAppPhone] = useState('');
  const [appBio, setAppBio] = useState('');
  const [appSchool, setAppSchool] = useState('');
  const [appCv, setAppCv] = useState<string | null>(null);

  // New Job posting state
  const [newTitle, setNewTitle] = useState('');
  const [newFirm, setNewFirm] = useState('');
  const [newCity, setNewCity] = useState<'Lahore' | 'Karachi' | 'Islamabad' | 'Peshawar' | 'Quetta' | 'Remote'>('Lahore');
  const [newCategory, setNewCategory] = useState<'Corporate' | 'Litigation' | 'Tax & Regulatory' | 'Family Law' | 'Intellectual Property' | 'Criminal Law'>('Corporate');
  const [newExp, setNewExp] = useState<'Internship' | 'Junior Associate' | 'Senior Associate' | 'Legal Advisor' | 'Research Fellow'>('Junior Associate');
  const [newSalary, setNewSalary] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newReq, setNewReq] = useState('');

  // Local storage retention for bookmarked jobs
  useEffect(() => {
    const stored = localStorage.getItem('lexpk_bookmarket_jobs');
    if (stored) {
      const ids: string[] = JSON.parse(stored);
      setJobs((prev) => 
        prev.map((job) => ({
          ...job,
          isBookmarked: ids.includes(job.id)
        }))
      );
    }
  }, []);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = jobs.map((job) => {
      if (job.id === id) {
        return { ...job, isBookmarked: !job.isBookmarked };
      }
      return job;
    });
    setJobs(updated);

    const activeList = updated.filter(j => j.isBookmarked).map(j => j.id);
    localStorage.setItem('lexpk_bookmarket_jobs', JSON.stringify(activeList));
  };

  const handleApplyClick = (job: JobListing, e: React.MouseEvent) => {
    e.stopPropagation();
    setApplyJob(job);
    setIsSubmitted(false);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appName || !appEmail || !appPhone) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setApplyJob(null);
      alert(`🎉 Application sent to ${applyJob?.firm} successfully! You will be contacted at ${appEmail}.`);
      setAppName('');
      setAppEmail('');
      setAppPhone('');
      setAppBio('');
      setAppSchool('');
    }, 1500);
  };

  const handlePostJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newFirm || !newSalary) {
      alert('Please fill out all primary sections.');
      return;
    }

    const item: JobListing = {
      id: `custom-job-${Date.now()}`,
      title: newTitle,
      firm: newFirm,
      logoColor: 'bg-emerald-900',
      logoLetter: newFirm.substring(0, 2).toUpperCase(),
      city: newCity,
      experience: newExp,
      category: newCategory,
      salary: `PKR ${newSalary} / month`,
      postedDate: 'Just Now',
      description: newDesc || 'No extended overview was provided. Please schedule direct query contact for details.',
      requirements: newReq ? newReq.split('\n').filter(r => r.trim() !== '') : ['Active Bar Association qualification preferred']
    };

    setJobs([item, ...jobs]);
    setShowPostJobModal(false);
    
    // Reset values
    setNewTitle('');
    setNewFirm('');
    setNewSalary('');
    setNewDesc('');
    setNewReq('');

    alert('✅ Your job listing has been published to the active LexPK board!');
  };

  // Filter computations
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.firm.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'All' || job.city === selectedCity;
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesExp = selectedExp === 'All' || job.experience === selectedExp;

    return matchesSearch && matchesCity && matchesCategory && matchesExp;
  });

  return (
    <div className="flex-1 flex flex-col h-full bg-[#FAF9F5] overflow-hidden select-none">
      
      {/* Header section with actions */}
      <div className="p-3 md:p-4 border-b border-[#E7E5DD] bg-white text-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="bg-amber-100 text-amber-800 text-[8px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded">
              Daily Careers Hub
            </span>
            <span className="text-[9px] text-stone-400 font-bold">• Lahore &amp; Karachi Bar Lists</span>
          </div>
          <h1 className="font-serif text-lg md:text-xl font-bold text-stone-900 leading-tight">
            Pakistan Legal Job Board
          </h1>
          <p className="text-[11px] text-stone-400 font-light mt-0.5">
            Connecting talented law graduates, legal tech advocates, and seasoned litigation attorneys with premium Chambers across Pakistan.
          </p>
        </div>

        <button 
          onClick={() => setShowPostJobModal(true)}
          className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs py-1.5 px-3 rounded-lg flex items-center gap-1.5 shadow-xs self-start md:self-auto transition-all"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          Post Legal Listing
        </button>
      </div>

      {/* Advanced Filter Action Bar */}
      <div className="bg-stone-50 border-b border-[#E7E5DD] px-6 py-4 flex flex-col gap-3 shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search bar */}
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
            <input 
              type="text"
              placeholder="Search roles, chambers, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-stone-800 text-xs pl-9 pr-4 py-2.5 rounded-lg border border-[#E7E5DD] focus:outline-none focus:ring-1 focus:ring-emerald-700"
            />
          </div>

          {/* City filter */}
          <div className="md:col-span-2.5 flex items-center bg-white border border-[#E7E5DD] rounded-lg px-2 text-stone-800">
            <span className="text-[10px] uppercase font-bold text-stone-400 pl-1">City</span>
            <select 
              value={selectedCity} 
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-xs font-semibold py-2 bg-transparent border-0 focus:ring-0 cursor-pointer"
            >
              <option value="All">All Cities</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Peshawar">Peshawar</option>
              <option value="Quetta">Quetta</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Area filter */}
          <div className="md:col-span-3 flex items-center bg-white border border-[#E7E5DD] rounded-lg px-2 text-stone-800">
            <span className="text-[10px] uppercase font-bold text-stone-400 pl-1">Practice</span>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-xs font-semibold py-2 bg-transparent border-0 focus:ring-0 cursor-pointer"
            >
              <option value="All">All Disciplines</option>
              <option value="Corporate">Corporate Law</option>
              <option value="Litigation">Litigation</option>
              <option value="Tax & Regulatory">Tax &amp; Regulatory</option>
              <option value="Family Law">Family Law</option>
              <option value="Intellectual Property">Intellectual Property</option>
              <option value="Criminal Law">Criminal Law</option>
            </select>
          </div>

          {/* Experience level filter */}
          <div className="md:col-span-2.5 flex items-center bg-white border border-[#E7E5DD] rounded-lg px-2 text-stone-800">
            <span className="text-[10px] uppercase font-bold text-stone-400 pl-1">Level</span>
            <select 
              value={selectedExp} 
              onChange={(e) => setSelectedExp(e.target.value)}
              className="w-full text-xs font-semibold py-2 bg-transparent border-0 focus:ring-0 cursor-pointer"
            >
              <option value="All">All Ranks</option>
              <option value="Internship">Internship</option>
              <option value="Junior Associate">Junior Associate</option>
              <option value="Senior Associate">Senior Associate</option>
              <option value="Legal Advisor">Legal Advisor / Counsel</option>
              <option value="Research Fellow">Research Fellow</option>
            </select>
          </div>

        </div>

        {/* Dynamic total count badge */}
        <div className="text-[10px] text-stone-400 font-bold flex justify-between">
          <span>SHOWING {filteredJobs.length} PREMIUM ACTIVE VACANCIES</span>
          <span>Last Refreshed: Today at 09:00 AM (PKT)</span>
        </div>
      </div>

      {/* Main scrolling listings pane */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E7E5DD]/70 max-w-lg mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto">
              <Briefcase className="w-6 h-6 text-stone-400" />
            </div>
            <h3 className="font-serif font-black text-stone-900 text-lg">No Vacancies Found</h3>
            <p className="text-stone-500 text-xs font-light px-6">
              There are currently no active job matches aligning with your exact filters. Adjust your search parameters or post a custom listing.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCity('All');
                setSelectedCategory('All');
                setSelectedExp('All');
              }}
              className="text-xs text-emerald-800 font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div 
              key={job.id}
              className="bg-white border border-[#E7E5DD] hover:border-emerald-600/70 p-5 rounded-xl transition-all hover:shadow-md cursor-pointer group flex flex-col md:flex-row justify-between gap-5 select-text"
            >
              <div className="flex gap-4">
                {/* Firm Letter Logo mock */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shrink-0 shadow-inner ${job.logoColor}`}>
                  {job.logoLetter}
                </div>
                
                <div className="space-y-1.5 md:max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif font-black text-stone-950 text-base group-hover:text-emerald-800 transition-colors">
                      {job.title}
                    </h3>
                    <span className="text-[9px] uppercase font-extrabold tracking-wider bg-stone-100 px-2 py-0.5 rounded text-stone-500">
                      {job.experience}
                    </span>
                    <span className="text-[9px] uppercase font-extrabold tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-100 px-2 py-0.5 rounded">
                      {job.category}
                    </span>
                  </div>

                  <h4 className="text-xs font-semibold text-[#C5A85A] flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    {job.firm}
                  </h4>

                  <p className="text-xs text-stone-500 font-light leading-relaxed truncate md:whitespace-normal md:line-clamp-2">
                    {job.description}
                  </p>

                  {/* Requirements taggers */}
                  <div className="pt-2 hidden md:block">
                    <h5 className="text-[9px] font-black uppercase text-stone-400 tracking-wider mb-1">Strict Mandates</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {job.requirements.slice(0, 2).map((req, idx) => (
                        <li key={idx} className="text-[10px] text-stone-600 font-light flex items-start gap-1">
                          <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="truncate">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions & details sidebar right */}
              <div className="flex md:flex-col justify-between items-end gap-3 border-t md:border-t-0 border-stone-100 pt-3 md:pt-0 shrink-0 select-none">
                <div className="text-right space-y-1">
                  <div className="text-xs font-bold text-stone-900 flex items-center gap-1 justify-end">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-800" />
                    {job.salary}
                  </div>
                  <div className="text-[10px] text-stone-400 font-medium flex items-center gap-1 justify-end">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    {job.city}, PK
                  </div>
                </div>

                <div className="flex gap-2 w-full justify-end">
                  <button 
                    onClick={(e) => toggleBookmark(job.id, e)}
                    className={`p-2 border rounded-lg transition-colors ${
                      job.isBookmarked 
                        ? 'border-amber-300 bg-amber-50 text-amber-700' 
                        : 'border-[#E7E5DD] hover:bg-stone-50 text-stone-400 hover:text-stone-750'
                    }`}
                    title={job.isBookmarked ? "Bookmark Saved" : "Bookmark Job"}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>

                  <button 
                    onClick={(e) => handleApplyClick(job, e)}
                    className="bg-stone-900 group-hover:bg-emerald-800 text-white font-bold text-xs py-2 px-3.5 rounded-lg transition-all"
                  >
                    Quick Apply
                  </button>
                </div>
              </div>

            </div>
          ))
        )}
      </div>

      {/* MODAL 1: JOB SYSTEM APPLICATION FORM */}
      {applyJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm select-none">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl p-6 relative border border-[#E7E5DD]">
            <button 
              onClick={() => setApplyJob(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-850"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[9px] uppercase font-extrabold bg-stone-100 text-stone-500 px-2 py-0.5 rounded">
                Application Form
              </span>
              <h3 className="font-serif font-black text-xl text-stone-900 leading-tight mt-1">
                Apply for {applyJob.title}
              </h3>
              <p className="text-xs text-stone-400 font-medium">{applyJob.firm} • {applyJob.city}, Pakistan</p>
            </div>

            <form onSubmit={handleApplicationSubmit} className="space-y-4">
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder="Advocate Muhammad Ali"
                    className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Email Coordinates</label>
                  <input 
                    type="email" 
                    required
                    value={appEmail}
                    onChange={(e) => setAppEmail(e.target.value)}
                    placeholder="m.ali@lahorebar.org"
                    className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Contact Phone</label>
                  <input 
                    type="tel" 
                    required
                    value={appPhone}
                    onChange={(e) => setAppPhone(e.target.value)}
                    placeholder="+92 300 1234567"
                    className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Law School / Alumnus</label>
                  <input 
                    type="text"
                    value={appSchool}
                    onChange={(e) => setAppSchool(e.target.value)}
                    placeholder="LUMS College of Law (LLB 2025)"
                    className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Cover pitch / Professional bio</label>
                <textarea 
                  rows={3}
                  value={appBio}
                  onChange={(e) => setAppBio(e.target.value)}
                  placeholder="Summarize your bar association affiliation, constitutional litigation interests or internship successes..."
                  className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-emerald-700 placeholder-stone-400"
                />
              </div>

              {/* Upload CV placeholder simulation */}
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Legal Resume / Court Portfolio</label>
                <div className="border border-dashed border-stone-300 hover:border-emerald-700 rounded-xl p-4 text-center cursor-pointer bg-stone-50/50">
                  <Upload className="w-5 h-5 text-stone-450 mx-auto mb-1.5" />
                  <span className="text-[11px] font-bold text-stone-700 block">Drag &amp; Drop CV or Click to Browse</span>
                  <span className="text-[9px] text-stone-400 font-medium">Accepts PDF, DOCX under 8MB</span>
                </div>
              </div>

              <div className="flex gap-2.5 pt-2">
                <button 
                  type="button"
                  onClick={() => setApplyJob(null)}
                  className="flex-1 border border-[#E7E5DD] text-stone-600 hover:bg-stone-50 text-xs font-bold py-2.5 rounded-lg"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Application
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: POST A NEW LEGAL JOB CHAMBERS */}
      {showPostJobModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm select-none">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl p-6 relative border border-[#E7E5DD]">
            <button 
              onClick={() => setShowPostJobModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-850"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[9px] uppercase font-extrabold bg-[#006B44]/8 text-emerald-800 px-2 py-0.5 rounded border border-[#006B44]/15">
                Chambers Registry
              </span>
              <h3 className="font-serif font-black text-xl text-stone-900 leading-tight mt-1">
                Post a Legal Vacancy
              </h3>
              <p className="text-xs text-stone-400 font-medium">Advertise direct to 5,000+ vetted Pakistani lawyers &amp; pupils.</p>
            </div>

            <form onSubmit={handlePostJobSubmit} className="space-y-4">
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Job Title</label>
                  <input 
                    type="text" 
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Senior Constitutional Associate"
                    className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Employer / Law Chambers</label>
                  <input 
                    type="text" 
                    required
                    value={newFirm}
                    onChange={(e) => setNewFirm(e.target.value)}
                    placeholder="Cornelius, Lane &amp; Mufti (CLM)"
                    className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">City Division</label>
                  <select 
                    value={newCity}
                    onChange={(e: any) => setNewCity(e.target.value)}
                    className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-2.5 py-2 focus:ring-1 focus:ring-emerald-700"
                  >
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Dicipline</label>
                  <select 
                    value={newCategory}
                    onChange={(e: any) => setNewCategory(e.target.value)}
                    className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-2.5 py-2 focus:ring-1 focus:ring-emerald-700"
                  >
                    <option value="Corporate">Corporate Law</option>
                    <option value="Litigation">Litigation</option>
                    <option value="Tax & Regulatory">Tax &amp; Regulatory</option>
                    <option value="Family Law">Family Law</option>
                    <option value="Intellectual Property">Intellectual Property</option>
                    <option value="Criminal Law">Criminal Law</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Required Rank</label>
                  <select 
                    value={newExp}
                    onChange={(e: any) => setNewExp(e.target.value)}
                    className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-2.5 py-2 focus:ring-1 focus:ring-emerald-700"
                  >
                    <option value="Internship">Internship Agency</option>
                    <option value="Junior Associate">Junior Associate</option>
                    <option value="Senior Associate">Senior Associate</option>
                    <option value="Legal Advisor">Legal Counsel</option>
                    <option value="Research Fellow">Research Fellow</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Remuneration (Salary / Stipend)</label>
                  <input 
                    type="text" 
                    required
                    value={newSalary}
                    onChange={(e) => setNewSalary(e.target.value)}
                    placeholder="120,000 - 160,000"
                    className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <span className="text-[9px] text-[#C5A85A] font-extrabold pb-2 tracking-wide uppercase">★ PUBLISHED INSTANTLY FOR FREE</span>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Role Description &amp; Highlights</label>
                <textarea 
                  rows={2.5}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Outline case types, High Court chamber structures, and client profiles..."
                  className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-emerald-700 placeholder-stone-400"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">Aspirant Mandates (One per line)</label>
                <textarea 
                  rows={2}
                  value={newReq}
                  onChange={(e) => setNewReq(e.target.value)}
                  placeholder="High Court Practice license required&#10;LLB from high tier university completed&#10;Excellent command of CPC &amp; procedural law"
                  className="w-full bg-stone-50 border border-[#E7E5DD] text-stone-850 text-xs rounded-lg px-3 py-2 focus:ring-1 focus:ring-emerald-700 placeholder-stone-400"
                />
              </div>

              <div className="flex gap-2.5 pt-2">
                <button 
                  type="button"
                  onClick={() => setShowPostJobModal(false)}
                  className="flex-1 border border-[#E7E5DD] text-stone-600 hover:bg-stone-50 text-xs font-bold py-2.5 rounded-lg"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-emerald-800 hover:bg-emerald-950 text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1"
                >
                  Confirm Posting
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
