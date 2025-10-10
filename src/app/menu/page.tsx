import React from "react";
import SideBar from "@/components/SideBar";
import DrinksLayout from "@/components/DrinksLayout";
const page = () => {
  return (
    <div className="flex  lg:pl-32  pt-11 text-black bg-gray-50 mb-1">
      <div className="max-w-[150px]">
        <SideBar />
      </div>
      <div className="grow ">
        <div className="lg:pl-40 pl-24 lg:w-[90%] xl:w-4/5 pt-5">
          <h1 className="text-3xl font-black pb-12">Menu</h1>
          <h2 className="text-2xl pb-4 font-black border-b-1">Drinks</h2>
          <div className="">
            <DrinksLayout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
