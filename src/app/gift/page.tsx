import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-dGreen my-4 py-2 md:pl-33 md:pb-10 -mt-[3px]">
        <div className="pl-4 ">
          <div className="mt-4 mb-2  flex flex-col lg:gap-4 lg:flex-row lg:text-center">
            <h2 className="font-semibold md:mb-4 lg:mb-0 lg:self-center tracking-wide md:text-2xl text-xl">
              Recieved a Giftcard?
            </h2>
            <div className="md:flex md:items-center gap-4">
              <p className="md-pr4 pb2 md-pb0 color-textBlackSoft font-medium text-gray-600">
                Earns 2★ per $1
              </p>
              <div className="flex ">
                <Link
                  className="font-semibold hover:bg-white/40 hover:border-white  md:mt-0 px-4 mt-4 py-2 mr-4 rounded-full border-black border-1"
                  href="/reload"
                >
                  Add or Reload
                </Link>
                <button className="font-semibold mt-4 md:mt-0 transition delay-50 duration-200 hover:scale-110 bg-black text-white rounded-full px-4 py-2 hover: border-black border-1">
                  Check Balance
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default page;
