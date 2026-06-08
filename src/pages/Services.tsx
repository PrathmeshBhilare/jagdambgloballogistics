import { FileText, Award, Layers, Search, Briefcase, PackageCheck, Ship, LineChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CtaSection from "../components/sections/CtaSection";

const services = [
  { icon: FileText, title: "Export Documentation", desc: "Complete handling of invoices, packing lists, shipping bills, and certificates of origin." },
  { icon: Award, title: "IEC Registration Guidance", desc: "Step-by-step assistance in obtaining your Importer-Exporter Code from the DGFT." },
  { icon: Layers, title: "Buyer-Seller Coordination", desc: "Acting as the reliable bridge between international buyers and Indian manufacturers." },
  { icon: Search, title: "Product Sourcing", desc: "Identifying, vetting, and auditing suppliers to match your exact quality specifications." },
  { icon: Briefcase, title: "Export Compliance Support", desc: "Ensuring all shipments adhere to local and international trade laws, tariffs, and embargos." },
  { icon: PackageCheck, title: "Packaging Guidance", desc: "Consulting on export-grade packaging standards, container optimization, and labeling requirements." },
  { icon: Ship, title: "Shipping Coordination", desc: "Navigating freight forwarding, customs clearance, and securing optimal shipping rates." },
  { icon: LineChart, title: "Market Research Assistance", desc: "Analyzing target markets, pricing strategies, and competitor landscapes for effective entry." },
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
              Whether you are an Indian manufacturer looking to expand overseas or an international buyer trying to source from India, our consulting services eliminate friction and mitigate risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="bg-white p-8 border border-slate-100 hover:border-amber-500 transition-all group flex flex-col items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svc.icon size={120} />
                </div>
                <div className="w-10 h-10 border border-slate-200 text-slate-900 group-hover:border-amber-500 group-hover:text-amber-600 flex items-center justify-center mb-6 transition-colors bg-white relative z-10">
                  <svc.icon size={20} />
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
