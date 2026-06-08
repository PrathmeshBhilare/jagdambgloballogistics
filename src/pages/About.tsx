import { Globe2, ShieldCheck, Handshake, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CtaSection from "../components/sections/CtaSection";

export default function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl text-white mb-4 tracking-tight uppercase">About Us</h1>
        <p className="text-lg text-amber-500 max-w-2xl mx-auto italic font-serif">
          Your reliable merchant export partner, connecting Indian markets to the world with integrity and efficiency.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif italic text-amber-600 mb-2 text-xl">Our Identity</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Who We Are</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                JAGDAMB Global Logistics is a premier merchant export company based in India. We do not manufacture products; instead, we specialize in bridging the gap between high-quality Indian suppliers and international buyers.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our expertise lies in sourcing, compliance, documentation, and logistics. By acting as your trusted export partner, we minimize the risks of international trade and provide seamless end-to-end support for businesses looking to access global opportunities or source from the Indian subcontinent.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Trusted Partners</h4>
                    <p className="text-sm text-slate-500">Long-term vetted supplier network.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-900">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Compliance First</h4>
                    <p className="text-sm text-slate-500">Strict adherence to trade laws.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-slate-100 border p-2 border-slate-200 relative">
                 <img 
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                    alt="Global Trade Cargo"
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-slate-900/5 hover:bg-transparent transition-colors"></div>
              </div>
              <div className="absolute -bottom-12 -left-12 bg-amber-500 text-slate-900 p-10 shadow-xl max-w-xs hidden md:block border border-amber-400">
                <Globe2 size={40} className="mb-4" />
                <h4 className="text-xl font-bold mb-2">Global Reach</h4>
                <p className="text-amber-900 font-medium">Exporting trust and quality across 5 continents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 border border-slate-200 hover:border-amber-500 transition-colors">
              <Target size={40} className="text-amber-500 mb-6" />
              <h3 className="text-3xl font-serif text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                To simplify international trade and help businesses easily access global opportunities. We strive to be the most reliable link between Indian quality and international demand, ensuring fairness, transparency, and mutual growth for all stakeholders.
              </p>
            </div>
            
            <div className="bg-slate-900 p-12 border border-slate-800 text-white relative overflow-hidden">
              <Globe2 size={40} className="text-amber-500 mb-6 relative z-10" />
              <h3 className="text-3xl font-serif mb-4 relative z-10">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed font-light relative z-10">
                To become the most trusted export and trade partner connecting India with global markets. We envision a trading framework where borders are no longer barriers to quality, and international sourcing is as simple as domestic procurement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
