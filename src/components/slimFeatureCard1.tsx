import Image from "next/image";
import Link from "next/link";
import React from "react";

const SlimFeatureCard = () => {
  return (
    <div
      className="flex-col mt-[3vh] flex md:h-[420px] md:max-w-[100%] md:flex-row-reverse "
      style={{ backgroundColor: "#f8f0e5" }}
    >
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full">
        <div className="w-full aspect-square sm:aspect-[9/7] h-full xl:h-[90%] relative">
          <Image
            src="/fCardImages/fall.jpg"
            alt="A close up of cold foam pouring into iced latte in a glass"
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div
        style={{ backgroundColor: "#f8f0e5" }}
        className="bg-sandalwood md:w-1/2 w-full p-5 flex items-center justify-center text-center text-emerald-950"
      >
        <div className="flex flex-col py-8 px-10 sm:max-w-[83%]   items-center justify-center text-center">
          <h1 className="font-bold text-2xl tracking-wider leading-15 text-emerald-950 mb-6">
            Fall. Starts. Now.
          </h1>
          <p className="font-semibold text-lg leading-10 ">
            Our fall flavors are officially here. Time for all things pumpkin
            and pecan, including the new Pecan Oatmilk Cortado.
          </p>
          <Link
            className="py-1.5 px-4 mt-8 hover:bg-emerald-950 hover:text-white active:text-white active:ring-black active:bg-black  ring-emerald-950 ring-1 rounded-full "
            href="/menu"
          >
            View the menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlimFeatureCard;
