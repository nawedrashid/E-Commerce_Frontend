import React from "react";
import Chair from "../Assets/Images/Chair/Chair1.png";

const orderItems = [
  {
    id: 1,
    name: "Arm Chair",
    child: (
      <>
        <img className="h-36" src={Chair} alt="armchair" />
      </>
    ),
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Chair",
  },
  {
    id: 1,
    name: "Arm Chair",
    child: (
      <>
        <img className="h-36" src={Chair} alt="armchair" />
      </>
    ),
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Chair",
  },
  {
    id: 1,
    name: "Arm Chair",
    child: (
      <>
        <img className="h-36" src={Chair} alt="armchair" />
      </>
    ),
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Chair",
  },
];

const Orders: React.FC = () => {
  return (
    <div className="h-auto min-h-screen px-6 w-full pt-20">
      <div className="max-w-screen-lg text-secondary mx-auto p-4">
        <h1 className="text-2xl py-2 font-bold">Orders</h1>
        <div className="flex flex-col gap-4">
            {orderItems.map((item)=>(
               <div></div>
            ))} 
        </div>
      </div>
    </div>
  );
};

export default Orders;
