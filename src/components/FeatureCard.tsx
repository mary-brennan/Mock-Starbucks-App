import Image from "next/image";
import React from "react";

const FeatureCard = () => {
  return (
    <div className="flex-col mt-[3vh] flex border-black border-2 md:max-w-[100%] md:flex-row ">
      <div
        className="flex flex-col justify-center items-center md:w-1/2 w-full"
        style={{ backgroundColor: "oklch(95% 0.02 75)" }}
      >
        <div className="w-full aspect-square sm:aspect-[7/6] md:h-[32vw] relative">
          <Image
            src="/fCardImages/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg"
            alt="A close up of cold foam pouring into iced latte in a glass"
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="bg-sandalwood md:w-1/2 w-full">hello</div>
    </div>
  );
};

export default FeatureCard;
