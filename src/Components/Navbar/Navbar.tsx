import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../Search";
import { navOptions } from "../ObjectArrays/NavOptions";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center w-full h-14 bg-primary text-secondary px-8 md:px-20 fixed">
      <div>
        <Link to={"/"}>
          <h1 className="text-4xl font-logoF ml-2 hover:scale-105 duration-700 cursor-pointer">
            FurniSpot
          </h1>
        </Link>
      </div>
      <div className="w-full mx-28 hidden md:flex">
        <Search />
      </div>
      {login ? (
        <div className="hidden md:flex px-4 gap-4">
          {navOptions.map(({ id, name, child, link }) => (
            <Link to={link}>
              <div className="hover:scale-110 duration-500 flex">
                <div className="mt-2">{child}</div>
                <div className="mt-2 ml-1">{name}</div>
              </div>
            </Link>
          ))}
          <div>
            <button
              onClick={() => setLogin(false)}
              className="bg-secondary text-primary px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex px-4 gap-2 font-bold ">
          <button
            onClick={() => setLogin(true)}
            className="bg-secondary text-primary px-4 py-2 rounded-md"
          >
            Login
          </button>
          <button className="bg-secondary text-primary px-4 py-2 rounded-md">
            Register
          </button>
        </div>
      )}

      <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      <ul
        className={`flex flex-col justify-center ${
          nav ? "w-1/2" : "w-0"
        }  duration-300 ease-linear items-center absolute top-14 right-0 h-screen bg-primary`}
      >
        {nav && (
          <div>
            <Search />
          </div>
        )}
        {nav && login ? (
          <div className="flex my-2 flex-col items-center justify-center">
            {navOptions.map(({ id, name, child, link }) => (
              <li className="hover:scale-110 duration-500 px-3 cursor-pointer py-2 text-2xl">
                <Link onClick={() => setNav(!nav)} to={link}>
                  <div className="flex">
                    <div className="pl-2">{name}</div>
                  </div>
                </Link>
              </li>
            ))}
            <li className="hover:scale-110 duration-500 px-3 cursor-pointer py-2 text-2xl">
              Orders
            </li>
            <div>
              <button
                onClick={() => setLogin(false)}
                className="bg-secondary text-primary px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          nav && (
            <div className="px-4 flex flex-col md:hidden my-4 gap-2 font-bold ">
              <button
                onClick={() => setLogin(true)}
                className="bg-secondary mx-3 text-primary px-4 py-2 rounded-md"
              >
                Login
              </button>
              <button className="bg-secondary mx-3 text-primary px-4 py-2 rounded-md">
                Register
              </button>
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
