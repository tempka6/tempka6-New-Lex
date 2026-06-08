import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, Video, MoreVertical, Send, CheckCheck, Paperclip, Mic, Image, 
  FileText, Play, Pause, ChevronRight, MessageSquare, Shield, Sparkles, 
  Search, Bot, ArrowRight, Upload, Download, Check
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  type: 'text' | 'voice' | 'file' | 'image';
  content: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
  fileName?: string;
  fileSize?: string;
  voiceDuration?: string;
  analysis?: string[];
  citations?: string[];
}

const PRESET_QUERIES = [
  {
    label: "📄 Send Tenancy Contract Photo",
    prompt: "I'm sending a picture of my residential tenancy contract. Can you check if the 10% annual rent increase clause complies with the Punjab Rented Premises Act 2009?",
    response: `*📄 Clause-by-Clause Contract Analysis*
Here is the legal evaluation of your uploaded tenancy agreement under the *Punjab Rented Premises Act, 2009*:

1. **RENT INCREASE CLAUSE (Section 6 & 22):**
   * *Status:* ⚠️ **Partially Compliant.**
   * *Analysis:* The contract specifies a 10% flat annual increase. Under Punjab law, the parties can mutually agree on any rate, but in the absence of a written agreed rate, the legal cap defaults to 10% after every year. Ensure this is explicitly registered under Section 5 with the Rent Registrar.

2. **SECURITY DEPOSIT / PAGRI (Section 12):**
   * *Status:* ✅ **Compliant.**
   * *Analysis:* The security deposit of 2 months' rent is valid and refundable upon vacation of the premises, subject to reasonable deductions for damages.

3. **EVICTION PROTOCOL (Section 15):**
   * *Status:* ❌ **Non-Compliant Clause Detected.**
   * *Analysis:* Clause 9 of your draft allows the landlord to evict you with only 15 days' notice. Under Section 15 of the Act, the landlord *must* file a proper eviction application through the Rent Tribunal; private forceful eviction is strictly illegal.

*Grounded Citations:*
* Section 5, 12, 15 & 22 of the *Punjab Rented Premises Act, 2009*
* *2024 CLC 492 (Lahore)* - Eviction protocols require adjudication, not unilateral notice.`
  },
  {
    label: "🎙️ Send Urdu Voice Note on Khula",
    prompt: "[Urdu Voice Note: 0:42] Assalam-o-Alaikum, meri behen khula lena chahti hain, unpe kafi tashadud hua hai. Meherban hoke batayen k court procedure me kitna waqt lagega aur meher (dower) wapis karna hoga?",
    response: `*🎙️ Urdu Voice Transcript to Cited Analysis*
*Voice Input:* "Assalam-o-Alaikum, meri behen khula lena chahti hain..."

Here is the step-by-step procedural guide under the *West Pakistan Family Courts Act, 1964*:

1. **EVIDENCE OF CRUELTY (Tashadud):**
   * *Analysis:* Since there is physical abuse, filing on grounds of cruelty under the *Dissolution of Muslim Marriages Act, 1939* means she **does not** have to return her prompt dower (Meher).

2. **THE MEHER (Dower Replacement):**
   * *Analysis:* If Khula is filed on basic incompatibility, she might have to surrender 25% to 50% of her deferred dower as per Supreme Court preceeding guidelines. In cases of physical violence, courts routinely waive dower return.

3. **TIMELINE TO RESOLUTION:**
   * *Analysis:* Family courts in Lahore/Karachi are legally mandated to decide Khula cases within *4 to 6 months* under the expedited family trial rules.

*Grounded Citations:*
* Section 2 of *Dissolution of Muslim Marriages Act, 1939*
* Section 10 & 12A of *West Pakistan Family Courts Act, 1964*
* *PLD 2023 SC 15* - Protection of female entitlements on judicial dissolution`
  },
  {
    label: "📨 Send FBR Active Tax Notice PDF",
    prompt: "I received a notice under Section 122(5A) of Income Tax Ordinance 2001 demanding additional commercial asset audits.",
    response: `*📨 Statutory Audit Response Plan*
We have analyzed the referenced *FBR Notice under Section 122(5A)* of the *Income Tax Ordinance, 2001*:

1. **VALIDITY OF THE NOTICE:**
   * *Analysis:* An amendment of assessment under 122(5A) can only be conducted by an Inland Revenue Commissioner if they find the previous assessment "erroneous and prejudicial to the interest of revenue" based on concrete record.

2. **LIMITATION PERIOD (Section 122):**
   * *Analysis:* Ensure the notice is served within *5 years* from the end of the financial year in which the original assessment was filed. Any notice beyond 5 years is barred by limitation and void ab-initio.

3. **RECOMMENDED NEXT ACTION:**
   * Prepare a detailed reconciliation of bank accounts matching your wealth statements.
   * File a formal reply within 15 days to avoid ex-parte statutory revision default.

*Grounded Citations:*
* Section 122(5A) & 122(9) of the *Income Tax Ordinance, 2001*
* *2025 PTD 110 (High Court Sindh)* - Limitation periods on asset reassessments`
  }
];

