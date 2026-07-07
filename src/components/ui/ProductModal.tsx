import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, Mail, Share2, Edit, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuoteModal } from "../../context/QuoteContext";

export interface ProductDetails {
  name: string;
  types: string;
  img: string;
  desc: string;
  moq: string;
  businessType: string;
  packagingType: string;
  packagingSize: string;
  shelfLife: string;
}

interface ProductModalProps {
  product: ProductDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { openQuoteModal } = useQuoteModal();
  const [showDesc, setShowDesc] = useState(false);

  const handleClose = () => {
    setShowDesc(false);
    onClose();
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col border border-slate-200 relative"
            >
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-20 shadow-sm"
              >
                <X size={20} className="text-slate-700" />
              </button>

              <div className="flex flex-col md:flex-row w-full flex-grow pt-4">
                {/* Image Section */}
                <div className="w-full md:w-5/12 bg-white relative border-r border-slate-100 p-6 md:p-10 flex items-start justify-center">
                  <div className="w-full aspect-square bg-slate-50 rounded-2xl border border-slate-100 p-6 flex items-center justify-center">
                    <img 
                      src={product.img} 
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-md mix-blend-multiply hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Details Section */}
                <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col relative">
                  
                  <div className="flex justify-between items-start mb-6 pr-10">
                    <div>
                      <div className="text-slate-500 font-medium text-sm mb-1">{product.types}</div>
                      <h2 className="text-2xl font-bold text-slate-800">{product.name}</h2>
                    </div>
                    <button className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors shrink-0">
                      <Share2 size={18} />
                    </button>
                  </div>

                <div className="mb-6">
                   <div className="text-slate-900 font-semibold mb-2">
                     {product.moq} <span className="text-slate-500 font-normal">(MOQ)</span>
                   </div>
                   
                   <div className="flex flex-wrap items-center gap-3">
                     <input type="number" placeholder="Quantity" className="border border-slate-300 rounded-md px-3 py-2 text-sm w-24 outline-none focus:border-brand-teal" />
                     <input type="text" placeholder="Ton" defaultValue="Ton" className="border border-slate-300 rounded-md px-3 py-2 text-sm w-20 outline-none focus:border-brand-teal" />
                     <button className="flex items-center gap-1 text-brand-teal font-medium text-sm hover:underline">
                       <Edit size={14} /> Edit
                     </button>
                     <button 
                       onClick={() => {
                         handleClose();
                         openQuoteModal();
                       }}
                       className="bg-brand-teal hover:bg-brand-teal/90 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors ml-auto md:ml-2"
                     >
                       Get Best Price
                     </button>
                   </div>
                </div>

                <div className="space-y-0 mb-6 border-t border-slate-200 flex-grow">
                  <div className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b border-slate-200 items-center">
                    <span className="text-slate-500 text-sm font-medium mb-1 sm:mb-0">Business Type</span>
                    <span className="col-span-2 text-slate-900 font-medium text-sm">{product.businessType}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b border-slate-200 items-center">
                    <span className="text-slate-500 text-sm font-medium mb-1 sm:mb-0">Packaging Type</span>
                    <span className="col-span-2 text-slate-900 font-medium text-sm">{product.packagingType}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b border-slate-200 items-center">
                    <span className="text-slate-500 text-sm font-medium mb-1 sm:mb-0">Packaging Size</span>
                    <span className="col-span-2 text-slate-900 font-medium text-sm">{product.packagingSize}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b border-slate-200 items-center">
                    <span className="text-slate-500 text-sm font-medium mb-1 sm:mb-0">Shelf Life</span>
                    <span className="col-span-2 text-slate-900 font-medium text-sm">{product.shelfLife}</span>
                  </div>
                </div>

                <div className="mb-8 bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <AnimatePresence initial={false}>
                    {showDesc && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {product.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <button 
                    onClick={() => setShowDesc(!showDesc)}
                    className="flex items-center gap-1.5 text-brand-teal hover:text-brand-teal/80 text-sm font-semibold transition-colors"
                  >
                    {showDesc ? (
                      <>Read Less <ChevronUp size={16} /></>
                    ) : (
                      <>Read Full Description <ChevronDown size={16} /></>
                    )}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4 border-t border-slate-200">
                  <button 
                    onClick={() => {
                      handleClose();
                      openQuoteModal();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-800 px-6 py-3 rounded-md text-sm font-semibold transition-colors"
                  >
                    <Phone size={18} className="text-slate-600" /> Request to Call
                  </button>
                  <Link 
                    to="/contact"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
                  >
                    <Mail size={18} /> Send Enquiry
                  </Link>
                </div>
              </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
