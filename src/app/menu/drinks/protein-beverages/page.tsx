import React from "react";
import SideBar from "@/components/SideBar";
import { PDrinks, SFPDrinks, ColdFoamProteinDrinks } from "@/app/_data/Drinks";
import SubMenuLayout from "@/components/SubMenuLayout";

const page = () => {
  return (
    <div className="flex  lg:pl-32 border-1 pt-11 text-black bg-gray-50">
      <div className=" max-w-[150px]">
        <SideBar />
      </div>
      <div className="grow">
        <div className="lg:pl-40 px-4  lg:max-w-4/5 pt-5">
          <h1 className="text-3xl font-black pb-12">Protein Beverages</h1>
          <h2 className="text-2xl pb-4 font-black border-b-1">
            High Protein Lattes
          </h2>
          <div className="pb-6 lg:pb-10">
            <SubMenuLayout drinks={PDrinks} />
          </div>
          <h2 className="text-2xl pb-4 font-black border-b-1">
            No Added Sugar Options
          </h2>
          <div className="">
            <SubMenuLayout drinks={SFPDrinks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
