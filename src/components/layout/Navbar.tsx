"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WarpLogo } from "@/components/ui/WarpLogo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Works", href: "#works" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo Brand */}
        <div className="flex-1 flex items-center">
          <WarpLogo />
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href === "#contact") {
                  e.preventDefault();
                  window.location.hash = 'contact';
                  window.dispatchEvent(new CustomEvent('open-contact-form'));
                }
              }}
              className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button - Pushed to right */}
        <div className="flex-1 hidden md:flex items-center justify-end">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'contact';
              window.dispatchEvent(new CustomEvent('open-contact-form'));
            }}
            className="px-6 py-2 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5 py-8 px-6 flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (link.href === "#contact") {
                  e.preventDefault();
                  window.location.hash = 'contact';
                  window.dispatchEvent(new CustomEvent('open-contact-form'));
                }
              }}
              className="text-xl font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-white/5 flex flex-col">
            <a
              href="#contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                e.preventDefault();
                window.location.hash = 'contact';
                window.dispatchEvent(new CustomEvent('open-contact-form'));
              }}
              className="text-center py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
