import React, { useState, useEffect } from 'react';
import { 
  FileText, Shield, FileSearch, Scale, Home, Globe, Search, Building2, 
  MapPin, CheckCircle, Clock, ArrowRight, Upload, Phone, User, Info, Check,
  AlertCircle, Download, ListFilter, History, ExternalLink, HelpCircle
} from 'lucide-react';

interface RetrievalRequest {
  id: string;
  type: 'fir' | 'court-file' | 'property-deed';
  status: 'Received' | 'Runner Dispatched' | 'Attestation Pending' | 'Completed' | 'Rejected';
  timestamp: string;
  applicantType: 'Resident' | 'Overseas';
  applicantName: string;
  applicantPhone: string;
  applicantEmail: string;
  trackingId: string;
  details: {
    [key: string]: string;
  };
}

const INITIAL_REQUESTS: RetrievalRequest[] = [
  {
    id: 'req-mock-1',
    type: 'fir',
    status: 'Runner Dispatched',
    timestamp: 'May 30, 2026, 02:40 PM',
    applicantType: 'Resident',
    applicantName: 'Taimoor Ahmed Chaudhry',
    applicantPhone: '+92 301 4452199',
    applicantEmail: 'taimoor.chaudhry@outlook.com',
    trackingId: 'LPK-FIR-92731',
    details: {
      firNumber: '114/26',
      year: '2026',
      policeStation: 'Gulberg Police Station',
      district: 'Lahore',
      offenseClauses: 'PPC Section 379/411 (Theft & Possession)',
      purpose: 'Bail petition filing before the Sessions Court Lahore.'
    }
  },
  {
    id: 'req-mock-2',
    type: 'court-file',
    status: 'Completed',
    timestamp: 'May 28, 2026, 09:15 AM',
    applicantType: 'Overseas',
    applicantName: 'Sarah Khan (Advocate representing Dr. Mansoor)',
    applicantPhone: '+44 7911 123456',
    applicantEmail: 'sarah.k@overseaspk-legal.com',
    trackingId: 'LPK-CRT-48220',
    details: {
      caseTitle: 'Mansoor Iqbal vs. Federation of Pakistan',
      caseNumber: 'W.P. No. 49202 of 2023',
      courtName: 'Lahore High Court (LHC)',
      district: 'Lahore',
      attestation: 'Attested Certified Copy (Certified by Deputy Registrar)',
      year: '2023',
      urgency: 'Urgent'
    }
  },
  {
    id: 'req-mock-3',
    type: 'property-deed',
    status: 'Attestation Pending',
    timestamp: 'May 29, 2026, 11:30 AM',
    applicantType: 'Overseas',
    applicantName: 'Zia-ur-Rehman Alvi',
    applicantPhone: '+971 50 123 4567',
    applicantEmail: 'z.alvi@dubaihld.ae',
    trackingId: 'LPK-PRP-55910',
    details: {
      ownerName: 'Late Malik Mumtaz Alvi',
      documentNumber: 'Deed No. 1042, Bahi No. 1',
      volumeNumber: 'Jild 412, Page 22-25',
      subRegistrar: 'Sub-Registrar Cantt Division',
      district: 'Rawalpindi',
      year: '1996',
      address: 'Plot 42-C, Phase 1, DHA Rawalpindi'
    }
  }
];

