"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.replace("/signup");
      } else {
        setIsAuthenticated(true);
      }
    };
    checkAuth();
  }, [router]);

  if (isAuthenticated) {
    return <>{children}</>;
  }
};
