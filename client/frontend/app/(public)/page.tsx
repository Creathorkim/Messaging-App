"use client";
import { HeroSection } from "@/components/homeScreen(public)/HeroSection";
import FeaturedTalentsSection from "@/components/homeScreen(public)/HowItWorksSection";
import AboutSection from "@/components/homeScreen(public)/AboutSection";
import CtaSection from "@/components/homeScreen(public)/CtaSection";
export default function HomePage(): React.ReactElement {
  return (
    <div className="w-full flex flex-col items-center bg-[#060010] ">
      {/* MAIN SECTION  */}
      <HeroSection />

      {/* FEATURES SECTION  */}
      <FeaturedTalentsSection />

      {/* ABOUT SECTION  */}
      <AboutSection />

      {/* CTA SECTION  */}
      <CtaSection />
    </div>
  );
}
