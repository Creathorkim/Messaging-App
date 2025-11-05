"use client";
import Particles from "@/components/Particles";

export default function HomePage() {
  return (
    <div className="relative w-full h-[600px] bg-[#060010] min-h-screen overflow-x-hidden ">
      <Particles
        className="absolute inset-0"
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}
