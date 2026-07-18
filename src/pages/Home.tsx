import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle, ChevronDown, ChevronUp, ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { question: "Will my insurance cover the repair?", answer: "In most cases, yes! Many insurance companies waive the deductible for windshield repairs, meaning the service could be completely free for you. We assist with the claims process to make it hassle-free." },
    { question: "How long does a repair take?", answer: "Most chip and small crack repairs can be completed in about 30 to 45 minutes by our expert mobile technicians." },
    { question: "Will the crack completely disappear?", answer: "While the structural integrity of the windshield is restored and the damage is prevented from spreading, a slight blemish may still be visible. However, visibility is significantly improved." },
    { question: "When do I need a replacement instead of a repair?", answer: "If the crack is longer than a dollar bill, or if the damage is directly in the driver's line of sight, a full replacement is typically required for safety reasons." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative bg-brand-dark text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop" alt="Driving Safely" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary font-bold px-4 py-2 rounded-full border border-brand-primary/30">
              <Star className="h-5 w-5 fill-current" />
              100's of 5-Star Reviews
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-normal mb-6 leading-tight"> 
              Mobile Auto Glass Repair & Replacement in <span className="text-brand-primary">Richmond, VA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
              From windshield chips to full door glass replacements, LiteFusion comes directly to you. Fast, professional, and trusted by hundreds of drivers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" className="bg-brand-primary hover:bg-[#32CD32] text-brand-dark text-center font-bold py-4 px-8 rounded-md shadow-lg transition duration-300 text-lg">
                Book Appointment
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white text-center font-bold py-4 px-8 rounded-md shadow transition duration-300 text-lg backdrop-blur-sm">
                Get Free Quote
              </Link>
            </div>
            
            {/* Trust Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-primary h-5 w-5" />
                <span className="text-sm font-medium">Mobile Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-primary h-5 w-5" />
                <span className="text-sm font-medium">Insurance Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-primary h-5 w-5" />
                <span className="text-sm font-medium">Fast Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-primary h-5 w-5" />
                <span className="text-sm font-medium">Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Repair Immediately */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Repair Immediately?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Don't wait for a tiny rock chip to spread across your entire windshield. Acting fast saves you time, money, and keeps you safe.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prevent Crack Spreading</h3>
              <p className="text-gray-600">Temperature changes and road vibrations cause small chips to spiderweb into unrepairable cracks quickly.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="bg-brand-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Save Money</h3>
              <p className="text-gray-600">A repair costs a fraction of a full replacement and is often 100% covered by your insurance with zero out-of-pocket costs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maintain Safety</h3>
              <p className="text-gray-600">The factory seal on your windshield is the safest. Repairing keeps the original seal intact and restores the glass's structural integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expert care for your auto glass, delivered directly to your location.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Windshield Repair', 'Windshield Replacement', 'Door Glass Replacement', 'Backglass Replacement', 'Side View Mirrors', 'Regulator & Motor'].map((service, index) => (
              <Link to="/services" key={index} className="group relative overflow-hidden rounded-xl bg-gray-50 border border-gray-100 p-8 hover:bg-brand-primary/5 transition-colors">
                <h3 className="text-lg font-bold mb-4 group-hover:text-brand-secondary transition-colors">{service}</h3>
                <p className="text-sm text-gray-500 mb-6">Learn more about how we handle {service.toLowerCase()} professionally and efficiently.</p>
                <div className="flex items-center text-brand-secondary font-semibold text-sm">
                  View Details <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Service Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 opacity-20">
              <img src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2000&auto=format&fit=crop" alt="Map background" className="w-full h-full object-cover" />
            </div>
            <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 z-10">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Mobile Service Advantage</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  Why take time out of your busy day to sit in a repair shop waiting room? Our expert technicians come directly to your home, office, or anywhere in the Richmond area.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                    <h3 className="text-xl font-bold text-brand-primary mb-2">We Come to You</h3>
                    <p className="text-gray-300 text-sm">Serving Richmond, VA and all surrounding areas within a 30-mile radius.</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                    <h3 className="text-xl font-bold text-brand-primary mb-2">Fully Equipped</h3>
                    <p className="text-gray-300 text-sm">Our mobile vans have everything needed for a perfect repair or replacement.</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 text-center">
                <Link to="/service-areas" className="inline-block bg-white text-brand-dark hover:bg-brand-primary hover:text-brand-dark text-lg font-bold py-4 px-8 rounded-md shadow-lg transition duration-300 w-full mb-4">
                  View Service Areas
                </Link>
                <p className="text-gray-400 text-sm italic">Same-day service often available!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">We've designed our process to be completely frictionless so you can get back to your day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-700 z-0"></div>
            
            {[
              { title: "Contact LiteFusion", desc: "Call us or submit an online quote request." },
              { title: "Schedule Service", desc: "Pick a time and place that works for you." },
              { title: "Professional Repair", desc: "Our tech arrives and completes the job." },
              { title: "Drive Away Safely", desc: "You're immediately ready to drive." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-brand-dark border-4 border-brand-primary rounded-full flex items-center justify-center text-3xl font-bold mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-block bg-brand-primary hover:bg-[#32CD32] text-brand-dark font-bold py-3 px-8 rounded-md shadow transition duration-300">
              Start The Process
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Assistance */}
      <section className="py-20 bg-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop" alt="Insurance Paperwork" className="rounded-xl shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Zero Out-of-Pocket Insurance Claims</h2>
              <p className="text-lg text-gray-600 mb-6">
                Did you know that most insurance companies will waive your deductible for windshield repairs? That means your repair could be completely free!
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-secondary h-6 w-6" />
                  <span className="text-gray-700 font-medium">We work with ALL major insurance carriers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-secondary h-6 w-6" />
                  <span className="text-gray-700 font-medium">We handle the claims process from start to finish</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-secondary h-6 w-6" />
                  <span className="text-gray-700 font-medium">No impact on your insurance premiums for repairs</span>
                </li>
              </ul>
              <Link to="/insurance" className="inline-flex items-center gap-2 text-brand-secondary font-bold hover:underline">
                Learn more about our insurance process <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose LiteFusion & 6. Before/After */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose LiteFusion</h2>
              <ul className="space-y-6">
                {[
                  { title: "Advanced Polymer Technology", desc: "Our proprietary resin mimics the molecular structure of glass for a stronger hold." },
                  { title: "Mobile Convenience", desc: "We repair your windshield at your home or office." },
                  { title: "Fast Turnaround", desc: "Most repairs take less than 45 minutes." },
                  { title: "Quality Workmanship", desc: "Backed by our lifetime satisfaction guarantee." }
                ].map((item, idx) => (
                  <li key={idx} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-primary/20 text-brand-secondary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="mt-1 text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Before / After */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded shadow z-20">BEFORE</div>
              <div className="absolute top-4 right-4 bg-brand-primary text-brand-dark px-3 py-1 text-xs font-bold rounded shadow z-20">AFTER</div>
              
              <div className="flex h-[400px]">
                <div className="w-1/2 relative overflow-hidden border-r-2 border-white">
                   <img src="/images/windshield-damage.png" alt="Damaged Windshield" className="absolute h-full max-w-none w-[200%] object-cover object-left" />
                </div>
                <div className="w-1/2 relative overflow-hidden">
                   <img src="/images/windshield-repaired.png" alt="Repaired Windshield" className="absolute h-full max-w-none w-[200%] object-cover object-right -left-full" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">Don't just take our word for it.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { name: "Sarah M.", text: "Absolutely incredible service. They came to my office, handled my insurance, and the chip is barely visible. Highly recommend!" },
              { name: "David T.", text: "Fast, professional, and friendly. I thought I needed a whole new windshield but they saved it with their resin repair." },
              { name: "Jessica R.", text: "The convenience factor is huge. I didn't have to wait in a shop. LiteFusion showed up on time and did perfect work." }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div className="font-bold text-brand-dark">- {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none text-left"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="p-5 bg-white border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 bg-brand-secondary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">Don't Let a Small Chip Become a Costly Replacement</h2>
          <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">Schedule your mobile repair today and get back on the road safely.</p>
          <Link to="/contact" className="inline-block bg-brand-primary hover:bg-[#32CD32] text-brand-dark text-xl font-bold py-4 px-10 rounded-md shadow-lg transition duration-300 transform hover:scale-105">
            Book Your Repair Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
