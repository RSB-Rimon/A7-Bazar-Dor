import React from 'react';
import { ItemType } from '../ProductType';
import Link from 'next/link';

const AllProduct = ({data}:{data:ItemType[]}) => {
    return (
    <>
    <Link href={'/'}>
     <section className='container mx-auto mt-5 px-1'>
      <h2 className="text-xl font-bold">সব পণ্য</h2>

      <p className="mb-5 mt-1 text-sm text-gray-500">
        বাজারের সব নিত্যপ্রয়োজনীয় পণ্যের আজকের দাম দেখুন।
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <div key={item.id} className="rounded-xl border p-4 shadow-sm border-none bg-white">
            <div className="mb-3 text-4xl">{item.image}</div>

            <h3 className="font-semibold">{item.nameBn}</h3>

            <p className="mt-1 text-sm text-gray-500">
              {item.unit === "kg"
                ? "প্রতি কেজি"
                : item.unit === "liter"
                  ? "প্রতি লিটার"
                  : item.unit === "dozen"
                    ? "প্রতি ডজন"
                    : item.unit === "piece"
                      ? "প্রতি পিস"
                      : item.unit}
            </p>

            <div className="mt-3 flex items-center justify-between gap-2">
              <div>
                <p className="text-sm text-gray-500">আজকের দাম</p>
                <p className="font-bold">
                  {item.today.toLocaleString("bn-BD")} টাকা
                </p>
              </div>

              <span
                className={`rounded-full px-2 py-1 text-sm ${
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
    
    </Link>
    
    </>
    );
};

export default AllProduct;