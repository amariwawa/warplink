"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export const ServicesAccordion: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const services = [
    { num: "01", title: "Marketing", desc: "Data-driven marketing campaigns designed to capture and convert your target audience with high ROI.", image: "/images/marketing_service.png" },
    { num: "02", title: "Web Development", desc: "Next-generation architectures. We build fast, scalable, and secure web applications using Next.js and modern stacks.", image: "/images/web_dev_service.png" },
    { num: "03", title: "Motion Graphics", desc: "Premium animations and interactive WebGL experiences that set your brand apart from the competition.", image: "/images/motion_graphics_service.png" }
  ];

  // Map scroll progress to openIndex
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) setOpenIndex(0);
      else if (latest < 0.66) setOpenIndex(1);
      else setOpenIndex(2);
    });
  }, [scrollYProgress]);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-black w-full relative min-h-[150vh]" 
      style={{ backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)", backgroundSize: "40px 40px" }}
    >
      <div className="max-w-7xl mx-auto px-6 sticky top-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-end text-right"
        >
          <h2 className="text-5xl md:text-[54px] font-medium text-white tracking-[-0.05em] mb-4">Services</h2>
          <p className="text-white/40 text-[15px] max-w-sm font-medium leading-relaxed">
            Comprehensive solutions for modern brands.
          </p>
        </motion.div>

        <div className="border-t border-white/5">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="border-b border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-12 flex items-center justify-between group focus:outline-none"
              >
                <div className="text-white/10 group-hover:text-white transition-colors">
                  {openIndex === index ? <Minus className="w-5 h-5 stroke-[1.5px]" /> : <Plus className="w-5 h-5 stroke-[1.5px]" />}
                </div>
                <div className="flex items-center space-x-16 md:space-x-24 flex-row-reverse space-x-reverse">
                  <span className="text-[11px] font-bold text-white/10 tracking-[0.3em]">{service.num}</span>
                  <span className={`text-3xl md:text-5xl font-medium transition-all duration-500 tracking-[-0.04em] ${openIndex === index ? "text-white" : "text-white/20 group-hover:text-white"}`}>
                    {service.title}
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-20 flex flex-col md:flex-row-reverse items-start md:items-center justify-between gap-16 pr-28 md:pr-[144px]">
                      <p className="text-white/60 max-w-lg leading-[1.7] text-[15px] font-medium text-right">
                        {service.desc}
                      </p>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-[400px] h-[240px] bg-[#0A0A0A] rounded-3xl overflow-hidden relative border border-white/5"
                      >
                        <img 
                          src={service.image} 
                          className="w-full h-full object-cover filter contrast-[1.2] opacity-50"
                          alt="Service Preview"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
