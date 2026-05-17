"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Plus } from "lucide-react";

export const LustraHero: React.FC = () => {
  const tags = [
    "Web",
    "eCommerce",
    "Cloud Computing",
    "Database",
    "Customer Intelligence",
    "Mobile App",
    "Data Analytics",
    "Cybersecurity Services",
    "Custom Work Tools",
  ];

  return (
    <section className="bg-[#111111] text-white pt-32 pb-16 px-4 md:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        {/* White Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[40px] p-8 md:p-16 mb-16 relative overflow-hidden"
        >
          {/* Abstract Image Placeholder inside the card on the right */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 md:w-[60%] pointer-events-none opacity-80 mix-blend-multiply">
            {/* We use a radial gradient as a placeholder for the abstract mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-white to-white" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-50 grayscale" />
          </div>

          <div className="relative z-10 flex flex-col h-full max-w-lg">
            <h1 className="text-6xl md:text-8xl font-light text-black tracking-tight leading-[0.9] mb-6">
              Lustra <br />
              Studio
            </h1>
            
            <div className="flex items-center space-x-3 mb-16">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                <Star className="w-6 h-6 fill-white" />
              </div>
              <Plus className="w-8 h-8 text-black" />
            </div>

            <div className="mt-auto pt-20">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">
                RECENT WORKS
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 rounded-full border border-gray-300 text-black text-xs font-medium hover:bg-black hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Block Below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-8">
            Building something that is bigger than ourselves and to create tools and products that will have a global impact, for good.
          </h2>
          
          <button className="flex items-center space-x-3 text-sm font-medium hover:text-gray-300 transition-colors">
            <span>More about us</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-black" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
