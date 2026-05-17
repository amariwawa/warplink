import React from "react";

export const WarpLogo: React.FC<{ className?: string; iconSize?: string }> = ({ 
  className = "text-2xl font-black tracking-tight text-white", 
  iconSize = "w-7 h-7" 
}) => {
  return (
    <div className="flex items-center space-x-2 select-none group cursor-pointer">
      <span className={className}>warp.</span>
      <div className={`${iconSize} bg-white flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current" xmlns="http://www.w3.org/2000/00/svg">
          {/* Black background cutout representing the dark mode step */}
          <path d="M 0 55 H 40 L 60 25 H 100 V 45 H 65 L 45 75 H 0 Z" />
        </svg>
      </div>
    </div>
  );
};
