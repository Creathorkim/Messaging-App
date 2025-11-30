import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "KimChat",
  description:
    "Connect instantly. Chat effortlessly. A sleek, secure messaging app built for real-time conversations and meaningful connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={dmSans.className}
      >
        {children}
      </body>
    </html>
  );
}
