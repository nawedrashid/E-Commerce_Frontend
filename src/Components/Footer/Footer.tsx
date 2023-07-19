import React from "react";
import { FLinks, FSocials } from "../../Types/Types";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const socials: FSocials[] = [
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

  const flinks: FLinks[] = [
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

  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full flex flex-col items-center md:w-1/4">
            <h4 className="text-lg font-bold text-secondary mb-2">FurniSpot</h4>
            <p className="text-secondary">
              A place to have your custom furnitures.
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <ul className="list-none flex justify-center gap-4">
              {flinks.map(({ id, name, link }) => (
                <li className="mb-2">
                  <a
                    href={link}
                    className="text-secondary hover:scale-115 duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <ul className="list-none flex justify-center gap-4">
              {socials.map(({ id, child, link }) => (
                <li className="mb-2">
                  <a
                    href={link}
                    className="text-secondary text-2xl hover:scale-110 duration-300"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-secondary my-2" />
        <div className="text-center font-bold text-secondary">
          <p>
            &copy; {new Date().getFullYear()} FurniSpot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;