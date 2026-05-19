"use client";

import React from "react";
import { motion } from "framer-motion";

export const Capabilities: React.FC = () => {
  const approaches = [
    {
      num: "01",
      title: "SERVICES",
      desc: "Full-stack design and engineering, end to end. From your first wireframe to production deploy, we handle it — so you can focus on the business."
    },
    {
      num: "02",
      title: "TECHNOLOGY",
      desc: "We build on Next.js, React, and modern web infrastructure. Fast by default. Scalable by design. No technical debt handed off to you."
    },
    {
      num: "03",
      title: "WHO WE BUILD FOR",
      desc: "Founders moving fast. African startups with global ambitions. Brands that want a premium digital presence without the agency runaround."
    },
    {
      num: "04",
      title: "HOW WE MEASURE",
      desc: "We don't ship and disappear. We track performance, conversion, and user behavior — then iterate until the numbers reflect the quality of the work."
    }
  ];

  return (
    <section className="py-24 bg-black w-full relative" style={{ backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-[54px] font-medium text-white tracking-[-0.05em] leading-[1.05]">
            About our<br />approach to work
          </h2>
        </motion.div>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-full h-[1px] bg-white/10 mb-16 origin-left" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {approaches.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-9 h-9 bg-white flex items-center justify-center"
                >
                  <span className="text-[11px] font-bold text-black tracking-normal">{item.num}</span>
                </motion.div>
                <h3 className="text-[11px] font-bold text-white tracking-[0.3em] uppercase opacity-40">
                  {item.title}
                </h3>
              </div>
              <p className="text-white/60 text-sm leading-[1.6] max-w-[280px] font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
