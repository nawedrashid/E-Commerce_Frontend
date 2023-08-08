import React from "react";
import { TrendingList } from "../Components/ObjectArrays/TrendingList";
import ProductCard from "../Components/ProductCard";

const Wishlist: React.FC = () => {
  return (
    <div className="h-auto min-h-screen px-6 w-full pt-20">
      <div className="max-w-screen-lg text-secondary mx-auto p-4">
        <h1 className="text-2xl py-2 font-bold">Wishlist</h1>
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {TrendingList.map((product) => (
            <ProductCard prod={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Wishlist;
