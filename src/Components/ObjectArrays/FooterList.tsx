import { FLinks, FSocials } from "../../Types/Types";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export  const socials: FSocials[] = [
    {
      id: 1,
      child: (
        <>
          <FaFacebookF />
        </>
      ),
      link: "www.fb.com",
    },
    {
      id: 1,
      child: (
        <>
          <FaTwitter />
        </>
      ),
      link: "www.twitter.com",
    },
    {
      id: 1,
      child: (
        <>
          <FaInstagram />
        </>
      ),
      link: "www.instagram.com",
    },
  ];

  export const flinks: FLinks[] = [
    {
      id: 1,
      name: "About Us",
      link: "aboutus",
    },
    {
      id: 2,
      name: "Contact",
      link: "contact",
    },
  ];