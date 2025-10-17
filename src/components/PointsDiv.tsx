"use client";
import React from "react";
import { pointDetail } from "@/app/_data/Points";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
const PointsDiv = ({ deets }: { deets: pointDetail[] }) => {
  const [id, setId] = useState(25);
  const detail = deets.find((d) => d.id === id);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const buttonsRef = useRef<{ [key: number]: HTMLButtonElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeButton = buttonsRef.current[id];
    const container = containerRef.current;

    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setSliderStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  }, [id]);

  return (
    <div className="bg-lgreen pt-12">
      <h2 className="text-2xl font-semibold text-center pb-4">
        Get your favorites for free
      </h2>
      <div className="text-center">
        <div
          ref={containerRef}
          className="m-auto relative flex justify-around md:justify-center"
        >
          {deets.map((detail) => (
            <button
              ref={(el) => {
                buttonsRef.current[detail.id] = el;
              }}
              onClick={() => setId(detail.id)}
              className="px-2 pt-2 pb-4 w-full md:w-[120px] relative"
              key={detail.id}
            >
              <span className="text-xl md:text-2xl tracking-wider font-bold flex-grow">
                {detail.id}
                <span aria-hidden="true" className="text-yellow-700 text-sm">
                  ★
                </span>
              </span>
            </button>
          ))}
          <span
            className="absolute bottom-0 h-[5px] bg-green-900 transition-all duration-300 ease-in-out"
            style={{
              left: `${sliderStyle.left}px`,
              width: `${sliderStyle.width}px`,
            }}
          />
        </div>
        <div className="bg-dGreen">
          <div className="flex flex-col py-8 px-4 items-center md:flex-row md:justify-center">
            <div className="relative md:flex-grow md:max-w-[375px] py-5 md:py-0 md:mr-12 w-full aspect-[16/9] ">
              <Image src={detail?.image || ""} fill alt="" />
            </div>
            <div className="flex flex-col md:flex-grow md:max-w-[375px] md:text-start">
              <h1 className="font-semibold text-2xl pb-4">{detail?.header}</h1>
              <p className="">{detail?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsDiv;
