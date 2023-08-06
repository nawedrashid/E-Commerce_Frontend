import React from "react";
import CoverImage from "../Assets/Images/Cover2.jpg";
import { productList } from "../Components/ObjectArrays/ProductList";
import ProductCard from "../Components/ProductCard";

const Products: React.FC = () => {
  return (
    <div className="h-auto px-6 w-full pt-20">
      <div className="max-w-screen-lg text-secondary mx-auto p-4">
        <div>
          <img src={CoverImage} alt="cover" />
        </div>
        <div className="flex justify-between py-4 font-semibold">
          <div className="text-2xl">Get your custom Furniture</div>
          <div className="flex justify-center items-center text-xl gap-4">
            <div className="bg-secondary text-primary px-4 py-1 rounded-md">
              Sort
            </div>
            <div className="bg-secondary text-primary px-4 py-1 rounded-md">
              Filter
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {productList.map((product) => (
            <ProductCard prod={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
