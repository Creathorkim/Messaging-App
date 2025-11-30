import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ProtectedRoute } from "@/components/ProtectedRoute/protectedRoute";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "KimChat",
  description: "KimChat",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className={dmSans.className}>{children}</div>
    </ProtectedRoute>
  );
}
