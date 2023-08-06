import React from "react";
import { FaRegHeart } from "react-icons/fa";

type productProps = {
  prod: {
    name: string;
    child: JSX.Element;
    rating: number;
    dPrice: number;
    mPrice: number;
  };
};

const ProductCard: React.FC<productProps> = ({prod}) => {
  const { name, child, rating, dPrice, mPrice } = prod;
  return (
    <div className="cursor-pointer shadow-md shadow-primary rounded-lg">
      <div className="h-64 items-center  bg-bgrd py-2">
        <div>{child}</div>
      </div>
      <div className="text-secondary rounded-b-lg py-2 px-4 bg-primary font-bold">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start items-start">
            <div className="text-xl">{name}</div>
            <div>Rating: {rating}</div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <div className="text-xl">{dPrice}</div>
            <div className="line-through">{mPrice}</div>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between gap-4">
          <button className="bg-secondary text-primary px-2 py-1 rounded-md">
            Add to Cart
          </button>
          <button className=" text-secondary px-2 py-1 rounded-md">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
