import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import AgreementNav from "@/components/static/AgreementNav";
import Footer from "@/components/static/Footer"
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "NexChat",
  description: "NexChat",
};

export default function AgreementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={dmSans.className}>
      <AgreementNav />
      {children}
      <Footer />

    </div>
  );
}
