import React, { useEffect, useRef, useState } from 'react';
import './hero-logo.css';

export default function HeroLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 100;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;
    };

    // Use requestAnimationFrame for smooth interpolation
    const updateMousePos = () => {
      // Ease towards target position for smoother light movement
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateMousePos);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      animationFrameId = requestAnimationFrame(updateMousePos);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="hero-logo-container" 
      ref={containerRef}
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`,
      } as React.CSSProperties}
    >
      {/* Layer 1: Soft background glow */}
      <div className="hero-logo-bg-glow"></div>

      {/* Layer 6: Very subtle grain overlay (noise) */}
      <div className="hero-logo-noise"></div>

      {/* Layer 5: Mouse reactive radial light */}
      <div className="hero-logo-radial-light"></div>

      <div className="hero-logo-svg-wrapper">
        <svg 
          viewBox="0 0 1300 300" 
          preserveAspectRatio="xMidYMid meet" 
          className="hero-logo-svg"
        >
          <defs>
            {/* Animated gradient for stroke */}
            <linearGradient id="animatedStrokeGradient" x1="0%" y1="0%" x2="200%" y2="0%">
              <stop offset="0%" stopColor="#254B7E" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#2FAFFF" stopOpacity="1" />
              <stop offset="50%" stopColor="#58C3FF" stopOpacity="1" />
              <stop offset="75%" stopColor="#2FAFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#254B7E" stopOpacity="0.2" />
              <animate 
                attributeName="x1" 
                values="0%;-200%" 
                dur="8s" 
                repeatCount="indefinite" 
              />
              <animate 
                attributeName="x2" 
                values="200%;0%" 
                dur="8s" 
                repeatCount="indefinite" 
              />
            </linearGradient>

            {/* Subtle inner bloom */}
            <filter id="bloom" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            {/* Heavy outer bloom for accent glow */}
            <filter id="heavy-bloom" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="16" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Layer 4: Blurred duplicate creating bloom (Backdrop) */}
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="central"
            className="hero-logo-text hero-logo-text-bloom"
            style={{ filter: 'url(#heavy-bloom)' }}
          >
            JAGDAMB
          </text>

          {/* Layer 2: SVG outline (Static base stroke to maintain letter definition) */}
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="central"
            className="hero-logo-text hero-logo-text-base"
          >
            JAGDAMB
          </text>

          {/* Layer 3: Animated gradient stroke with dasharray shimmer */}
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="central"
            className="hero-logo-text hero-logo-text-animated"
            style={{ filter: 'url(#bloom)' }}
          >
            JAGDAMB
          </text>
        </svg>
      </div>
    </div>
  );
}
