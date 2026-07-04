import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
import { useQuoteModal } from "../../context/QuoteContext";

export default function CtaSection() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-200">
          <div className="lg:w-1/2 p-10 md:p-16 bg-slate-900 text-white flex flex-col justify-center relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal rounded-bl-[100%] opacity-[0.05] pointer-events-none"></div>
             <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 relative z-10">
               Looking for a Reliable Indian Sourcing Partner?
             </h2>
             <p className="text-lg text-slate-300 mb-10 relative z-10">
               Contact us to discuss your product requirements, specifications, packaging needs, and import requirements.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 relative z-10">
               <Link
                 to="/services"
                 className="inline-flex items-center justify-center gap-2 border border-slate-700 text-white hover:bg-slate-800 rounded-full px-8 py-3.5 text-sm font-medium transition-all"
               >
                 Explore Services
               </Link>
             </div>
          </div>
          
          <div className="lg:w-1/2 p-10 md:p-16 bg-white flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Get in Touch Directly</h3>
            <p className="text-slate-500 mb-10 text-lg">
              We highly value personal interaction. Reach out to us directly via phone, WhatsApp, or email to discuss your global trade requirements.
            </p>
            <button
              onClick={openQuoteModal}
              className="inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg w-full sm:w-auto cursor-pointer border-none"
            >
              Request a Quote <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
