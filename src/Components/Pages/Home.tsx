import React from "react";
import CoverImage from "../../Assets/Images/Cover.jpg";
import ArmChair1 from "../../Assets/Images/Chair/ArmChair1.png";
import Chair1 from "../../Assets/Images/Chair/Chair1.png";
import CTable1 from "../../Assets/Images/Table/CenterTable1.png";
import STable1 from "../../Assets/Images/Table/SideTable1.png";
import Seat2Sofa1 from "../../Assets/Images/Sofa/2SeaterSofa1.png";
import { Trending } from "../../Types/Types";

const Home: React.FC = () => {
  const Trending: Trending[] = [
    {
      id: 1,
      child: (
        <>
          <img
            className="hover:scale-110 px-4 py-4 duration-300"
            src={ArmChair1}
            alt="armchair"
          />
        </>
      ),
      name: "Classy Arm Chair",
      discount: "50% off",
    },
    {
      id: 2,
      child: (
        <>
          <img
            className="hover:scale-110 px-4 py-4 duration-300"
            src={Chair1}
            alt="Chair"
          />
        </>
      ),
      name: "Classy Chair",
      discount: "50% off",
    },
    {
      id: 3,
      child: (
        <>
          <img
            className="hover:scale-110 px-4 pt-28 py-4 duration-300"
            src={Seat2Sofa1}
            alt="Sofa"
          />
        </>
      ),
      name: "2-Seater Sofa",
      discount: "50% off",
    },
    {
      id: 4,
      child: (
        <>
          <img
            className="hover:scale-110 px-4 py-4 duration-300"
            src={STable1}
            alt="Table"
          />
        </>
      ),
      name: "Classy Side Table",
      discount: "50% off",
    },
    {
      id: 5,
      child: (
        <>
          <img
            className="hover:scale-110 px-4 py-4 duration-300"
            src={CTable1}
            alt="Table"
          />
        </>
      ),
      name: "Classy Center Table",
      discount: "50% off",
    },
  ];

  return (
    <div className="h-auto w-full pt-20">
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
            <button className="bg-secondary text-primary my-4 px-8 py-2 rounded-md">
              Start Shopping
            </button>
            <button className="bg-secondary text-primary my-4 px-8 py-2 rounded-md">
              Explore
            </button>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col">
          <p className="text-3xl font-bold my-4">Trending</p>
          <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {Trending.map(({ id, child, name, discount }) => (
              <div className="shadow-md shadow-primary bg-bgrd py-2 rounded-lg">
                <div>{child}</div>
                <div className="text-secondary font-bold">{name}</div>
                <div className="text-secondary font-semibold">{discount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
