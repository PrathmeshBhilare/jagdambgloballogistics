import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Globe2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import TrustBadges from "../components/ui/TrustBadges";
import ProductModal, { ProductDetails } from "../components/ui/ProductModal";
import { productsData } from "../data/products";

// Sample Data
const featuredProductNames = ["Moringa Powder", "Ginger Powder", "Jaggery Powder"];
const featuredProducts: ProductDetails[] = productsData.filter(product => featuredProductNames.includes(product.name));

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null);
  
  const [emblaRef] = useEmblaCarousel(
    { align: "start", loop: true, breakpoints: { '(min-width: 768px)': { slidesToScroll: 2 }, '(min-width: 1024px)': { slidesToScroll: 3 } } },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop" 
            alt="Farm landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-md">
              Premium Indian Agro Commodities <br className="hidden sm:block" />
              <span className="text-brand-teal">for Global Markets.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Your trusted global sourcing & export solutions partner, specializing in agricultural commodities and food products from verified Indian manufacturers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-3.5 rounded-md text-sm font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-teal px-8 py-3.5 rounded-md text-sm font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-teal/10 text-brand-teal font-medium text-sm mb-4 rounded-full">
              Welcome to our company
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Jagdamb Global <span className="text-brand-teal">Logistics</span>
            </h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We are a premier global sourcing and export solutions partner based in India. We help international buyers source high-quality agricultural products from verified manufacturers and processors.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              From handling quotations, supplier communication, and quality inspection to packaging, export documentation, and logistics support—we manage the entire process so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <Globe2 size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Global Reach</h4>
                  <p className="text-sm text-slate-500">Exporting Worldwide</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Verified Quality</h4>
                  <p className="text-sm text-slate-500">100% Guaranteed</p>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-md text-sm font-semibold transition-colors"
            >
              Read More <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* 3. Featured Products */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Our Products</h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">Explore our range of premium quality agricultural products sourced directly from verified Indian farms.</p>
          </motion.div>

          <div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-4 px-4 pb-12 pt-4" ref={emblaRef}>
            <div className="flex gap-6">
              {featuredProducts.map((product, i) => (
                <div 
                  key={i}
                  className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onClick={() => setSelectedProduct(product)}
                    className="group relative bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-brand-teal cursor-pointer h-full flex flex-col"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden bg-slate-50 border-b border-slate-100 p-4">
                      <img 
                        src={product.img} 
                        alt={product.name} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col items-center text-center">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-teal transition-colors">{product.name}</h3>
                      <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.desc}</p>
                      
                      <div className="mt-auto w-full">
                        <button className="w-full py-2.5 bg-brand-teal text-white rounded font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-4">
             <Link to="/products" className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-teal/90 font-semibold text-lg transition-colors">
               View All Products <ArrowRight size={20} />
             </Link>
          </div>
          
          <ProductModal 
            product={selectedProduct} 
            isOpen={!!selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section id="why-us" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Why Choose Us</h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              We bridge the gap between deep local sourcing in India and the stringent compliance requirements of international trade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Reliable Network", desc: "Trusted suppliers across India." },
              { title: "Best Pricing", desc: "Highly competitive market rates." },
              { title: "Quality Assured", desc: "Verified manufacturing partners." },
              { title: "End-to-End Support", desc: "Complete export documentation." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-[#081321]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <ShieldCheck size={48} className="text-brand-teal mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Certifications & Compliance</h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              We work with approved supply partners capable of supporting product-specific compliance and certification requirements, including Organic Certifications, HACCP, ISO Standards, and other applicable documentation where required.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-white"
      >
        <TrustBadges />
      </motion.div>
    </div>
  );
}
