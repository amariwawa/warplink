import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Metrics as MissionStatement } from "@/components/sections/Metrics";
import { Capabilities as Approach } from "@/components/sections/Capabilities";
import { LogoCloud as SelectedWorks } from "@/components/sections/LogoCloud";
import { ServicesAccordion } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10 selection:text-white flex flex-col w-full overflow-hidden">
      <Navbar />
      <Hero />
      <MissionStatement />
      <Approach />
      <ServicesAccordion />
      <SelectedWorks />
      <CTA />
      <Footer />
    </main>
  );
}
