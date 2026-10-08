import Link from "next/link";
import React from "react";
interface INavsType {
"id": string,
"slug": string,
"nameBn": string,
"icon": string
}

const Navlink = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
  const data:INavsType[] = await res.json();

  const filterNavs = data.filter((n) => n.slug);
//   console.log(navdata);
  return (
   <div className="container mx-auto flex  gap-2 p-3  shadow-sm ">
  <Link
    href="/"
    className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
  >
    🏠
    <span>হোম</span>
  </Link>

  {filterNavs.map((n, i) => (
    <Link
      key={i}
      href={n.slug}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
    >
      <span className="text-lg">{n.icon}</span>
      <span>{n.nameBn}</span>
    </Link>
  ))}
</div>
  );
};

export default Navlink;