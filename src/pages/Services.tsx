import { FileText, Award, Layers, Search, Briefcase, PackageCheck, Ship, LineChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CtaSection from "../components/sections/CtaSection";

const services = [
  { icon: Search, title: "Global Product Sourcing", desc: "Identifying and auditing verified Indian manufacturers and processors to match your exact specifications." },
  { icon: Award, title: "Supplier Verification", desc: "Ensuring suppliers meet international standards for quality, safety, and reliability." },
  { icon: Layers, title: "Price Negotiation", desc: "Securing competitive pricing through our extensive network and market knowledge." },
  { icon: Briefcase, title: "Quality Inspection Coordination", desc: "Coordinating inspections to ensure products meet your required standards." },
  { icon: PackageCheck, title: "Private Label Packaging", desc: "Arranging customized packaging solutions and private labeling for your brand." },
  { icon: FileText, title: "Export Documentation Assistance", desc: "Complete handling of invoices, packing lists, shipping bills, and certificates of origin." },
  { icon: Ship, title: "Logistics Coordination", desc: "Navigating freight forwarding, customs clearance, and securing optimal shipping rates." },
  { icon: LineChart, title: "End-to-End Buyer Support", desc: "Acting as your dedicated partner for all sourcing and export needs in India." },
];

export default function Services() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl text-white mb-4 tracking-tight uppercase">Consulting Services</h1>
        <p className="text-lg text-amber-500 max-w-2xl mx-auto italic font-serif">
          Comprehensive consulting and trade support for businesses navigating the complexities of global commerce.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif italic text-amber-600 mb-3 text-xl">Consultancy</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">End-to-End Export Support</h3>
            <p className="text-slate-600 text-lg">
              As your dedicated sourcing and export solutions partner in India, we eliminate friction and mitigate risk for international buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-500 transition-all duration-300 group flex flex-col items-start relative overflow-hidden rounded-xl">
                <div className="absolute -top-4 -right-4 p-6 opacity-5 group-hover:opacity-10 transition-transform duration-500 group-hover:scale-110">
                  <svc.icon size={140} />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 relative z-10 shadow-sm group-hover:shadow-md">
                  <svc.icon size={32} />
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-3 leading-tight relative z-10">{svc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{svc.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white bg-slate-900 hover:bg-slate-800 transition-colors px-8 py-4 text-xs font-bold uppercase tracking-widest border border-slate-900 shadow-sm"
            >
              Discuss Your Consulting Needs <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      <CtaSection />
    </div>
  );
}
