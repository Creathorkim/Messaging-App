"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function CtaSection() {
  return (
    <section className="flex flex-col items-center justify-center pb-24 pt-20 px-6 md:px-20 bg-white w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-3xl space-y-6"
      >
        <h2 className="text-[36px] md:text-[56px] font-bold tracking-tight leading-tight">
          Ready to chat without compromise?
        </h2>
        <p className="text-[18px] md:text-[20px] leading-relaxed text-[#535862]">
          {" "}
          Join thousands who&apos;ve already made the switch to faster, simpler,
          and more secure messaging. No credit card required.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-9">
          <Link
            href="/signup"
            className="bg-white hover:scale-105 text-[#7F56D9] px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Get Started Free
          </Link>
          <Link
            href="/contact"
            className="bg-[#7F56D9] hover:scale-105 border-2 border-white text-white px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-purple-700 duration-300 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
