import React from "react";
import SideBar from "@/components/SideBar";
import SubMenuLayout from "@/components/SubMenuLayout";
import { Drinks, Option } from "@/app/_data/Drinks";

const Page = async ({ params }: { params: Promise<{ cat: string }> }) => {
  const { cat } = await params;
  let drinkOptions: Option[] | undefined;
  const drinkCategory = Drinks[cat as keyof typeof Drinks] || undefined;
  if (drinkCategory) {
    drinkOptions = drinkCategory.Options;
  }

  return (
    drinkCategory && (
      <div className="flex  lg:pl-32 border-1 pt-11 text-black bg-gray-50">
        <div className=" max-w-[150px]">
          <SideBar />
        </div>
        <div className="grow">
          <div className="lg:pl-40 px-4  lg:max-w-4/5 pt-5">
            <h1 className="text-3xl font-black pb-12">{drinkCategory.name}</h1>
            {drinkOptions &&
              drinkOptions.map((option) => (
                <div key={option.type}>
                  <h2 className="text-2xl pb-4 font-black border-b-1">
                    {option.name}
                  </h2>
                  <div className="pb-6 lg:pb-10">
                    <SubMenuLayout
                      cat={cat}
                      subCat={option.type}
                      drinks={option.drinks}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Page;
