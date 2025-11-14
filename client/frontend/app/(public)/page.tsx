"use client";
import Link from "next/link";
import { Zap, Shield, Image, Users, Smartphone, Sparkles } from "lucide-react";
export default function HomePage(): React.ReactElement {
  return (
    <div className="w-full flex flex-col items-center bg-[#060010] ">
      {/* MAIN SECTION  */}
      <section className="w-full flex flex-col items-center justify-center text-center p-24  gap-10 text-white">
        <div className="space-y-4">
          <h1 className="text-white tracking-tighter font-semibold md:text-[60px] text-[30px]">
            Chat Instantly.{" "}
            <span className="text-[#7F56D9] ">Connect Simply.</span>
          </h1>
          <p className="text-[20px] text-center text-gray-300  ">
            Send encrypted messages, customize your profile, and connect
            real-time.
          </p>
        </div>
        <Link
          href="/signup"
          className="bg-[#7F56D9] hover:bg-purple-700 duration-300 transition-colors px-8 py-4 text-white rounded-lg text-[16px] font-semibold"
        >
          Start messaging now
        </Link>
      </section>

      {/* FEATURES SECTION  */}
      <section
        className="flex flex-col items-center text-center w-full gap-16 pt-20 pb-20 px-6 md:px-20 bg-white"
        id="features"
      >
        <div className="space-y-4">
          <h1 className="text-[#181D27] text-[36px] md:text-[56px] font-semibold tracking-tighter">
            Features
          </h1>
          <p className="text-[#535862] text-[20px] leading-relaxed">
            Experience seamless real-time conversations without the hassle.
            KimChat brings you closer to the people who matter most with
            lightning-fast messaging, intuitive design, and zero complexity.
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-2.5">
            <div className="flex flex-col items-center space-y-2  p-6 ">
              <div className="rounded-full border-8 p-4 border-[#F9F5FF] bg-[#F4EBFF]">
                <Zap className="text-[#7F56D9]" />
              </div>
              <h2 className="text-[#181D27] font-medium text-[20px] text-center">
                Lightning-Fast Delivery
              </h2>
              <p className="text-[#535862] text-[16px]  leading-6 text-center">
                Send and receive messages instantly. No delays, no waiting just
                pure, real-time conversation that keeps you connected.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 ">
              <div className="rounded-full border-8 p-4 border-[#F9F5FF] bg-[#F4EBFF]">
                <Shield className="text-[#7F56D9]" />
              </div>
              <h2 className="text-[#181D27] font-medium text-[20px] text-center">
                Your Privacy, Protected
              </h2>
              <p className="text-[#535862] text-[16px]  leading-6 text-center">
                Every message is secured with military-grade encryption. What
                you say stays between you and your friends always.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 ">
              <div className="rounded-full border-8 p-4 border-[#F9F5FF] bg-[#F4EBFF]">
                <Image className="text-[#7F56D9]" />
              </div>
              <h2 className="text-[#181D27] font-medium text-[20px] text-center">
                Share More Than Words
              </h2>
              <p className="text-[#535862] text-[16px]  leading-6 text-center">
                Send photos, videos, files, and voice messages effortlessly.
                Express yourself in any way you choose.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-6 ">
              <div className="rounded-full border-8 p-4 border-[#F9F5FF] bg-[#F4EBFF]">
                <Users className="text-[#7F56D9]" />
              </div>
              <h2 className="text-[#181D27] font-medium text-[20px] text-center">
                Connect With Everyone
              </h2>
              <p className="text-[#535862] text-[16px]  leading-6 text-center">
                Create group conversations for friends, family, or teams. Keep
                everyone in the loop with seamless group messaging.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 ">
              <div className="rounded-full border-8 p-4 border-[#F9F5FF] bg-[#F4EBFF]">
                <Smartphone className="text-[#7F56D9]" />
              </div>
              <h2 className="text-[#181D27] font-medium text-[20px] text-center">
                Chat Anywhere, Anytime
              </h2>
              <p className="text-[#535862] text-[16px]  leading-6 text-center">
                Start a conversation on your phone and continue on your desktop.
                Your chats sync instantly across all your devices.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 ">
              <div className="rounded-full border-8 p-4 border-[#F9F5FF] bg-[#F4EBFF]">
                <Sparkles className="text-[#7F56D9]" />
              </div>
              <h2 className="text-[#181D27] font-medium text-[20px] text-center">
                Built for Humans
              </h2>
              <p className="text-[#535862] text-[16px]  leading-6 text-center">
                No learning curve needed. KimChat&apos;s clean, intuitive
                interface lets you focus on conversations, not figuring out how
                to use the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION  */}
      <section
        className="flex flex-col py-24 px-6 md:px-20 bg-[#060010] text-white w-full gap-16"
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
      </section>

      {/* CTA SECTION  */}
      <section className="flex flex-col items-center justify-center py-24 px-6 md:px-20 bg-white w-full">
        <div className="text-center max-w-3xl space-y-6">
          <h2 className="text-[36px] md:text-[56px] font-bold tracking-tight leading-tight">
            Ready to chat without compromise?
          </h2>
          <p className="text-[18px] md:text-[20px] leading-relaxed text-[#535862]">
            {" "}
            Join thousands who&apos;ve already made the switch to faster,
            simpler, and more secure messaging. No credit card required.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link href="/signup" className="bg-white text-[#7F56D9] px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started Free
            </Link>
            <Link href="/contact" className="bg-[#7F56D9] border-2 border-white text-white px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-purple-700 duration-300 transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
