import React from "react";
import Chair from "../Assets/Images/Chair/CProduct.png";
import { FaRegHeart } from "react-icons/fa";

const ProductDetails: React.FC = () => {
  const Product = {
    id: 1,
    Brand: "Chairo",
    name: "Arm Chair",
    child: (
      <>
        <img src={Chair} alt="armchair" />
      </>
    ),
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Chair",
  };

  const Reviews = [
    {
        name: 'Customer1',
        rating: 4,
        review: 'Good Product'
    },
    {
        name: 'Customer2',
        rating: 3,
        review: 'Average Product'
    },
    {
        name: 'Customer3',
        rating: 5,
        review: 'Nice Product'
    },
    {
        name: 'Customer4',
        rating: 4,
        review: 'Good Product'
    }
  ]

  return (
    <div className="h-auto md:min-h-[76.5vh] max-w-screen-xl m-auto px-6 gap-6 pt-24 flex flex-col">
    <div className="flex flex-col md:flex-row gap-8 md:gap-0 ">
      <div className="bg-bgrd p-4">{Product.child}</div>
      <div className="bg-bgrd flex flex-col gap-3 p-8">
        <div className="text-4xl font-semibold">{Product.name}</div>
        <p>
          An armchair is a comfortable, cushioned chair with a support on each
          side, where you can rest your arms while you sit.
        </p>
        <div className="font-semibold">Rating: {Product.rating}</div>
        <div className="text-lg font-semibold">About Product</div>
        <div className="flex gap-4">
          <div className="pr-4">Brand: {Product.Brand}</div>
          <div>Category: {Product.category}</div>
        </div>
        <div className="font-semibold">
          Price:{" "}
          <span className="font-bold px-3 text-xl">₹{Product.dPrice}</span>
          <span className="line-through">₹{Product.mPrice}</span>
        </div>
        <div className="flex pt-6 gap-6">
        <button className="bg-secondary text-primary px-8 py-1 rounded-md">
            Add to Cart
          </button>
          <button className=" text-secondary px-2 py-1 rounded-md">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-8 md:gap-0 ">
        <div className="text-2xl text-secondary px-4 py-4 font-bold">Reviews</div>
        <div className="bg-bgrd rounded-md p-4 ">
            {Reviews.map((review)=>(
                <>
                <div className="flex justify-between">
                <div className="px-6 text-lg text-secondary font-semibold">{review.name}</div>
                <div className="px-12 text-lg text-secondary font-semibold">{review.rating} star</div>
            </div>
            <p className="px-8 text-secondary">{review.review}</p>
            <hr className="mx-8 items-center my-4" />
            </>
            ))}
        </div>
    </div>
    </div>
  );
};

export default ProductDetails;
