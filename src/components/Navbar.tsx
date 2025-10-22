"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import SignOutButton from "./SignOutButton";

const Navbar = () => {
  const pathname = usePathname();
  const isAuthPage = pathname.includes("/account");
  const { isSignedIn, profile, loading } = useUser();

  return (
    <div className="  relative flex justify-between items-center text-black bg-gray-50 px-10 py-5 my-1 shadow-md/20">
      <div className="flex gap-5 ">
        {/* left container */}

        <div className=" w-18 h-18 relative rounded-full overflow-hidden">
          {/* image container */}
          <Link href="/">
            <Image src="/logo.png" alt="" fill />
          </Link>
        </div>
        {!isAuthPage && (
          <div className=" hidden font-bold lg:flex items-center gap-5">
            <div
              className={` md:h-full content-center hover:text-green-900 ${
                pathname === "/menu"
                  ? "border-b-5 border-green-800 font-extrabold"
                  : "border-b-5 border-transparent"
              }`}
            >
              <Link href={"/menu"}>MENU</Link>
            </div>
            <div
              className={` md:h-full content-center hover:text-green-900 ${
                pathname === "/rewards"
                  ? "border-b-5 border-green-800  font-extrabold "
                  : "border-b-5 border-transparent"
              }`}
            >
              <Link href={"/rewards"}>REWARDS</Link>
            </div>
            <div
              className={` md:h-full content-center hover:text-green-900 ${
                pathname === "/gifts"
                  ? "border-b-5 border-green-800  font-extrabold"
                  : "border-b-5 border-transparent"
              }`}
            >
              <Link href={"/gift"}>GIFTS</Link>
            </div>
          </div>
        )}
      </div>
      {!isAuthPage && <MobileNav />}
      {!isAuthPage && !loading && (
        <div className="hidden lg:flex gap-10 items-center font-semibold">
          {/* Right container */}

          <div className="flex gap-2 items-center hover:text-green-900">
            <MapPin size={22} color="#000000" strokeWidth={2.25} />
            <button className="">Find a Store</button>
          </div>
          {isSignedIn ? (
            <div className="flex gap-3 items-center">
              <div className="font-bold text-green-900">
                Welcome, {profile?.firstName}
              </div>
              <Button
                variant="outline"
                asChild
                className="px-3 hover:bg-green-900 py-2 border-green-900 border-1 rounded-2xl font-semibold"
              >
                <Link
                  className="text-green-900 hover:text-white"
                  href="/account/signin"
                >
                  View Cart
                </Link>
              </Button>
              <SignOutButton />
            </div>
          ) : (
            <div className="flex gap-3">
              <Button
                variant="outline"
                asChild
                className="px-3 py-2 border-black border-1 rounded-2xl font-semibold"
              >
                <Link href="/account/signin">Login</Link>
              </Button>
              <Button
                asChild
                className="px-3 border-1  bg-black text-white rounded-2xl py-2"
              >
                <Link href="/account/create">Join now</Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
