import React from 'react';

const CurveLine = () => {
  return (
    <div className="w-full h-24 relative overflow-hidden mb-16">
      <svg 
        className="w-full h-full"
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="strokeGradient" gradientUnits="userSpaceOnUse"
            x1="0" y1="80" x2="1200" y2="80">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0)" />
            <stop offset="50%" stopColor="rgb(230, 0, 0)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
          </linearGradient>
          {/* Gradient for the area below the curve */}
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0, 102, 255, 0.)," />
            <stop offset="10%" stopColor="rgba(0, 102, 255, 0.2)," />
            <stop offset="40%" stopColor="rgba(0, 102, 255, 0.1),rgba(0,0,0,0.5)" />
            <stop offset="70%" stopColor="rgba(0,0,0,0.5)" />
            <stop offset="90%" stopColor="rgba(0,0,0,0.7)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.9)" />
          </linearGradient>
          {/* Blur filter for the area */}
          <filter id="areaBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
        {/* Filled area under the curve */}
        <path
          d="M0,80 Q600,0 1200,80 L1200,100 L0,100 Z"
          fill="url(#areaGradient)"
          filter="url(#areaBlur)"
        />
        {/* Main curve line */}
        <path
          d="M0,80 Q600,0 1200,80"
          className="fill-none"
          stroke="url(#strokeGradient)"
          strokeWidth="4"
          style={{
            strokeLinecap: "round",
            vectorEffect: "non-scaling-stroke",
          }}
        />
      </svg>
    </div>
  );
};

export default CurveLine;