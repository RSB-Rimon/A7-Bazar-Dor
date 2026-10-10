
'use client'

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { GitBranchPlus, Mail } from "lucide-react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    if (user.password !== user.confirmPassword) {
      toast.error("দুটি পাসওয়ার্ড মিলছে না!");
      return;
    }

    const { confirmPassword, ...signupData } = user;

    const { data, error } = await authClient.signUp.email({
      ...signupData,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
      redirect("/");
    }

    if (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="min-h-screen bg-[#f0f5f1] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-[380px]">

        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold text-[#26352c]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="text-xs text-gray-500 mt-2">
            নিজের অ্যাকাউন্ট তৈরি করে সব ফিচার ব্যবহার করুন।
          </p>
        </div>

        <div className="bg-[#fbfdfb] border border-[#e3ebe5] rounded-xl p-5 sm:p-6">
          <form onSubmit={onSubmit} className="space-y-3">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                নাম
              </label>

              <input
                name="name"
                type="text"
                required
                placeholder="আপনার সম্পূর্ণ নাম"
                className="w-full h-10 px-3 text-sm rounded-md border border-[#e0e8e1] bg-transparent outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                ইমেইল
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full h-10 px-3 text-sm rounded-md border border-[#e0e8e1] bg-transparent outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                পাসওয়ার্ড
              </label>

              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full h-10 px-3 text-sm rounded-md border border-[#e0e8e1] bg-transparent outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                placeholder="আবার লিখুন"
                className="w-full h-10 px-3 text-sm rounded-md border border-[#e0e8e1] bg-transparent outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />

              <label className="flex items-center gap-2 mt-2 text-xs text-gray-500 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="accent-green-700"
                />

                পাসওয়ার্ড দেখুন
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-10 rounded-md bg-[#07883f] hover:bg-[#067535] text-white text-sm font-semibold shadow-sm transition-colors cursor-pointer"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>

          </form>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-[#e3e9e4]" />

            <span className="text-xs text-gray-500">
              অথবা
            </span>

            <div className="flex-1 h-px bg-[#e3e9e4]" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-1.5 h-10 rounded-md border border-[#e0e8e1] text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Mail size={16} className="text-[#4285F4]" />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={handleGithubSignIn}
              className="flex items-center justify-center gap-1.5 h-10 rounded-md border border-[#e0e8e1] text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <GitBranchPlus size={16} />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            অ্যাকাউন্ট আছে?

            <Link
              href="/sign-in"
              className="text-green-700 font-semibold hover:underline ml-1"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          ←{" "}
          <Link href="/" className="hover:text-green-700">
            হোম পেজে ফিরে যান
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignUpPage;