export default function WhatsAppBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      type: 'text',
      content: `👋 *Assalam-o-Alaikum! Welcome to LexPK's Official Legal Assistant.*\n\nI am connected directly with Pakistan's federal statutes and court gazettes. \n\n*How this works on WhatsApp:* \n1. **Send plain queries** or **Urdu voice notes**\n2. **Snap a photo** of any contract/deed\n3. **Forward PDFs** of court appeals or notices\n\nI will instantly analyze and reply with deep **clause-by-clause cited analysis** under 30 seconds! Try clicking any simulation preset below or typing your query to see it in action.`,
      timestamp: '12:00 PM',
      status: 'read'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [voiceActive, setVoiceActive] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string, type: 'text' | 'voice' | 'file' = 'text', customFileName?: string) => {
    if (!text.trim() && !customFileName) return;

    const timeString = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      type: type === 'voice' ? 'voice' : type === 'file' ? 'file' : 'text',
      content: text,
      timestamp: timeString,
      fileName: customFileName,
      voiceDuration: type === 'voice' ? '0:42' : undefined,
      status: 'read'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setFileName(null);
    setIsTyping(true);

    // Look for matching response from presets or use general legal response generator
    setTimeout(() => {
      let botResponse = '';
      const lowerText = text.toLowerCase();

      // Check if it matches a preset
      const matchedPreset = PRESET_QUERIES.find(p => p.prompt.toLowerCase().includes(lowerText) || lowerText.includes(p.prompt.toLowerCase()));
      
      if (matchedPreset) {
        botResponse = matchedPreset.response;
      } else if (type === 'file') {
        botResponse = `*📄 Uploaded File Analysis*
I have reviewed your file **"${customFileName}"**:

1. **DOCUMENT TYPE CLASSIFICATION:**
   * *Status:* ✅ Identified.
   * *Analysis:* This matches standard Pakistani legal formats. Our parsing engine processed the text against Lahore and Sindh High Court precedents.

2. **COMPLIANCE AUDIT:**
   * *Status:* ⚠️ Caution Needed.
   * *Analysis:* Ensure stamp charges comply with Article 15 of the Stamp Act, 1899. If this is a litigation notice, you have exactly 15 days to reply.

*Grounded Citations:*
* Section 2 & 15 of the *Stamp Act, 1899*
* Consultation with high court bar registers recommended.`;
      } else {
        botResponse = `*⚖️ LexPK Instant Legal Analysis*
Assalamu Alaikum. Thank you for reaching out via our direct messaging endpoint. Based on Pakistani Jurisprudence:

1. **STATUTORY DIRECTIVE:**
   * *Analysis:* Your request regarding "${text}" centers on civil right protections under federal administrative codes.

2. **CITATIONS & REMEDIES:**
   * *Analysis:* You can file an appeal or representation with the relevant district court or judicial Ombudsman within the authorized limitation window.

*Grounded Citations:*
* Section 9 of the *Code of Civil Procedure, 1908* (CPC)
* Article 199 of the *Constitution of Pakistan, 1973* (Writ Jurisdiction for swift relief)`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          type: 'text',
          content: botResponse,
          timestamp: new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          }),
          status: 'read'
        }
      ]);
      setIsTyping(false);
    }, 2000);
  };

  const handlePresetClick = (preset: typeof PRESET_QUERIES[0]) => {
    const isFilePreset = preset.label.includes('📄') || preset.label.includes('📨');
    const isVoicePreset = preset.label.includes('🎙️');
    
    handleSendMessage(
      preset.prompt, 
      isVoicePreset ? 'voice' : isFilePreset ? 'file' : 'text',
      isFilePreset ? (preset.label.includes('Tenancy') ? 'Tenancy_Deed_Draft.jpg' : 'FBR_Notice_Section_122.pdf') : undefined
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFileName(file.name);
      handleSendMessage(`I have uploaded a document: ${file.name}`, 'file', file.name);
    }
  };

  const startVoiceRecording = () => {
    setVoiceActive(true);
    let sec = 0;
    // Simulate recording voice note
    const t = window.setInterval(() => {
      sec++;
    }, 1000);
    setTimer(t);
  };

  const stopVoiceRecording = () => {
    setVoiceActive(false);
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
    handleSendMessage("[Urdu Voice Note: 0:12] Please analyze my tenancy notice", 'voice');
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden bg-stone-100">
      
      {/* Left side: Information and QR code */}
      <div className="w-full md:w-[380px] bg-white border-r border-[#E7E5DD] flex flex-col p-6 overflow-y-auto shrink-0 select-none">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">
            Mass Market Tech
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-stone-500 font-medium">Live Server</span>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl font-black text-stone-900 leading-tight mb-2">
          LexPK WhatsApp <br />
          <span className="text-emerald-700 italic font-medium font-serif">Legal Bot Vakeel</span>
        </h2>
        
        <p className="text-xs text-stone-600 leading-relaxed font-light mb-6">
          Pakistani citizens and junior lawyers spend **90% of their digital time** on WhatsApp. Unlike empty redirect links, LexPK provides a fully compliant sandbox of our **Automated WhatsApp Legal Intel Engine**.
        </p>

        {/* Benefits Cards */}
        <div className="space-y-3 mb-6">
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 flex items-start gap-2.5">
            <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center shrink-0">
              <Shield className="w-3.5 h-3.5 text-emerald-700" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-stone-900 uppercase">Under 30-Sec Response</h4>
              <p className="text-[10px] text-stone-500 font-light leading-relaxed">No app downloads, no accounts, no friction. Instant clause-by-clause statutory citations.</p>
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 flex items-start gap-2.5">
            <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-stone-900 uppercase">Multilingual NLP</h4>
              <p className="text-[10px] text-stone-500 font-light leading-relaxed">Accepts Urdu Urdu Script, Romanized Urdu (Hamaray laws kiya hain), and standard English.</p>
            </div>
          </div>
        </div>

        {/* Real Live QR Code Action */}
        <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-center space-y-3">
          <div className="font-bold text-xs text-emerald-900">Scan to Connect Live Bot</div>
          <div className="mx-auto w-32 h-32 bg-white rounded-lg p-2 border border-emerald-200/60 flex items-center justify-center relative shadow-sm">
            {/* Mock QR Code Pattern */}
            <div className="w-full h-full bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:8px_8px] opacity-70 flex flex-wrap justify-between p-2">
              <div className="w-5 h-5 border-4 border-emerald-900" />
              <div className="w-5 h-5 border-4 border-emerald-900" />
              <div className="w-5 h-5 border-4 border-emerald-900" />
              <div className="w-12 h-12 bg-emerald-950 absolute top-1/2 left-1/2 -ml-6 -mt-6 rounded-md flex items-center justify-center text-white text-[8px] font-black">
                LEXPK
              </div>
            </div>
          </div>
          <div>
            <span className="text-[11px] font-mono select-all text-emerald-800 font-black block">+92 300 539 8255</span>
            <span className="text-[9px] text-stone-400 font-medium block mt-0.5">Official Federal Registry Bot</span>
          </div>
          <a 
            href="https://wa.me/923005398255?text=Assalam-o-Alaikum%20LexPK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-4 py-2 rounded-lg transition-all w-full justify-center shadow-md shadow-emerald-950/20"
          >
            Open Live WhatsApp
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Right side: Interactive Mock Simulator (Designed as WhatsApp Web) */}
      <div className="flex-1 flex flex-col h-full bg-[#E5DDD5] relative">
        
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white px-4 py-3 flex justify-between items-center z-10 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-emerald-100 relative">
              <Bot className="w-5 h-5 text-white" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#075E54]" />
            </div>
            <div>
              <div className="font-serif font-black text-sm">LexPK AI Vakeel Bot</div>
              <div className="text-[10px] text-emerald-250 font-medium">Official Business Account • Online</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-emerald-100/80">
            <Video className="w-4 h-4 cursor-pointer hover:text-white" />
            <Phone className="w-4 h-4 cursor-pointer hover:text-white" />
            <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* WhatsApp Message Logs Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 [background-image:url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
          {messages.map((m) => {
            const isBot = m.sender === 'bot';
            return (
              <div 
                key={m.id}
                className={`flex w-full ${isBot ? 'justify-start' : 'justify-end'}`}
              >
                {/* Chat Bubble */}
                <div className={`max-w-[85%] rounded-lg p-3 shadow-sm relative ${
                  isBot 
                    ? 'bg-white text-stone-900 rounded-tl-none border-l-4 border-emerald-600' 
                    : 'bg-[#DCF8C6] text-stone-900 rounded-tr-none'
                }`}>
                  
                  {/* Handle Voice Message Type */}
                  {m.type === 'voice' ? (
                    <div className="flex items-center gap-3 py-1">
                      <div className="w-10 h-10 rounded-full bg-emerald-200/50 flex items-center justify-center shrink-0">
                        <Play className="w-4 h-4 text-emerald-800" />
                      </div>
                      <div className="flex-1 min-w-[120px]">
                        <div className="h-1 bg-stone-300 rounded relative">
                          <div className="absolute top-0 left-0 w-1/3 h-full bg-emerald-600 rounded" />
                        </div>
                        <div className="flex justify-between items-center mt-1 text-[8px] text-stone-400">
                          <span>{m.voiceDuration}</span>
                          <span>Voice Note (Urdu)</span>
                        </div>
                      </div>
                    </div>
                  ) : m.type === 'file' ? (
                    <div className="flex items-center gap-3 bg-emerald-50 p-2 rounded-md border border-emerald-150 mb-1.5 select-all">
                      <FileText className="w-6 h-6 text-emerald-800" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-stone-900 truncate">{m.fileName}</div>
                        <div className="text-[9px] text-[#C5A85A] font-extrabold font-mono">LEXPK INTERACTIVE AUDIT ACTIVE</div>
                      </div>
                    </div>
                  ) : null}

                  {/* Text Content */}
                  {m.content && (
                    <div className="text-xs leading-relaxed whitespace-pre-wrap font-light select-text">
                      {/* Convert standard Markdown stars inside whatsapp to raw Bold text */}
                      {m.content.split('\n').map((line, idx) => {
                        // Regex search to replace markdown '*' with bold tag
                        const parts = line.split('**');
                        const updatedLine = parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-extrabold text-stone-950">{part}</strong> : part);
                        
                        // Handle standalone titles with asterisks like *📄 Clause..*
                        const finalLine = updatedLine.map((el) => {
                          if (typeof el === 'string' && el.startsWith('*') && el.endsWith('*')) {
                            return <strong key={idx} className="font-bold text-stone-950">{el.slice(1, -1)}</strong>;
                          }
                          return el;
                        });

                        return (
                          <p key={idx} className="mb-1">
                            {finalLine}
                          </p>
                        );
                      })}
                    </div>
                  )}

                  {/* Time and Ticks */}
                  <div className="text-[9px] text-stone-400 font-medium flex justify-end items-center gap-1 mt-1">
                    <span>{m.timestamp}</span>
                    {!isBot && (
                      <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                    )}
                  </div>

                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex w-full justify-start">
              <div className="bg-white text-stone-800 rounded-lg rounded-tl-none p-3 shadow-xs flex items-center gap-1.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                <span className="text-[10px] text-stone-400 font-bold ml-1 uppercase">Vakeel Bot is analyzing provisions...</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Floating Quick Simulator Preset triggers */}
        <div className="bg-stone-50/90 border-t border-stone-205 p-3 flex flex-wrap gap-2 justify-center z-10">
          <span className="text-[9px] text-stone-400 font-bold uppercase tracking-wider block w-full text-center mb-1">
            ⚡ CLICK A PRESET TO SIMULATE COMPREHENSIVE BOT AUDITS
          </span>
          {PRESET_QUERIES.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handlePresetClick(p)}
              disabled={isTyping}
              className="px-3 py-1.5 bg-white border border-stone-300 hover:border-emerald-600 rounded-full text-[10px] font-bold text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 transition-all shadow-xs"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Input send tray */}
        <div className="bg-[#EFEEE9] px-4 py-3 flex items-center gap-3 shrink-0 z-10 border-t border-stone-250 select-none">
          <div className="flex items-center gap-2.5 text-stone-550">
            <label className="cursor-pointer hover:text-emerald-700">
              <Paperclip className="w-5 h-5" />
              <input 
                type="file" 
                className="hidden" 
                onChange={handleFileUpload} 
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </label>
          </div>

          <div className="flex-1 relative">
            <input 
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage(inputText);
              }}
              placeholder={fileName ? `Attached Document: ${fileName}` : "Type legal query or paste clauses..."}
              className="w-full bg-white text-stone-800 text-xs px-4 py-2.5 rounded-full border border-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-transparent placeholder-stone-400 shadow-sm"
              disabled={isTyping}
            />
          </div>

          <div className="text-stone-550 flex items-center justify-center shrink-0">
            {inputText.trim() || fileName ? (
              <button 
                onClick={() => handleSendMessage(inputText)}
                className="w-9 h-9 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            ) : (
              <button 
                onMouseDown={startVoiceRecording}
                onMouseUp={stopVoiceRecording}
                onTouchStart={startVoiceRecording}
                onTouchEnd={stopVoiceRecording}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-sm ${
                  voiceActive 
                    ? 'bg-red-500 text-white animate-pulse scale-110' 
                    : 'bg-emerald-850 text-white hover:bg-emerald-900'
                }`}
                title="Hold down to record simulated Voice Note"
              >
                <Mic className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
