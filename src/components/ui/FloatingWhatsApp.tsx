import { MessageCircle, Phone, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const executives = [
  { name: "Omkar Shinde", phone: "+91 83291 75333", waUrl: "https://wa.me/918329175333" },
  { name: "Shubham Jadhav", phone: "+91 90225 11535", waUrl: "https://wa.me/919022511535" },
  { name: "Prathmesh Bhilare", phone: "+91 90225 36817", waUrl: "https://wa.me/919022536817" },
];

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [positionY, setPositionY] = useState(0);
  
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startY = useRef(0);
  const dragOffset = useRef(0);
  
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      
      const deltaY = e.clientY - startY.current;
      
      if (Math.abs(deltaY) > 5) {
        hasDragged.current = true;
      }
      
      let newY = dragOffset.current + deltaY;
      
      // Limit to prevent dragging completely off screen
      const maxUp = -(window.innerHeight - 150);
      const maxDown = 20; 
      
      newY = Math.max(maxUp, Math.min(newY, maxDown));
      setPositionY(newY);
    };

    const handlePointerUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        document.body.style.userSelect = "";
      }
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    isDragging.current = true;
    hasDragged.current = false;
    startY.current = e.clientY;
    dragOffset.current = positionY;
    document.body.style.userSelect = "none";
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex flex-col items-end"
      style={{ transform: `translateY(${positionY}px)` }}
    >
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl mb-4 overflow-hidden w-80 sm:w-96 border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-green-500 p-5 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Contact Our Experts</h3>
              <p className="text-green-50 text-xs mt-0.5">We typically reply instantly</p>
            </div>
            <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="text-green-50 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="p-4 space-y-3 bg-slate-50">
            {executives.map((exec, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-green-200 transition-colors">
                <div className="flex-1">
                  <p className="font-bold text-slate-800 text-sm mb-1">{exec.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{exec.phone}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:${exec.phone.replace(/[\s+]/g, '')}`}
                    className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-colors"
                    title="Call"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone size={16} />
                  </a>
                  <a
                    href={exec.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
                    title="WhatsApp"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <button
        onClick={handleClick}
        onPointerDown={handlePointerDown}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center group touch-none cursor-grab active:cursor-grabbing"
        aria-label="Contact Options"
      >
        {isOpen ? <X size={32} className="pointer-events-none" /> : <MessageCircle size={32} className="pointer-events-none" />}
        {!isOpen && (
          <span className="absolute right-20 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Contact Us
          </span>
        )}
      </button>
    </div>
  );
}
