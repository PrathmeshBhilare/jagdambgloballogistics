import React, { useState } from "react";
import Modal from "./Modal";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [requirements, setRequirements] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !requirements) {
      alert("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    const scriptURL = "https://script.google.com/macros/s/AKfycbxsTRSWNnif2pXp8CXtOnt2TginXkBfS3VJ4Nw2YnVtwBytUsixDa5_S73_uNuw2Zg_/exec";
    
    // User data schema based on expected fields + new extra ones
    const data = {
      name,
      email,
      phone,
      company,
      productCategory,
      requirements,
    };

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.status === "success" || result.result === "success") {
        alert("Quote request sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setProductCategory("");
        setRequirements("");
        onClose();
      } else {
        alert("Something went wrong: " + result.message);
      }
    } catch (error) {
      alert("Failed to send request. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request a Custom Quote">
      <div className="mb-6">
        <p className="text-slate-500 text-sm">
          Please provide your details below and our export specialists will get back to you with a comprehensive quote within 24 hours.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="userName" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
            <input
              type="text"
              id="userName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors dark:text-slate-900"
            />
          </div>
          <div>
            <label htmlFor="userEmail" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
            <input
              type="email"
              id="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors dark:text-slate-900"
            />
          </div>
          <div>
            <label htmlFor="userPhone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
            <input
              type="tel"
              id="userPhone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (123) 456-7890"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors dark:text-slate-900"
            />
          </div>
          <div>
            <label htmlFor="userCompany" className="block text-sm font-semibold text-slate-700 mb-1.5">Company Name</label>
            <input
              type="text"
              id="userCompany"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Global Trading LLC"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors dark:text-slate-900"
            />
          </div>
        </div>

        <div>
          <label htmlFor="productCategory" className="block text-sm font-semibold text-slate-700 mb-1.5">Product of Interest</label>
          <select
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-slate-700"
          >
            <option value="">Select a product (Optional)</option>
            <option value="Jaggery (Gur)">Jaggery (Gur)</option>
            <option value="Button Mushroom">Button Mushroom</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Fresh Fruits & Vegetables">Fresh Fruits & Vegetables</option>
            <option value="Spices & Pulses">Spices & Pulses</option>
            <option value="Other">Other / General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="userReqs" className="block text-sm font-semibold text-slate-700 mb-1.5">Detailed Requirements *</label>
          <textarea
            id="userReqs"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            placeholder="Please specify quantity, destination port, packaging preferences, etc..."
            required
            rows={4}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors dark:text-slate-900"
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold tracking-widest uppercase text-sm py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Request...
              </>
            ) : "Submit Quote Request"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
