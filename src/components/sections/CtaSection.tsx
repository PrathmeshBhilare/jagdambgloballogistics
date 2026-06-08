import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-amber-500 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 md:p-16 bg-slate-900 text-white flex flex-col justify-center relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-bl-[100%] opacity-10 pointer-events-none"></div>
             <h2 className="text-4xl sm:text-5xl font-serif mb-6 relative z-10">
               Ready to take your business global?
             </h2>
             <p className="text-lg text-slate-300 mb-10 relative z-10">
               Partner with JAGDAMB Global Logistics for reliable merchant trading, seamless compliance, and access to international markets.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 relative z-10">
               <Link
                 to="/services"
                 className="inline-flex items-center justify-center gap-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all"
               >
                 Explore Services
               </Link>
             </div>
          </div>
          
          <div className="lg:w-1/2 p-10 md:p-16 bg-white flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-serif text-slate-900 mb-6">Get in Touch Directly</h3>
            <p className="text-slate-600 mb-10 text-lg">
              We highly value personal interaction. Reach out to us directly via phone, WhatsApp, or email to discuss your global trade requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 uppercase text-xs tracking-widest font-bold transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Contact Our Experts <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
