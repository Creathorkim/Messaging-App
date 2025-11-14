"use client";
import Link from "next/link";
import { useState } from "react";
import { MessageCircle, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
export default function LogIn(): React.ReactElement {
  const [visible, setIsVisible] = useState(false);
  const [inputType, setInputType] = useState("password");

  const handleIconVisibility = () => {
    setIsVisible(!visible);
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

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
              Welcome Back
            </h2>
            <p className="text-sm">Sign in to continue to your account.</p>
          </div>
        </div>

        {/* SIGN UP WITH GOOGLE BUTTON  */}
        <button className=" w-full p-4  flex items-center justify-center gap-2 h-12 cursor-pointer rounded-lg bg-white font-bold text-black shadow-sm shadow-white">
          <Image
            src="/Google_Favicon_2025.svg.png"
            width={24}
            height={24}
            alt="Google icon"
          ></Image>
          <span>Continue with Google</span>
        </button>

        {/* SEPARATOR  */}
        <div className="flex items-center w-full">
          <div className="border-t grow border-gray-200"></div>
          <span className="text-white mx-4">OR </span>
          <div className="border-t grow border-gray-200"></div>
        </div>

        <form action="flex flex-col space-y-4">
          <div className="mb-3 flex flex-col gap-2 md:gap-1">
            <label htmlFor="Email" className="text-gray-400 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="text-sm px-4 py-4 bg-gray-200 text-black rounded-lg outline-none focus focus:ring-2 focus:ring-[#7F56D9] "
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 md:gap-1">
            <label htmlFor="Password" className="text-gray-400 font-semibold">
              Password
            </label>
            <div className="relative">
              <input
                type={inputType}
                name="password"
                placeholder="Enter your password"
                className="w-full text-sm px-4 py-4 bg-gray-200 text-black rounded-lg outline-none focus focus:ring-2 focus:ring-[#7F56D9] "
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handleIconVisibility}
              >
                {visible ? (
                  <Eye className="text-gray-800" />
                ) : (
                  <EyeOff className="text-gray-800" />
                )}
              </button>
            </div>
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
