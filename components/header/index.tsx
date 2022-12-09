import React from "react";
import Image from "next/image";
import dodongLogo from "../../public/images/common/dodong-logo.svg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const stats = [
    {
      label: "Posts",
      value: 120,
    },
    {
      label: "Connects",
      value: 1002,
    },
    {
      label: "Connecting",
      value: 4599,
    },
  ];

  return (
    <header className="container flex justify-between my-2">
      <div>
        <div className="flex">
          <Image src={dodongLogo} alt="Dodong logo" className="h-12 w-10" />
          <span className="my-auto text-center font-bold text-2xl mx-2">
            DoDong
          </span>
        </div>
        <p className="text-center m-auto italic text-sm">Go online Do dong</p>
      </div>

      <div className="flex-1 max-w-6xl my-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <div className="mx-2">
              <AiOutlineShoppingCart className="text-2xl text-orange-500" />
            </div>
            <div className="flex flex-col mx-2">
              <div className="text-xs flex border-2 px-2 py-1 border-orange-500 rounded-full">
                New Delhi <BiChevronDown className="text-lg my-auto" />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            {stats.map((stat, k) => (
              <div key={`stat_${k}`} className="flex flex-col mx-4">
                <div className="text-sm font-bold text-center truncate">
                  {stat.value}
                </div>
                <div className="text-xs truncate">{stat.label}</div>
              </div>
            ))}

            <div className="flex flex-col ml-2">
              <div className="text-sm font-bold text-center truncate">
                <AiOutlineHeart className="text-xl text-trending-icon" />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-sm font-bold text-center truncate">
                <GiHamburgerMenu className="text-xl text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
