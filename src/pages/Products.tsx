import { ArrowRight, PackageOpen, LayoutGrid, Beaker, Apple, ChevronLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CtaSection from "../components/sections/CtaSection";

const agriculturalCategories = [
  {
    id: "jaggery",
    title: "Jaggery & Sweeteners",
    desc: "Premium quality organic jaggery, sugar, and natural sweeteners sourced directly from Indian farms.",
    icon: Apple,
    products: [
      "Organic Jaggery Powder",
      "Jaggery Cubes",
      "Liquid Jaggery",
      "Refined White Sugar",
      "Raw Brown Sugar"
    ]
  },
  {
    id: "spices",
    title: "Whole & Ground Spices",
    desc: "Authentic, aromatic Indian spices including cardamom, black pepper, turmeric, and cumin.",
    icon: Beaker,
    products: [
      "Turmeric Finger & Powder",
      "Black Pepper (Whole & Powder)",
      "Green Cardamom",
      "Cumin Seeds",
      "Coriander Seeds",
      "Red Chilli (Whole & Powder)"
    ]
  },
  {
    id: "grains",
    title: "Grains & Pulses",
    desc: "High-quality grains, basmati rice, non-basmati rice, and a variety of Indian pulses.",
    icon: PackageOpen,
    products: [
      "1121 Basmati Rice",
      "Sona Masoori Rice",
      "Milling Wheat",
      "Red Lentils (Masoor Dal)",
      "Yellow Pigeon Peas (Toor Dal)",
      "Chickpeas (Kabuli Chana)"
    ]
  },
  {
    id: "fresh",
    title: "Fresh Produce",
    desc: "Farm-fresh fruits and vegetables meeting international food safety standards.",
    icon: Apple,
    products: [
      "Red Onions",
      "Potatoes",
      "Pomegranates",
      "Alphonso Mangoes",
      "Fresh Grapes",
      "Green Chillies"
    ]
  },
  {
    id: "custom",
    title: "Custom Sourcing",
    desc: "Can't find what you need? We provide custom supplier identification and product sourcing.",
    icon: LayoutGrid,
    products: []
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const activeCategory = agriculturalCategories.find(c => c.id === selectedCategory);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl text-white mb-4 tracking-tight uppercase">Our Products</h1>
        <p className="text-lg text-amber-500 max-w-2xl mx-auto italic font-serif">
          We specialize in high-quality agricultural exports sourced directly from Indian farms.
        </p>
      </section>

      {/* Main Content Area */}
      <section className="py-20 lg:py-28 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {!selectedCategory ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {agriculturalCategories.map((cat, i) => (
                  <div 
                    key={i} 
                    className="bg-white border border-slate-100 hover:border-amber-500 transition-all group flex flex-col cursor-pointer relative overflow-hidden shadow-sm hover:shadow-md"
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                      <cat.icon size={180} className="text-slate-900" />
                    </div>
                    <div className="p-10 flex flex-col flex-grow relative z-10">
                      <div className="w-16 h-16 bg-slate-50 text-amber-500 flex items-center justify-center rounded-2xl mb-8 border border-slate-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                        <cat.icon size={32} />
                      </div>
                      
                      <h3 className="text-2xl font-serif text-slate-900 mb-4 pr-10">{cat.title}</h3>
                      <p className="text-slate-600 mb-8 flex-grow font-light leading-relaxed">{cat.desc}</p>
                      
                      <div className="inline-flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-widest group-hover:text-amber-600 transition-colors mt-auto pt-6 border-t border-slate-100">
                        View Products <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-white p-8 md:p-12 border-l-4 border-amber-500 text-center max-w-4xl mx-auto shadow-sm">
                <h3 className="text-3xl font-serif text-slate-900 mb-4">Looking for something specific?</h3>
                <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                  Our merchant export capabilities extend beyond these categories. If you have a specific product requirement from India, submit your specifications and our team will source it for you.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  Request Custom Quote
                </Link>
              </div>
            </>
          ) : (
            <div className="max-w-4xl mx-auto">
              <button 
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 text-sm font-bold uppercase tracking-widest transition-colors"
              >
                <ChevronLeft size={18} /> Back to Categories
              </button>
              
              {activeCategory && (
                <div className="bg-white border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <activeCategory.icon size={250} className="text-slate-900" />
                  </div>
                  
                  <div className="p-10 md:p-14 relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-amber-50 text-amber-600 flex items-center justify-center rounded-2xl border border-amber-100 shrink-0">
                         <activeCategory.icon size={40} />
                      </div>
                      <div>
                        <div className="inline-block bg-slate-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-3">
                          Agri-Export Category
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight">{activeCategory.title}</h2>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-10 text-lg font-light leading-relaxed max-w-3xl">
                      {activeCategory.desc}
                    </p>
                    
                    {activeCategory.products.length > 0 ? (
                      <div className="mb-12">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 pb-4 border-b border-slate-100">Available Products</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                          {activeCategory.products.map((product, i) => (
                            <li key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                <Check size={14} className="text-amber-500" />
                              </div>
                              <span className="text-slate-700 font-medium">{product}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="mb-12 bg-slate-50 p-8 border border-slate-100 rounded-xl text-center">
                        <p className="text-slate-600 italic">Please contact us directly to discuss your custom sourcing requirements in detail.</p>
                      </div>
                    )}

                    <div className="flex justify-start">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-colors shadow-md"
                      >
                        Inquire About {activeCategory.id === "custom" ? "Requirements" : "These Products"}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      <CtaSection />
    </div>
  );
}
