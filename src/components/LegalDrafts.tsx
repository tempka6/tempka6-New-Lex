import React, { useState } from 'react';
import { DRAFT_TYPES } from '../data/legalData';
import { DraftType } from '../types';
import { FileCode, FileText, Check, Copy, Download, Trash2, ArrowRight, Loader2, Info } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface LegalDraftsProps {
  apiKey: string;
  hasServerGroqKey?: boolean;
}

export default function LegalDrafts({ apiKey, hasServerGroqKey = false }: LegalDraftsProps) {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<DraftType | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const categories = ['All', 'Criminal', 'Civil', 'Family', 'Property', 'Commercial', 'Employment', 'Banking', 'General'];

  const filteredTypes = selectedCat === 'All'
    ? DRAFT_TYPES
    : DRAFT_TYPES.filter(t => t.cat === selectedCat);

  const handleSelectType = (dt: DraftType) => {
    setSelectedType(dt);
    setFormValues({});
    setGeneratedText('');
  };

  const handleFieldChange = (idx: number, val: string) => {
    setFormValues(prev => ({
      ...prev,
      [idx]: val
    }));
  };

  const clearFields = () => {
    setFormValues({});
  };

  const handleGenerate = async () => {
    if (!selectedType) return;

    // Collate field responses
    const dArray = selectedType.fields.map((_, idx) => formValues[idx] || '[Not provided]');

    const userPrompt = selectedType.prompt(dArray);
    const systemPrompt = `You are a senior, highly accomplished Advocate of the High Court in Pakistan with 35 years of pleading experience.
    Draft a fully detailed, professional, court-ready legal petition/document tailored strictly to Pakistani jurisprudence and court practices (CPC, CrPC, etc.).
    Follow these structural rules:
    1. Begin with the formal court/tribunal header (In the Court of...) centering all layout.
    2. Explicitly outline parties (Plaintiff/Petitioner vs Respondent/Defendant) with address placeholders and CNIC markers.
    3. Use standard Urdu-hybrid colonial legal terms ("Respectfully Sheweth", "The Petitioner begs to submit...")
    4. Provide fully detailed, numbered facts and grounds (Grounds A, B, C...).
    5. Draft a thorough "PRAYER" or relief sought block.
    6. Include verification, jurat, signature blocks for Advocates, and placeholder lines for Sureties/Witnesses.
    Make sure the text has absolute clinical structure, zero commentary or notes, and is strictly ready to file. Do not include any disclaimer.`;

    setIsGenerating(true);
    setGeneratedText('');

    const token = apiKey || localStorage.getItem('lexpk3') || '';

    if (!token && !hasServerGroqKey) {
      setTimeout(() => {
        setIsGenerating(false);
        
        let draftText = ``;
        if (selectedType.id.includes('bail') || selectedType.name.toLowerCase().includes('bail')) {
          draftText = `IN THE COURT OF THE SESSIONS JUDGE, SINDH, AT KARACHI
         
Criminal Bail Application No. ______ of 2026

In the matter of:
${dArray[0] || '[Petitioner Name]'} s/o [Father's Name]
Resident of [Address] (bearing CNIC: ${dArray[1] || '[CNIC]'})
                                                  ...PETITIONER/ACCUSED
VERSUS
The State (through SHO Police Station ${dArray[2] || '[Police Station]'})
                                                  ...RESPONDENT

APPLICATION FOR BAIL UNDER SECTION 497/498 CrPC 1898

Respectfully Sheweth:

1. That the Petitioner is a law-abiding citizen of Pakistan and is being falsely implicated under Section ${dArray[3] || '379'} PPC registered on ${dArray[4] || '[Date]'}.
2. That the allegations inside the FIR are completely fabricated and motivated by bad-faith intent.
3. That there is no independent eyewitness corroboration of the alleged crime.
4. That the case against the Petitioner falls squarely within the category of further inquiry under Section 497(2) CrPC.
5. Primary Grounds: ${dArray[5] || 'No recovery shown, no previous criminal record.'}.
6. The petitioner is ready to submit adequate surety bond of PKR ${dArray[6] || '50,000'}.

PRAYER:
In light of the above, it is respectfully prayed that this Honorable Court may be pleased to grant bail to the Petitioner in the interest of justice.

Dated: ______________
Through: ________________________
Advocate High Court, Karachi.
`;
        } else if (selectedType.id.includes('rent') || selectedType.name.toLowerCase().includes('lease') || selectedType.name.toLowerCase().includes('rent')) {
          draftText = `RESIDENTIAL/COMMERCIAL LEASE DEED

This Deed of Lease is made on this ______ day of 2026, by and between:
1. Landlord: ${dArray[0] || '[Landlord Name]'}, bearing CNIC: ${dArray[1] || '[Landlord CNIC]'} (hereinafter called the "Lessor").
AND
2. Tenant: ${dArray[2] || '[Tenant Name]'}, bearing CNIC: ${dArray[3] || '[Tenant CNIC]'} (hereinafter called the "Lessee").

WHEREAS the Lessor is the absolute owner of Property: ${dArray[4] || '[Property Address]'}.

NOW THIS DEED WITNESSETH AS UNDER:
1. Term: The tenancy period shall be 11 months commencing from [Date].
2. Rent: The monthly rent shall be PKR ${dArray[5] || '[Rent Amount]'}, payable in advance by the 5th of each month.
3. Security Deposit: The Lessee has deposited ${dArray[6] || '[Security Deposit]'} as interest-free security.
4. Main Terms & Clauses: ${dArray[7] || 'All utilities shall be paid by Lessee.'}.

IN WITNESS WHEREOF, the parties hereto have signed this deed on the day and year first written above.

__________________                   __________________
LESSOR                               LESSEE

Witness 1: _________________         Witness 2: _________________
`;
        } else if (selectedType.id.includes('notice') || selectedType.name.toLowerCase().includes('notice')) {
          draftText = `LEGAL NOTICE

Date: ______________

To,
${dArray[0] || '[Recipient Name]'}
Address: ${dArray[1] || '[Recipient Address]'}
CNIC/Reg: ${dArray[2] || '[CNIC]'}

SUBJECT: LEGAL NOTICE FOR ${selectedType.name.toUpperCase()}

Under instructions from my client, ${dArray[3] || '[Client Name]'}, I do hereby serve you with the following legal notice:

1. That you entered into an agreement with my client relating to ${dArray[4] || '[Agreement Matter]'}.
2. That you committed a direct breach under the terms of the agreement on the date of ${dArray[5] || '[Breach Date]'}.
3. That my client has suffered considerable financial losses and mental harassment due to your default actions: ${dArray[6] || '[Default Description]'}.

THEREFORE, you are hereby called upon to comply with the terms or pay damages within 14 days from receipt of this notice, failing which my client has given me strict instructions to initiate legal proceedings against you in a court of competent jurisdiction under the Contract Act 1872 or Specific Relief Act 1877.

Yours sincerely,

________________________
Advocate High Court, Pakistan.
`;
        } else {
          // Generic fallback draft
          draftText = `FORMAL LEGAL DOCUMENT: ${selectedType.name.toUpperCase()}

In the matter of:
First Party: ${dArray[0] || '[First Party Names]'} (CNIC: ${dArray[1] || '[CNIC]'})
Second Party: ${dArray[2] || '[Second Party Names]'} (CNIC: ${dArray[3] || '[CNIC]'})

This document records the mutual covenants as follows:
1. Matter Details: ${dArray[4] || '[Matter details of the dispute/arrangement]'}.
2. Effective Date: ${dArray[5] || '[Effective Date / Date of execution]'}.
3. Core Terms/Pleading Grounds: ${dArray[6] || '[Primary legal grounds or statutory provisions]'}.
4. Financial Commitments / Consideration: ${dArray[7] || '[Fees, considerations, or values]'}.

PRAYER / MUTUAL AGREEMENT:
The parties hereto pray/agree that the covenants contained herein are lawful representations under Pakistani statutory procedures.

Dated: ______________
Through: ________________________
Advocate High Court, Pakistan.
`;
        }
        
        setGeneratedText(draftText);
      }, 1500);
      return;
    }

    try {
      const res = await fetch('/api/draft-groq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          systemPrompt,
          userPrompt,
          customKey: token || undefined
        })
      });

      const data = await res.json();
      setIsGenerating(false);

      if (!res.ok) {
        setGeneratedText(`Failed to generate draft: ${data?.error?.message || 'Error occurred during generation'}`);
      } else {
        const text = data.text || '';
        setGeneratedText(text);
      }
    } catch (err: any) {
      setIsGenerating(false);
      setGeneratedText(`Network error occurred: ${err.message}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    alert('Draft copied to clipboard.');
  };

  const handleDownloadPDF = () => {
    if (!selectedType || !generatedText) return;

    try {
      const doc = new jsPDF({ unit: 'mm', format: 'a4' });
      const pageW = doc.internal.pageSize.getWidth();
      const margin = 20;
      const maxW = pageW - margin * 2;
      let y = 30;

      // Header margin
      doc.setFillColor(26, 92, 56);
      doc.rect(0, 0, pageW, 18, 'F');
      
      doc.setTextColor(255, 255, 255);
      doc.setFont('Helvetica', 'Bold');
      doc.setFontSize(10);
      doc.text('LexPK — Pakistan Legal Intelligence', margin, 11);

      // Times New Roman for professional physical printed pleading feel
      doc.setTextColor(5, 5, 5);
      doc.setFont('times', 'bold');
      doc.setFontSize(13);
      doc.text(selectedType.name.toUpperCase(), pageW / 2, y, { align: 'center' });
      y += 8;

      doc.setDrawColor(200, 195, 175);
      doc.setLineWidth(0.4);
      doc.line(margin, y, pageW - margin, y);
      y += 10;

      doc.setFont('times', 'normal');
      doc.setFontSize(11);

      const paragraphs = generatedText.split('\n');
      paragraphs.forEach((para) => {
        if (!para.trim()) {
          y += 5;
          return;
        }

        const isCentered = para.trim().length < 55 && para.trim() === para.trim().toUpperCase();
        const isBold = para.trim().endsWith(':') || para.match(/^\d+\.\s/) || isCentered;

        if (isBold) {
          doc.setFont('times', 'bold');
        } else {
          doc.setFont('times', 'normal');
        }

        const splitParagraph = doc.splitTextToSize(para, maxW);
        splitParagraph.forEach((line: string) => {
          if (y > 270) {
            doc.addPage();
            y = 20;
          }

          if (isCentered) {
            doc.text(line, pageW / 2, y, { align: 'center' });
          } else {
            doc.text(line, margin, y);
          }
          y += 6.5;
        });
      });

      // Footer
      const totalPages = (doc as any).internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFont('Helvetica', 'Oblique');
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text('Drafted by LexPK AI. Legal vetting by licensed Advocate is recommended.', margin, 290);
        doc.text(`Page ${i} of ${totalPages}`, pageW - margin, 290, { align: 'right' });
      }

      const safeName = selectedType.name.replace(/[^a-zA-Z0-9]/g, '_');
      doc.save(`LexPK_Draft_${safeName}.pdf`);
    } catch (err: any) {
      alert('Failed to construct PDF: ' + err.message);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#FAF9F5] dark:bg-bg-app p-3 md:p-4 animate-fade-in text-stone-700 dark:text-stone-200">
      {/* Top section overview */}
      <div className="shrink-0 mb-3 space-y-2">
        <div>
          <h1 className="font-serif text-lg md:text-xl font-bold text-stone-900 dark:text-stone-105 tracking-tight flex items-center gap-1.5 animate-fade-in">
            <FileCode className="w-5 h-5 text-emerald-800 dark:text-[#C5A85A]" />
            Legal Drafts Generator
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">
            Build court petitions, plaints, agreements matching Pakistani civil and criminal laws.
          </p>
        </div>

        {/* Categories strip */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCat(cat);
                setSelectedType(null);
                setGeneratedText('');
              }}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all border ${
                selectedCat === cat
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                  : 'bg-white dark:bg-bg-card hover:bg-stone-50 text-stone-600 dark:text-stone-300 border-[#E7E5DD] dark:border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main split viewport */}
      <div className="flex-1 overflow-hidden grid md:grid-cols-12 gap-4">
        {/* Left Side: Choices */}
        <div className="md:col-span-5 flex flex-col gap-4 overflow-y-auto pr-1">
          {!selectedType ? (
            <div className="space-y-3">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block px-1">Select Document Template</span>
              <div className="grid gap-3">
                {filteredTypes.map((dt) => (
                  <button
                    key={dt.id}
                    onClick={() => handleSelectType(dt)}
                    className="w-full text-left p-4 bg-white hover:bg-stone-50 border border-[#E7E5DD] hover:border-emerald-600 rounded-xl transition-all flex gap-3 shadow-sm hover:shadow-md"
                  >
                    <span className="text-2xl self-start">{dt.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="font-serif font-bold text-stone-950 text-sm truncate">{dt.name}</span>
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border uppercase shrink-0 ${dt.badge}`}>
                          {dt.cat}
                        </span>
                      </div>
                      <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">{dt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-[#E7E5DD] rounded-xl p-5 space-y-4 shadow-sm animate-scale-in">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-950">{selectedType.icon} {selectedType.name}</h3>
                  <p className="text-stone-500 text-xs mt-1 leading-relaxed">{selectedType.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedType(null)}
                  className="text-xs text-stone-400 hover:text-stone-800 font-semibold underline"
                >
                  Change
                </button>
              </div>

              {/* Dynamic questionnaire fields */}
              <div className="space-y-3 pt-3 border-t border-stone-100">
                {selectedType.fields.map((field, fIdx) => {
                  const isLong = field.toLowerCase().includes('grounds') || field.toLowerCase().includes('detail') || field.toLowerCase().includes('fact') || field.toLowerCase().includes('condition');

                  return (
                    <div key={fIdx} className="space-y-1.5 flex flex-col">
                      <label className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">{field}</label>
                      {isLong ? (
                        <textarea
                          value={formValues[fIdx] || ''}
                          onChange={(e) => handleFieldChange(fIdx, e.target.value)}
                          placeholder={`Enter ${field.toLowerCase()} details...`}
                          rows={3}
                          className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5DD] focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors resize-none"
                        />
                      ) : (
                        <input
                          type="text"
                          value={formValues[fIdx] || ''}
                          onChange={(e) => handleFieldChange(fIdx, e.target.value)}
                          placeholder={`value...`}
                          className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5DD] focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Form buttons */}
              <div className="flex gap-2 pt-3 border-t border-stone-100 shrink-0">
                <button
                  onClick={clearFields}
                  className="flex-1 py-2.5 bg-stone-50 hover:bg-stone-100 border border-[#E7E5DD] text-stone-500 text-xs font-semibold rounded-lg transition-colors"
                >
                  Clear Fields
                </button>
                <button
                  onClick={handleGenerate}
                  className="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors shadow-md shadow-emerald-700/15"
                >
                  Generate Draft
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Output text panel */}
        <div className="md:col-span-7 bg-white border border-[#E7E5DD] rounded-xl flex flex-col overflow-hidden shadow-sm">
          {/* Header */}
          <div className="p-4 border-b border-[#E7E5DD] flex justify-between items-center bg-stone-50 shrink-0">
            <span className="text-[10px] text-stone-600 font-bold uppercase tracking-wider">Draft Output Preview</span>
            {generatedText && (
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="p-1 px-3 bg-white text-stone-600 hover:text-stone-900 text-xs font-semibold rounded border border-[#E7E5DD] flex items-center gap-1.5 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="p-1 px-3 bg-emerald-700 text-white rounded text-xs font-semibold flex items-center gap-1.5 hover:bg-emerald-800 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  PDF
                </button>
              </div>
            )}
          </div>

          {/* Text Area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#FAF6EE] relative flex flex-col justify-center min-h-[300px]">
            {isGenerating ? (
              <div className="text-center space-y-3 mx-auto">
                <Loader2 className="w-8 h-8 text-emerald-800 animate-spin mx-auto" />
                <span className="text-xs text-stone-500 font-semibold block animate-pulse">Engaging Pakistan Legal Draft Rules...</span>
              </div>
            ) : generatedText ? (
              <div className="font-serif text-stone-950 text-sm leading-relaxed whitespace-pre-wrap font-book h-full">
                {generatedText}
              </div>
            ) : (
              <div className="text-center space-y-4 max-w-sm mx-auto text-stone-400">
                <div className="text-3xl">📋</div>
                <div className="font-serif text-sm font-semibold text-stone-700">No Draft Prepared Yet</div>
                <p className="text-xs text-stone-400">Select a template on the left, fill out the questionnaire fields, and click generate.</p>
                {!apiKey && (
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-[10px] text-stone-500 font-medium flex items-center gap-2 text-left">
                    <Info className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Using default local drafter. Save your Groq API key in the topbar badge to activate Llama 3.3.</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
