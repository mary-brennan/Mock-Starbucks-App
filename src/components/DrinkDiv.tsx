"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DrinkForm from "./DrinkForm";
import { Drink } from "@/app/_data/Drinks";
import { match } from "assert";

const DrinkDiv = ({ matchingDrink }: { matchingDrink: Drink }) => {
  const [sizeOption, setSizeOption] = useState("medium");

  return (
    <>
      <div className="bg-canvas md:flex ">
        <div className="flex-grow lg:max-w-1/3 lg:mr-11">
          <div className=" flex lg:ml-24 md:py-6 justify-center ">
            <div className=" aspect-square   h-[300px] w-[300px]">
              <div className="relative mx-auto overflow-hidden rounded-full h-[100%] ">
                <Image src={matchingDrink.imgFull} alt="" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow md:max-w-[420px] md:text-start flex lg:ml-[88px] justify-center text-center flex-col ">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-4xl mb-3 tracking-wider ">
            {matchingDrink.name}{" "}
          </h1>
        </div>
      </div>
      <DrinkForm size={sizeOption} drink={matchingDrink} />
    </>
  );
};

export default DrinkDiv;
