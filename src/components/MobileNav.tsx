"use client";
import React, { useState } from "react";
import { MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="text-black lg:hidden flex">
        <button onClick={() => setOpen(!open)} className="cursor-pointer">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div
        className={`lg:hidden absolute top-full right-0 w-3/4 h-[90vh] bg-white shadow-lg z-50 p-5 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col ">
          <div className=" font-semibold flex flex-col gap-7 border-b-2">
            <div className=" hover:text-green-900 py-1">
              <Link href={"/menu"}>MENU</Link>
            </div>
            <div className=" hover:text-green-900  py-1">
              <Link href={"/rewards"}>REWARDS</Link>
            </div>
            <div className=" hover:text-green-900  pt-1 pb-6">
              <Link href={"/gifts"}>GIFTS</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10 font-semibold">
            <div className="flex gap-5 mb-6">
              <button className="px-3 py-1 border-black border-1 rounded-2xl">
                Login
              </button>
              <button className="px-3 border-1  bg-black text-white rounded-2xl py-1">
                Join now
              </button>
            </div>
            <div className="flex gap-2 items-center hover:text-green-900">
              <MapPin size={22} color="#000000" strokeWidth={2.25} />
              <button className="">Find a Store</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
