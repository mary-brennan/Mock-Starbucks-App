import Image from "next/image";
import Link from "next/link";
import React from "react";

const SlimFeatureCard2 = () => {
  return (
    <div
      className="flex-col mt-[3vh] flex md:h-[420px]  md:max-w-[100%] md:flex-row"
      style={{ backgroundColor: "#f8f0e5" }}
    >
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full">
        <div className="w-full aspect-square sm:aspect-[9/7] h-full xl:h-full relative">
          <Image
            src="/fCardImages/free.jpg"
            alt="A close up of cold foam pouring into iced latte in a glass"
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div
        style={{ backgroundColor: "#f8f0e5" }}
        className="bg-sandalwood md:w-1/2 w-full p-5 flex items-center justify-center text-center text-green-900"
      >
        <div className="flex flex-col py-8 px-10 sm:max-w-[83%]   items-center justify-center text-center">
          <h1 className="font-bold text-2xl tracking-wider leading-15 mb-6">
            Love it? Get it free.
          </h1>
          <p className="font-semibold text-lg leading-10 ">
            Just join Starbucks® Rewards and enjoy a free drink with a
            qualifying purchase during your first week.**
          </p>
          <Link
            className="py-1.5 text-white px-4 mt-8 hover:bg-emerald-950 bg-green-900 active:ring-black active:bg-black  ring-white ring-1 rounded-full "
            href="/menu"
          >
            Join & order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlimFeatureCard2;
