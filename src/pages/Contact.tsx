import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl text-white mb-4 tracking-tight uppercase">Contact Us</h1>
        <p className="text-lg text-amber-500 max-w-2xl mx-auto italic font-serif">
          Get in touch with our team for export inquiries, sourcing requirements, and trade consultation.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <div className="bg-slate-50 p-8 md:p-12 border border-slate-200 shadow-sm relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 pointer-events-none"></div>
              <h2 className="text-4xl font-serif text-slate-900 mb-10 text-center md:text-left">Let's Talk Business</h2>
              
              <div className="space-y-8 mb-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-slate-200 text-amber-600 flex items-center justify-center shrink-0 hover:bg-amber-500 hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600">Satara, Maharashtra, India 415501</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-slate-200 text-amber-600 flex items-center justify-center shrink-0 hover:bg-amber-500 hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Phone / WhatsApp</h4>
                    <a href="tel:+918329175333" className="block text-slate-600 hover:text-amber-600 transition-colors mb-1">+91 83291 75333</a>
                    <a href="tel:+919022511535" className="block text-slate-600 hover:text-amber-600 transition-colors mb-1">+91 90225 11535</a>
                    <a href="tel:+919022536817" className="block text-slate-600 hover:text-amber-600 transition-colors">+91 90225 36817</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-slate-200 text-amber-600 flex items-center justify-center shrink-0 hover:bg-amber-500 hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email</h4>
                    <a href="mailto:logistics.jagdambglobal@gmail.com" className="block text-slate-600 hover:text-amber-600 transition-colors mb-1">logistics.jagdambglobal@gmail.com</a>
                    <a href="mailto:jagdambgloballogistics5@gmail.com" className="block text-slate-600 hover:text-amber-600 transition-colors">jagdambgloballogistics5@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 hover:bg-amber-500 hover:text-white transition-colors">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM (IST)<br/>Saturday: 9:00 AM - 1:00 PM (IST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Form */}
            <div className="bg-white p-8 md:p-12 border border-slate-200 shadow-sm relative flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Get In Touch</h3>
              <p className="text-slate-500 mb-8 max-w-md">Please reach out to us directly via email or phone. Our team is ready to assist you with all your global sourcing and export needs.</p>
              
              <div className="space-y-4 w-full max-w-xs mx-auto">
                <a href="mailto:logistics.jagdambglobal@gmail.com" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2">
                  <Mail size={18} /> Email Us
                </a>
                <a href="tel:+918329175333" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2">
                  <Phone size={18} /> Call Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
