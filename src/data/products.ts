import { ProductDetails } from "../components/ui/ProductModal";

// Extend ProductDetails slightly for our category grouping logic
export interface ProductData extends ProductDetails {
  category: string;
}

export const productsData: ProductData[] = [
  // Sweeteners
  {
    category: "Natural Sweeteners",
    name: "Jaggery Powder", 
    types: "Organic • Unrefined", 
    img: "https://i.postimg.cc/RZbP9sby/Chat-GPT-Image-Jul-7-2026-11-14-29-PM.png",
    desc: "Premium organic jaggery powder sourced directly from Indian farms, produced without harmful chemicals. Ideal for natural sweetening solutions.",
    moq: "5 Tons",
    businessType: "Manufacturer, Exporter",
    packagingType: "PP Bags, Custom Pouches",
    packagingSize: "1kg, 5kg, 25kg",
    shelfLife: "12 Months"
  },
  {
    category: "Natural Sweeteners",
    name: "Jaggery Cubes", 
    types: "Organic • Unrefined", 
    img: "https://i.postimg.cc/T32MBJZz/Chat-GPT-Image-Jun-22-2026-02-01-35-PM.png",
    desc: "Premium organic jaggery cubes sourced directly from Indian farms. Ideal for tea, coffee, and daily sweetening needs.",
    moq: "5 Tons",
    businessType: "Manufacturer, Exporter",
    packagingType: "Carton Box",
    packagingSize: "500g, 1kg, 5kg",
    shelfLife: "12 Months"
  },
  {
    category: "Natural Sweeteners",
    name: "Jaggery Blocks", 
    types: "Organic • Unrefined", 
    img: "https://i.postimg.cc/RZbP9sbp/Chat-GPT-Image-Jul-7-2026-11-18-58-PM.png",
    desc: "Traditional organic jaggery blocks. Perfect for industrial cooking, sweet manufacturing and wholesale trade.",
    moq: "5 Tons",
    businessType: "Manufacturer, Exporter",
    packagingType: "PP Bags, Carton",
    packagingSize: "10kg, 25kg, 30kg",
    shelfLife: "12 Months"
  },

  // Spices
  {
    category: "Spices",
    name: "Ginger Powder", 
    types: "Premium Quality • Sun-dried", 
    img: "https://i.postimg.cc/fLkSsCpk/Chat-GPT-Image-Jul-7-2026-11-42-01-PM.png",
    desc: "Aromatic and pungent ginger powder made from fresh, carefully selected and sun-dried ginger roots. Essential for culinary and medicinal uses.",
    moq: "2 Tons",
    businessType: "Exporter, Supplier",
    packagingType: "Bags, Cartons",
    packagingSize: "10kg, 25kg",
    shelfLife: "18 Months"
  },
  {
    category: "Spices",
    name: "Cumin Seeds", 
    types: "Sortex Cleaned • High Essential Oil", 
    img: "https://i.postimg.cc/DwCkhbhb/Chat-GPT-Image-Jun-22-2026-01-47-10-PM.png",
    desc: "High-quality sortex cleaned cumin seeds with exceptional aroma and flavor profile, packed with essential oils.",
    moq: "5 Tons",
    businessType: "Exporter, Supplier",
    packagingType: "PP Bags, Jute Bags",
    packagingSize: "25kg, 50kg",
    shelfLife: "24 Months"
  },
  {
    category: "Spices",
    name: "Coriander Seeds", 
    types: "Whole • Quality Graded", 
    img: "https://i.postimg.cc/CxvT0f0Z/Chat-GPT-Image-Jun-22-2026-01-47-18-PM.png",
    desc: "Fresh and flavorful whole coriander seeds, graded for quality and uniformity. Perfect for spice blends and direct consumption.",
    moq: "5 Tons",
    businessType: "Exporter, Supplier",
    packagingType: "PP Bags",
    packagingSize: "25kg",
    shelfLife: "24 Months"
  },
  {
    category: "Spices",
    name: "Fenugreek Seeds", 
    types: "Machine Cleaned", 
    img: "https://i.postimg.cc/Qd6GDWDM/Chat-GPT-Image-Jun-22-2026-01-50-25-PM.png",
    desc: "Machine cleaned fenugreek seeds with a characteristic bitter-sweet flavor, widely used in various traditional recipes.",
    moq: "5 Tons",
    businessType: "Exporter, Supplier",
    packagingType: "PP Bags",
    packagingSize: "25kg, 50kg",
    shelfLife: "24 Months"
  },
  {
    category: "Spices",
    name: "Fennel Seeds", 
    types: "Sweet & Aromatic", 
    img: "https://i.postimg.cc/cL1yPBpJ/Chat-GPT-Image-Jun-22-2026-01-52-21-PM.png",
    desc: "Sweet and highly aromatic fennel seeds, carefully processed to preserve their natural greenish color and distinct flavor.",
    moq: "2 Tons",
    businessType: "Exporter, Supplier",
    packagingType: "PP Bags, Paper Bags",
    packagingSize: "25kg",
    shelfLife: "24 Months"
  },
  {
    category: "Spices",
    name: "Black Pepper", 
    types: "Whole • Bold", 
    img: "https://i.postimg.cc/fLHpPc00/Chat-GPT-Image-Jul-7-2026-11-48-55-PM.png",
    desc: "Bold and pungent black pepper corns, carefully harvested and dried. The king of spices, essential for every kitchen.",
    moq: "1 Ton",
    businessType: "Exporter, Supplier",
    packagingType: "PP Bags, Jute Bags",
    packagingSize: "25kg, 50kg",
    shelfLife: "24 Months"
  },
  {
    category: "Spices",
    name: "Turmeric Powder", 
    types: "High Curcumin", 
    img: "https://i.postimg.cc/SsZ3P6zL/Chat-GPT-Image-Jul-7-2026-11-52-13-PM.png",
    desc: "Vibrant yellow turmeric powder rich in curcumin. Used globally for its culinary and medicinal properties.",
    moq: "5 Tons",
    businessType: "Exporter, Supplier",
    packagingType: "PP Bags, Cartons",
    packagingSize: "25kg, 50kg",
    shelfLife: "24 Months"
  },

  // Seeds
  {
    category: "Seeds",
    name: "Chia Seeds", 
    types: "Premium Quality • Superfood", 
    img: "https://i.postimg.cc/ydftGmS0/Chat-GPT-Image-Jul-7-2026-11-25-54-PM.png",
    desc: "Highly nutritious chia seeds packed with omega-3 fatty acids, fiber, and protein. Perfect for health foods.",
    moq: "2 Tons",
    businessType: "Exporter, Supplier",
    packagingType: "PP Bags",
    packagingSize: "25kg",
    shelfLife: "24 Months"
  },
  {
    category: "Seeds",
    name: "Pumpkin Seeds", 
    types: "Machine Cleaned • Raw", 
    img: "https://i.postimg.cc/nzdgW4QD/Chat-GPT-Image-Jul-7-2026-11-46-35-PM.png",
    desc: "High-quality raw pumpkin seeds, rich in healthy fats and minerals. Excellent for snacking or baking.",
    moq: "2 Tons",
    businessType: "Exporter, Supplier",
    packagingType: "PP Bags",
    packagingSize: "25kg",
    shelfLife: "18 Months"
  },

  // Rice
  {
    category: "Rice",
    name: "Basmati Rice", 
    types: "Long Grain • Aromatic", 
    img: "https://i.postimg.cc/9QX5sYvs/Chat-GPT-Image-Jun-22-2026-02-03-40-PM.png",
    desc: "Premium long-grain basmati rice with an exquisite aroma and non-sticky texture after cooking.",
    moq: "10 Tons",
    businessType: "Exporter, Supplier",
    packagingType: "PP Bags, Non-Woven Bags, Jute Bags",
    packagingSize: "5kg, 10kg, 25kg, 50kg",
    shelfLife: "24 Months"
  },

  // Superfoods
  {
    category: "Superfoods",
    name: "Moringa Powder", 
    types: "Organic • Superfood", 
    img: "https://i.postimg.cc/NjPNYJPV/Chat-GPT-Image-Jul-7-2026-11-10-01-PM.png",
    desc: "Premium organic moringa powder packed with essential vitamins, minerals, and antioxidants. Made from carefully selected, shade-dried moringa leaves.",
    moq: "1 Ton",
    businessType: "Manufacturer, Exporter",
    packagingType: "PP Bags, Custom Pouches",
    packagingSize: "1kg, 5kg, 25kg",
    shelfLife: "24 Months"
  }
];
