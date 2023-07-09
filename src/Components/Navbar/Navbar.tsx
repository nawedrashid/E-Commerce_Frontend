import React, { useState } from "react";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const options = [
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

  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center w-full h-14 bg-primary text-secondary px-8 md:px-20 fixed">
      <div>
        <Link to={"/"}>
          <h1 className="text-4xl font-logoF ml-2 hover:scale-105 duration-700 cursor-pointer">
            FurniSpot
          </h1>
        </Link>
      </div>
      <div>Search Bar</div>
      <div className="hidden md:flex px-4 gap-8">
        {options.map(({ id, name, child, link }) => (
          <Link to={link}>
            <div className="hover:scale-110 duration-500 flex">
              <div>{child}</div>
              <div className="pt-1 pl-1">{name}</div>
            </div>
          </Link>
        ))}
      </div>

      <div onClick={navHandler} className="cursor-pointer md:hidden">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 right-0 w-9/12 h-screen bg-primary">
          {options.map(({ id, name, child, link }) => (
            <Link onClick={() => setNav(!nav)} to={link}>
               <div className="hover:scale-110 duration-500 px-4 cursor-pointer py-6 text-4xl">
                <div>{child}</div>
                <div className="pt-1 pl-1">{name}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
