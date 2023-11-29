"use-client";
import React from "react";
import Image from "next/image";
// import Logo from "../../public/icons8-nike-50.png";
// import Search from ;
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-start justify-between p-10 ">
      <div className="flex items-center justify-between w-full">
        <div className="w-[143px] h-[51px] relative flex-col justify-start items-start inline-flex">
          {/* <Image src={Logo} className="" alt={""}></Image> */}
        </div>
        <div className="flex items-center justify-between space-x-7">
          <Link
            className="text-zinc-100  text-[20px] font-medium font-Montserrat"
            href={"/add-products"}
          >
            Add Products
          </Link>
          <div className="text-zinc-100 text-[20px] font-medium font-Montserrat">
            <Link
              className="text-zinc-100  text-[20px] font-medium font-Montserrat"
              href={"/view-products"}
            >
              View Products
            </Link>
          </div>
          <div className="text-zinc-100 text-[20px] font-medium font-Montserrat">
            <Link
              className="text-zinc-100  text-[20px] font-medium font-Montserrat"
              href={"/check-orders"}
            >
              Check Orders
            </Link>
          </div>
          <div className="text-zinc-100 text-[20px] font-medium font-Montserrat">
            Reviews
          </div>
        </div>
        <div className="flex space-x-4">
          {/* <div className="w-8 h-8 relative flex-col justify-start items-start inline-flex">
            <Image src={Account} alt={""}></Image>
          </div> */}
          <div className="text-zinc-100 font-Montserrat">
            <Link href={"/SignUp"}> Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
