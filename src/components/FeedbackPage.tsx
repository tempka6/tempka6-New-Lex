import React, { useState, useEffect } from 'react';
import { LocalReview } from '../types';
import { Star, MessageSquareCode, Mail, Clock, Send, Lightbulb, Users, Calendar } from 'lucide-react';
import { db, handleFirestoreError, OperationType, auth, googleProvider, signInWithPopup } from '../firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { User } from 'firebase/auth';

interface FeedbackPageProps {
  currentUser: User | null;
}

export default function FeedbackPage({ currentUser }: FeedbackPageProps) {
  const [reviews, setReviews] = useState<LocalReview[]>([]);
  const [revName, setRevName] = useState('');
  const [revType, setRevType] = useState('General Review');
  const [revText, setRevText] = useState('');
  const [selectedStar, setSelectedStar] = useState(0);

  const [quickMsg, setQuickMsg] = useState('');
  const [suggTitle, setSuggTitle] = useState('');
  const [suggDetail, setSuggDetail] = useState('');

  useEffect(() => {
    // 1. Initial fallbacks from local storage
    const list = JSON.parse(localStorage.getItem('lexpk_reviews') || '[]');
    setReviews(list);

    // 2. Realtime listener inside feedback collection
    const feedbackRef = collection(db, 'feedback');
    const q = query(feedbackRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveReviews: LocalReview[] = [];
      snapshot.forEach((docSnap) => {
        const item = docSnap.data();
        if (item.name && item.stars) {
          liveReviews.push({
            name: item.name,
            stars: item.stars,
            type: item.type || 'General Review',
            text: item.text || '',
            date: item.date || ''
          });
        }
      });
      if (liveReviews.length > 0) {
        setReviews(liveReviews);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'feedback');
    });

    return () => unsubscribe();
  }, []);

  const submitReview = async () => {
    if (!revText.trim()) {
      alert('Please fill out the review body.');
      return;
    }
    if (selectedStar === 0) {
      alert('Please select a star rating.');
      return;
    }

    if (!currentUser) {
      alert('Please sign in or connect your Google Account to submit a public review.');
      return;
    }

    try {
      const nameToPost = revName.trim() || currentUser.displayName || 'Authorized User';
      const feedbackRef = collection(db, 'feedback');
      await addDoc(feedbackRef, {
        name: nameToPost,
        stars: selectedStar,
        type: revType,
        text: revText.trim(),
        date: new Date().toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' }),
        userId: currentUser.uid,
        createdAt: serverTimestamp()
      });

      // Reset fields
      setRevName('');
      setRevText('');
      setRevType('General Review');
      setSelectedStar(0);
      alert('Thank you! Your feedback has been stored and posted on our global auditing wall.');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'feedback');
    }
  };

  const handleSendQuickMsg = () => {
    if (!quickMsg.trim()) {
      alert('Please enter a message first.');
      return;
    }
    window.location.href = `mailto:lexpk.ai@gmail.com?subject=LexPK Quick Note&body=${encodeURIComponent(quickMsg)}`;
    setQuickMsg('');
  };

  const handleSendSuggestion = () => {
    if (!suggTitle.trim() || !suggDetail.trim()) {
      alert('Please fill out both the title and details of the suggestion.');
      return;
    }
    window.location.href = `mailto:lexpk.ai@gmail.com?subject=LexPK Proposal: ${encodeURIComponent(suggTitle)}&body=${encodeURIComponent(suggDetail)}`;
    setSuggTitle('');
    setSuggDetail('');
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#FAF9F5] dark:bg-bg-app p-3 md:p-4 animate-fade-in text-stone-700 dark:text-stone-200">
      <div className="shrink-0 mb-3 space-y-1">
        <h1 className="font-serif text-lg md:text-xl font-bold text-stone-900 dark:text-stone-105 tracking-tight flex items-center gap-1.5 leading-tight">
          <MessageSquareCode className="w-5 h-5 text-emerald-800 dark:text-[#C5A85A]" />
          Feedback &amp; Corrections
        </h1>
        <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">
          LexPK is a community-driven initiative. Submit general reviews, recommend improvements, or flag citation mismatches.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 grid md:grid-cols-12 gap-4 pb-4">
        {/* Left Form Panel */}
        <div className="md:col-span-4 space-y-4">
          <div className="bg-white border border-[#E7E5DD] rounded-xl p-5 space-y-4 shadow-sm">
            <h2 className="font-serif text-lg font-bold text-stone-950">Add a Public Review</h2>

            {!currentUser && (
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[10.5px] text-amber-800 leading-snug">
                ⚠️ You are in read-only guest mode. Post reviews by connecting your Google Account in the sidebar or clicking connect below.
                <button
                  onClick={async () => {
                    try {
                      await signInWithPopup(auth, googleProvider);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  className="mt-1.5 w-full py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded cursor-pointer border-0 text-[10px]"
                >
                  Connect Google Account
                </button>
              </div>
            )}

            {/* Stars rendering */}
            <div className="space-y-1">
              <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Rating</label>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => setSelectedStar(val)}
                    className="p-1 rounded hover:bg-stone-50 transition-colors"
                  >
                    <Star
                      className={`w-5 h-5 transition-all ${
                        val <= selectedStar ? 'text-amber-500 fill-amber-500' : 'text-stone-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Name (Optional)</label>
                <input
                  type="text"
                  value={revName}
                  onChange={(e) => setRevName(e.target.value)}
                  placeholder="e.g. Adv. Muhammad"
                  className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5DD] focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Review Category</label>
                <select
                  value={revType}
                  onChange={(e) => setRevType(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#FAF9F5] border border-[#E7E5DD] focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors cursor-pointer"
                >
                  <option value="General Review">General Review</option>
                  <option value="AI Accuracy Issue">AI Accuracy Issue</option>
                  <option value="Wrong Citation/Provision">Wrong Citation/Provision</option>
                  <option value="Feature Proposal">Feature Proposal</option>
                  <option value="Design Feedback">Design/UI Feedback</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Your Comments</label>
                <textarea
                  value={revText}
                  onChange={(e) => setRevText(e.target.value)}
                  placeholder="Draft your honest review or citation report here..."
                  rows={4}
                  className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5DD] focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors resize-none"
                />
              </div>

              <button
                onClick={submitReview}
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors shadow-md shadow-emerald-700/10"
              >
                Post Review
              </button>
            </div>
          </div>

          {/* Quick Mail Card */}
          <div className="bg-white border border-[#E7E5DD] rounded-xl p-5 space-y-4 shadow-sm">
            <h3 className="font-serif text-base font-bold text-stone-950 flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-800" />
              Direct Support
            </h3>
            <div className="space-y-1.5">
              <div className="flex gap-2 text-stone-500 text-xs">
                <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Enquiries answered within 24-48 hours.</span>
              </div>
            </div>
            <textarea
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              placeholder="Send quick feedback note..."
              rows={2}
              className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5DD] focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors resize-none"
            />
            <button
              onClick={handleSendQuickMsg}
              className="w-full py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 border border-[#E7E5DD] hover:text-stone-900 text-xs font-semibold rounded-lg transition-colors"
            >
              Email us
            </button>
          </div>
        </div>

        {/* Central & Right Columns */}
        <div className="md:col-span-8 flex flex-col gap-6">
          {/* Suggest improvement */}
          <div className="bg-white border border-[#E7E5DD] rounded-xl p-5 space-y-4 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-stone-950 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Suggest a Platform Improvement
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={suggTitle}
                onChange={(e) => setSuggTitle(e.target.value)}
                placeholder="Feature Title (e.g. Voice Search in Urdu)"
                className="w-full px-3 py-2.5 bg-[#FAF9F5] border border-[#E7E5DD] focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors"
              />
              <button
                onClick={handleSendSuggestion}
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors shadow-md shadow-emerald-700/10"
              >
                Send Proposal
              </button>
            </div>
            <textarea
              value={suggDetail}
              onChange={(e) => setSuggDetail(e.target.value)}
              placeholder="Describe your proposal in full detail — how should it work, and what legal problem does it solve for Pakistan's legal community?"
              rows={3}
              className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5DD] focus:border-emerald-600 rounded-lg text-xs outline-none transition-colors resize-none"
            />
          </div>

          {/* Review Wall */}
          <div className="bg-white border border-[#E7E5DD] rounded-xl p-5 space-y-4 flex-1 flex flex-col shadow-sm">
            <div className="flex border-b border-stone-100 pb-3 justify-between items-center bg-stone-50/50 p-2 rounded-lg">
              <span className="font-serif font-bold text-stone-900 text-sm">Community Auditing Wall</span>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{reviews.length} total reviews</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 max-h-[360px] pr-1 scrollbar-thin">
              {reviews.length === 0 ? (
                <div className="text-center py-12 text-stone-400 text-sm italic">
                  No public reviews posted yet — be the first to leave one on the left.
                </div>
              ) : (
                reviews.map((r, rIdx) => (
                  <div key={rIdx} className="p-4 bg-[#FAF9F5] border border-[#E7E5DD] rounded-xl space-y-2 text-xs transition-colors hover:border-[#FAF9F5]">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="font-semibold text-stone-900 text-sm">{r.name}</span>
                        <span className="text-[10px] text-stone-400 font-bold bg-stone-100 px-2 py-0.5 rounded border border-[#E7E5DD]/30 ml-2 uppercase">
                          {r.type}
                        </span>
                      </div>
                      <div className="text-[#C5A85A] text-xs">
                        {'★'.repeat(r.stars)}
                        <span className="text-stone-200">{'★'.repeat(5 - r.stars)}</span>
                      </div>
                    </div>
                    <p className="text-stone-700 leading-relaxed font-medium">{r.text}</p>
                    <div className="text-[9px] text-stone-400 font-bold flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{r.date}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
