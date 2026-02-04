"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MessageCircle, Eye, EyeOff, Loader2 } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { login } from "@/lib/api/auth";
import Image from "next/image";

export default function LogIn(): React.ReactElement {
  const searchParams = useSearchParams();
  const errorParams = searchParams.get("error");
  const token = searchParams.get("token");

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string[]>(
    errorParams ? [errorParams] : []
  );

  const handleIconVisibility = () => {
    setIsVisible(!visible);
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError([]);

    try {
      setLoading(true);
      const res = await login(userInput);
      if (res?.error) {
        console.log("Login error", res.error);
        setError([res.error]);
        setLoading(false);
        return;
      }
      console.log("Loggin in successfully");
      setLoading(false);
      router.push("/HomeScreen");
    } catch (err) {
      console.log(err);
      setError(["Internal Error"]);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3001/google/login";
  };

  useEffect(() => {
    if (errorParams) {
      window.history.replaceState({}, "", "/login");
    } else if (token) {
      localStorage.setItem("token", token);
      router.push("/HomeScreen");
    }
  }, [token, errorParams, router]);
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
        <button
          className=" w-full p-4  flex items-center justify-center gap-2 h-12 cursor-pointer rounded-lg bg-white font-bold text-black shadow-sm shadow-white"
          onClick={handleGoogleLogin}
        >
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

        {error.length > 0 && Array.isArray(error) && (
          <div className="w-full bg-red-500/10 border p-4 tracking-tighter rounded-lg border-red-700 text-white">
            <ul className="space-y-1 list-disc pl-4">
              {error.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <form action="flex flex-col space-y-4" onSubmit={handleLogin}>
          <div className="mb-3 flex flex-col gap-2 md:gap-1">
            <label htmlFor="Email" className="text-gray-400 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={userInput.email}
              onChange={handleUserInput}
              placeholder="Enter your email"
              required
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
                value={userInput.password}
                onChange={handleUserInput}
                placeholder="Enter your password"
                required
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
            className="cursor-pointer w-full flex justify-center bg-[#7F56D9] py-3 rounded-lg  hover:bg-purple-600 shadow-md shadow-[#7F56D9] mt-7 md:mt-5 font-semibold"
          >
            {loading ? (
              <div className="flex gap-3">
                <Loader2 className="animate-spin text-white  text-center" />
                <p>Login</p>
              </div>
            ) : (
              <>Login</>
            )}
          </button>
        </form>
      </div>
      <div className="mt-10 md:mt-8 text-center text-md space-y-6">
        <p className="text-md">
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
