"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTA: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = React.useState(false);

  React.useEffect(() => {
    const handleOpenForm = () => {
      setIsFormVisible(true);
      setTimeout(() => {
        const formElement = document.getElementById('form');
        const contactSection = document.getElementById('contact');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

    // Check hash on load
    if (window.location.hash === '#contact') {
      handleOpenForm();
    }

    // Listen for custom event
    window.addEventListener('open-contact-form', handleOpenForm);
    
    // Also listen for hash changes
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        handleOpenForm();
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('open-contact-form', handleOpenForm);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div id="contact" className="w-full bg-black">
      {/* Warplink. CTA Strip */}
      <section className="relative w-full h-[600px] overflow-hidden flex items-center justify-center bg-black" style={{ backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
        <div className="relative z-10 flex flex-col items-center w-full px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase mb-8"
          >
            Start your project
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-6xl md:text-[19vw] font-black text-white tracking-[-0.08em] uppercase mb-12 leading-[0.8] text-center w-full"
          >
            Warplink.
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="group flex items-center space-x-6 bg-white px-10 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            <span className="text-black text-[11px] font-bold uppercase tracking-[0.3em]">
              {isFormVisible ? "Close Form" : "Let's Talk"}
            </span>
            <div className={`w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-500 ${isFormVisible ? "rotate-45" : ""}`}>
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </motion.button>
        </div>
      </section>

      {/* Contact Form Section (Revealed on click) */}
      <AnimatePresence>
        {isFormVisible && (
          <motion.section 
            id="form"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-black"
          >
            <div className="py-24 w-full max-w-4xl mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center mb-32"
              >
                <h2 className="text-4xl md:text-[54px] font-medium tracking-[-0.05em] text-white uppercase">
                  Let's Connect
                </h2>
              </motion.div>

              <form className="flex flex-col space-y-20">
                {[
                  { label: "What's your name?", placeholder: "Name" },
                  { label: "Where can we reach you?", placeholder: "Email" },
                  { label: "What's on your mind?", placeholder: "Message" }
                ].map((field, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col space-y-6"
                  >
                    <label className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">{field.label}</label>
                    <input 
                      type="text" 
                      className="bg-transparent border-b border-white/5 pb-8 text-2xl md:text-3xl text-white placeholder-white/[0.02] focus:outline-none focus:border-white/20 transition-colors font-medium tracking-tight"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="pt-16 flex justify-center"
                >
                  <button 
                    type="button"
                    className="group flex items-center space-x-8"
                  >
                    <span className="text-white text-xs font-bold uppercase tracking-[0.4em]">
                      Send Message
                    </span>
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-6 h-6 text-black" />
                    </div>
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
