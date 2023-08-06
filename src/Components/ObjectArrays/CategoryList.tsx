import { Categories } from "../../Types/Types";
import Bed from "../../Assets/Images/Category-BEDS.jpg";
import Sofa from "../../Assets/Images/Category-SOFAS.jpg";
import Table from "../../Assets/Images/Category-CTABLE.jpg";
import Dining from "../../Assets/Images/Category-DINING.jpg";

export const CategoriesList: Categories[] = [
  {
    id: 1,
    name: "Bed",
    child: (
      <>
        <img
          className="shadow-md shadow-primary rounded-lg"
          src={Bed}
          alt="Bed"
        />
      </>
    ),
  },
  {
    id: 2,
    name: "Chair",
    child: (
      <>
        <img
          className="shadow-md shadow-primary rounded-lg"
          src={Dining}
          alt="Dining"
        />
      </>
    ),
  },
  {
    id: 3,
    name: "Table",
    child: (
      <>
        <img
          className="shadow-md shadow-primary rounded-lg"
          src={Table}
          alt="CTable"
        />
      </>
    ),
  },
  {
    id: 4,
    name: "Sofa",
    child: (
      <>
        <img
          className="shadow-md shadow-primary rounded-lg"
          src={Sofa}
          alt="Sofa"
        />
      </>
    ),
  },
];
