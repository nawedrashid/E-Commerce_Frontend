import React from "react";
import { FaMinusCircle, FaPlusCircle, FaRegHeart } from "react-icons/fa";
import { cartProp } from "../../Types/PropsList";

const CartProductCard: React.FC<cartProp> = ({ cartItem }) => {
  return (
    <div className="flex p-2 rounded-lg bg-primary shadow-secondary w-full">
      <div className="rounded-md bg-bgrd">{cartItem.child}</div>
      <div className="text-secondary flex flex-col w-full justify-between font-bold px-4">
        <div className="text-2xl">{cartItem.name}</div>
        <div className="flex justify-between mt-4">
          <div className="flex">
            <span className="pr-4">Quantity: </span> 
            <span className="pt-1">
              <button>
                <FaPlusCircle />
              </button>
            </span>
            <span className="px-2"> 2 </span>
            <span className="pt-1">
              <button>
                <FaMinusCircle />
              </button>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="text-xl">{cartItem.dPrice}</div>
            <div className="line-through">{cartItem.mPrice}</div>
          </div>
        </div>
        <div className="flex mb-5 gap-6">
          <button className="bg-secondary text-primary px-2 py-1 rounded-md">
            Remove from Cart
          </button>
          <button className=" text-secondary px-2 py-1 rounded-md">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
