import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Globe2, Clock, Users, CheckCircle2, ChevronRight, MessageSquareQuote } from "lucide-react";
import CtaSection from "../components/sections/CtaSection";

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
                Connecting Indian <br className="hidden sm:block" /><span className="text-amber-500 font-normal italic">Products</span> to Global Markets.
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                We help businesses source, export, and grow internationally through reliable trade solutions and expert export support services.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Trusted Supplier Network", desc: "Direct access to verified Indian manufacturers and farmers." },
              { icon: ShieldCheck, title: "Transparent Communication", desc: "Clear, honest updates at every stage of the supply chain." },
              { icon: Clock, title: "Timely Coordination", desc: "Efficient logistics management to ensure on-time delivery." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 shadow-sm border border-slate-100 hover:border-amber-500 hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 bg-slate-50 border border-slate-200 text-slate-900 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 flex items-center justify-center mb-6 transition-colors">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Work (Interactive Timeline) */}
      <section id="how-we-work" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif italic text-amber-600 mb-3 text-xl">Process</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">How We Work</h3>
            <p className="text-slate-600 text-lg">
              A streamlined, transparent 6-step process ensuring quality and compliance from inquiry to delivery.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {workSteps.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white border border-slate-200 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center text-slate-400 font-serif font-bold text-xl mb-6 transition-colors shadow-sm relative z-10">
                      {i + 1}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials (Sample Content) */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif italic text-amber-500 mb-3 text-xl">Client Success</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">What Our Partners Say</h3>
             <p className="text-slate-400">Sample testimonials to showcase the quality of our relationships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "JAGDAMB Global Logistics made sourcing spices from India incredibly straightforward. Their attention to compliance and documentation saved us weeks of delays.", author: "James M.", role: "Procurement Mgr, UK" },
              { text: "As a first-time importer of garments, I was nervous about the process. The consulting team guided me through IEC and logistics perfectly.", author: "Sarah L.", role: "Boutique Owner, USA" },
              { text: "Reliable merchant exporters. Always transparent about lead times and proactive in communicating container status.", author: "Ahmed K.", role: "Distributor, UAE" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-800 p-8 border border-slate-700 relative hover:border-amber-500 transition-colors">
                <MessageSquareQuote size={40} className="text-slate-700 absolute top-6 right-6" />
                <p className="text-slate-300 italic mb-6 relative z-10">"{testimonial.text}"</p>
                <div>
                <h4 className="text-xl font-serif text-amber-500 mb-2">{testimonial.author}</h4>
                <p className="text-xs uppercase tracking-widest text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common queries about our export and consulting services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <CheckCircle2 className="text-amber-500 shrink-0 mt-0.5" size={20} />
                  {faq.q}
                </h4>
                <p className="text-slate-600 ml-8 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Have more questions?</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors">
              Contact our support team <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
