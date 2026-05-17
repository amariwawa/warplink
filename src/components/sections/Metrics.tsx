"use client";

import React from "react";
import { motion } from "framer-motion";

export const Metrics: React.FC = () => {
  const testimonials = [
    "\"Warplink delivered a product that exceeded our expectations.\" — STARIZE",
    "\"The technical foundation they built is solid and scalable.\" — FOOD NEXUS",
    "\"A truly premium experience from start to finish.\" — AMBITIOUS FOUNDER",
    "\"Design and engineering in perfect harmony.\" — TECH STARTUP"
  ];

  return (
    <section className="py-24 bg-black overflow-hidden relative border-y border-white/5" style={{ backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex space-x-12 px-6"
        >
          {[...testimonials, ...testimonials].map((text, idx) => (
            <h2 
              key={idx}
              className="text-4xl md:text-6xl font-medium text-white leading-none tracking-[-0.05em] uppercase"
            >
              {text}
            </h2>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
