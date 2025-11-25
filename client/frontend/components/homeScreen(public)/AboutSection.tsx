"use client";

import { motion } from "framer-motion";
export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col pb-24 pt-20 px-6 md:px-20 bg-[#060010] text-white w-full gap-16"
      id="about"
    >
      <div className="text-center items-center mx-auto space-y-4 max-w-3xl">
        <p className=" text-[#6941C6] text-center text-[16px] md:text-[18px] font-semibold uppercase tracking-wide">
          Why KimChat was built
        </p>
        <h2 className="text-white  text-[36px] md:text-[56px] font-bold tracking-tight leading-tight">
          Built for people who value real connections
        </h2>
      </div>

      <div className="mx-auto">
        <p className="text-gray-300 text-[18px] md:text-[20px] leading-relaxed text-center">
          We believe messaging should be simple, fast, and secure without
          compromising on any of those three. Too many chat apps are bloated
          with features you&apos;ll never use, or they&apos;re fast but
          sacrifice your privacy. We built KimChat because we were tired of
          choosing between speed, simplicity, and security. Our mission is
          straightforward: give you the fastest, most intuitive messaging
          experience while keeping your conversations completely private.{" "}
          <span className="text-white font-semibold">
            No data mining. No ads. No complexity.
          </span>{" "}
          Just pure, seamless communication with the people who matter most.
        </p>
      </div>
    </motion.section>
  );
}
