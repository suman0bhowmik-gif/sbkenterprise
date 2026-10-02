import React, { useState } from 'react';
import { Star, CheckCircle2, ThumbsUp, MessageSquarePlus, X } from 'lucide-react';
import { GOOGLE_REVIEWS, BUSINESS_INFO } from '../data/designs';

export const GoogleReviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState(GOOGLE_REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    text: '',
    service: 'Custom Picture Framing',
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handlePostReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const colors = ['bg-blue-600', 'bg-emerald-600', 'bg-purple-600', 'bg-amber-600', 'bg-rose-600'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const created = {
      id: `rev-${Date.now()}`,
      author: newReview.name,
      rating: newReview.rating,
      relativeTime: 'Just now',
      text: newReview.text,
      verified: true,
      service: newReview.service,
      avatarLetter: newReview.name.charAt(0).toUpperCase(),
      avatarColor: randomColor,
    };

    setReviewsList([created, ...reviewsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowReviewModal(false);
      setNewReview({ name: '', rating: 5, text: '', service: 'Custom Picture Framing' });
    }, 2000);
  };

  return (
    <section id="reviews" className="py-16 bg-white border-b border-[#dadce0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1a73e8] uppercase tracking-wide mb-1">
              <Star className="w-3.5 h-3.5 fill-[#f29900] text-[#f29900]" />
              <span>Google Business Reviews</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#202124]">
              Customer Experiences & Reviews
            </h2>
            <p className="mt-1 text-sm text-[#5f6368]">
              Real feedback from homes, artists, and families across Agartala and West Tripura.
            </p>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#dadce0] hover:bg-[#f1f3f4] text-xs font-semibold text-[#1a73e8] transition-colors cursor-pointer self-start md:self-auto"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Rating Overview Card */}
        <div className="bg-[#f8fafd] rounded-2xl border border-[#dadce0] p-6 mb-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Big Score Box */}
          <div className="md:col-span-4 text-center md:text-left md:border-r border-[#dadce0] md:pr-8">
            <div className="flex items-baseline justify-center md:justify-start gap-2">
              <span className="text-5xl font-extrabold text-[#202124] tabular-nums">4.9</span>
              <span className="text-base text-[#5f6368]">/ 5</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 my-2 text-[#f29900]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="text-xs text-[#5f6368]">
              Based on <strong className="text-[#202124]">184 verified reviews</strong> on Google
            </div>
          </div>

          {/* Star Bar Breakdown */}
          <div className="md:col-span-8 space-y-1.5 text-xs text-[#5f6368]">
            <div className="flex items-center gap-3">
              <span className="w-12 text-right font-medium">5 stars</span>
              <div className="flex-1 h-2 rounded-full bg-[#e8eaed] overflow-hidden">
                <div className="h-full bg-[#f29900] rounded-full w-[94%]" />
              </div>
              <span className="w-10 text-right tabular-nums">94%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-right font-medium">4 stars</span>
              <div className="flex-1 h-2 rounded-full bg-[#e8eaed] overflow-hidden">
                <div className="h-full bg-[#f29900] rounded-full w-[6%]" />
              </div>
              <span className="w-10 text-right tabular-nums">6%</span>
            </div>
            <div className="flex items-center gap-3 text-[#bdc1c6]">
              <span className="w-12 text-right">3 stars</span>
              <div className="flex-1 h-2 rounded-full bg-[#e8eaed] overflow-hidden">
                <div className="h-full bg-[#f29900] rounded-full w-[0%]" />
              </div>
              <span className="w-10 text-right tabular-nums">0%</span>
            </div>
          </div>

        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-[#dadce0] p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full ${rev.avatarColor} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      {rev.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#202124] text-xs sm:text-sm">
                        {rev.author}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#5f6368]">
                        <span>{rev.relativeTime}</span>
                        {rev.verified && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#188038] flex items-center gap-0.5 font-medium">
                              <CheckCircle2 className="w-3 h-3" /> Verified Customer
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-[#f29900]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#3c4043] leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f1f3f4] flex items-center justify-between text-xs text-[#5f6368]">
                <span className="text-[11px] font-medium text-[#1a73e8]">
                  Service: {rev.service}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#80868b]">
                  <ThumbsUp className="w-3 h-3" /> Helpful
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-[#dadce0] max-w-md w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#dadce0]">
              <h3 className="font-bold text-[#202124] text-base">
                Write a Google Review
              </h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1 text-[#5f6368] hover:text-[#202124] rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedMessage ? (
              <div className="py-8 text-center text-[#188038]">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-2" />
                <h4 className="font-bold text-base">Thank you for your review!</h4>
                <p className="text-xs text-[#5f6368] mt-1">Your review will be posted to the Google profile.</p>
              </div>
            ) : (
              <form onSubmit={handlePostReview} className="space-y-4 pt-4">
                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1">
                    Framing Service Used
                  </label>
                  <select
                    value={newReview.service}
                    onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                  >
                    <option value="Custom Picture Framing">Custom Picture Framing</option>
                    <option value="Special Store Offer (8x11 / 8x12)">Special Store Offer (8×11 / 8×12)</option>
                    <option value="Glass Works & Bevelled Cut">Glass Works & Bevelled Cut</option>
                    <option value="Canvas Stretched Mounting">Canvas Stretched Mounting</option>
                    <option value="Wooden Photo Frames">Wooden Photo Frames</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1">
                    Star Rating
                  </label>
                  <div className="flex gap-2 text-[#f29900]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating ? 'fill-current' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1">
                    Share details of your experience with SBk Enterprise
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell others about the wood finish, glass clarity, or Aralia workshop visit..."
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#1a73e8] hover:bg-[#1557bf] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Submit Google Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
