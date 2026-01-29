import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ProtectedRoute } from "@/components/ProtectedRoute/protectedRoute";
import { UserData } from "@/lib/context/UserProvider";

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
      <UserData>
        <div className={dmSans.className}>{children}</div>
      </UserData>
    </ProtectedRoute>
  );
}
