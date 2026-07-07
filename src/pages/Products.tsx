import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Filter } from "lucide-react";
import { motion } from "motion/react";
import CtaSection from "../components/sections/CtaSection";
import ProductModal, { ProductDetails } from "../components/ui/ProductModal";
import { productsData, ProductData } from "../data/products";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Extract unique categories
  const categories = ["All Products", ...Array.from(new Set(productsData.map(p => p.category)))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All Products" 
    ? productsData 
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-[#081321] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#132a4a]/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Our Products</h1>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white">Products</span>
              {selectedCategory !== "All Products" && (
                <>
                  <ChevronRight size={14} />
                  <span className="text-brand-teal">{selectedCategory}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Category Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between bg-white px-4 py-3 border border-slate-200 rounded-lg shadow-sm text-slate-900 font-medium"
            >
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-brand-teal" />
                Categories: {selectedCategory}
              </div>
              <ChevronRight size={18} className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Sidebar / Categories */}
          <div className={`lg:w-1/4 flex-shrink-0 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden sticky top-24">
              <div className="bg-slate-50 px-5 py-4 border-b border-slate-200">
                <h3 className="font-bold text-slate-900 text-lg">Product Categories</h3>
              </div>
              <ul className="flex flex-col">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3.5 border-l-4 transition-all flex justify-between items-center ${
                        selectedCategory === cat 
                          ? "border-brand-teal bg-brand-teal/5 text-brand-teal font-semibold" 
                          : "border-transparent hover:bg-slate-50 text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      {cat}
                      {selectedCategory === cat && <ChevronRight size={16} />}
                    </button>
                    {i < categories.length - 1 && <div className="h-[1px] w-full bg-slate-100" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4 flex-grow">
            <div className="mb-6 flex justify-between items-end">
              <h2 className="text-2xl font-bold text-slate-900">{selectedCategory}</h2>
              <span className="text-sm text-slate-500 font-medium">{filteredProducts.length} Products</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.name + i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-brand-teal flex flex-col group"
                >
                  <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden border-b border-slate-100">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-xs font-semibold tracking-wider text-brand-teal uppercase mb-1">{product.category}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{product.name}</h3>
                    
                    <div className="flex flex-col gap-1.5 mb-4 text-sm mt-auto">
                      <div className="flex justify-between border-b border-slate-50 pb-1.5">
                        <span className="text-slate-500">MOQ</span>
                        <span className="font-medium text-slate-900">{product.moq}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-50 pb-1.5">
                        <span className="text-slate-500">Type</span>
                        <span className="font-medium text-slate-900 text-right max-w-[120px] truncate">{product.packagingType}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors mt-auto"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <CtaSection />

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}
