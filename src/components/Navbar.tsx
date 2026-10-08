import Image from "next/image";
import React from "react";
// import logo from "../../public/images.png";
import logo from "../../public/logo-icon.png";
import Navlink from "./Navlink";
// import Navlink from "./Navlink";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
      <div className="border-b bg-white shadow-sm">
  <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 ">

    {/* Logo + Brand */}
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-11 h-11 rounded-xl   shadow-sm">
        <Image
          src={logo}
          alt="Bangla News 24 logo"
          width={44}
          height={44}
          className="w-9 h-9 object-contain     "
        />
      </div>

      <div>
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900">
          বাজার দর 

        </h1>

        <p className="text-xs md:text-sm text-gray-500 mt-0.5">
          {date}
        </p>
      </div>
    </div>

    {/* Auth Buttons */}
    <div className="flex items-center gap-2">
      <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100 transition">
        সাইন আপ
      </button>

      <button className="px-4 py-2 rounded-lg bg-[#05893e] text-white font-medium text-sm hover:bg-[#057b38] shadow-sm transition">
        সাইন ইন
      </button>
    </div>

  </div>
 <Navlink />
</div>

  );
};

export default Navbar;