import React from "react";
import CartProductCard from "../Components/CartComponents/CartProductCard";
import Chair from "../Assets/Images/Chair/Chair1.png";
import CartPriceCard from "../Components/CartComponents/CartPriceCard";

const Cart: React.FC = () => {
  const cartItem = {
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
  };

  return (
    <div className="h-screen max-w-screen-lg mx-auto flex flex-col px-6 pt-28">
      <div className="text-3xl font-bold pb-6">Bag(3)</div>
      <div className="md:grid md:grid-cols-3">
        <main className="md:col-span-2 md:mr-5 ">
          <CartProductCard cartItem={cartItem} />
        </main>
        <div className="mt-5 md:mt-0"><CartPriceCard cartItem={cartItem} /></div>
      </div>
    </div>
  );
};

export default Cart;
