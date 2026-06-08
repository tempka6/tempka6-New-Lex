import React, { useState } from 'react';
import { LAWYERS } from '../data/legalData';
import { Lawyer } from '../types';
import { Search, Users, MapPin, Award, Mail, Phone, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

export default function LawyerMarketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSpec, setSelectedSpec] = useState('');

  const filteredLawyers = LAWYERS.filter((lawyer) => {
    const matchesSearch = !searchQuery ||
      lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCity = !selectedCity || lawyer.city === selectedCity;
    const matchesSpec = !selectedSpec || lawyer.specialization === selectedSpec;

    return matchesSearch && matchesCity && matchesSpec;
  });

  const handleConsult = (lawyer: Lawyer) => {
    if (!lawyer.email) {
      alert(`Please contact ${lawyer.name} directly via phone: ${lawyer.phone}`);
      return;
    }

    const subject = encodeURIComponent(`Legal Inquiry — LexPK Marketplace Referral`);
    const body = encodeURIComponent(`Dear Mr/Ms ${lawyer.name},

I found your verified profile on the LexPK Lawyer Marketplace and would like to request an introductory consultation regarding a ${lawyer.specialization.toLowerCase()} matter.

Details:
[Describe your legal issue, dispute, or notice received here...]

Please let me know your fee schedule and availability for a phone call/meeting.

Best regards,
[My Name]
[My Phone No.]`);

    window.location.href = `mailto:${lawyer.email}?subject=${subject}&body=${body}`;
  };

  const parseInitials = (name: string) => {
    return name.split(' ').map((n) => n[0]).slice(0, 2).join('');
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#FAF9F5] dark:bg-bg-app p-3 md:p-4 animate-fade-in text-stone-700 dark:text-stone-200">
      {/* Header */}
      <div className="shrink-0 mb-3 space-y-2">
        <div>
          <h1 className="font-serif text-lg md:text-xl font-bold text-stone-900 dark:text-stone-105 tracking-tight flex items-center gap-1.5">
            <Users className="w-5 h-5 text-emerald-800 dark:text-[#C5A85A]" />
            Verified Lawyer Marketplace
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">
            Connect directly with verified on-ground legal advocates in Pakistan. Select specialties, view ratings, and dispatch briefs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, specialization, or keyword..."
              className="w-full pl-9 pr-3 py-1.5 bg-white dark:bg-bg-card border border-[#E7E5DD] dark:border-stone-850 focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors text-stone-900 dark:text-stone-150"
            />
          </div>

          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-3 py-1.5 bg-white dark:bg-bg-card border border-[#E7E5DD] dark:border-stone-850 focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors cursor-pointer text-stone-900 dark:text-stone-150"
          >
            <option value="">All Cities</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Kasur">Kasur</option>
          </select>

          <select
            value={selectedSpec}
            onChange={(e) => setSelectedSpec(e.target.value)}
            className="px-3 py-1.5 bg-white dark:bg-bg-card border border-[#E7E5DD] dark:border-stone-850 focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors cursor-pointer text-stone-900 dark:text-stone-150"
          >
            <option value="">All Specializations</option>
            <option value="Criminal Law">Criminal Law</option>
            <option value="Family Law">Family Law</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Civil Law">Civil Law</option>
            <option value="Tax Law">Tax Law</option>
            <option value="Civil and Criminal Law">Civil &amp; Criminal</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto pr-1">
        {filteredLawyers.length === 0 ? (
          <div className="text-center py-12 text-stone-400">
            No verified lawyers found in our directory for the chosen criteria.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pb-3">
            {filteredLawyers.map((lawyer) => (
              <div
                key={lawyer.id}
                className="bg-white dark:bg-bg-card border border-[#E7E5DD] dark:border-stone-850 hover:border-emerald-550 dark:hover:border-emerald-600 rounded-xl p-3.5 shadow-xs hover:shadow-xs transition-all flex flex-col justify-between gap-3 relative overflow-hidden"
              >
                {lawyer.freeConsultation && (
                  <div className="absolute top-3 right-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/30 text-emerald-800 dark:text-emerald-400 px-2 py-0.5 rounded-full text-[8px] font-extrabold uppercase tracking-wider">
                    Free Query
                  </div>
                )}

                <div className="space-y-2.5">
                  {/* Bio card */}
                  <div className="flex gap-2.5">
                    <div className="w-10 h-10 bg-emerald-800 dark:bg-[#C5A85A]/10 text-white dark:text-[#C5A85A] border border-transparent dark:border-[#C5A85A]/30 rounded-lg flex items-center justify-center font-serif text-sm font-bold shrink-0">
                      {parseInitials(lawyer.name)}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-stone-950 dark:text-stone-100 text-sm flex items-center gap-1">
                        {lawyer.name}
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      </h3>
                      <p className="text-emerald-700 dark:text-emerald-405 text-xs font-semibold">{lawyer.specialization}</p>
                      <span className="text-stone-400 text-[11px] font-medium flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {lawyer.city}
                      </span>
                    </div>
                  </div>

                  {/* Stars / Reviews */}
                  <div className="flex items-center gap-2 pt-1.5 border-t border-stone-100 dark:border-stone-850">
                    <div className="text-[#C5A85A] text-xs">
                      {'★'.repeat(Math.round(lawyer.rating))}
                      <span className="text-stone-300 dark:text-stone-705">{'★'.repeat(5 - Math.round(lawyer.rating))}</span>
                    </div>
                    <span className="text-stone-400 text-[10px] font-semibold">({lawyer.reviewCount} client reviews)</span>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500 dark:text-stone-350 font-medium bg-stone-50 dark:bg-stone-900 p-1.5 rounded border border-[#E7E5DD]/30 dark:border-stone-850">
                    <Award className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 shrink-0" />
                    <span>{lawyer.experience} Years Active Practice</span>
                  </div>

                  {/* Testimonial block */}
                  <p className="text-stone-605 dark:text-stone-355 text-xs leading-relaxed italic border-l-2 border-stone-200 dark:border-stone-700 pl-2">
                    &ldquo;{lawyer.reviewText}&rdquo;
                  </p>
                </div>

                {/* Consultation trigger */}
                <div className="space-y-1.5 pt-2 border-t border-stone-100 dark:border-stone-850">
                  <button
                    onClick={() => handleConsult(lawyer)}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Consult Advocate
                  </button>
                  <p className="text-[10px] text-stone-400 text-center font-semibold">
                    📞 Direct Inquiry: {lawyer.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
