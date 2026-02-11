import React from 'react';
import { Flower } from '@/types/bouquet';

interface FlowerSVGProps {
  flower: Flower;
  size?: number;
  className?: string;
}

const FlowerSVG: React.FC<FlowerSVGProps> = ({ flower, size = 60, className }) => {
  const half = size / 2;
  const { petalCount, petalShape, color, centerColor, accentColor } = flower;

  // Rose flower
  const renderRose = () => {
    return (
      <g>
        {/* Outer petals */}
        <ellipse cx={half} cy={half - size * 0.15} rx={size * 0.18} ry={size * 0.22} fill={color} opacity={0.8} />
        <ellipse cx={half + size * 0.15} cy={half - size * 0.08} rx={size * 0.18} ry={size * 0.22} fill={color} opacity={0.85} transform={`rotate(72 ${half + size * 0.15} ${half - size * 0.08})`} />
        <ellipse cx={half + size * 0.1} cy={half + size * 0.14} rx={size * 0.18} ry={size * 0.22} fill={color} opacity={0.85} transform={`rotate(144 ${half + size * 0.1} ${half + size * 0.14})`} />
        <ellipse cx={half - size * 0.1} cy={half + size * 0.14} rx={size * 0.18} ry={size * 0.22} fill={color} opacity={0.85} transform={`rotate(216 ${half - size * 0.1} ${half + size * 0.14})`} />
        <ellipse cx={half - size * 0.15} cy={half - size * 0.08} rx={size * 0.18} ry={size * 0.22} fill={color} opacity={0.8} transform={`rotate(288 ${half - size * 0.15} ${half - size * 0.08})`} />
        
        {/* Middle petals */}
        <ellipse cx={half} cy={half - size * 0.08} rx={size * 0.12} ry={size * 0.15} fill={accentColor || color} opacity={0.75} />
        <ellipse cx={half + size * 0.08} cy={half} rx={size * 0.12} ry={size * 0.15} fill={accentColor || color} opacity={0.75} transform={`rotate(72 ${half + size * 0.08} ${half})`} />
        <ellipse cx={half + size * 0.05} cy={half + size * 0.08} rx={size * 0.12} ry={size * 0.15} fill={accentColor || color} opacity={0.75} transform={`rotate(144 ${half + size * 0.05} ${half + size * 0.08})`} />
        <ellipse cx={half - size * 0.05} cy={half + size * 0.08} rx={size * 0.12} ry={size * 0.15} fill={accentColor || color} opacity={0.75} transform={`rotate(216 ${half - size * 0.05} ${half + size * 0.08})`} />
        <ellipse cx={half - size * 0.08} cy={half} rx={size * 0.12} ry={size * 0.15} fill={accentColor || color} opacity={0.75} transform={`rotate(288 ${half - size * 0.08} ${half})`} />
        
        {/* Center */}
        <circle cx={half} cy={half} r={size * 0.06} fill={centerColor} />
        <circle cx={half} cy={half} r={size * 0.04} fill={color} opacity={0.4} />
      </g>
    );
  };

  // Tulip flower
  const renderTulip = () => {
    return (
      <g>
        {/* Left petal */}
        <path
          d={`M ${half - size * 0.12} ${half + size * 0.15} Q ${half - size * 0.18} ${half - size * 0.05} ${half - size * 0.1} ${half - size * 0.18} Q ${half - size * 0.05} ${half - size * 0.08} ${half - size * 0.12} ${half + size * 0.15}`}
          fill={color}
          opacity={0.85}
        />
        {/* Center petal */}
        <path
          d={`M ${half - size * 0.08} ${half + size * 0.18} Q ${half} ${half - size * 0.2} ${half + size * 0.08} ${half + size * 0.18}`}
          fill={accentColor || color}
          opacity={0.9}
        />
        {/* Right petal */}
        <path
          d={`M ${half + size * 0.12} ${half + size * 0.15} Q ${half + size * 0.18} ${half - size * 0.05} ${half + size * 0.1} ${half - size * 0.18} Q ${half + size * 0.05} ${half - size * 0.08} ${half + size * 0.12} ${half + size * 0.15}`}
          fill={color}
          opacity={0.85}
        />
        {/* Center dot */}
        <circle cx={half} cy={half} r={size * 0.04} fill={centerColor} opacity={0.6} />
      </g>
    );
  };

  // Sunflower
  const renderSunflower = () => {
    const petals = [];
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const petalLength = size * 0.22;
      const petalWidth = size * 0.06;
      const px = half + Math.cos(angle) * size * 0.12;
      const py = half + Math.sin(angle) * size * 0.12;
      const tipX = half + Math.cos(angle) * (size * 0.12 + petalLength);
      const tipY = half + Math.sin(angle) * (size * 0.12 + petalLength);

      petals.push(
        <ellipse
          key={i}
          cx={(px + tipX) / 2}
          cy={(py + tipY) / 2}
          rx={petalWidth}
          ry={petalLength / 2}
          fill={color}
          opacity={0.9}
          transform={`rotate(${(angle * 180) / Math.PI} ${(px + tipX) / 2} ${(py + tipY) / 2})`}
        />
      );
    }
    return (
      <g>
        {petals}
        <circle cx={half} cy={half} r={size * 0.1} fill={centerColor} />
        {/* Seed pattern in center */}
        {Array.from({ length: 5 }).map((_, i) =>
          Array.from({ length: 5 }).map((_, j) => {
            const angle = Math.random() * Math.PI * 2;
            const distance = size * 0.05;
            const x = half + Math.cos(angle) * distance * (i / 5);
            const y = half + Math.sin(angle) * distance * (j / 5);
            return (
              <circle
                key={`${i}-${j}`}
                cx={x}
                cy={y}
                r={size * 0.01}
                fill={accentColor || '#8B6914'}
                opacity={0.7}
              />
            );
          })
        )}
      </g>
    );
  };

  // Daisy flower
  const renderDaisy = () => {
    const petals = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const px = half + Math.cos(angle) * size * 0.15;
      const py = half + Math.sin(angle) * size * 0.15;
      petals.push(
        <ellipse
          key={i}
          cx={px}
          cy={py}
          rx={size * 0.08}
          ry={size * 0.12}
          fill={color}
          opacity={0.9}
          transform={`rotate(${(angle * 180) / Math.PI} ${px} ${py})`}
        />
      );
    }
    return (
      <g>
        {petals}
        <circle cx={half} cy={half} r={size * 0.09} fill={centerColor} />
        <circle cx={half} cy={half} r={size * 0.05} fill={accentColor || color} opacity={0.6} />
      </g>
    );
  };

  // Hibiscus flower
  const renderHibiscus = () => {
    return (
      <g>
        {/* 5 Large petals */}
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (i / 5) * Math.PI * 2;
          const px = half + Math.cos(angle) * size * 0.12;
          const py = half + Math.sin(angle) * size * 0.12;
          const tipX = half + Math.cos(angle) * size * 0.22;
          const tipY = half + Math.sin(angle) * size * 0.22;
          const controlX = half + Math.cos(angle + 0.3) * size * 0.18;
          const controlY = half + Math.sin(angle + 0.3) * size * 0.18;
          return (
            <path
              key={i}
              d={`M ${px} ${py} Q ${controlX} ${controlY} ${tipX} ${tipY} Q ${half + Math.cos(angle - 0.3) * size * 0.18} ${half + Math.sin(angle - 0.3) * size * 0.18} ${px} ${py}`}
              fill={color}
              opacity={0.85}
            />
          );
        })}
        {/* Stamen/stigma in center */}
        <circle cx={half} cy={half} r={size * 0.08} fill={centerColor} />
        <rect x={half - size * 0.02} y={half - size * 0.1} width={size * 0.04} height={size * 0.2} fill={accentColor || color} opacity={0.6} />
      </g>
    );
  };

  // Orchid flower
  const renderOrchid = () => {
    return (
      <g>
        {/* Top petal */}
        <ellipse cx={half} cy={half - size * 0.12} rx={size * 0.08} ry={size * 0.13} fill={color} opacity={0.9} />
        {/* Left side petal */}
        <ellipse cx={half - size * 0.1} cy={half - size * 0.04} rx={size * 0.08} ry={size * 0.12} fill={color} opacity={0.85} />
        {/* Right side petal */}
        <ellipse cx={half + size * 0.1} cy={half - size * 0.04} rx={size * 0.08} ry={size * 0.12} fill={color} opacity={0.85} />
        {/* Lower left lip */}
        <path
          d={`M ${half - size * 0.08} ${half + size * 0.08} Q ${half - size * 0.12} ${half + size * 0.15} ${half - size * 0.04} ${half + size * 0.16}`}
          fill={accentColor || color}
          opacity={0.9}
        />
        {/* Lower right lip */}
        <path
          d={`M ${half + size * 0.08} ${half + size * 0.08} Q ${half + size * 0.12} ${half + size * 0.15} ${half + size * 0.04} ${half + size * 0.16}`}
          fill={accentColor || color}
          opacity={0.9}
        />
        {/* Lower center column */}
        <path
          d={`M ${half - size * 0.04} ${half + size * 0.08} Q ${half} ${half + size * 0.12} ${half + size * 0.04} ${half + size * 0.08}`}
          fill={centerColor}
          opacity={0.7}
        />
      </g>
    );
  };

  // Choose flower type based on petalShape
  const renderFlower = () => {
    switch (petalShape) {
      case 'round':
        return renderRose();
      case 'pointed':
        return renderTulip();
      case 'wavy':
        return renderSunflower();
      case 'star':
        return renderDaisy();
      case 'bell':
        return renderHibiscus();
      case 'tube':
        return renderOrchid();
      default:
        return renderRose();
    }
  };

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className}>
      {renderFlower()}
    </svg>
  );
};

export default FlowerSVG;
