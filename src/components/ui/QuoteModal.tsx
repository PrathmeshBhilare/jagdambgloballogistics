import React from "react";
import Modal from "./Modal";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request a Custom Quote">
      <div className="mb-6">
        <p className="text-slate-500 text-sm mb-6">
          Please contact us directly and our export specialists will get back to you with a comprehensive quote within 24 hours.
        </p>
        <div className="bg-slate-50 p-6 border border-slate-200 rounded-2xl text-center space-y-4">
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Us</h4>
            <a href="mailto:logistics.jagdambglobal@gmail.com" className="text-lg font-medium text-slate-900 hover:text-brand-teal transition-colors">
              logistics.jagdambglobal@gmail.com
            </a>
          </div>
          <div className="pt-4 border-t border-slate-200">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Call / WhatsApp</h4>
            <a href="tel:+918329175333" className="text-lg font-medium text-slate-900 hover:text-brand-teal transition-colors block">
              +91 83291 75333
            </a>
            <a href="tel:+919022511535" className="text-lg font-medium text-slate-900 hover:text-brand-teal transition-colors block mt-1">
              +91 90225 11535
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}
