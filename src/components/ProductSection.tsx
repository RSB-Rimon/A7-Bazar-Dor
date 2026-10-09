import React from 'react';
import { ItemType } from './ProductType';
import PriceRisers from './allProduct/PriceRisers';
import PriceFallers from './allProduct/PriceFallers';
import AllProduct from './allProduct/AllProduct';

const ProductSection = async() => {
     const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );
  const data :ItemType[] =await res.json()
  console.log(data)

    return (
        <div>
         <PriceRisers data={data}/>
         <PriceFallers data={data} />
         <AllProduct data={data}/>
        </div>
    );
};

export default ProductSection;