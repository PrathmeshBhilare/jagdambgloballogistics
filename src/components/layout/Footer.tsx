import { Link } from "react-router-dom";
import { Globe, MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useState } from "react";
import Modal from "../ui/Modal";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

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
             <button onClick={() => setPrivacyOpen(true)} className="text-slate-500 hover:text-slate-300 text-xs transition-colors bg-transparent border-none cursor-pointer">Privacy Policy</button>
             <button onClick={() => setTermsOpen(true)} className="text-slate-500 hover:text-slate-300 text-xs transition-colors bg-transparent border-none cursor-pointer">Terms of Service</button>
          </div>
        </div>
      </div>

      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <div className="prose prose-slate prose-sm max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At JAGDAMB Global Logistics, we are committed to protecting your privacy and ensuring the security of your personal and business information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our website or engage our services.
          </p>
          <h3 className="text-lg font-bold mt-4 mb-2">1. Information We Collect</h3>
          <p>We may collect information that you voluntarily provide to us, including but not limited to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Contact information (e.g., name, email address, phone number, company name).</li>
            <li>Business and product requirements for sourcing or exporting.</li>
            <li>Communications and correspondence.</li>
          </ul>
          <h3 className="text-lg font-bold mt-4 mb-2">2. How We Use Your Information</h3>
          <p>We use the collected information for various business purposes, such as:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Providing and delivering our logistics and export consulting services.</li>
            <li>Responding to your inquiries, quotes, and communications.</li>
            <li>Improving our website, services, and customer experience.</li>
            <li>Sending relevant business updates or offers (you may opt out at any time).</li>
          </ul>
          <h3 className="text-lg font-bold mt-4 mb-2">3. Information Sharing</h3>
          <p>We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business and delivering services, provided they agree to keep the information confidential.</p>
          <h3 className="text-lg font-bold mt-4 mb-2">4. Data Security</h3>
          <p>We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
          <h3 className="text-lg font-bold mt-4 mb-2">5. Contact Us</h3>
          <p>If you have questions or concerns about this Privacy Policy, please contact us at logistics.jagdambglobal@gmail.com.</p>
        </div>
      </Modal>

      <Modal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
        <div className="prose prose-slate prose-sm max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to JAGDAMB Global Logistics. By accessing our website or using our services, you agree to be bound by the following Terms of Service. Please read them carefully.
          </p>
          <h3 className="text-lg font-bold mt-4 mb-2">1. Services Provided</h3>
          <p>JAGDAMB Global Logistics provides merchant export, product sourcing, and logistics consulting services from India to global markets. We act as an intermediary and consultant to facilitate international trade.</p>
          <h3 className="text-lg font-bold mt-4 mb-2">2. Accuracy of Information</h3>
          <p>While we strive to provide accurate and up-to-date information regarding products, specifications, and availability, we do not warrant that all content is entirely error-free. Product sourcing and final agreements are subject to formal contracts and specific negotiations.</p>
          <h3 className="text-lg font-bold mt-4 mb-2">3. User Responsibilities</h3>
          <p>You agree to provide accurate and legitimate business inquiries. You are responsible for ensuring your compliance with the import regulations, customs laws, and trade requirements of your respective destination country.</p>
          <h3 className="text-lg font-bold mt-4 mb-2">4. Intellectual Property</h3>
          <p>All content on this website, including text, graphics, logos, and materials, is the property of JAGDAMB Global Logistics and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our express written consent.</p>
          <h3 className="text-lg font-bold mt-4 mb-2">5. Limitation of Liability</h3>
          <p>In no event shall JAGDAMB Global Logistics be liable for any indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of our services or website, including but not limited to loss of profits, data, or business opportunities.</p>
          <h3 className="text-lg font-bold mt-4 mb-2">6. Modifications to Terms</h3>
          <p>We reserve the right to modify these Terms of Service at any time. Your continued use of the website and services after any changes indicates your acceptance of the updated terms.</p>
        </div>
      </Modal>
    </footer>
  );
}
