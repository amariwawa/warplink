"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export const LogoCloud: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const works = [
    { 
      title: "Design", 
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop", 
      client: "STARIZE", 
      desc: "Beautiful on sight. Functional by design."
    },
    { 
      title: "Engineering", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop", 
      client: "FOOD NEXUS", 
      desc: "Built clean. Runs fast. Scales when you need it to."
    },
    { 
      title: "Strategy", 
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000", 
      client: "WAVE PAY", 
      desc: "We figure out what you're actually building before we touch a screen."
    },
    { 
      title: "Creative", 
      image: "https://images.unsplash.com/photo-1635241161466-541f065683ba?q=80&w=1000&auto=format&fit=crop", 
      client: "NOIR ART", 
      desc: "Spatial metaverse scenes and immersive 3D environments that redefine digital interaction."
    },
    { 
      title: "Product", 
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop", 
      client: "CORE HEALTH", 
      desc: "From idea to shipped — we own the whole thing."
    }
  ];

  return (
    <section className="py-12 bg-black w-full relative" style={{ backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          id="works"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-start text-left pt-12"
        >
          <h2 className="text-5xl md:text-[54px] font-medium text-white tracking-[-0.05em] mb-4">Selected Works</h2>
          <p className="text-white/40 text-[15px] max-w-sm font-medium leading-relaxed">
            A curated selection of our most impactful design and engineering projects.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row h-[750px] border border-white/5 overflow-hidden"
        >
          
          {/* Active Image Panel (Left - Shifted) */}
          <div className="flex-[2.5] relative bg-[#050505] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-end"
              >
                <div className="absolute top-0 left-0 right-0 p-12 md:p-16 flex justify-between items-start z-10">
                  <div className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">v.0.1.1</div>
                  <div className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">WARPLINK // 2026</div>
                </div>

                {/* Static full-bleed photorealistic image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={works[activeTab].image} 
                    alt={works[activeTab].title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="p-12 md:p-16 relative z-10 max-w-lg">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col space-y-4"
                  >
                    <h3 className="text-white text-[11px] font-bold tracking-[0.4em] uppercase opacity-30">{works[activeTab].title}</h3>
                    <p className="text-white text-[15px] font-medium leading-[1.6] opacity-70">
                      {works[activeTab].desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Vertical Tabs (Right - 5 Options) */}
          <div className="flex border-l border-white/5 bg-black">
            {works.map((work, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-14 md:w-20 border-r last:border-r-0 border-white/5 flex flex-col items-center justify-between py-12 md:py-16 transition-all duration-500 ${
                  activeTab === index ? "bg-[#111] text-white" : "bg-black text-white/20 hover:bg-white/[0.02]"
                }`}
              >
                <Plus className={`w-3.5 h-3.5 transition-transform duration-500 ${activeTab === index ? "text-white rotate-45" : "text-white/20"}`} />
                <span 
                  className="font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {work.title}
                </span>
                <div className={`w-1 h-1 rounded-full transition-all duration-500 ${activeTab === index ? "bg-white scale-125" : "bg-white/20"}`} />
              </button>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};
