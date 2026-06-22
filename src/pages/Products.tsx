import { ArrowRight, ChevronLeft, Check, Cookie, Flame, Sprout, Wheat } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CtaSection from "../components/sections/CtaSection";
import { useQuoteModal } from "../context/QuoteContext";

const agriculturalCategories = [
  {
    id: "sweeteners",
    title: "Natural Sweeteners",
    desc: "Premium quality organic jaggery sourced directly from Indian farms.",
    icon: Cookie,
    img: "https://i.postimg.cc/T32MBJZz/Chat-GPT-Image-Jun-22-2026-02-01-35-PM.png",
    products: [
      "Jaggery Powder",
      "Jaggery Cubes",
      "Jaggery Blocks"
    ]
  },
  {
    id: "spices",
    title: "Spices",
    desc: "Authentic, aromatic Indian spices to add flavor to global cuisines.",
    icon: Flame,
    img: "https://i.postimg.cc/cL1yPBpq/Chat-GPT-Image-Jun-22-2026-01-58-49-PM.png",
    products: [
      "Ginger Powder",
      "Cumin Seeds",
      "Coriander Seeds",
      "Fennel Seeds",
      "Fenugreek Seeds",
      "Black Pepper",
      "Cloves",
      "Cinnamon",
      "Cardamom",
      "Chili"
    ]
  },
  {
    id: "seeds",
    title: "Seeds",
    desc: "Nutrient-rich seeds sourced and processed under strict quality control.",
    icon: Sprout,
    img: "https://i.postimg.cc/Jz7VS59g/Chat-GPT-Image-Jun-22-2026-02-06-47-PM.png",
    products: [
      "Chia Seeds",
      "Pumpkin Seeds"
    ]
  },
  {
    id: "rice",
    title: "Rice",
    desc: "Premium long-grain basmati rice representing the best of Indian agriculture.",
    icon: Wheat,
    img: "https://i.postimg.cc/9QX5sYvs/Chat-GPT-Image-Jun-22-2026-02-03-40-PM.png",
    products: [
      "Basmati Rice"
    ]
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { openQuoteModal } = useQuoteModal();

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
                    <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none z-0">
                      <cat.icon size={180} className="text-slate-900" />
                    </div>
                    
                    <div className="w-full aspect-[4/3] bg-slate-200 relative overflow-hidden z-10">
                      <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>

                    <div className="p-8 flex flex-col flex-grow relative z-10 bg-white">
                      <div className="w-14 h-14 bg-white text-amber-500 flex items-center justify-center rounded-xl mb-6 shadow-sm border border-slate-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors -mt-14 relative z-20">
                        <cat.icon size={26} />
                      </div>
                      
                      <h3 className="text-2xl font-serif text-slate-900 mb-3">{cat.title}</h3>
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
                <button
                  onClick={openQuoteModal}
                  className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Request Custom Quote
                </button>
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
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none z-0">
                    <activeCategory.icon size={250} className="text-slate-900" />
                  </div>
                  
                  {activeCategory.img && (
                    <div className="w-full relative overflow-hidden z-10 bg-slate-100 border-b border-slate-200">
                      <img src={activeCategory.img} alt={activeCategory.title} className="w-full h-auto block" loading="lazy" />
                    </div>
                  )}
                  
                  <div className="p-10 md:p-14 relative z-20 bg-white">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-white text-amber-500 flex items-center justify-center rounded-2xl border border-slate-100 shrink-0 shadow-md">
                         <activeCategory.icon size={40} />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <div className="inline-block bg-slate-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-3 rounded-full">
                        Agri-Export Category
                      </div>
                      <h2 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight">{activeCategory.title}</h2>
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
