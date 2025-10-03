import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Drink } from "@/app/_data/Drinks";

const SubMenuLayout = ({ drinks }: { drinks: Drink[] }) => {
  return (
    <div className="max-w-full grid gap-y-4 gap-x-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4  grid-cols-2 pt-8">
      {drinks.map((drink) => (
        <Link key={drink.name} href={`/menu/drink/${drink.id}`}>
          <div
            key={drink.name}
            className="flex flex-col text-center items-center"
          >
            <div className="w-1/2 md:w-[80%]  xl:w-3/5  aspect-square">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <Image src={drink.img} alt="" fill />
              </div>
            </div>
            <h1 className="text-base w-1/2 md:w-[80%] font-semibold  lg:hover:text-green-900">
              {drink.name}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubMenuLayout;
