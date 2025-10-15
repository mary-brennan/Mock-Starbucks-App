import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCard3 = () => {
  return (
    <div className="flex-col mt-[3vh] flex  md:max-w-[100%] md:flex-row ">
      <div
        className="flex flex-col justify-center items-center md:w-1/2 w-full"
        style={{ backgroundColor: "oklch(95% 0.02 75)" }}
      >
        <div className="w-full aspect-square sm:aspect-[7/6] md:h-[32vw] relative">
          <Image
            src="/fCardImages/freshBrew.jpg"
            alt="A close up of cold foam pouring into iced latte in a glass"
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div
        style={{ backgroundColor: "#543a2a" }}
        className=" md:w-1/2 w-full p-5 flex items-center justify-center text-center"
      >
        <div className="flex flex-col  py-8 md:px-10 max-w-[83%]   items-center justify-center text-center">
          <h1 className="font-bold text-3xl md:text-5xl tracking-wider md:leading-15 text-white mb-6">
            Freshly brewed, just for you
          </h1>
          <p className="font-semibold text-lg md:text-2xl leading-10 text-white">
            Order your favorite light, medium, dark or decaf Starbucks coffee
            roast and our baristas will brew a fresh cup.
          </p>
          <Link
            className="py-1.5 px-4 mt-8 hover:bg-stone-500 bg-stone-900 active:ring-black active:bg-black  rounded-full text-white"
            href="/menu"
          >
            Add to order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard3;
