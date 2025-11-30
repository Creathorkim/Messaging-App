"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Image, Users, Smartphone, Sparkles } from "lucide-react";
import HowItWorksCard from "./card/HowItWorksCard";

const steps = [
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description:
      "Send and receive messages instantly. No delays, no waiting just pure, real-time conversation that keeps you connected.",
  },
  {
    icon: Shield,
    title: "Your Privacy, Protected",
    description:
      "Every message is secured with military-grade encryption. What you say stays between you and your friends always.",
  },
  {
    icon: Image,
    title: "Share More Than Words",
    description:
      "Send photos, videos, files, and voice messages effortlessly. Express yourself in any way you choose.",
  },
  {
    icon: Users,
    Smartphone,
    title: "Connect With Everyone",
    description:
      "Create group conversations for friends, family, or teams. Keep everyone in the loop with seamless group messaging.",
  },
  {
    icon: Smartphone,
    title: "Chat Anywhere, Anytime",
    description:
      "Start a conversation on your phone and continue on your desktop. Your chats sync instantly across all your devices.",
  },
  {
    icon: Sparkles,
    title: "Built for Humans",
    description:
      "No learning curve needed. KimChat&apos;s clean, intuitive interface lets you focus on conversations, not figuring out how to use the app.",
  },
];
export default function HowItWorksSection() {
  return (
    <section
      className="flex flex-col items-center text-center w-full gap-16 pt-20 pb-24 px-6 md:px-20 bg-white"
      id="features"
    >
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#7F56D9] text-[36px] md:text-[56px] font-semibold tracking-tighter mb-5  ">
            Features
          </h1>
          <p className="text-[#535862] text-[20px] leading-relaxed">
            Experience seamless real-time conversations without the hassle.
            KimChat brings you closer to the people who matter most with
            lightning-fast messaging, intuitive design, and zero complexity.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5, duration: 0.6 }}
          variants={{ hidden: {}, visible: { opacity: 1 } }}
          className=" grid grid-cols-1 md:grid-cols-3 gap-2.5"
        >
          {steps.map((step, index) => (
            <HowItWorksCard key={index} {...step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
