import React from 'react';
import { ItemType } from '../ProductType';

const PriceRisers = ({ data }: { data: ItemType[] }) => {
      const products = data
    .filter((item) => item.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);


    
    return (
        <section className='container mx-auto mt-5 px-1'>
      <h2 className="mb-5 text-xl font-bold">
        আজ দাম বেড়েছে ▲
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {products.map((item) => (
          <div key={item.id} className="rounded-xl border p-4 shadow-sm bg-white border-none">
            <div className="mb-3 text-4xl">{item.image}</div>

            <h3 className="font-semibold">{item.nameBn}</h3>

            <p className="mt-1 text-sm text-gray-500">
              {item.unit === "kg" ? "প্রতি কেজি" : item.unit}
            </p>

            <div className="mt-3 flex items-center justify-between gap-2">
              <div>
                <p className="text-sm text-gray-500">আজকের দাম</p>
                <p className="font-bold">
                  {item.today.toLocaleString("bn-BD")} টাকা
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-700">
                ▲ {item.change.pct.toLocaleString("bn-BD")}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default PriceRisers;