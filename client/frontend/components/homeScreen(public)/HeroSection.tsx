"use client";

import Link from "next/link";
import { motion } from "framer-motion";
export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center justify-center text-center p-24 h-[100vh] gap-10 text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-white tracking-tighter font-semibold md:text-[60px] text-3xl">
          Chat Instantly.{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#7F56D9] "
          >
            Connect Simply.
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[20px]  text-gray-300"
        >
          Send encrypted messages, customize your profile, and connect
          real-time.
        </motion.p>
      </motion.div>
      <Link
        href="/signup"
        className="bg-[#7F56D9] hover:bg-purple-700 duration-300 transition-colors px-8 py-4 text-white rounded-full text-[16px] font-semibold hover:scale-105"
      >
        Join us today
      </Link>
    </motion.section>
  );
}
