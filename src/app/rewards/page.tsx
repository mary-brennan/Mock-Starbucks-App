import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="-mt-1">
      <div className=" bg-canvas h-12 ">
        <div className=" max-w-[1440px] md:pl-[99px] lg:pl-33 flex justify-between p-3  items-center lg:m-auto h-full content-center">
          <h1 className=" text-white tracking-wider font-bold">
            BEANIE®S REWARDS
          </h1>
          <Link
            className="md:hidden text-sm text-white ring-1 hover:bg-emerald-950 ring-white px-3 py-1 rounded-full font-bold"
            href="/join"
          >
            Join in the app
          </Link>
        </div>
      </div>
      <div className="bg-orange-50">
        <div className="m-auto max-w-[1440px]">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 aspect-[7/3]   flex justify-center items-center py-8 text-center lg:text-start px-8">
              <div className="m-auto px-4 lg:self-center  text-emerald-950">
                <h1 className="font-semibold text-3xl lg:text-5xl">
                  It&apos;s a great day for free coffee
                </h1>
                <p className="pt-4 lg:text-lg">
                  Sign up and start enjoying the perks of Beanie Rewards.
                </p>
                <div className="pt-8 flex flex-col justify-center lg:items-start items-center">
                  <Link
                    href="/join"
                    className="lg:hidden py-2 px-4 text-small font-bold text-white rounded-full bg-green-800"
                  >
                    Join in the app
                  </Link>
                  <Link
                    href="/join"
                    className="hidden lg:inline py-2 px-4  font-bold text-white rounded-full bg-green-800"
                  >
                    Join now
                  </Link>
                  <Link className="lg:hidden underline  mt-4" href="/join">
                    Or join online
                  </Link>
                  <p className="hidden lg:inline font-semibold mt-4">
                    It&apos;s even better{" "}
                    <a href="/join" className="underline">
                      with the app
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-orange-100  items-center md:w-1/2 w-full">
              <div className="relative w-full  aspect-[3/2] ">
                <Image
                  src="/fCardImages/freeCoffee.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
