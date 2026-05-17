import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24 border-t border-white/5 relative" style={{ backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <a 
            href="mailto:amari@warplink.space" 
            className="text-4xl md:text-6xl lg:text-[100px] font-black tracking-tighter hover:opacity-50 transition-opacity duration-300 break-all"
          >
            AMARI@WARPLINK.SPACE
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/5">
          <div className="md:col-span-2">
            <span className="font-bold text-lg tracking-tighter block mb-4">WARPLINK</span>
            <p className="text-gray-500 text-xs max-w-xs">
              © 2026 Warplink Studio. All rights reserved. <br />
              Building the future of digital experiences in Lagos.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-6">Pages</h4>
            <ul className="space-y-4 text-xs text-gray-500">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#works" className="hover:text-white transition-colors">Works</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-6">Socials</h4>
            <ul className="space-y-4 text-xs text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
