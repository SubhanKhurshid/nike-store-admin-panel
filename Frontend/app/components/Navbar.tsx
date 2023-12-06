"use-client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/icons8-nike-50.png";
// import Search from ;
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-start justify-between p-10 ">
      <div className="flex items-center justify-between w-full">
        <div className="w-[143px] h-[51px] relative flex-col justify-start items-start inline-flex">
          <Image src={Logo} className="" alt={""}></Image>
        </div>
        <div className="flex items-center justify-center pr-64 space-x-7">
          <div className="group">
            <Link
              className="group-hover:border-b-2 py-2 group-hover:border-white transition-all mx-2 duration-170 text-zinc-100 text-md font-medium font-Montserrat"
              href={"/add-products"}
            >
              Add Products
            </Link>
          </div>

          <div className="group">
            <Link
              className="group-hover:border-b-2 py-2 group-hover:border-white transition-all mx-2 duration-170 text-zinc-100 text-md font-medium font-Montserrat"
              href={"/view-products"}
            >
              View Products
            </Link>
          </div>

          <div className="group">
            <Link
              className="group-hover:border-b-2 py-2 group-hover:border-white transition-all mx-2 duration-170 text-zinc-100 text-md font-medium font-Montserrat"
              href={"/check-orders"}
            >
              Check Orders
            </Link>
          </div>
          <div className="group">
            <Link
              className="group-hover:border-b-2 py-2 group-hover:border-white transition-all mx-2 duration-170 text-zinc-100 text-md font-medium font-Montserrat"
              href={"/get-reviews"}
            >
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
