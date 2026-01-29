"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-[#060010] text-white py-9 px-6 md:p-10 w-full border-t border-gray-500">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link  href="/" className="flex items-center gap-2 cursor-pointer">
          <MessageCircle size={24} className="text-[#7F56D9]" />
          <span className="font-semibold text-[20px]">KimChat</span>
        </Link>
        <div className="flex gap-6 text-gray-400 text-[14px]">
          <Link
            href="/privacypolicy"
            className="text-gray-400 hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/termsofservice"
            className="text-gray-400 hover:text-white"
          >
            Terms
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </div>
        <p className="text-gray-400 text-[14px]">
          © 2025 KimChat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
