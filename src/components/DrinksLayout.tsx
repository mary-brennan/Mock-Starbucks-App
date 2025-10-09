import Image from "next/image";
import React from "react";
import { MainDrinks } from "@/app/_data/Drinks";
import Link from "next/link";

const DrinksLayout = () => {
  return (
    <div className="max-w-full grid sm:gap-y-7 gap-y-4 sm:grid-cols-2 grid-cols-1  pt-8">
      {MainDrinks.map((drink) => (
        <Link key={drink.name} className="" href={`/menu/drinks/${drink.link}`}>
          <div key={drink.name} className="flex  items-center">
            <div className="mr-3 flex-shrink-0 w-18 h-18  lg:w-28 lg:h-28 relative block rounded-full overflow-hidden ">
              <Image src={drink.img} alt="" fill />
            </div>
            <h1 className="text-xl   lg:hover:text-green-900">{drink.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DrinksLayout;
