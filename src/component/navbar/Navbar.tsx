import React from "react";
import Image from "next/image";
import InternoLogo from '../../../public/InternoLogo.svg'
import searchbar from '../../../public/searchbar.svg'
import { Typography } from "@material-tailwind/react";
const Navbar = () => {
  const itteration = [
    {
      id: 1,
      navbar: <a href="/home">Home</a>,
    },
    {
      id: 2,
      navbar: <a href="/home">Pages</a>,
    },
    {
      id: 3,
      navbar: <a href="/home">Services</a>,
    },
    {
      id: 4,
      navbar: <a href="/home">Project</a>,
    },
    {
      id: 5,
      navbar: <a href="/home">Blog</a>,
    },
    {
      id: 6,
      navbar: <a href="/home">Contact</a>,
    },
  ];

  return (
    <div className="flex justify-center my-[40px]">
      <div className="flex justify-between items-center w-[800px]">
        <div className="flex w-[177px] gap-2 items-center">
          <Image src={InternoLogo} alt="internologo" />
          <Typography className="font-serif text-4xl font-bold capitalize">
            interno
          </Typography>
        </div>
        <div className="flex gap-8 justify-end">
          {itteration.map((value, index) => {
            return (
              <div key={index} className="items-center">
                {value.navbar}
              </div>
            );
          })}
          <button><Image src={searchbar} alt="searchbar" /></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
