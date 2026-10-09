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

    // const filterNavs = data.filter((n) => n.slug);
  //   console.log(navdata);
    return (
  <div className="bg-white shadow-sm">
      <div className="container mx-auto flex  gap-2 p-2    ">
  

    {data.filter((n) => n.slug).map((n) => (
          <Link
            key={n.id}
            href={`/category/${n.slug}`}
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          >
            <span>{n.icon}</span>
            <span>{n.nameBn}</span>
          </Link>
        ))}
  </div>
  </div>
    );
  };

  export default Navlink;