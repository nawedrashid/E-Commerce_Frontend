import ArmChair1 from "../../Assets/Images/Chair/ArmChair1.png";
import Chair1 from "../../Assets/Images/Chair/Chair1.png";
import CTable1 from "../../Assets/Images/Table/CenterTable1.png";
import STable1 from "../../Assets/Images/Table/SideTable1.png";
import Seat2Sofa1 from "../../Assets/Images/Sofa/2SeaterSofa1.png";
import Dining1 from "../../Assets/Images/Table/Dining1.png";
import OfficeChair1 from "../../Assets/Images/Chair/OfficeChair1.png";
import Cabinet1 from "../../Assets/Images/Cabinet1.png";
import { Trending } from "../../Types/Types";

export const TrendingList: Trending[] = [
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
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Chair",
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
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Chair",
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
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Sofa",
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
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Table",
  },
  {
    id: 5,
    child: (
      <>
        <img
          className="hover:scale-110 pt-14 px-4 py-4 duration-300"
          src={CTable1}
          alt="Table"
        />
      </>
    ),
    name: "Classy Center Table",
    discount: "50% off",
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Table",
  },
  {
    id: 6,
    child: (
      <>
        <img
          className="hover:scale-110 pt-20 px-4 py-4 duration-300"
          src={Dining1}
          alt="Dining Table"
        />
      </>
    ),
    name: "Elegent Dining",
    discount: "50% off",
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Table",
  },
  {
    id: 7,
    child: (
      <>
        <img
          className="hover:scale-110 px-4 duration-300"
          src={OfficeChair1}
          alt="Office Chair"
        />
      </>
    ),
    name: "Classy Office Chair",
    discount: "50% off",
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Chair",
  },
  {
    id: 8,
    child: (
      <>
        <img
          className="hover:scale-110 pt-16 px-4 py-4 duration-300"
          src={Cabinet1}
          alt="Cabinet"
        />
      </>
    ),
    name: "Italian Cabinet",
    discount: "50% off",
    mPrice: 5000,
    dPrice: 3499,
    rating: 4.2,
    category: "Cabinet",
  },
];
