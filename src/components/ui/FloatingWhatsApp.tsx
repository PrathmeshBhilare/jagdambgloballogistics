import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const executives = [
  { name: "Omkar Shinde", phone: "+91 83291 75333", waUrl: "https://wa.me/918329175333" },
  { name: "Shubham Jadhav", phone: "+91 90225 11535", waUrl: "https://wa.me/919022511535" },
  { name: "Prathmesh Bhilare", phone: "+91 90225 36817", waUrl: "https://wa.me/919022536817" },
];

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl mb-4 overflow-hidden w-80 sm:w-96 border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-green-500 p-5 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Contact Our Experts</h3>
              <p className="text-green-50 text-xs mt-0.5">We typically reply instantly</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-green-50 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="p-4 space-y-3 bg-slate-50">
            {executives.map((exec, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-green-200 transition-colors">
                <div className="flex-1">
                  <p className="font-bold text-slate-800 text-sm mb-1">{exec.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{exec.phone}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:${exec.phone.replace(/[\s+]/g, '')}`}
                    className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-colors"
                    title="Call"
                  >
                    <Phone size={16} />
                  </a>
                  <a
                    href={exec.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
                    title="WhatsApp"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
        aria-label="Contact Options"
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
        {!isOpen && (
          <span className="absolute right-20 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Contact Us
          </span>
        )}
      </button>
    </div>
  );
}
