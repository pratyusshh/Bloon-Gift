import React, { useRef, useState, useCallback } from 'react';
import { useBouquet } from '@/context/BouquetContext';
import flowers from '@/data/flowers';
import FlowerSVG from '@/components/FlowerSVG';
import { BouquetConfig } from '@/types/bouquet';

interface BouquetCanvasProps {
  config?: BouquetConfig;
  width?: number;
  height?: number;
  interactive?: boolean;
}

const BouquetCanvas: React.FC<BouquetCanvasProps> = ({ 
  config: externalConfig, 
  width = 400, 
  height = 500, 
  interactive = true 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dragging, setDragging] = useState<string | null>(null);
  
  // Always call hooks - use a dummy context when non-interactive
  let bouquetCtx: ReturnType<typeof useBouquet> | null = null;
  try {
    bouquetCtx = useBouquet();
  } catch {
    bouquetCtx = null;
  }

  const config = externalConfig || bouquetCtx?.bouquetConfig;

  const handleMouseDown = useCallback((flowerId: string) => {
    if (!interactive) return;
    setDragging(flowerId);
  }, [interactive]);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!dragging || !svgRef.current || !bouquetCtx) return;
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    bouquetCtx.updateFlowerPosition(dragging, svgP.x, svgP.y);
  }, [dragging, bouquetCtx]);

  const handleMouseUp = useCallback(() => {
    setDragging(null);
  }, []);

  // Touch event handlers for mobile
  const handleTouchMove = useCallback((e: React.TouchEvent<SVGSVGElement>) => {
    if (!dragging || !svgRef.current || !bouquetCtx) return;
    e.preventDefault();
    const svg = svgRef.current;
    const touch = e.touches[0];
    const pt = svg.createSVGPoint();
    pt.x = touch.clientX;
    pt.y = touch.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    bouquetCtx.updateFlowerPosition(dragging, svgP.x, svgP.y);
  }, [dragging, bouquetCtx]);

  const handleTouchEnd = useCallback(() => {
    setDragging(null);
  }, []);

  if (!config) return null;

  const wrapperY = height * 0.48;
  const wrapperTopWidth = width * 0.7;
  const wrapperBottomWidth = width * 0.2;
  const wrapperHeight = height * 0.38;

  const getWrapperPath = () => {
    const cx = width / 2;
    const topL = cx - wrapperTopWidth / 2;
    const topR = cx + wrapperTopWidth / 2;
    const botL = cx - wrapperBottomWidth / 2;
    const botR = cx + wrapperBottomWidth / 2;
    
    if (config.shape === 'cascade') {
      // Rounded elegant cascade with curved sides
      return `M ${topL + 15} ${wrapperY - 10} Q ${topL - 20} ${wrapperY + 10} ${botL - 25} ${wrapperY + wrapperHeight} 
              L ${botR + 25} ${wrapperY + wrapperHeight} Q ${topR + 20} ${wrapperY + 10} ${topR - 15} ${wrapperY - 10} 
              Q ${cx} ${wrapperY - 20} ${topL + 15} ${wrapperY - 10} Z`;
    }
    if (config.shape === 'presentation') {
      // Rounded hand bouquet style with gentle bulge
      return `M ${topL + 20} ${wrapperY - 5} Q ${topL - 30} ${wrapperY + 40} ${botL - 20} ${wrapperY + wrapperHeight} 
              L ${botR + 20} ${wrapperY + wrapperHeight} Q ${topR + 30} ${wrapperY + 40} ${topR - 20} ${wrapperY - 5} 
              Q ${cx} ${wrapperY - 15} ${topL + 20} ${wrapperY - 5} Z`;
    }
    // Default round bouquet shape - conical and stylish
    return `M ${topL + 10} ${wrapperY} Q ${topL - 25} ${wrapperY + 30} ${botL - 15} ${wrapperY + wrapperHeight} 
            L ${botR + 15} ${wrapperY + wrapperHeight} Q ${topR + 25} ${wrapperY + 30} ${topR - 10} ${wrapperY} 
            Q ${cx} ${wrapperY - 15} ${topL + 10} ${wrapperY} Z`;
  };

  const getPatternId = () => `pattern-${config.wrapperPattern}`;

  const renderPattern = () => {
    if (config.wrapperPattern === 'solid') return null;
    if (config.wrapperPattern === 'polka-dots') {
      return (
        <pattern id={getPatternId()} width="25" height="25" patternUnits="userSpaceOnUse">
          <rect width="25" height="25" fill={config.wrapperColor} />
          <circle cx="12.5" cy="12.5" r="4" fill="rgba(255,255,255,0.25)" />
          <circle cx="12.5" cy="12.5" r="2.5" fill="rgba(255,255,255,0.15)" />
        </pattern>
      );
    }
    if (config.wrapperPattern === 'stripes') {
      return (
        <pattern id={getPatternId()} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="12" height="12" fill={config.wrapperColor} />
          <rect width="5" height="12" fill="rgba(255,255,255,0.2)" />
        </pattern>
      );
    }
    if (config.wrapperPattern === 'kraft') {
      return (
        <pattern id={getPatternId()} width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill={config.wrapperColor} />
          <circle cx="1" cy="1" r="0.5" fill="rgba(0,0,0,0.08)" />
          <circle cx="4" cy="4" r="0.5" fill="rgba(0,0,0,0.06)" />
          <circle cx="2" cy="5" r="0.4" fill="rgba(0,0,0,0.05)" />
        </pattern>
      );
    }
    return null;
  };

  const renderStems = () => {
    const cx = width / 2;
    return config.flowers.map((sf, i) => {
      const flower = flowers.find(f => f.id === sf.flowerId);
      if (!flower) return null;
      return (
        <path
          key={`stem-${i}`}
          d={`M ${sf.x} ${sf.y + 20} Q ${sf.x + (cx - sf.x) * 0.3} ${wrapperY} ${cx + (i - config.flowers.length / 2) * 5} ${wrapperY + wrapperHeight * 0.8}`}
          stroke="#4A7C59"
          strokeWidth={2.5}
          fill="none"
          opacity={0.7}
        />
      );
    });
  };

  const renderGreenery = () => {
    if (!config.showGreenery) return null;
    const cx = width / 2;
    const positions = [
      { x: cx - 100, y: wrapperY - 10, r: -30 },
      { x: cx + 100, y: wrapperY - 10, r: 30 },
      { x: cx - 80, y: wrapperY + 5, r: -45 },
      { x: cx + 80, y: wrapperY + 5, r: 45 },
      { x: cx - 60, y: wrapperY - 25, r: -15 },
      { x: cx + 60, y: wrapperY - 25, r: 15 },
    ];
    return (
      <>
        {positions.map((p, i) => (
          <g key={`leaf-${i}`} transform={`translate(${p.x}, ${p.y}) rotate(${p.r})`}>
            <path d="M 0 0 Q 8 -20 0 -40 Q -8 -20 0 0" fill="#6B8F71" opacity={0.6} />
            <line x1="0" y1="0" x2="0" y2="-38" stroke="#4A7C59" strokeWidth={0.8} opacity={0.4} />
          </g>
        ))}
      </>
    );
  };

  const renderBabyBreath = () => {
    if (!config.showBabyBreath) return null;
    const cx = width / 2;
    const dots: React.ReactNode[] = [];
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const r = 90 + (i * 7) % 40;
      const x = cx + Math.cos(angle) * r;
      const y = wrapperY - 30 + Math.sin(angle) * (r * 0.4);
      if (y < wrapperY - 5) {
        dots.push(
          <g key={`bb-${i}`}>
            <circle cx={x} cy={y} r={2.5} fill="#FFFFFF" opacity={0.8} />
            <circle cx={x} cy={y} r={1.5} fill="#FFFAF0" />
            <line x1={cx + (x - cx) * 0.3} y1={wrapperY - 15} x2={x} y2={y} stroke="#A8C5A0" strokeWidth={0.5} opacity={0.4} />
          </g>
        );
      }
    }
    return <>{dots}</>;
  };

  const renderRibbon = () => {
    const cx = width / 2;
    const ry = wrapperY + 5;
    return (
      <g>
        <path d={`M ${cx - 25} ${ry} Q ${cx} ${ry + 15} ${cx + 25} ${ry}`} stroke={config.ribbonColor} strokeWidth={6} fill="none" strokeLinecap="round" />
        <path d={`M ${cx - 15} ${ry + 5} Q ${cx - 25} ${ry + 30} ${cx - 30} ${ry + 40}`} stroke={config.ribbonColor} strokeWidth={4} fill="none" strokeLinecap="round" />
        <path d={`M ${cx + 15} ${ry + 5} Q ${cx + 25} ${ry + 30} ${cx + 30} ${ry + 40}`} stroke={config.ribbonColor} strokeWidth={4} fill="none" strokeLinecap="round" />
        <ellipse cx={cx - 12} cy={ry - 2} rx={12} ry={8} fill={config.ribbonColor} opacity={0.9} transform={`rotate(-20 ${cx - 12} ${ry - 2})`} />
        <ellipse cx={cx + 12} cy={ry - 2} rx={12} ry={8} fill={config.ribbonColor} opacity={0.9} transform={`rotate(20 ${cx + 12} ${ry - 2})`} />
        <circle cx={cx} cy={ry} r={4} fill={config.ribbonColor} />
      </g>
    );
  };

  const renderFlowers = () => {
    return config.flowers.map((sf) => {
      const flower = flowers.find(f => f.id === sf.flowerId);
      if (!flower) return null;
      const fSize = flower.size === 'large' ? 65 : flower.size === 'medium' ? 50 : 38;
      return (
        <g
          key={sf.flowerId}
          transform={`translate(${sf.x - fSize / 2}, ${sf.y - fSize / 2}) rotate(${sf.rotation} ${fSize / 2} ${fSize / 2}) scale(${sf.scale})`}
          style={{ cursor: interactive ? 'grab' : 'default', pointerEvents: 'auto' }}
          onMouseDown={() => handleMouseDown(sf.flowerId)}
          onTouchStart={() => handleMouseDown(sf.flowerId)}
        >
          <FlowerSVG flower={flower} size={fSize} />
        </g>
      );
    });
  };

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="select-none"
      style={{ touchAction: 'none' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <defs>
        {renderPattern()}
        {/* Shadow for wrapper */}
        <filter id="wrapper-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
        </filter>
      </defs>
      {renderStems()}
      {renderGreenery()}
      {renderBabyBreath()}
      
      {/* Bouquet Ties */}
      <g>
        {/* Thin twine */}
        <line
          x1={width * 0.3141}
          y1={height * 0.7622}
          x2={width * 0.48}
          y2={height * 0.7622}
          stroke="#3F3B2C"
          strokeWidth={1.5}
          opacity={0.8}
          strokeLinecap="round"
        />
        {/* Thick twine */}
        <line
          x1={width * 0.3086}
          y1={height * 0.7638}
          x2={width * 0.4745}
          y2={height * 0.7638}
          stroke="#3F3B2C"
          strokeWidth={2.5}
          opacity={0.7}
          strokeLinecap="round"
        />
      </g>
      
      {/* Wrapper with shadow and elegant styling */}
      <g filter="url(#wrapper-shadow)">
        <path
          d={getWrapperPath()}
          fill={config.wrapperPattern === 'solid' ? config.wrapperColor : `url(#${getPatternId()})`}
          stroke={config.wrapperColor}
          strokeWidth={0.5}
          opacity={0.92}
        />
        {/* Paper texture overlay for more realism */}
        <path
          d={getWrapperPath()}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={1}
          opacity={0.6}
        />
      </g>
      {renderRibbon()}
      {renderFlowers()}
      {config.flowers.length === 0 && (
        <text x={width / 2} y={height * 0.35} textAnchor="middle" fill="hsl(340, 10%, 60%)" fontSize="14" fontFamily="Quicksand">
          Select flowers to build your bouquet
        </text>
      )}
    </svg>
  );
};

export default BouquetCanvas;
