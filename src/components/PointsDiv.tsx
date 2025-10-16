"use client";
import React from "react";
import { pointDetail } from "@/app/_data/Points";
import { useState, useRef, useEffect } from "react";
const PointsDiv = ({ deets }: { deets: pointDetail[] }) => {
  const [id, setId] = useState(25);
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
              ref={(el: HTMLButtonElement) =>
                (buttonsRef.current[detail.id] = el)
              }
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
      </div>
    </div>
  );
};

export default PointsDiv;
