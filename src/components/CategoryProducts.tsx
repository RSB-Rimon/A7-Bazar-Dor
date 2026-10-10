"use client";

import { useState } from "react";
import Link from "next/link";
import { ItemType } from "./ProductType";


interface Category {
  slug: string;
  nameBn: string;
  icon: string;
}

const CategoryProducts = ({
  products,
  category,
}: {
  products: ItemType[];
  category: Category | undefined;
}) => {
  const [sort, setSort] = useState("default");
// short kora holo
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") return a.today - b.today;
    if (sort === "high") return b.today - a.today;
    return 0;
  });

  if (!category || products.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">
          দুঃখিত! কোনো পণ্য পাওয়া যায়নি
        </h2>

        <p className="my-3 text-gray-500">
          এই ক্যাটাগরিতে কোনো পণ্য নেই।
        </p>

        <Link
          href="/"
          className="inline-block rounded-lg bg-green-600 px-5 py-3 text-white"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="mb-6 rounded-xl   bg-white p-5">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{category.icon}</span>

          <div>
            <h1 className="text-2xl font-bold">
              {category.nameBn}
            </h1>
            <p className="text-sm text-gray-500">
              {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          মোট {products.length}টি পণ্য পাওয়া গেছে
        </p>
{/* ai Jaigai short kora holo  */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm">
            সাজান:
          </label>

          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg  bg-white px-3 py-2 text-sm outline-none"
          >
            <option className="" value="default ">ডিফল্ট</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-2xl">
                {item.image || item.categoryIcon}
              </div>

              <div>
                <h2 className="font-bold">{item.nameBn}</h2>

                <p className="text-xs text-gray-500">
                  {item.unit === "kg"
                    ? "প্রতি কেজি"
                    : item.unit === "liter"
                      ? "প্রতি লিটার"
                      : item.unit === "dozen"
                        ? "প্রতি ডজন"
                        : item.unit === "piece"
                          ? "প্রতি পিস"
                          : `প্রতি ${item.unit}`}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between gap-2">
              <div>
                <p className="text-xs text-gray-500">
                  আজকের দাম
                </p>

                <p className="font-bold">
                  {item.today.toLocaleString("bn-BD")} টাকা
                </p>
              </div>

              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  item.change.dir === "up"
                    ? "bg-green-100 text-green-700"
                    : item.change.dir === "down"
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                {item.change.dir === "up"
                  ? "▲"
                  : item.change.dir === "down"
                    ? "▼"
                    : "—"}
                {" "}
                {item.change.pct.toLocaleString("bn-BD")}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryProducts;