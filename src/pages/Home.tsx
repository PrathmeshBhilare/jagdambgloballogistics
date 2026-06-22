import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Globe2, Clock, Users, CheckCircle2, ChevronRight, MessageSquareQuote } from "lucide-react";
import CtaSection from "../components/sections/CtaSection";
import { useQuoteModal } from "../context/QuoteContext";

import TrustBadges from "../components/ui/TrustBadges";

// Sample Data
const workSteps = [
  { title: "Requirement Discussion", desc: "Understanding your product needs, specifications, and target market." },
  { title: "Supplier Identification", desc: "Selecting the best-fit manufacturers from our trusted network in India." },
  { title: "Quotation & Negotiation", desc: "Securing competitive pricing and finalizing technical parameters." },
  { title: "Documentation", desc: "Handling IEC, certificates of origin, and compliance paperwork." },
  { title: "Logistics & Shipping", desc: "Coordinating freight forwarding, customs clearance, and loading." },
  { title: "Successful Delivery", desc: "Ensuring safe and timely arrival at the destination port." },
];

const faqs = [
  { q: "Do you manufacture products?", a: "No, we are a merchant export company. We source high-quality products from trusted Indian manufacturers and farmers to export globally." },
  { q: "Can you source products from India?", a: "Yes, our primary expertise is connecting international buyers with verified Indian suppliers across various industries." },
  { q: "Do you help first-time exporters?", a: "Absolutely. We provide end-to-end consulting, from IEC registration to buyer identification and documentation." },
  { q: "Which countries do you export to?", a: "We have a global network and can facilitate exports to North America, Europe, the Middle East, Africa, and Southeast Asia." },
  { q: "Can buyers request custom products?", a: "Yes, we handle custom sourcing requirements and can coordinate with manufacturers to meet specific buyer specifications." },
];

export default function Home() {
  const { openQuoteModal } = useQuoteModal();
  
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2670&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 text-amber-400 font-bold tracking-widest uppercase text-xs mb-6 border border-amber-500/30">
                <Globe2 size={16} />
                <span>Premier Merchant Exporters from India</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                Premium Indian Agro Commodities <br className="hidden sm:block" /><span className="text-amber-500 font-normal italic">for Global Markets</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Jagdamb Global Logistics is an India-based Merchant Exporter and Global Sourcing Partner supplying spices, seeds, rice, natural sweeteners, and agricultural products to international buyers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-md text-base font-bold transition-colors shadow-lg"
                >
                  Explore Products
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md text-base font-semibold transition-colors"
                >
                  Get Export Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 2. Current Highlights */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 font-bold tracking-widest uppercase text-xs mb-3 rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Ready for Export
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight uppercase">Featured Products</h2>
            </div>
            <Link to="/products" className="text-amber-600 font-bold hover:text-amber-700 transition-colors flex items-center gap-2">
              View all products <ChevronRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Jaggery Powder", 
                types: "Organic • Unrefined", 
                img: "https://i.postimg.cc/ZqYFhCc2/Chat-GPT-Image-Jun-22-2026-01-43-54-PM.png" 
              },
              { 
                name: "Ginger Powder", 
                types: "Premium Quality • Sun-dried", 
                img: "https://i.postimg.cc/T104fZmv/Chat-GPT-Image-Jun-22-2026-01-39-10-PM.png" 
              },
              { 
                name: "Cumin Seeds", 
                types: "Sortex Cleaned • High Essential Oil", 
                img: "https://i.postimg.cc/DwCkhbhb/Chat-GPT-Image-Jun-22-2026-01-47-10-PM.png" 
              },
              { 
                name: "Coriander Seeds", 
                types: "Whole • Quality Graded", 
                img: "https://i.postimg.cc/CxvT0f0Z/Chat-GPT-Image-Jun-22-2026-01-47-18-PM.png" 
              },
              { 
                name: "Fenugreek Seeds", 
                types: "Machine Cleaned", 
                img: "https://i.postimg.cc/Qd6GDWDM/Chat-GPT-Image-Jun-22-2026-01-50-25-PM.png" 
              },
              { 
                name: "Fennel Seeds", 
                types: "Sweet & Aromatic", 
                img: "https://i.postimg.cc/cL1yPBpJ/Chat-GPT-Image-Jun-22-2026-01-52-21-PM.png" 
              }
            ].map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-amber-500 block"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">{product.types}</p>
                    <h3 className="text-2xl font-bold text-white shadow-sm">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-4">Sourced directly from our trusted network, ensuring premium quality and compliance for your market.</p>
                  <button onClick={openQuoteModal} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer bg-transparent border-none">
                    Request Quote <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section id="why-us" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif italic text-amber-600 mb-3 text-xl">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Your Trusted Export Partner</h3>
            <p className="text-slate-600 text-lg">
              We bridge the gap between deep local sourcing in India and the stringent compliance requirements of international trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Reliable Supplier Network",
              "Quality-Focused Sourcing",
              "Competitive Pricing",
              "Flexible Packaging Options",
              "Export Documentation Support",
              "Private Label Packaging",
              "Global Logistics Support",
              "Long-Term Business Partnerships"
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 shadow-sm border border-slate-100 hover:border-amber-500 hover:shadow-md transition-all flex items-center gap-4"
              >
                <div className="w-10 h-10 shrink-0 bg-slate-50 border border-slate-200 text-amber-600 flex items-center justify-center rounded-full transition-colors">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900">{feature}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <ShieldCheck size={48} className="text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">Certifications & Compliance</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              We work with approved supply partners capable of supporting product-specific compliance and certification requirements, including Organic Certifications, HACCP, ISO Standards, and other applicable documentation where required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. How We Work (Interactive Timeline) */}
      <section id="how-we-work" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-serif italic text-amber-600 mb-3 text-xl">Process</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">How We Work</h3>
            <p className="text-slate-600 text-lg">
              A streamlined, transparent 6-step process ensuring quality and compliance from inquiry to delivery.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {workSteps.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white border border-slate-200 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center text-slate-400 font-serif font-bold text-xl mb-6 transition-colors shadow-sm relative z-10">
                      {i + 1}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common queries about our export and consulting services.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-300 transition-colors"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <CheckCircle2 className="text-amber-500 shrink-0 mt-0.5" size={20} />
                  {faq.q}
                </h4>
                <p className="text-slate-600 ml-8 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 mb-4">Have more questions?</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors">
              Contact our support team <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <TrustBadges />
      </motion.div>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
