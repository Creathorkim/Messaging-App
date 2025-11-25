"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AgreementNav() {
  return (
    //Desktop
    <div className=" p-2 md:p-5 bg-[#060010] ">
      <nav className="p-4 md:p-4 rounded-4xl backdrop-blur-md bg-gray-900/30 border border-gray-500 text-white">
        <div className="flex items-start md:ml-10 ml-0">
          <div className="border-2 border-white rounded-full p-2  ">
            <Link href="/" className="">
              <ArrowLeft size={24} className="text-white " />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
