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
        <div className="bg-slate-50 p-6 border border-slate-200 rounded-lg text-center space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Us</h4>
            <a href="mailto:logistics.jagdambglobal@gmail.com" className="text-lg font-medium text-amber-600 hover:text-amber-700 transition-colors">
              logistics.jagdambglobal@gmail.com
            </a>
          </div>
          <div className="pt-2 border-t border-slate-200">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 mt-2">Call / WhatsApp</h4>
            <a href="tel:+918329175333" className="text-lg font-medium text-amber-600 hover:text-amber-700 transition-colors block">
              +91 83291 75333
            </a>
            <a href="tel:+919022511535" className="text-lg font-medium text-amber-600 hover:text-amber-700 transition-colors block">
              +91 90225 11535
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}
