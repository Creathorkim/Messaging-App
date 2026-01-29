"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
export default function Contact(): React.ReactElement {
  return (
    <section className="w-full min-h-screen px-9 sm:py-0 md:py-24 bg-[#060010] text-white flex flex-col  items-center justify-center ">
      {/* HEADER  */}
      <div className=" flex flex-col  w-md space-y-6 md:space-y-4 px-9">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-2 ">
            <MessageCircle size={40} className="text-[#7F56D9]" />
            <h1 className="font-bold text-[30px]">KimChat</h1>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-[40px] tracking-tighter ">
              Contact Us Today
            </h2>
            <p className="text-sm leading-relaxed">
              Have a question or need help? We&apos;re here for you. Reachout
              and we&apos;ll get back to you shortly.
            </p>
          </div>
        </div>

        <form action="flex flex-col space-y-4">
          <div className="mb-3 flex flex-col gap-2 md:gap-1">
            <label htmlFor="FullName" className="text-gray-400 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your Full Name"
              className="text-sm px-4 py-4 bg-gray-200 text-black rounded-lg outline-none focus focus:ring-2 focus:ring-[#7F56D9] "
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 md:gap-1">
            <label htmlFor="Password" className="text-gray-400 font-semibold">
              Email
            </label>

            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="w-full text-sm px-4 py-4 bg-gray-200 text-black rounded-lg outline-none focus focus:ring-2 focus:ring-[#7F56D9] "
            />
          </div>

          <div className="mb-3 flex flex-col gap-2 md:gap-1">
            <label htmlFor="Password" className="text-gray-400 font-semibold">
              Message
            </label>

            <textarea
              name="message"
              placeholder="Enter your Message"
              className="w-full text-sm px-4 py-4 h-32 bg-gray-200 text-black rounded-lg outline-none focus focus:ring-2 focus:ring-[#7F56D9] "
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full bg-[#7F56D9] py-3 rounded-lg  hover:bg-purple-600 shadow-md shadow-[#7F56D9] mt-7 md:mt-5 font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="mt-10 md:mt-8 text-center text-md space-y-6">
        <p className="text-sm">
          Don&apos;t have an account?
          <strong className="text-[#7F56D9]">
            {" "}
            <Link href="/signup">Sign Up</Link>
          </strong>
        </p>
      </div>
    </section>
  );
}
