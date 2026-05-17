"use client";

import React from "react";
import { motion } from "framer-motion";

export const IntegrationFlow: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative w-full" style={{ backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0A0A0A] border border-white/5 rounded-[40px] p-8 md:p-14 relative"
          style={{ backgroundImage: "radial-gradient(#ffffff08 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <div className="inline-block border border-orange-500 text-orange-500 text-[9px] font-bold tracking-[0.2em] px-3 py-1 rounded-full mb-6">
                MISSION
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white/30 mb-2 tracking-tight">
                Our Focus is Simple
              </h2>
              <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
                Design to convert
              </h3>
            </div>
            <div className="mt-6 md:mt-0 max-w-[200px] text-left md:text-right">
              <p className="text-white/40 text-sm font-medium leading-relaxed">
                We promise to deliver beyond your expectations for your business
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Col 1 */}
            <div className="md:col-span-1 flex flex-col gap-4">
              {/* Avatars Card */}
              <div className="bg-black border border-white/5 rounded-3xl p-6 flex items-center justify-between shadow-sm">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=8" className="w-8 h-8 rounded-full border-2 border-black object-cover" alt="Partner 1" />
                  <img src="https://i.pravatar.cc/100?img=12" className="w-8 h-8 rounded-full border-2 border-black object-cover" alt="Partner 2" />
                  <img src="https://i.pravatar.cc/100?img=33" className="w-8 h-8 rounded-full border-2 border-black object-cover" alt="Partner 3" />
                  <img src="https://i.pravatar.cc/100?img=47" className="w-8 h-8 rounded-full border-2 border-black object-cover" alt="Partner 4" />
                </div>
                <div className="text-[8px] font-bold tracking-[0.1em] text-white/20">100+ PARTNERS</div>
              </div>
              
              {/* Return on Investment */}
              <div className="bg-black border border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-sm flex-1">
                <p className="text-white/40 text-sm mb-12 font-medium">
                  Earn back on your investment within 30 days
                </p>
                <div>
                  <h4 className="text-5xl font-light text-white mb-1">90%</h4>
                  <p className="text-white/20 text-[11px] font-medium">Return on investment (ROI)</p>
                </div>
              </div>
            </div>

            {/* Col 2 */}
            <div className="md:col-span-1 flex flex-col gap-4">
              {/* Revenue Generated */}
              <div className="bg-black border border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-sm flex-1">
                <p className="text-white/40 text-sm mb-12 font-medium">
                  Through our custom-tailored funnel systems
                </p>
                <div>
                  <h4 className="text-5xl font-light text-white mb-1">$2.5<span className="text-white/30 text-3xl font-light">+</span></h4>
                  <p className="text-white/20 text-[11px] font-medium">Revenue generated</p>
                </div>
              </div>

              {/* Available Indicator */}
              <div className="bg-black border border-white/5 rounded-3xl p-6 shadow-sm flex items-center space-x-3 justify-center md:justify-start">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div className="text-[8px] font-bold text-white/20 tracking-wider">AVAILABLE FOR 2026 JANUARY</div>
              </div>
            </div>

            {/* Col 3 & 4 (Dark Card) */}
            <div className="md:col-span-2 bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden text-white shadow-xl min-h-[300px]">
              <p className="text-white/60 text-sm relative z-10 max-w-[250px] font-medium leading-relaxed">
                We delivered 50+ projects worldwide, helping service-based companies
              </p>
              
              {/* Background Zig-Zag Chart */}
              <div className="absolute top-[20%] left-[-5%] right-[-5%] bottom-0 flex items-center justify-center opacity-10 pointer-events-none">
                <svg viewBox="0 0 300 150" className="w-full h-full stroke-white" preserveAspectRatio="none">
                  <path d="M-20,120 L80,50 L160,80 L320,10" fill="none" strokeWidth="24" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>

              <div className="relative z-10 flex justify-between items-end mt-16">
                <div>
                  <h4 className="text-5xl font-light">4.8<span className="text-white/30 text-2xl">/5</span></h4>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-bold text-white/20 tracking-[0.2em]">TRUSTED BY</p>
                  <p className="text-[8px] font-bold text-white/20 tracking-[0.2em]">CLIENTS WORLDWIDE</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
