"use client";
import React, { useState } from "react";
import Image from "next/image";
import dodongLogo from "../../public/images/common/dodong-logo.svg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const saveTokenReducer: any = useSelector((state: any) => state);

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
    <header className="justify-center sticky bg-white z-10 top-0 my-2 px-3 py-2">
      <div className="flex justify-between">
        <Link href="/">
          <div>
            <div className="flex pr-1">
              <Image src={dodongLogo} alt="Dodong" className="h-12 w-10" />
              <span className="my-auto text-center font-bold text-lg md:text-2xl mx-2">
                DoDong
              </span>
            </div>
            <p className="text-center m-auto italic text-xs md:text-sm">
              Go online Do dong
            </p>
          </div>
        </Link>

        <div className="flex-1 my-auto align-middle">
          <div className="flex justify-between my-auto">
            <div className="flex items-center">
              <div className="hidden md:block mx-2">
                <AiOutlineShoppingCart className="text-2xl text-orange-500" />
              </div>
              <div className="flex flex-col mx-2">
                <button
                  type="button"
                  className="text-xs flex border-2 px-2 py-1 border-orange-500 rounded-full truncate"
                >
                  New Delhi <BiChevronDown className="text-lg my-auto" />
                </button>
              </div>
            </div>

            <div className="flex items-center px-2">
              {saveTokenReducer?.token && (
                <div className="hidden md:flex flex-col mx-4 my-auto">
                  <div className="flex bg-orange-50 my-auto justify-between text-sm text-center border border-orange-500 py-2.5 px-3 rounded-full truncate">
                    <input
                      className="pr-5 px-2 bg-orange-50 text-gray-800 font-semibold focus:outline-none outline-none"
                      placeholder="Search here"
                    />

                    <button
                      className="px-2"
                      onClick={() => {
                        console.log("Searching...");
                      }}
                    >
                      <BsSearch className="text-trending-icon text-lg my-auto cursor-pointer" />
                    </button>
                  </div>
                </div>
              )}

              {/* add state for login  */}

              {saveTokenReducer?.token ? (
                <div className="hidden lg:flex justify-between">
                  {stats.map((stat, k) => (
                    <div
                      key={`stat_${k}`}
                      className="flex flex-col mx-4 my-auto"
                    >
                      <div className="text-sm font-bold text-center truncate">
                        {stat.value}
                      </div>
                      <div className="text-xs truncate">{stat.label}</div>
                    </div>
                  ))}

                  <div className="flex flex-col ml-2 my-auto">
                    <div className="text-sm font-bold text-center truncate">
                      <AiOutlineHeart className="text-xl text-trending-icon" />
                    </div>
                  </div>

                  <div className="flex flex-col ml-4 my-auto">
                    <div className="text-sm font-bold text-center truncate">
                      <GiHamburgerMenu className="text-xl text-orange-500" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between">
                  <div className="flex flex-col lg:mx-4 my-auto">
                    <Link href={"/login"}>
                      <div className="text-sm font-bold text-center text-white bg-orange-500 cursor-pointer py-2.5 px-2 md:px-3 rounded-full truncate">
                        Login to Start
                      </div>
                    </Link>
                  </div>

                  <div className="hidden lg:flex flex-col lg:ml-4 my-auto">
                    <div className="text-sm font-bold text-center truncate">
                      <GiHamburgerMenu className="text-xl text-orange-500" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
