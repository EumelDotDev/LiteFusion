import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { question: "Will my insurance cover the repair?", answer: "In most cases, yes! Many insurance companies waive the comprehensive deductible for windshield repairs, meaning the service could be completely free for you with zero out-of-pocket costs. We assist with the claims process to make it frictionless." },
    { question: "How long does a repair or replacement take?", answer: "Most chip and small crack repairs can be completed in about 30 to 45 minutes. A full windshield replacement generally takes 60 to 90 minutes, followed by a brief 'safe-to-drive' curing time for the urethane adhesive." },
    { question: "Will the rock chip completely disappear?", answer: "While our advanced resin restores the structural integrity of the windshield and stops the damage from spreading, a slight blemish or scar may still be visible. However, optical clarity is significantly improved." },
    { question: "When do I need a replacement instead of a repair?", answer: "If the crack is longer than a dollar bill (about 6 inches), if the damage is directly in the driver's primary line of sight, or if the crack extends to the edge of the windshield, a full replacement is typically required for safety." },
    { question: "Do you offer mobile service?", answer: "Yes! Our entire business model is built around mobile convenience. Our fully equipped vans come directly to your home, office, or anywhere in the Greater Richmond area." },
    { question: "Is your work guaranteed?", answer: "Absolutely. All our repairs and replacements are backed by a lifetime satisfaction guarantee against leaks and defects in workmanship." },
  ];

  return (
    <div className="bg-brand-light min-h-screen pb-20">
      {/* Header */}
      <section className="bg-brand-dark text-white py-24 text-center px-4 relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our auto glass repair and replacement process.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors focus:outline-none text-left"
              >
                <span className="font-bold text-lg text-gray-800">{faq.question}</span>
                {activeFaq === idx ? (
                  <ChevronUp className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {activeFaq === idx && (
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="tel:+18049829828" className="inline-block text-brand-primary font-bold text-xl hover:underline">
            Call us at (804) 982-9828
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
