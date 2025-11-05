import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "./Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "NexChat",
  description: "NexChat",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={dmSans.className}>
      <Navbar />
      {children}
    </body>
  );
}
