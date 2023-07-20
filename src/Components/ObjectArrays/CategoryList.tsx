import { Categories } from "../../Types/Types";
import Bed from '../../Assets/Images/Category-BEDS.jpg'
import Sofa from '../../Assets/Images/Category-SOFAS.jpg'
import Cupboard from '../../Assets/Images/Category-CUPBOARDS.jpg'
import SRack from '../../Assets/Images/Category-SRACK.jpg'
import CTable from '../../Assets/Images/Category-CTABLE.jpg'
import Study from '../../Assets/Images/Category-STUDY.jpg'
import Recliner from '../../Assets/Images/Category-RECLINERS.jpg'
import Dining from '../../Assets/Images/Category-DINING.jpg'

export const CategoriesList: Categories[] = [
  {
    id: 1,
    child: (
      <>
        <img className="shadow-md shadow-primary rounded-lg" src={Bed} alt="Bed" />
      </>
    ),
  },
  {
    id: 2,
    child: (
      <>
        <img className="shadow-md shadow-primary rounded-lg" src={Cupboard} alt="Cupboard" />
      </>
    ),
  },
  {
    id: 3,
    child: (
      <>
        <img className="shadow-md shadow-primary rounded-lg" src={Dining} alt="Dining" />
      </>
    ),
  },
  {
    id: 4,
    child: (
      <>
        <img className="shadow-md shadow-primary rounded-lg" src={CTable} alt="CTable" />
      </>
    ),
  },
  {
    id: 5,
    child: (
      <>
        <img className="shadow-md shadow-primary rounded-lg" src={Sofa} alt="Sofa" />
      </>
    ),
  },
  {
    id: 6,
    child: (
      <>
        <img className="shadow-md shadow-primary rounded-lg" src={Recliner} alt="Recliner" />
      </>
    ),
  },
  {
    id: 7,
    child: (
      <>
        <img className="shadow-md shadow-primary rounded-lg" src={Study} alt="Study" />
      </>
    ),
  },
  {
    id: 8,
    child: (
      <>
        <img src={SRack} alt="ShoeRack" />
      </>
    ),
  },
];
