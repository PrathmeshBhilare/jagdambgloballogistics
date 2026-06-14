import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

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
            <div className="bg-white p-8 md:p-12 border border-slate-200 shadow-sm relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Send a Message</h3>
              <p className="text-slate-500 mb-8 text-sm">Fill out the form below and we will get back to you directly.</p>
              
              <form 
                action="javascript:void(0)" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                  const originalText = submitBtn.innerHTML;
                  
                  submitBtn.disabled = true;
                  submitBtn.innerHTML = '<span class="flex items-center gap-2"><svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...</span>';
                  
                  const formData = new FormData(form);
                  const data = Object.fromEntries(formData);
                  
                  try {
                    const response = await fetch("https://script.google.com/macros/s/AKfycbxsTRSWNnif2pXp8CXtOnt2TginXkBfS3VJ4Nw2YnVtwBytUsixDa5_S73_uNuw2Zg_/exec", {
                      method: "POST",
                      body: JSON.stringify({
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        company: data.company,
                        requirements: `[General Inquiry Category: ${data.inquiryType}] ${data.message}`
                      })
                    });
                    
                    const result = await response.json();
                    if (result.status === "success" || result.result === "success") {
                      alert("Your message has been sent successfully!");
                      form.reset();
                    } else {
                      alert("Something went wrong: " + result.message);
                    }
                  } catch (err) {
                    alert("Failed to send message. Please check your connection.");
                  } finally {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                  }
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input type="text" id="contactName" name="name" required placeholder="John Doe" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                    <input type="email" id="contactEmail" name="email" required placeholder="john@company.com" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                    <input type="tel" id="contactPhone" name="phone" placeholder="+1 (123) 456-7890" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="contactCompany" className="block text-sm font-semibold text-slate-700 mb-1.5">Company</label>
                    <input type="text" id="contactCompany" name="company" placeholder="LLC or Corp" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-slate-700 mb-1.5">Inquiry Type</label>
                  <select id="inquiryType" name="inquiryType" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-slate-700">
                    <option value="General Information">General Information</option>
                    <option value="Sourcing / Product Inquiry">Sourcing / Product Inquiry</option>
                    <option value="Logistics & Export Consultation">Logistics & Export Consultation</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
                  <textarea id="contactMessage" name="message" required rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
