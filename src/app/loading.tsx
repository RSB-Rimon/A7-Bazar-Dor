import React from "react";
import { ShoppingBag, Sparkles } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4">
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500 text-white shadow-xl shadow-orange-200">
            <ShoppingBag size={36} strokeWidth={1.8} />

            <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-amber-400">
              <Sparkles size={14} className="text-white" />
            </span>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          A7 <span className="text-orange-500">Bazar Dor</span>
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Your favorite products, just a moment away.
        </p>

        {/* Animated Loader */}
        <div className="mt-10 flex justify-center">
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full border-4 border-orange-100" />
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-400" />
            <div className="absolute inset-3 rounded-full bg-orange-100" />
          </div>
        </div>

        {/* Loading Text */}
        <p className="mt-5 animate-pulse text-sm font-semibold text-gray-700">
          Preparing something amazing...
        </p>

        {/* Progress Bar */}
        <div className="mx-auto mt-6 h-1.5 w-48 overflow-hidden rounded-full bg-orange-100">
          <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-orange-400 to-amber-500" />
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-gray-400">
          Making your shopping experience better ❤️
        </p>

      </div>
    </div>
  );
};

export default LoadingPage;