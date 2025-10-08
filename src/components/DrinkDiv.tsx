"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DrinkForm from "./DrinkForm";
type matchingDrink = {
  img: string;
  imgFull: string;
  name: string;
  id: number;
};
const DrinkDiv = ({ matchingDrink }: { matchingDrink: matchingDrink }) => {
  const [sizeOption, setSizeOption] = useState("med");

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
          <h2 className="text-gray-300 text-lg md:text-xl lg:text-2xl font-semibold">
            Calories:{" "}
          </h2>
        </div>
      </div>
      <DrinkForm />
    </>
  );
};

export default DrinkDiv;
