"use client";

import React from "react";
import { motion } from "framer-motion";
import { Copy, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      
      <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-20 pt-40 lg:pt-60 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-10 z-10">
          <h1 className="text-5xl lg:text-[76px] font-bold tracking-tight text-white leading-[0.9] font-sans">
            We build the digital layer <br />
            your brand deserves.
          </h1>

          <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-xl font-medium">
            Warplink is a Lagos-based design and engineering studio. We work with founders who know what they want and need a team that can build it — fast, clean, and at a standard the market hasn't seen yet.
          </p>
          
          {/* Command Line Box */}
          <div className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-lg p-4 flex items-center justify-between max-w-lg">
            <div className="font-mono text-sm text-[#888] flex items-center">
              <span className="text-[#333] mr-2">$</span>
              <span>npx create-warplink-app@latest</span>
            </div>
            <button className="text-[#333] hover:text-white transition-colors">
              <Copy size={16} />
            </button>
          </div>
          
          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors text-sm font-sans">
              VIEW OUR WORKS
            </button>
            <button className="bg-transparent text-white border border-[#222] font-medium px-6 py-3 rounded-md hover:border-[#444] transition-colors text-sm font-sans">
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Right Content - Terminal */}
        <div className="relative z-10">
          <div className="bg-[#080808] border border-[#141414] rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#0F0F0F] px-4 py-3 flex items-center justify-between border-b border-[#141414]">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 bg-[#ff5f56] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[#ffbd2e] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[#27c93f] rounded-full"></div>
              </div>
              <div className="text-[11px] text-[#555] font-mono">
                warplink-- build-pipeline-- 140x46
              </div>
              <div className="w-10"></div> {/* Spacer */}
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-[11px] leading-relaxed text-[#555] space-y-6 h-[460px] overflow-y-auto">
              {/* Mission Control Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-[#ff6b00]">▲ Warplink Engine</span>
                  <span className="text-[#333]">~/Development/starize-platform</span>
                </div>
                <span className="text-[#333]">Build Success Rate 100% . TIME 1h 56m 43s</span>
              </div>
              
              {/* Progress Bar */}
              <div className="flex items-center space-x-3">
                <span className="text-[#ff3333] font-bold">• DEPLOYING</span>
                <div className="flex-1 bg-[#141414] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#ff6b00] h-full w-[85%]"></div>
                </div>
                <span className="text-[#333]">7/7 [+0]</span>
              </div>
              
              {/* Main Content Grid */}
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <div className="text-white mb-1">Active Stage <span className="text-[#333]">production-optimization</span></div>
                    <div className="text-[#333]">skill fullstack-engineering</div>
                    <div className="text-[#333]">milestone high-fidelity-ui</div>
                  </div>
                  
                  <div>
                    <div className="text-white mb-1">Preconditions</div>
                    <div className="text-[#333]">• Design system tokens validated</div>
                    <div className="text-[#333]">• Next.js build optimized</div>
                    <div className="text-[#333]">• Animations performant at 60fps</div>
                  </div>

                  <div>
                    <div className="text-white mb-1">Expected Behavior</div>
                    <div className="text-[#333]">• Smooth scroll transitions active</div>
                    <div className="text-[#333]">• Dark mode contrast compliant</div>
                    <div className="text-[#333]">• Mobile responsiveness verified</div>
                    <div className="text-[#333]">• +10 more</div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <div className="text-white mb-1">Capabilities <span className="text-[#333]">7/7</span></div>
                    <div className="text-[#27c93f]">✓ custom-design-system</div>
                    <div className="text-[#27c93f]">✓ smooth-scroll-engine</div>
                    <div className="text-[#27c93f]">✓ dark-mode-noir</div>
                    <div className="text-[#27c93f]">✓ responsive-layouts</div>
                    <div className="text-[#27c93f]">✓ seo-optimization</div>
                    <div className="text-[#27c93f]">✓ analytics-integration</div>
                    <div className="text-[#27c93f]">✓ high-performance-load</div>
                  </div>
                  
                  <div>
                    <div className="text-white mb-1">Progress Log</div>
                    <div className="space-y-0.5 text-[#333]">
                      <div>93s ago Worker #b3e81f42 started [design-system]</div>
                      <div>93s ago Worker #b3e81f42 completed [design-system] ✓</div>
                      <div>93s ago Milestone validation: Core-assets passed (4/4)</div>
                      <div>93s ago Worker #c4f92a53 started [smooth-scroll]</div>
                      <div>93s ago Worker #c4f92a53 completed [smooth-scroll] ✓</div>
                      <div>93s ago Worker #d5a03c64 started [dark-mode]</div>
                      <div>93s ago Worker #d5a03c64 completed [dark-mode] ✓</div>
                      <div>93s ago Worker #e9b14c75 started [production-deploy]</div>
                      <div>93s ago Worker #e9b14c75 completed [production-deploy] ✓</div>
                      <div className="text-[#27c93f]">92s ago Milestone validation: all checks passed (7/7)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Section */}
              <div className="border-t border-[#141414] pt-4 mt-2">
                <div className="flex items-center justify-between text-[#333] mb-2">
                  <span>Active Worker: #7 warplink-builder</span>
                  <span>Duration 52m 50s</span>
                </div>
                <div className="text-[#333] space-y-0.5">
                  <div>Read packages/ui/src/core.ts (312 lines)</div>
                  <div>Create packages/ui/src/Hero.tsx</div>
                  <div className="text-[#444]">  - File created (278 lines)</div>
                  <div>Execute pnpm -r test</div>
                  <div className="text-[#444]">  - 156 passed, 0 failed. Coverage: 92%</div>
                  <div>Execute git commit -m 'feat(core): high fidelity layout'</div>
                  <div className="text-[#444]">  - [main e8b1dc7] 14 files, +1,891</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Right Link */}
      <div className="absolute bottom-8 right-8 flex items-center text-[#333] hover:text-white transition-colors cursor-pointer text-xs font-mono">
        <span>LEARN MORE ABOUT OUR PROCESS</span>
        <ArrowRight size={12} className="ml-1" />
      </div>
    </section>
  );
};
