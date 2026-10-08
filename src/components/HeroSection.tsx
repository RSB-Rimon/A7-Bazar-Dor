import Image from "next/image";
import hero from "../../public/bazar-hero.png";

const HeroSection = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="container mx-auto px-4 py-2">
      <div className="flex items-center justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#f8faf9] px-5 py-4 shadow-sm md:px-8 md:py-5">
        
        {/* Content */}
        <div className="max-w-3xl">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
            {date}
          </span>

          <h1 className="mt-2 text-2xl font-bold text-gray-800 md:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-2 text-xs leading-5 text-gray-500 md:text-sm">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও অন্যান্য পণ্যের দাম —
            বাজারভিত্তিক বিস্তারিত, গত, সাপ্তাহিক সারাংশ এবং দামের পরিবর্তন
            এক জায়গায়।
          </p>

          <button className="mt-4 rounded-md bg-green-600 px-4 py-2 text-xs font-medium text-white shadow hover:bg-green-700">
            সব পণ্য দেখুন
          </button>
        </div>

        {/* Image */}
        <div className="hidden shrink-0 sm:block">
          <Image
            src={hero}
            alt="বাজারের পণ্য"
            width={200}
            height={150}
            className="w-40 md:w-44"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;