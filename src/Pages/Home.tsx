import React from "react";
import CoverImage from "../Assets/Images/Cover.jpg";
import { CategoriesList } from "../Components/ObjectArrays/CategoryList";
import { Link } from "react-router-dom";
import Trending from "../Components/Trending";

const Home: React.FC = () => {
  // const scrollRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="h-auto px-6 w-full pt-20">
      <div className="max-w-screen-lg text-secondary mx-auto p-4">
        <div>
          <img src={CoverImage} alt="cover" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            <p className="text-5xl md:text-6xl font-semibold py-3 inline">
              FurniSpot
            </p>
            <p className="text-2xl md:py-9 md:px-6">
              A place where you can have your dream custom Furniture.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/products">
              <button className="bg-secondary hover:scale-105 duration-300 text-primary my-4 px-8 py-2 rounded-md">
                Start Shopping
              </button>
            </Link>
            <button className="bg-secondary hover:scale-105 duration-300 text-primary my-4 px-8 py-2 rounded-md">
              Explore
            </button>
          </div>
        </div>
        <hr className="text-secondary" />
        <Trending />
        <div className="flex flex-col justify-center items-center mt-4">
          <p className="text-3xl md:text-4xl font-bold my-4">Categories</p>
          <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {CategoriesList.map(({ id, name, child }) => (
              <Link to={`/category/${name}`}>
                <div className="hover:scale-105 duration-300 cursor-pointer">
                  {child}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
