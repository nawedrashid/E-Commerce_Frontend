import { NavEle } from "../../Types/Types";
import {
    FaUser,
    FaHeart,
    FaShoppingCart,
  } from "react-icons/fa";

export const navOptions: NavEle[] = [
    {
      id: 1,
      name: "Profile",
      child: (
        <>
          <FaUser size={25} />
        </>
      ),
      link: "/profile",
    },
    {
      id: 2,
      name: "Wishlist",
      child: (
        <>
          <FaHeart size={25} />
        </>
      ),
      link: "/wishlist",
    },
    {
      id: 1,
      name: "Cart",
      child: (
        <>
          <FaShoppingCart size={25} />
        </>
      ),
      link: "/cart",
    },
  ];