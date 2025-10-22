"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import SignOutButton from "./SignOutButton";
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn, profile, loading } = useUser();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="">
      <div className="text-black lg:hidden flex">
        {!loading && (
          <button onClick={() => setOpen(!open)} className="cursor-pointer">
            {open ? <X /> : <Menu />}
          </button>
        )}
      </div>

      <div
        className={`lg:hidden  absolute top-full right-0 w-3/4 h-[90vh] bg-white shadow-lg z-50 p-5 transition-opacity duration-300 ease-in-out
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
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
              <Link href={"/gift"}>GIFTS</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10 font-semibold">
            <div className="flex gap-5 mb-6">
              {!isSignedIn ? (
                <>
                  {" "}
                  <Button
                    asChild
                    variant="outline"
                    className="px-3 py-1 border-black border-1 rounded-2xl"
                  >
                    <Link href={"/account/signin"}>Login</Link>
                  </Button>
                  <Button
                    asChild
                    className="px-3 border-1  bg-black text-white rounded-2xl py-1"
                  >
                    <Link href={"/account/create"}> Join now</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    asChild
                    variant="outline"
                    className="px-3 py-1 border-green-900 hover:bg-green-900 border-1 rounded-2xl"
                  >
                    <Link
                      className="text-green-900 hover:text-white"
                      href={"/account/signin"}
                    >
                      View Cart
                    </Link>
                  </Button>
                  <SignOutButton />
                </>
              )}
            </div>
            <div className="flex gap-2 items-center hover:text-green-900">
              <MapPin size={22} color="#000000" strokeWidth={2.25} />
              <button className="">Find a Store</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
