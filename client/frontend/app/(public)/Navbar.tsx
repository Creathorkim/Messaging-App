"use client";

import { MessageCircle } from "lucide-react";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    //Desktop
    <div className="absolute inset-x-0 z-10 h-screen p-2 md:p-6">
      <nav className="p-4 md:p-4 rounded-4xl backdrop-blur-md bg-gray-900/30 border border-gray-500 text-white">
        <div className="flex items-center justify-between md:ml-10 ml-0">
          <div className="flex items-center gap-50">
            <div className="flex gap-2 items-center">
              <MessageCircle size={32} />
              <h2 className="font-semibold text-[24px]">KimChat</h2>
            </div>
            <ul className="hidden lg:flex gap-2  font-semibold text-[16px] text-[#535862]">
              <li>Features</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-3 mr-8">
            <button className="bg-[#FFFFFF] rounded-xl  py-2 px-3 text-[16px] font-semibold text-[#535862]">
              Login
            </button>
            <button className="bg-[#7F56D9] rounded-xl  py-2 px-3 text-[16px] font-semibold">
              Get Started
            </button>
          </div>
          <div className="lg:hidden">
            <div className="p-1 rounded-full border-2 border-white">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={24}
                color="#FFFFFF"
                duration={0.8}
                label="Show menu"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile  */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#060010]  transform transition-transform duration-400 ease-in-out p-5 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" text-white">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <MessageCircle size={32} />
              <h2 className="font-semibold text-[24px]">KimChat</h2>
            </div>
            <div className="rounded-full border-2 border-white p-1">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={24}
                color="#FFFFFF"
                duration={0.8}
                label="Show menu"
              />
            </div>
          </div>
          <ul className=" flex flex-col gap-6 text-xl font-semibold mt-10">
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="flex flex-col gap-3 mt-10">
            <button className="bg-[#FFFFFF] rounded-xl py-3 px-4 text-lg font-semibold text-[#535862] w-full">
              Login
            </button>
            <button className="bg-[#7F56D9] rounded-xl py-3 px-4 text-lg font-semibold text-white w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
