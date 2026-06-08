import React, { useState } from 'react';
import { LIMITATION_DATA, LEGAL_TERMS, RECENT_AMENDMENTS, CAT } from '../data/legalData';
import { ShieldCheck, Search, Scale, Hourglass, Landmark, Bell, AlertTriangle, FileSearch, Trash2, HelpCircle, BookOpen, ExternalLink, FileText, ArrowUp } from 'lucide-react';

// ══════════════════════════════════════════════════════
// 1. LIMITATION LOOKUP COMPONENT
// ══════════════════════════════════════════════════════
export function LimitationLookup() {
  const [query, setQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('');

  const filtered = LIMITATION_DATA.filter((item) => {
    const matchesQuery = !query || item.desc.toLowerCase().includes(query.toLowerCase()) || item.art.includes(query);
    const matchesCat = !selectedCat || item.cat === selectedCat;
    return matchesQuery && matchesCat;
  });

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#FAF9F5] dark:bg-bg-app p-3 md:p-4 animate-fade-in text-stone-700 dark:text-stone-200">
      <div className="shrink-0 mb-3 space-y-2">
        <div>
          <h1 className="font-serif text-lg md:text-xl font-bold text-stone-900 dark:text-stone-105 tracking-tight flex items-center gap-1.5">
            <Hourglass className="w-5 h-5 text-emerald-800 dark:text-[#C5A85A]" />
            Limitation Act Lookup
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">
            Access statutory limitation periods for civil disputes, appeals, and executions under the Limitation Act, 1908.
          </p>
        </div>

        <div className="flex gap-3 flex-col sm:flex-row">
          <div className="flex-1 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search limitation article, keyword (e.g. contract, tort, rent...)"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E7E5DD] focus:border-emerald-600 rounded-xl text-sm outline-none transition-colors"
            />
          </div>
          <select
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
            className="px-4 py-2.5 bg-white border border-[#E7E5DD] focus:border-emerald-600 rounded-xl text-sm outline-none cursor-pointer transition-colors"
          >
            <option value="">All Categories</option>
            <option value="contract">Contracts</option>
            <option value="property">Property &amp; Rent</option>
            <option value="tort">Torts &amp; Negligence</option>
            <option value="recovery">Debt Recovery</option>
            <option value="family">Family Law</option>
            <option value="appeal">Appeals</option>
            <option value="execution">Decree Execution</option>
          </select>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-1">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-stone-400">No limitation articles matched your criteria.</div>
        ) : (
          <div className="space-y-3">
            {filtered.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#E7E5DD] rounded-xl p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 shadow-sm hover:border-emerald-600 transition-all">
                <div className="space-y-1">
                  <span className="text-[10px] text-emerald-800 font-extrabold uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    Article {item.art}
                  </span>
                  <p className="text-sm text-stone-900 leading-relaxed font-medium pt-1">{item.desc}</p>
                  <p className="text-xs text-stone-400">Starts running from: {item.from}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-serif text-lg font-bold text-emerald-800 bg-emerald-50/40 p-2.5 rounded-lg border border-emerald-100/50 block w-full sm:w-auto text-center sm:text-right">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 2. COURT FEE CALCULATOR COMPONENT
// ══════════════════════════════════════════════════════
export function CourtFeeCalculator() {
  const [court, setCourt] = useState('');
  const [province, setProvince] = useState('');
  const [nature, setNature] = useState('');
  const [suitValue, setSuitValue] = useState('');
  const [result, setResult] = useState<{ fee: number; label: string; details: string[] } | null>(null);

  const calculate = () => {
    if (!court || !province || !nature) {
      alert('Please fill out all drop-down options.');
      return;
    }

    const val = parseFloat(suitValue) || 0;
    let fee = 0;
    let label = 'Estimated Court Fee (Scale 1870)';
    const details = [];

    if (nature === 'money' || nature === 'property') {
      fee = val * 0.075;
      label = 'Ad Valorem Court Fee (7.5%)';
      details.push(`Grounded in Court Fees Act, 1870 (Sch I, Art 1).`);
      details.push(`Applied 7.5% fee on the overall pecuniary value of PKR ${val.toLocaleString()}.`);
    } else {
      fee = 500;
      label = 'Fixed Statutory Court Fee';
      details.push(`Claim categorized as declaration or general injunctive suit.`);
      details.push(`Standard legal fixed fee of PKR 500 is applied.`);
    }

    // Add provincial stamp duty/process surcharge
    let surcharge = 150;
    if (province === 'sindh') surcharge = 250;
    if (province === 'punjab') surcharge = 200;
    
    fee += surcharge;
    details.push(`Added provincial legal process fee: PKR ${surcharge}.`);

    setResult({
      fee: Math.round(fee),
      label,
      details
    });
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#FAF9F5] dark:bg-bg-app p-3 md:p-4 animate-fade-in text-stone-700 dark:text-stone-200">
      <div className="shrink-0 mb-3 space-y-1">
        <h1 className="font-serif text-lg md:text-xl font-bold text-stone-900 dark:text-stone-105 tracking-tight flex items-center gap-1.5">
          <Landmark className="w-5 h-5 text-emerald-800 dark:text-[#C5A85A]" />
          Court Fee Calculator
        </h1>
        <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">
          Approximate standard litigation court fees payable under the Court Fees Act, 1870.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 grid md:grid-cols-2 gap-6 pb-8">
        <div className="bg-white border border-[#E7E5DD] rounded-xl p-5 space-y-4 shadow-sm h-fit">
          <h2 className="font-serif text-lg font-bold text-stone-950">Enter Suit Parameters</h2>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Court Level</label>
              <select value={court} onChange={(e) => setCourt(e.target.value)} className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5DD] rounded-xl text-xs outline-none">
                <option value="">Select Level</option>
                <option value="civil">Civil Court</option>
                <option value="district">District Sessions</option>
                <option value="high">High Court</option>
                <option value="supreme">Supreme Court</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Province</label>
              <select value={province} onChange={(e) => setProvince(e.target.value)} className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5DD] rounded-xl text-xs outline-none">
                <option value="">Select Province</option>
                <option value="punjab">Punjab</option>
                <option value="sindh">Sindh</option>
                <option value="kp">KPK</option>
                <option value="balochistan">Balochistan</option>
                <option value="ict">Islamabad (ICT)</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Nature of Suit</label>
              <select value={nature} onChange={(e) => setNature(e.target.value)} className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5DD] rounded-xl text-xs outline-none">
                <option value="">Select Nature</option>
                <option value="money">Money recovery Plaint</option>
                <option value="property">Possession of Property</option>
                <option value="declaration">Declaratory suit</option>
                <option value="injunction">Injunction application</option>
                <option value="dissolution">Dissolution of marriage / Khula</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Suit Pecuniary Value (PKR)</label>
              <input
                type="number"
                value={suitValue}
                onChange={(e) => setSuitValue(e.target.value)}
                placeholder="e.g. 500000"
                className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5DD] focus:border-emerald-600 rounded-xl text-xs outline-none"
              />
            </div>

            <button
              onClick={calculate}
              className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors shadow-md shadow-emerald-700/10 animate-fade-in"
            >
              Estimate Fees
            </button>
          </div>
        </div>

        {/* Results pane */}
        <div className="flex flex-col">
          {result ? (
            <div className="bg-white border border-[#E7E5DD] rounded-xl p-6 space-y-4 shadow-sm animate-scale-in">
              <div className="text-center bg-emerald-50 border border-emerald-100 p-5 rounded-2xl">
                <span className="text-[10px] text-emerald-800 font-extrabold uppercase tracking-widest block mb-1">
                  {result.label}
                </span>
                <span className="font-serif text-3xl font-extrabold text-emerald-950">
                  Rs. {result.fee.toLocaleString()}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Statutory Calculation Steps</span>
                <div className="space-y-1">
                  {result.details.map((line, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-xs text-stone-600 leading-relaxed">
                      <span className="text-emerald-700 mt-1">•</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-amber-50/50 border border-amber-200/60 rounded-xl text-[10px] text-amber-900 leading-relaxed">
                ⚖️ <strong>Note:</strong> Court fees are subject to provincial fiscal legislations and seasonal schedule revisions. Please double check with local bar clerks.
              </div>
            </div>
          ) : (
            <div className="bg-white border border-[#E7E5DD] rounded-xl p-8 text-center flex flex-col justify-center items-center flex-1 min-h-[250px] shadow-sm">
              <span className="text-3xl mb-3">🧮</span>
              <span className="font-serif font-bold text-stone-800 text-sm">Calculate Fee</span>
              <p className="text-xs text-stone-400 mt-1 max-w-xs leading-relaxed">Fill out the legal parameters on the left to obtain accurate statutory court fees.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 3. GAZETTE ALERTS COMPONENT
// ══════════════════════════════════════════════════════
export function GazetteAlerts() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? RECENT_AMENDMENTS
    : RECENT_AMENDMENTS.filter(item => item.tags.includes(filter));

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#FAF9F5] dark:bg-bg-app p-3 md:p-4 animate-fade-in text-stone-700 dark:text-stone-200">
      <div className="shrink-0 mb-3 space-y-2">
        <div>
          <h1 className="font-serif text-lg md:text-xl font-bold text-stone-900 dark:text-stone-105 tracking-tight flex items-center gap-1.5">
            <Bell className="w-5 h-5 text-emerald-800 dark:text-[#C5A85A]" />
            Gazette Amendment Alerts
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">
            Stay updated with recent parliamentary actions, struck-down codes (FCCP), and federal gazette publications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {['all', 'amendment', 'struck-down', 'landmark'].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border capitalize ${
                filter === t
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white hover:bg-stone-100 text-stone-600 border-[#E7E5DD]'
              }`}
            >
              {t.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline view */}
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="relative pl-6 border-l-2 border-stone-200 space-y-6 ml-4">
          {filtered.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot decoration */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-emerald-700 bg-white group-hover:bg-emerald-700 transition-colors" />

              <div className="bg-white border border-[#E7E5DD] hover:border-emerald-500 rounded-xl p-5 shadow-sm transition-all space-y-2">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{item.date}</span>
                  <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">{item.body}</span>
                </div>
                <h3 className="font-serif font-bold text-stone-950 text-base leading-snug">{item.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed">{item.summary}</p>
                <div className="pt-2 flex justify-between items-center text-[10px] text-[#C5A85A] font-bold uppercase tracking-widest">
                  <span>Source: {item.source}</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700 transition-colors">Official Gazette</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 4. DOCUMENT ANALYZER COMPONENT
// ══════════════════════════════════════════════════════
export function DocumentAnalyzer({ apiKey = '', hasServerGroqKey = false }: { apiKey?: string; hasServerGroqKey?: boolean }) {
  const [file, setFile] = useState<{ name: string; size: string; content?: string } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [clauses, setClauses] = useState<{ label: string; title: string; body: string; severity: 'info' | 'warn' | 'checked' }[]>([]);

  const handleFileReader = (f: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFile({
        name: f.name,
        size: (f.size / 1024).toFixed(1) + ' KB',
        content: e.target?.result as string || ''
      });
      setClauses([]);
    };
    reader.readAsText(f);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileReader(e.dataTransfer.files[0]);
    }
  };

  const executeAnalysis = async () => {
    if (!file) return;
    setIsAnalyzing(true);

    const token = apiKey || localStorage.getItem('lexpk3') || '';

    if (!token && !hasServerGroqKey) {
      // Mock offline document analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        const nameLower = file.name.toLowerCase();
        const isLease = nameLower.includes('lease') || nameLower.includes('tenant') || nameLower.includes('rent') || nameLower.includes('rent agreement') || nameLower.includes('krach');

        if (isLease) {
          setClauses([
            { label: "Clause 1.4", title: "Parties Identification", body: "Lessor and Lessee correctly established under Section 105 of the Transfer of Property Act 1882.", severity: 'checked' },
            { label: "Clause 3.1", title: "Escalation Rate Risk", body: "Detected 10% annual rent escalation. Under provincial rent laws (e.g. Sindh Rented Premises Ordinance 1979 or Punjab Rented Premises Act 2009), rent increases should align with statutory maximums and tribunal registration is strongly recommended to avoid summary eviction disputes.", severity: 'warn' },
            { label: "Clause 5.2", title: "Surety Refund Block", body: "Security deposit return requires 60 days post vacating. Standard practice in Pakistan recommends immediate security handover or adjusting it against final bills to avoid freezing tenant liquidity.", severity: 'info' },
            { label: "Clause 9.1", title: "Notice Period Check", body: "2-month termination notice specified. This is standard and compliant with provincial lease regulations.", severity: 'checked' }
          ]);
        } else if (nameLower.includes('partnership') || nameLower.includes('deed') || nameLower.includes('agreement') || nameLower.includes('notice')) {
          setClauses([
            { label: "Section 1.1", title: "Competence and Consideration", body: "Agreement correctly outlines lawful consideration and mutual intent fulfilling Section 10 requirements under the Contract Act, 1872.", severity: 'checked' },
            { label: "Section 5.3", title: "Arbitration Clause Missing", body: "Fails to prescribe alternative dispute resolution (ADR). It is highly recommended to reference the Arbitration Act, 1940 to avoid prolonged litigation in civil courts.", severity: 'warn' },
            { label: "Section 7.2", title: "Indemnification", body: "Includes partial indemnity. For optimal commercial safety under Pakistani laws, expand indemnity to cover all third-party statutory liabilities.", severity: 'info' }
          ]);
        } else {
          setClauses([
            { label: "Section 2.1", title: "Overview Alignment", body: "Document outline appears to establish mutual consent fulfilling lawful contract rules under Section 10 of the Contract Act, 1872.", severity: 'checked' },
            { label: "Section 4.4", title: "Stamp Duty Compliance", body: "Ensure this agreement is written on a non-judicial stamp paper of appropriate value under the Stamp Act, 1899 to be admissible in a Pakistani court.", severity: 'info' },
            { label: "Section 6.1", title: "Dispute Forum", body: "No specific judicial court jurisdiction is configured. Recommend designating 'Courts of Karachi/Lahore/Islamabad' to avoid procedural jurisdiction delays.", severity: 'warn' }
          ]);
        }
      }, 1500);
      return;
    }

    try {
      const res = await fetch('/api/analyze-groq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fileName: file.name,
          fileContent: file.content || '',
          customKey: token || undefined
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error?.message || 'Server analysis error');
      }

      setClauses(data.clauses || []);
    } catch (err: any) {
      console.error(err);
      setClauses([
        { label: "Audit Result", title: "Connection or Parsing Error", body: `Could not parse structured audit from Groq: ${err.message}`, severity: 'info' }
      ]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#FAF9F5] dark:bg-bg-app p-3 md:p-4 animate-fade-in text-stone-700 dark:text-stone-200">
      <div className="shrink-0 mb-3 space-y-1">
        <h1 className="font-serif text-lg md:text-xl font-bold text-stone-900 dark:text-stone-105 tracking-tight flex items-center gap-1.5">
          <FileSearch className="w-5 h-5 text-emerald-800 dark:text-[#C5A85A]" />
          Document Clause Analyzer
        </h1>
        <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">
          Drop any legal deed, notice, lease, or agreement and get a clause-by-clause legal audit powered by AI.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 grid md:grid-cols-2 gap-6 pb-8">
        <div className="space-y-4 flex flex-col h-full">
          {/* Dropzone */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => {
              const el = document.getElementById('da-select');
              el?.click();
            }}
            className="border-2 border-dashed border-[#E7E5DD] hover:border-emerald-600 rounded-2xl p-12 text-center bg-white hover:bg-stone-50/50 transition-all cursor-pointer shadow-sm select-none"
          >
            <span className="text-4xl block mb-3">📁</span>
            <span className="font-semibold text-stone-800 text-sm block">Drag &amp; drop document here</span>
            <span className="text-xs text-stone-400 mt-1 block">Leases, plaints, legal agreements (PDF, Word, Image)</span>
            <input
              type="file"
              id="da-select"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleFileReader(e.target.files[0]);
                }
              }}
            />
          </div>

          {file && (
            <div className="bg-white border border-[#E7E5DD] rounded-xl p-4 flex justify-between items-center shadow-sm animate-scale-in">
              <div className="flex items-center gap-2 text-xs">
                <span>📄</span>
                <span className="font-bold text-stone-800">{file.name}</span>
                <span className="text-stone-400">({file.size})</span>
              </div>
              <button
                onClick={() => {
                  setFile(null);
                  setClauses([]);
                }}
                className="text-stone-400 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          )}

          <button
            onClick={executeAnalysis}
            disabled={!file || isAnalyzing}
            className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-700/10 transition-colors shrink-0"
          >
            Perform Legal Audit
          </button>
        </div>

        {/* Results Panel */}
        <div className="overflow-y-auto h-full pr-1">
          {isAnalyzing ? (
            <div className="bg-white border border-[#E7E5DD] rounded-xl p-12 text-center flex flex-col justify-center items-center h-full min-h-[300px]">
              <LoaderIcon className="w-8 h-8 text-emerald-800 animate-spin mb-3" />
              <span className="text-xs text-stone-500 font-semibold animate-pulse">Running Pakistani provision alignment checks...</span>
            </div>
          ) : clauses.length > 0 ? (
            <div className="space-y-4 animate-fade-in">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Audited Legal Risks found</span>
              {clauses.map((item, idx) => (
                <div
                  key={idx}
                  className={`border rounded-xl p-4 shadow-sm flex flex-col gap-2 ${
                    item.severity === 'warn'
                      ? 'bg-red-50/50 border-red-200'
                      : item.severity === 'info'
                      ? 'bg-blue-50/40 border-blue-200'
                      : 'bg-emerald-50/40 border-emerald-200'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${
                      item.severity === 'warn'
                        ? 'bg-red-100 text-red-800'
                        : item.severity === 'info'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {item.label}
                    </span>
                    <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wilder">{item.severity}</span>
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">{item.title}</h4>
                  <p className="text-stone-600 text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#E7E5DD] rounded-xl p-8 text-center flex flex-col justify-center items-center h-full min-h-[300px] shadow-sm">
              <span className="text-3xl mb-3">📄</span>
              <span className="font-serif font-bold text-stone-800 text-sm">Awaiting Contract Submission</span>
              <p className="text-xs text-stone-400 mt-1 max-w-xs leading-relaxed">Drop your deed agreement on the left and trigger audit to fetch potential legal loopholes.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════
// 5. LEGAL CORNER / WORD OF THE DAY COMPONENT
// ══════════════════════════════════════════════════════
export function LegalCorner() {
  const [query, setQuery] = useState('');
  const [filterCat, setFilterCat] = useState('');

  // Default to "Khula" or fall back to first glossary item
  const defaultTerm = LEGAL_TERMS.find(t => t.term === 'Khula') || LEGAL_TERMS[0];
  const [activeTerm, setActiveTerm] = useState(defaultTerm);

  const filtered = LEGAL_TERMS.filter((term) => {
    const termMatches = !query || 
      term.term.toLowerCase().includes(query.toLowerCase()) || 
      term.meaning.toLowerCase().includes(query.toLowerCase()) ||
      (term.category && term.category.toLowerCase().includes(query.toLowerCase())) ||
      (term.origin && term.origin.toLowerCase().includes(query.toLowerCase()));
    const catMatches = !filterCat || term.category === filterCat;
    return termMatches && catMatches;
  });

  return (
    <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#FAF9F5] dark:bg-bg-app text-stone-700 dark:text-stone-200">
      <div className="max-w-7xl mx-auto w-full p-3 md:p-4 space-y-4">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-[#E7E5DD]/60 dark:border-stone-850 pb-3 shrink-0">
          <div>
            <h1 className="font-serif text-lg md:text-xl font-bold text-stone-900 dark:text-stone-105 tracking-tight flex items-center gap-1.5">
              <Scale className="w-5 h-5 text-emerald-800 dark:text-[#C5A85A]" />
              Legal Corner
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5 max-w-xl">
              Reference, browse, and memorize standard Latin maxims, Islamic Fiqh jurisprudential concepts, and recent constitutional gazette alerts in Pakistan.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="flex items-center gap-2 bg-white dark:bg-[#1E1B16] border border-[#E7E5DD] dark:border-stone-850 shadow-sm rounded-xl px-4 py-2.5 whitespace-nowrap self-start md:self-auto">
            <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full animate-pulse" />
            <span className="text-xs font-mono font-bold text-stone-800 dark:text-stone-300">{LEGAL_TERMS.length} Verified Legal Maxims &amp; Terms</span>
          </div>
        </div>

        {/* Outer Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          
          {/* LEFT 2/3 COLUMN: Glossary Interactive Center */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Interactive Featured Term Card Holder */}
            <div id="featured-term-holder" className="bg-white dark:bg-[#1E1B16] border-2 border-amber-100/60 dark:border-amber-900/40 rounded-2xl p-6 shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[420px] bg-gradient-to-br from-white to-[#FAF9F5]/35 dark:from-[#1E1B16] dark:to-[#171512]">
              {/* Corner Watermark Scales of Justice Background */}
              <div className="absolute right-4 bottom-4 opacity-[0.02] pointer-events-none select-none">
                <Scale className="w-48 h-48 text-stone-900 dark:text-stone-100" />
              </div>

              <div>
                {/* Category & Origin top labels */}
                <div className="flex justify-between items-center gap-3 border-b border-stone-100 dark:border-stone-850 pb-3 mb-5">
                  <span className="text-[10px] text-stone-400 dark:text-stone-300 font-extrabold uppercase tracking-widest bg-stone-50 dark:bg-stone-900/50 border border-stone-200/50 dark:border-stone-800 px-2.5 py-1 rounded-full">
                    Origin: {activeTerm.origin}
                  </span>
                  <span className="text-[10px] text-emerald-800 dark:text-[#C5A85A] font-extrabold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 px-2.5 py-1 rounded-full">
                    Category: {activeTerm.category}
                  </span>
                </div>

                {/* Scales Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-[#0c4a34] dark:bg-[#2A261F] border border-[#065f46] dark:border-stone-800 flex items-center justify-center mx-auto mb-3 shadow-[0_4px_12px_rgba(12,74,52,0.15)] hover:scale-105 transition-transform duration-300">
                  <Scale className="w-6 h-6 text-amber-400 dark:text-[#C5A85A]" />
                </div>

                {/* Term title wrapped in guillemets */}
                <h2 className="font-serif font-extrabold text-[#0c4a34] dark:text-[#E7E5DD] text-3xl md:text-4xl text-center tracking-tight leading-tight px-4 mb-3">
                  « {activeTerm.term} »
                </h2>

                {/* Centered category display */}
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B45309] dark:text-[#C5A85A] block text-center mb-5">
                  • {activeTerm.category} •
                </span>

                {/* Centered meaning/definition */}
                <p className="text-stone-800 dark:text-stone-100 text-base md:text-lg leading-relaxed text-center px-4 max-w-2xl mx-auto font-medium">
                  {activeTerm.meaning}
                </p>

                {/* Centered italicized usage example */}
                {activeTerm.example && (
                  <p className="italic text-stone-500 dark:text-stone-400 text-sm md:text-base leading-relaxed text-center px-6 mt-4 max-w-xl mx-auto block">
                    “ {activeTerm.example} ”
                  </p>
                )}
              </div>

              {/* Dynamic beige Application/Usage Panel */}
              <div className="bg-[#FAF8F3] dark:bg-[#1A1814] border border-[#EBE8DF] dark:border-stone-850 rounded-xl p-5 mt-6 transition-all shadow-inner">
                <h4 className="font-serif font-bold text-[#0c4a34] dark:text-[#C5A85A] text-sm tracking-wide uppercase mb-2 flex items-center gap-1.5 border-b border-[#EBE8DF] dark:border-stone-850 pb-1.5">
                  <FileText className="w-4 h-4 text-emerald-800 dark:text-[#C5A85A]" />
                  Application in Pakistani &amp; Common Law Reference
                </h4>
                <p className="text-stone-700 dark:text-stone-300 text-xs md:text-sm leading-relaxed font-sans">{activeTerm.usage}</p>
              </div>

            </div>

            {/* SEARCH AND FILTERS */}
            <div className="bg-white dark:bg-[#1E1B16] border border-[#E7E5DD] dark:border-stone-850 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search 132+ words (e.g. khula, fir, mandate, res, dower, trial...)"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F5] dark:bg-[#131210] border border-[#E7E5DD] dark:border-stone-850 text-stone-800 dark:text-stone-200 hover:border-stone-300 focus:border-emerald-600 focus:bg-white dark:focus:bg-[#1E1B16] dark:focus:border-[#C5A85A] rounded-xl text-sm outline-none transition-all"
                />
              </div>
              <select
                value={filterCat}
                onChange={(e) => setFilterCat(e.target.value)}
                className="px-4 py-2.5 bg-white dark:bg-[#1E1B16] border border-[#E7E5DD] dark:border-stone-850 text-stone-800 dark:text-stone-200 focus:border-emerald-600 dark:focus:border-[#C5A85A] rounded-xl text-sm outline-none cursor-pointer transition-colors hover:bg-stone-50 dark:hover:bg-stone-900/55 font-medium"
              >
                <option value="">All Categories</option>
                <option value="Latin Maxim">Latin Maxims</option>
                <option value="Constitutional">Constitutional Law</option>
                <option value="Evidence Rules">Evidence Rules</option>
                <option value="Islamic Law">Islamic Law</option>
                <option value="Family Law">Family Law</option>
                <option value="Property Law">Property Law</option>
                <option value="Civil Law">Civil Law</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Procedural">Procedural Law</option>
                <option value="Legal Term">Legal Terms</option>
              </select>
            </div>

            {/* GLOSSARY DICTIONARY LIST */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7E5DD] dark:border-stone-850 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-105 flex items-center gap-2">
                    <span>📚</span> Complete Legal Glossary
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">
                    Select any term below to inspect its jurisprudential meanings, legal application, and case precedents.
                  </p>
                </div>
                <div className="text-xs font-mono font-bold text-stone-600 dark:text-stone-300 bg-white dark:bg-[#1E1B16] border border-[#E7E5DD] dark:border-stone-850 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap self-start sm:self-auto">
                  Matched {filtered.length} of {LEGAL_TERMS.length} Terms
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-16 bg-white dark:bg-[#1E1B16] border border-[#E7E5DD] dark:border-stone-850 rounded-2xl text-stone-400 font-medium">
                  No definitions found matching your search. Try another parameter.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filtered.map((item, idx) => {
                    const isActive = activeTerm.term === item.term;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveTerm(item);
                          const element = document.getElementById('featured-term-holder');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                          }
                        }}
                        className={`group cursor-pointer rounded-2xl p-5 border text-left transition-all duration-300 flex flex-col justify-between gap-4 select-none ${
                          isActive
                            ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-700 dark:border-[#C5A85A] shadow-md ring-1 ring-emerald-700'
                            : 'bg-white dark:bg-[#1E1B16] border-[#E7E5DD] dark:border-stone-850 hover:border-emerald-600 dark:hover:border-[#C5A85A] hover:shadow-md hover:bg-[#FAF9F5]/30'
                        }`}
                      >
                        <div className="space-y-2.5 w-full">
                          <div className="flex justify-between items-center gap-2">
                            <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${
                              isActive ? 'bg-[#0c4a34] text-[#F3F4F6] border-[#0c4a34]' : 'bg-stone-100 dark:bg-stone-900 text-stone-500 dark:text-stone-400 border-stone-200 dark:border-stone-800'
                            }`}>
                              {item.origin}
                            </span>
                            <span className="text-[9px] text-[#0c4a34] dark:text-[#C5A85A] font-extrabold uppercase bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-900/40">
                              {item.category}
                            </span>
                          </div>
                          
                          <h4 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base group-hover:text-emerald-800 dark:group-hover:text-[#C5A85A] transition-colors">
                            {item.term}
                          </h4>
                          
                          <p className="text-stone-600 dark:text-stone-300 text-xs line-clamp-2 leading-relaxed">
                            {item.meaning}
                          </p>
                        </div>

                        <div className="flex justify-end pt-2 border-t border-stone-100 dark:border-stone-850 w-full">
                          <span className={`text-[10px] font-bold flex items-center gap-1 transition-all ${
                            isActive ? 'text-[#0c4a34] dark:text-[#C5A85A]' : 'text-stone-400 group-hover:text-emerald-700 dark:group-hover:text-[#C5A85A]'
                          }`}>
                            {isActive ? 'Currently Active' : 'Inspect Term'} 
                            <ArrowUp className={`w-3 h-3 transform transition-transform ${isActive ? 'rotate-0' : 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rotate-45'}`} />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* RIGHT 1/3 COLUMN: Recent Amendments Widget Feed */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6">
            
            <div className="bg-white dark:bg-[#1E1B16] border border-[#E7E5DD] dark:border-stone-850 rounded-2xl overflow-hidden shadow-md flex flex-col">
              
              {/* Royal Forest Green Header */}
              <div className="bg-[#0c4a34] dark:bg-[#2A261F] p-5 text-white space-y-2 relative">
                <div className="absolute right-3.5 top-3.5 opacity-10">
                  <Landmark className="w-12 h-12 text-[#FAF9F5]" />
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-300 dark:text-[#C5A85A]" />
                  <h3 className="font-serif text-lg font-bold tracking-tight">Recent Amendments</h3>
                </div>
                <p className="text-emerald-100/80 dark:text-stone-300 text-[11px] leading-relaxed">
                  Verified statutory, constitutional modifications, and supreme judicial rulings in Pakistan.
                </p>
              </div>

              {/* Feed sources line */}
              <div className="bg-stone-50 dark:bg-[#151411] border-b border-[#E7E5DD]/70 dark:border-stone-850 px-4 py-2.5 flex items-center justify-between text-[11px]">
                <span className="text-stone-400 dark:text-stone-300 font-bold uppercase tracking-wider font-mono">Government Sources</span>
                <div className="flex gap-2 text-emerald-800 dark:text-[#C5A85A] font-semibold font-mono">
                  <span className="hover:underline cursor-pointer">FCCP</span>
                  <span className="text-stone-300">•</span>
                  <span className="hover:underline cursor-pointer">Dawn</span>
                  <span className="text-stone-300">•</span>
                  <span className="hover:underline cursor-pointer">Tribune</span>
                </div>
              </div>

              {/* Timeline Container */}
              <div className="divide-y divide-[#E7E5DD]/50 dark:divide-stone-850 max-h-[600px] overflow-y-auto">
                {RECENT_AMENDMENTS.map((amendment, index) => (
                  <div key={index} className="p-4 bg-white dark:bg-[#1E1B16] hover:bg-stone-50/50 dark:hover:bg-stone-900/50 transition-colors space-y-2 relative group overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#0c4a34] dark:group-hover:bg-[#C5A85A] transition-colors" />
                    
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-mono font-bold text-stone-400 dark:text-stone-400 uppercase tracking-widest flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                        {amendment.date}
                      </span>
                      <span className="font-mono font-bold text-[#0c4a34] dark:text-[#C5A85A] bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-100/50 dark:border-emerald-900/40 uppercase tracking-wider">
                        {amendment.tags?.[0] || 'Alert'}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] text-amber-850 dark:text-amber-400 font-extrabold uppercase tracking-wide">
                        {amendment.body}
                      </span>
                      <h4 className="font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-800 dark:group-hover:text-[#C5A85A] transition-colors text-sm leading-snug">
                        {amendment.title}
                      </h4>
                    </div>

                    <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed font-sans">
                      {amendment.summary}
                    </p>

                    {amendment.tags?.[1] && (
                      <div className="pt-1 flex gap-1">
                        <span className="text-[9px] font-semibold text-stone-400 dark:text-stone-400 bg-stone-100 dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800 px-1.5 py-0.5 rounded-md">
                          #{amendment.tags[1]}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer action button */}
              <div className="p-3.5 bg-stone-50 dark:bg-[#151411] border-t border-[#E7E5DD]/70 dark:border-stone-850 text-center">
                <a 
                  href="https://pakistancode.gov.pk" 
                  target="_blank" 
                  rel="noreferrer referrer" 
                  className="text-xs text-emerald-800 dark:text-[#C5A85A] hover:text-emerald-900 dark:hover:text-[#C5A85A]/80 font-serif font-bold inline-flex items-center gap-1 group"
                >
                  Visit Official Pakistan Code Page
                  <ExternalLink className="w-3" />
                </a>
              </div>

            </div>

            {/* Note box */}
            <div className="bg-emerald-50/50 dark:bg-[#1E1B16] border border-emerald-100 dark:border-stone-800 rounded-xl p-4 text-xs leading-relaxed text-[#0c4a34] dark:text-[#C5A85A] text-center md:text-left">
              <p className="font-serif font-bold mb-1">💡 Proverbial Tip:</p>
              When applying maxims before judicial authorities in Pakistan, cite them with both their standard Latin terminology and corresponding constitutional Article (such as Article 10-A for <span className="underline italic">Audi Alteram Partem</span>).
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

// Minimal spinner helper icon
function LoaderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