export default function DocumentRetrieval() {
  const [activeTab, setActiveTab] = useState<'fir' | 'court-file' | 'property-deed'>('fir');
  const [requests, setRequests] = useState<RetrievalRequest[]>(INITIAL_REQUESTS);
  const [applicantType, setApplicantType] = useState<'Resident' | 'Overseas'>('Resident');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [newTrackingId, setNewTrackingId] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  // FIR Form State
  const [firNumber, setFirNumber] = useState('');
  const [firYear, setFirYear] = useState('2026');
  const [firPoliceStation, setFirPoliceStation] = useState('');
  const [firDistrict, setFirDistrict] = useState('Lahore');
  const [firOffenses, setFirOffenses] = useState('');
  const [firPurpose, setFirPurpose] = useState('');

  // Court File Form State
  const [courtCaseTitle, setCourtCaseTitle] = useState('');
  const [courtCaseNumber, setCourtCaseNumber] = useState('');
  const [courtName, setCourtName] = useState('Lahore High Court (LHC)');
  const [courtDistrict, setCourtDistrict] = useState('Lahore');
  const [courtAttestation, setCourtAttestation] = useState('Attested Certified Copy (Stamped)');
  const [courtYear, setCourtYear] = useState('2025');
  const [courtUrgency, setCourtUrgency] = useState('Normal');

  // Property Deed Form State
  const [propOwner, setPropOwner] = useState('');
  const [propDocNum, setPropDocNum] = useState('');
  const [propVolume, setPropVolume] = useState('');
  const [propSubRegistrar, setPropSubRegistrar] = useState('');
  const [propDistrict, setPropDistrict] = useState('Lahore');
  const [propYear, setPropYear] = useState('2024');
  const [propAddress, setPropAddress] = useState('');

  // Shared Applicant State
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('lexpk_document_retrievals');
    if (saved) {
      setRequests(JSON.parse(saved));
    } else {
      localStorage.setItem('lexpk_document_retrievals', JSON.stringify(INITIAL_REQUESTS));
    }
  }, []);

  const saveRequests = (newRequests: RetrievalRequest[]) => {
    setRequests(newRequests);
    localStorage.setItem('lexpk_document_retrievals', JSON.stringify(newRequests));
  };

  const generateTrackingId = (type: 'fir' | 'court-file' | 'property-deed') => {
    const prefix = type === 'fir' ? 'FIR' : type === 'court-file' ? 'CRT' : 'PRP';
    const rand = Math.floor(10000 + Math.random() * 90000);
    return `LPK-${prefix}-${rand}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone || !applicantEmail) {
      alert('Please fill out the Applicant Identity section.');
      return;
    }

    const tId = generateTrackingId(activeTab);
    let detailsObj: { [key: string]: string } = {};

    if (activeTab === 'fir') {
      if (!firNumber || !firPoliceStation) {
        alert('Please fill out the core FIR registration identifiers.');
        return;
      }
      detailsObj = {
        firNumber,
        year: firYear,
        policeStation: firPoliceStation,
        district: firDistrict,
        offenseClauses: firOffenses || 'Not specified',
        purpose: firPurpose || 'General verification & review'
      };
    } else if (activeTab === 'court-file') {
      if (!courtCaseTitle || !courtCaseNumber) {
        alert('Please provide the court case title and number.');
        return;
      }
      detailsObj = {
        caseTitle: courtCaseTitle,
        caseNumber: courtCaseNumber,
        courtName,
        district: courtDistrict,
        attestation: courtAttestation,
        year: courtYear,
        urgency: courtUrgency
      };
    } else {
      if (!propOwner || !propAddress) {
        alert('Please specify the registered property owner and location address.');
        return;
      }
      detailsObj = {
        ownerName: propOwner,
        documentNumber: propDocNum || 'To be traced by registry team',
        volumeNumber: propVolume || 'To be traced by registry team',
        subRegistrar: propSubRegistrar || 'Local Sub-Registrar Division',
        district: propDistrict,
        year: propYear,
        address: propAddress
      };
    }

    const newReq: RetrievalRequest = {
      id: `req-${Date.now()}`,
      type: activeTab,
      status: 'Received',
      timestamp: new Date().toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      applicantType,
      applicantName,
      applicantPhone,
      applicantEmail,
      trackingId: tId,
      details: detailsObj
    };

    const updated = [newReq, ...requests];
    saveRequests(updated);

    // Reset Form Fields
    setNewTrackingId(tId);
    setShowSuccessToast(true);
    setFirNumber('');
    setFirPoliceStation('');
    setFirOffenses('');
    setFirPurpose('');
    setCourtCaseTitle('');
    setCourtCaseNumber('');
    setPropOwner('');
    setPropDocNum('');
    setPropVolume('');
    setPropSubRegistrar('');
    setPropAddress('');

    setTimeout(() => {
      setShowSuccessToast(false);
    }, 8000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Runner Dispatched':
        return 'bg-blue-50 text-blue-850 border-blue-200';
      case 'Attestation Pending':
        return 'bg-amber-50 text-amber-850 border-amber-200';
      case 'Rejected':
        return 'bg-red-50 text-red-800 border-red-200';
      case 'Received':
      default:
        return 'bg-stone-100 text-stone-700 border-stone-250';
    }
  };

  const filteredRequests = requests.filter(req => {
    if (filterType === 'all') return true;
    return req.type === filterType;
  });

  return (
    <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden bg-[#FAF9F5] dark:bg-bg-app select-none text-stone-700 dark:text-stone-200">
      
      {/* LEFT FORM PANE (60% width) */}
      <div className="flex-1 flex flex-col overflow-y-auto border-r border-[#E7E5DD] dark:border-stone-850 p-3 md:p-4">
        
        {/* Banner with contextual badge */}
        <div className="flex items-center gap-1.5 mb-1 text-[10px]">
          <span className="bg-emerald-800 text-white text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.2 rounded">
            Official Document Retrieval
          </span>
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-stone-450 dark:text-stone-400 font-semibold font-mono">Punjab Jurisdiction • Overseas Enabled</span>
        </div>

        {/* Master Heading */}
        <div className="mb-3 space-y-1">
          <h1 className="font-serif text-lg md:text-xl font-bold text-stone-900 dark:text-stone-105 leading-tight">
            Certified Registry Copy Room
          </h1>
          <p className="text-[11px] text-stone-550 dark:text-stone-400 leading-relaxed font-light">
            Instant statutory research demands court-admissible custody files. Select a service to dispatch chamber runners for attestation stamps and secure physical collection.
          </p>
        </div>

        {/* Residency Preference Toggler */}
        <div className="bg-white dark:bg-bg-card border border-[#E7E5DD] dark:border-stone-850 rounded-xl p-3 mb-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-amber-50 text-amber-800 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-stone-900 uppercase">Residency Application Category</h4>
              <p className="text-[10px] text-stone-400 font-light mt-0.5">We provide customized expedited handling for Non-Resident Overseas Pakistanis managing remote cases.</p>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <button 
              type="button"
              onClick={() => setApplicantType('Resident')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                applicantType === 'Resident' 
                  ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                  : 'bg-white text-stone-600 border-[#E7E5DD] hover:bg-stone-50'
              }`}
            >
              Resident Citizen
            </button>
            <button 
              type="button"
              onClick={() => setApplicantType('Overseas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center gap-1.5 ${
                applicantType === 'Overseas' 
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                  : 'bg-white text-stone-600 border-[#E7E5DD] hover:bg-emerald-50 hover:text-emerald-800'
              }`}
            >
              Overseas Pakistani
            </button>
          </div>
        </div>

        {/* Tab Selection Row */}
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          <button
            onClick={() => setActiveTab('fir')}
            className={`p-3.5 rounded-xl border flex flex-col gap-1.5 items-start text-left transition-all ${
              activeTab === 'fir'
                ? 'bg-white border-emerald-700 shadow-md ring-1 ring-emerald-700/20'
                : 'bg-white/50 border-[#E7E5DD] hover:border-stone-400 hover:bg-white'
            }`}
          >
            <div className={`p-1.5 rounded ${activeTab === 'fir' ? 'bg-emerald-50 text-emerald-800' : 'bg-stone-100 text-stone-500'}`}>
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold tracking-wider text-stone-400 block">Punjab Police</span>
              <span className="text-[11px] font-black text-stone-900 uppercase">🚨 FIR Copy Retrieval</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('court-file')}
            className={`p-3.5 rounded-xl border flex flex-col gap-1.5 items-start text-left transition-all ${
              activeTab === 'court-file'
                ? 'bg-white border-emerald-700 shadow-md ring-1 ring-emerald-700/20'
                : 'bg-white/50 border-[#E7E5DD] hover:border-stone-400 hover:bg-white'
            }`}
          >
            <div className={`p-1.5 rounded ${activeTab === 'court-file' ? 'bg-emerald-50 text-emerald-800' : 'bg-stone-100 text-stone-500'}`}>
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold tracking-wider text-stone-400 block">District &amp; High Courts</span>
              <span className="text-[11px] font-black text-stone-900 uppercase">⚖️ Case File Copies</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('property-deed')}
            className={`p-3.5 rounded-xl border flex flex-col gap-1.5 items-start text-left transition-all ${
              activeTab === 'property-deed'
                ? 'bg-white border-emerald-700 shadow-md ring-1 ring-emerald-700/20'
                : 'bg-white/50 border-[#E7E5DD] hover:border-stone-400 hover:bg-white'
            }`}
          >
            <div className={`p-1.5 rounded ${activeTab === 'property-deed' ? 'bg-emerald-50 text-emerald-800' : 'bg-stone-100 text-stone-500'}`}>
              <Home className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold tracking-wider text-stone-400 block">Sub-Registrar Office</span>
              <span className="text-[11px] font-black text-stone-900 uppercase">🏡 Property deeds</span>
            </div>
          </button>
        </div>

        {/* Dynamic Warning Notification based on Tab */}
        <div className="bg-stone-100/50 dark:bg-stone-900/40 border border-[#E7E5DD] dark:border-stone-850 p-2.5 rounded-xl flex items-start gap-2.5 mb-3">
          <Info className="w-4 h-4 text-emerald-800 dark:text-[#C5A85A] mt-0.5 shrink-0" />
          <div className="text-[11px] text-stone-600 leading-relaxed font-light select-text">
            {activeTab === 'fir' && (
              <p>
                <strong>Criminal Law Guard:</strong> Under the Police Rules 1934 and Code of Criminal Procedure 1898, some FIRs involving protected juvenile dossiers or sensitive anti-terrorism agency cases might require dedicated Power of Attorney. Our runners will inform you immediately during physical lookup.
              </p>
            )}
            {activeTab === 'court-file' && (
              <p>
                <strong>Attestation Procedure:</strong> Non-attested plain copy drafts can be dispatched as high-resolution PDF scans within 72 hours. Certified stamped copies (legally admissible in overseas embassies and domestic tribunals) require verified signatures from the Copy Branch / Deputy Registrar, usually taking 5-7 business days.
              </p>
            )}
            {activeTab === 'property-deed' && (
              <p>
                <strong>Assoc. Acts Integration:</strong> To request land registries (Bayan/Deed), please mention the Bahi Registry number and Registrar division under the <i>Registration Act 1908</i>. We interface with physical Registry books dating back to 1947.
              </p>
            )}
          </div>
        </div>

        {/* Toast Notification of Success */}
        {showSuccessToast && (
          <div className="mb-6 p-4 bg-emerald-800 text-white rounded-xl border border-emerald-900 shadow-lg animate-fade-in flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-300 mt-0.5 shrink-0" />
            <div className="flex-1">
              <h4 className="font-bold text-sm">Document Request Lodged Successfully!</h4>
              <p className="text-xs text-emerald-100 leading-relaxed font-light mt-1">
                Your request has been registered in our chamber registry under Tracking ID: <strong className="font-mono text-emerald-300 select-all">{newTrackingId}</strong>.
                Our team will verify the details and dispatch a runner to the relevant Punjab head office. Check the status tracker in the sidebar to trace update logs!
              </p>
            </div>
          </div>
        )}

        {/* MASTER INPUT FORM */}
        <form onSubmit={handleFormSubmit} className="space-y-6 select-text">
          
          <div className="bg-white border border-[#E7E5DD] p-5 rounded-2xl shadow-xs space-y-4">
            <h3 className="text-stone-900 font-serif font-black text-sm uppercase tracking-wide border-b border-light pb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C5A85A]" />
              Step 1: Document Identifiers ({activeTab === 'fir' ? 'FIR' : activeTab === 'court-file' ? 'Court File' : 'Property Deed'})
            </h3>

            {/* TAB 1: FIR COPY FIELDS */}
            {activeTab === 'fir' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      FIR Register Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={firNumber}
                      onChange={(e) => setFirNumber(e.target.value)}
                      placeholder="e.g., 421/2026 or 12/26"
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Year Registered <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={firYear} 
                      onChange={(e) => setFirYear(e.target.value)}
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-2.5 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    >
                      <option value="2026">2026 (Active Year)</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="Past Decade">Prior to 2022 Archive</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Police Station (Thana) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required 
                        value={firPoliceStation}
                        onChange={(e) => setFirPoliceStation(e.target.value)}
                        placeholder="e.g., Gulberg Police Station, Lahore"
                        className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                      />
                      <Building2 className="w-3.5 h-3.5 absolute right-3 top-2.5 text-stone-400" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      District <span className="text-red-550">*</span>
                    </label>
                    <select 
                      value={firDistrict}
                      onChange={(e) => setFirDistrict(e.target.value)}
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-2.5 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    >
                      <option value="Lahore">Lahore</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Gujranwala">Gujranwala</option>
                      <option value="Sialkot">Sialkot</option>
                      <option value="Sargodha">Sargodha</option>
                      <option value="Bahawalpur">Bahawalpur</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                    Offense Penal Sections (Optional)
                  </label>
                  <input 
                    type="text" 
                    value={firOffenses}
                    onChange={(e) => setFirOffenses(e.target.value)}
                    placeholder="e.g., Section 302 (Murder charges) or Section 489-F (Cheque Bounce)"
                    className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                    Purpose / Background of Document Need
                  </label>
                  <textarea 
                    rows={2} 
                    value={firPurpose}
                    onChange={(e) => setFirPurpose(e.target.value)}
                    placeholder="Briefly state if this is needed to process pre-arrest bail appeal, defense response, or insurance..."
                    className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700 placeholder-stone-400"
                  />
                </div>
              </div>
            )}

            {/* TAB 2: COURT FILE FIELDS */}
            {activeTab === 'court-file' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Case Title / Parties <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={courtCaseTitle}
                      onChange={(e) => setCourtCaseTitle(e.target.value)}
                      placeholder="e.g., Muhammad Nawaz vs. Province of Punjab"
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Writ/Civil Case Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={courtCaseNumber}
                      onChange={(e) => setCourtCaseNumber(e.target.value)}
                      placeholder="e.g., W.P. No. 10425 / 2024"
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Adjudicting Court Division <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={courtName}
                      onChange={(e) => setCourtName(e.target.value)}
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-2.5 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    >
                      <option value="Supreme Court of Pakistan">Supreme Court (SC)</option>
                      <option value="Lahore High Court (LHC)">Lahore High Court (LHC)</option>
                      <option value="District &amp; Sessions Court">District &amp; Sessions Court</option>
                      <option value="Civil Court (Family Division)">Civil Court (Family Division)</option>
                      <option value="Banking/Tax Court Tribunal">Banking/Tax Court Tribunal</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Filing Year <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={courtYear}
                      onChange={(e) => setCourtYear(e.target.value)}
                      placeholder="e.g., 2024"
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Court Location District <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={courtDistrict}
                      onChange={(e) => setCourtDistrict(e.target.value)}
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-2.5 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    >
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Multan">Multan</option>
                      <option value="Faisalabad">Faisalabad</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Attestation &amp; Certification Grade <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={courtAttestation}
                      onChange={(e) => setCourtAttestation(e.target.value)}
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-2.5 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    >
                      <option value="Attested Certified Copy (Stamped)">Attested Certified Copy (Admissible in Embassy/Courts)</option>
                      <option value="Non-Attested Digital Scan (Fastest)">Non-Attested Digital Scan (Reference Only)</option>
                      <option value="Both Attested Certified &amp; Digital PDF">Both Certified Hardcopy &amp; Digital PDF Scan</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Priority Level
                    </label>
                    <select 
                      value={courtUrgency}
                      onChange={(e) => setCourtUrgency(e.target.value)}
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-2.5 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    >
                      <option value="Normal">Normal Handling (5-7 Business Days)</option>
                      <option value="Urgent">Urgent Expedition (Extra Runners, 2-3 Days)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: PROPERTY DEED FIELDS */}
            {activeTab === 'property-deed' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Registered Owner Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={propOwner}
                      onChange={(e) => setPropOwner(e.target.value)}
                      placeholder="e.g., Chaudhry Muhammad Tariq"
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Deed Registration Number (Doc No.)
                    </label>
                    <input 
                      type="text" 
                      value={propDocNum}
                      onChange={(e) => setPropDocNum(e.target.value)}
                      placeholder="e.g., Deed No. 1045 or Inteqal ID"
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      District subdivision sub-registrar office
                    </label>
                    <input 
                      type="text" 
                      value={propSubRegistrar}
                      onChange={(e) => setPropSubRegistrar(e.target.value)}
                      placeholder="e.g., Cantt Registrar, Rawalpindi"
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Bahi / Jild / Volume (If known)
                    </label>
                    <input 
                      type="text" 
                      value={propVolume}
                      onChange={(e) => setPropVolume(e.target.value)}
                      placeholder="e.g., Book 1, Volume 415"
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                      Registry / Deed Year <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={propYear}
                      onChange={(e) => setPropYear(e.target.value)}
                      placeholder="e.g., 2005"
                      className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                    Property Location Address <span className="text-red-550">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    value={propAddress}
                    onChange={(e) => setPropAddress(e.target.value)}
                    placeholder="e.g., House No. 129, G-Block, Model Town, Lahore"
                    className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                  />
                </div>
              </div>
            )}

          </div>

          {/* STEP 2: APPLICANT IDENTITY DETAILS (Shared across all) */}
          <div className="bg-white border border-[#E7E5DD] p-5 rounded-2xl shadow-xs space-y-4">
            <h3 className="text-stone-900 font-serif font-black text-sm uppercase tracking-wide border-b border-light pb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-[#C5A85A]" />
              Step 2: Applicant Identity &amp; Notification coordinates
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required 
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Advocate Ch. Muhammad Ali"
                  className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                  Active WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="tel" 
                    required 
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="+92 300 1234567"
                    className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                  />
                  <Phone className="w-3.5 h-3.5 absolute right-3 top-2.5 text-stone-400" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase block mb-1">
                  Email Coordinates <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  required 
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  placeholder="name@gmail.com"
                  className="w-full bg-stone-50 border border-[#E7E5DD] rounded-lg px-3 py-2 text-stone-850 text-xs focus:ring-1 focus:ring-emerald-700"
                />
              </div>
            </div>

            <p className="text-[9px] text-[#C5A85A] font-extrabold font-mono tracking-wide uppercase">
              ★ NO REGISTRATION DEPOSITS REQUIRED. PAYMENTS GRANTED ON ACTUAL STAMP FEE BILLING.
            </p>
          </div>

          <button 
            type="submit"
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs py-3 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-800/10 hover:scale-[1.005]"
          >
            Dispatch Physical Chamber Runner &amp; Generate Citation Ticket
            <ArrowRight className="w-4 h-4" />
          </button>

        </form>

      </div>

      {/* RIGHT RUNNING TRACKER PANE (40% width) */}
      <div className="w-full md:w-[400px] bg-white flex flex-col p-6 overflow-y-auto shrink-0 border-l border-[#E7E5DD]">
        
        {/* Tracker Panel Header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <History className="w-4.5 h-4.5 text-emerald-800" />
            <h2 className="font-serif text-lg font-black text-stone-900 uppercase tracking-tight">Active Request Tracker</h2>
          </div>
          <span className="text-[9px] px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-bold uppercase">
            {filteredRequests.length} Active
          </span>
        </div>

        {/* Filters for Tracker items */}
        <div className="flex items-center gap-1.5 mb-4 select-none">
          <span className="text-[10px] uppercase font-bold text-stone-400">Filter type:</span>
          <button 
            onClick={() => setFilterType('all')} 
            className={`px-2 py-1 text-[9px] font-black uppercase rounded ${
              filterType === 'all' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setFilterType('fir')} 
            className={`px-2 py-1 text-[9px] font-black uppercase rounded ${
              filterType === 'fir' ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
            }`}
          >
            FIR
          </button>
          <button 
            onClick={() => setFilterType('court-file')} 
            className={`px-2 py-1 text-[9px] font-black uppercase rounded ${
              filterType === 'court-file' ? 'bg-indigo-900 text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
            }`}
          >
            Courts
          </button>
          <button 
            onClick={() => setFilterType('property-deed')} 
            className={`px-2 py-1 text-[9px] font-black uppercase rounded ${
              filterType === 'property-deed' ? 'bg-amber-800 text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
            }`}
          >
            Land
          </button>
        </div>

        {/* Scrollable list of requests */}
        <div className="space-y-4 flex-1 select-text">
          {filteredRequests.map((req) => (
            <div 
              key={req.id}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-400/80 transition-all shadow-inner space-y-3"
            >
              {/* Card Title & Status Badge */}
              <div className="flex items-start justify-between gap-1.5 border-b border-stone-200/60 pb-2">
                <div>
                  <span className="text-[8px] font-black uppercase text-[#C5A85A] font-mono tracking-widest block leading-3">
                    {req.trackingId}
                  </span>
                  <span className="text-xs font-serif font-black text-stone-900 uppercase">
                    {req.type === 'fir' ? '👮 Punjab FIR Copy' : req.type === 'court-file' ? '⚖️ Court File Certified' : 'Property Registry'}
                  </span>
                </div>
                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border ${getStatusColor(req.status)}`}>
                  {req.status}
                </span>
              </div>

              {/* Dynamic Step-by-Step interactive pipeline log for realism! */}
              <div className="bg-white p-2.5 rounded-lg border border-stone-200/30 text-[10px] space-y-2">
                <div className="text-stone-400 uppercase font-bold text-[8px] tracking-wide">Expedite Dispatch Stages:</div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="text-stone-800 font-medium">Lodged: Info verified by clerk</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {req.status !== 'Received' ? (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0 animate-spin" />
                    )}
                    <span className={req.status !== 'Received' ? 'text-stone-850 font-semibold' : 'text-stone-400 font-light'}>
                      Assigned: Physical runner on premises
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {req.status === 'Completed' || req.status === 'Attestation Pending' ? (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    )}
                    <span className={req.status === 'Completed' || req.status === 'Attestation Pending' ? 'text-stone-850 font-semibold' : 'text-stone-400 font-light'}>
                      Audit: Gazette Seal / Deputy stamp
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {req.status === 'Completed' ? (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    )}
                    <span className={req.status === 'Completed' ? 'text-stone-850 font-bold' : 'text-stone-400 font-light'}>
                      Dispatch: PDF Scanned &amp; Courier active
                    </span>
                  </div>
                </div>
              </div>

              {/* Request Details */}
              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between">
                  <span className="text-stone-400 font-bold">Applicant Name:</span>
                  <span className="text-stone-800 font-medium">{req.applicantName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400 font-bold">Applied Date:</span>
                  <span className="text-stone-800 font-light">{req.timestamp}</span>
                </div>
                
                {/* Specific Fields Render */}
                {req.type === 'fir' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-stone-400 font-bold">FIR Code:</span>
                      <span className="text-stone-800 font-semibold">{req.details.firNumber} ({req.details.year})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400 font-bold">Police Station:</span>
                      <span className="text-stone-800 font-semibold truncate max-w-[150px]" title={req.details.policeStation}>{req.details.policeStation}</span>
                    </div>
                  </>
                )}

                {req.type === 'court-file' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-stone-400 font-bold">Court/Tribunal:</span>
                      <span className="text-stone-800 font-semibold truncate max-w-[150px]" title={req.details.courtName}>{req.details.courtName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400 font-bold">Cert Grade:</span>
                      <span className="text-stone-800 font-semibold truncate max-w-[150px]" title={req.details.attestation}>{req.details.attestation}</span>
                    </div>
                  </>
                )}

                {req.type === 'property-deed' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-stone-400 font-bold">Property Location:</span>
                      <span className="text-stone-800 font-semibold truncate max-w-[160px]" title={req.details.address}>{req.details.address}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400 font-bold">Sub-Registrar:</span>
                      <span className="text-stone-800 font-semibold truncate max-w-[160px]" title={req.details.subRegistrar}>{req.details.subRegistrar}</span>
                    </div>
                  </>
                )}
              </div>

              {/* simulated download of receipt */}
              <div className="pt-2 border-t border-stone-200 flex gap-2">
                <a
                  href={`mailto:document-services@lexpk.org?subject=Inquiry on Request ${req.trackingId}`}
                  className="flex-1 py-1.5 border border-[#E7E5DD] hover:bg-stone-100 rounded text-center text-[9px] font-bold text-stone-600 transition-all flex items-center justify-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  Email Support
                </a>
                <button
                  onClick={() => {
                    const content = `LexPK Official Document Copy Ticket\n===============================\nTracking ID: ${req.trackingId}\nRequest Type: ${req.type.toUpperCase()}\nStatus: ${req.status}\nApplicant: ${req.applicantName}\nResidency Status: ${req.applicantType}\nWhatsApp: ${req.applicantPhone}\nDetails:\n` + Object.entries(req.details)
                      .map(([key, val]) => ` - ${key}: ${val}`).join('\n');
                    
                    const blob = new Blob([content], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${req.trackingId}_Receipt.txt`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="flex-1 py-1.5 bg-stone-900 hover:bg-stone-950 text-white text-[9px] font-bold rounded flex items-center justify-center gap-1 transition-all"
                >
                  <Download className="w-3 h-3" />
                  Print Receipt
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
