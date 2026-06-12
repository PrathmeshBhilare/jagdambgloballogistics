import { Link } from "react-router-dom";
import { Globe, MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group inline-flex mb-2">
              <div className="w-10 h-10 bg-slate-800 text-amber-500 flex items-center justify-center shrink-0">
                <span className="font-serif font-bold text-xl">J</span>
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight uppercase text-white">
                  JAGDAMB
                </span>
                <span className="text-amber-500 font-serif italic capitalize text-sm sm:text-base mt-0.5">
                  Global Logistics
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              We help Indian manufacturers and businesses source, export, and grow internationally through reliable trade solutions.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/jagdambgloballogistics?igsh=d3dhN2Rxcng0Mng5" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Export Consulting</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">Merchant Export</li>
              <li className="text-slate-400 text-sm">Product Sourcing</li>
              <li className="text-slate-400 text-sm">Export Documentation</li>
              <li className="text-slate-400 text-sm">Buyer-Seller Coordination</li>
              <li className="text-slate-400 text-sm">Logistics & Shipping</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-tight">
                  Satara, Maharashtra, India 415501
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span className="text-slate-400 text-sm">+91 90225 11535</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span className="text-slate-400 text-sm">jagdambgloballogistics5@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span className="text-slate-400 text-sm">logistics.jagdambglobal@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} JAGDAMB Global Logistics. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex gap-4 justify-center">
             <Link to="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</Link>
             <Link to="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
