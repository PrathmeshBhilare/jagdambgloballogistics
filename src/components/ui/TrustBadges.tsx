import { ShieldCheck, Award, FileCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 py-10 bg-white border-t border-slate-100">
      <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm">
          <ShieldCheck size={16} />
        </div>
        <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">IEC Registered</span>
      </div>
      <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm">
          <Award size={16} />
        </div>
        <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Udyam Certified</span>
      </div>
      <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm">
          <FileCheck size={16} />
        </div>
        <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">GST Verified</span>
      </div>
    </div>
  );
}
