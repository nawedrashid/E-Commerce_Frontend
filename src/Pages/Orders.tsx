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
    status: "Delivered",
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
    status: "Packed",
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
    status: "Shipped",
  },
];

const Orders: React.FC = () => {
  return (
    <div className="h-auto min-h-screen px-6 w-full pt-20">
      <div className="max-w-screen-lg text-secondary mx-auto p-4">
        <h1 className="text-3xl pb-4 font-bold">Orders</h1>
        <div className="flex flex-col gap-4">
          {orderItems.map((item) => (
            <div className="bg-primary p-4 rounded-md flex gap-8">
              <div className=" bg-bgrd rounded-md">
                {item.child}
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold">{item.name}</div>
                  <div className="font-semibold">{item.status}</div>
                  <div>₹ {item.dPrice}</div>
                  <div>Category: {item.category}</div>
                </div>
                <div className="px-4 rounded-lg my-auto py-10 text-primary bg-secondary">
                  {">"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
