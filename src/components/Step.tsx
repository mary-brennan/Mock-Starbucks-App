import Image from "next/image";
import React from "react";
import { StepType } from "./GettingStartedSteps";

const Step = ({ step }: { step: StepType }) => {
  return (
    <li className="flex flex-row md:flex-col pb-8 md:pb-0 md:px-2">
      <div className="mr-4 md:mx-auto flex-shrink-none md:mb-6">
        <div className="aspect-square w-12 md:w-14 lg:w-16 relative rounded-full overflow-hidden">
          <Image src={step.image} alt="" objectFit="contain" fill />
        </div>
      </div>
      <div className="text-left md:text-center md:px-2">
        <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">
          {step.h3}
        </h3>
        <p className="text-sm md:text-base leading-relaxed">{step.p}</p>
      </div>
    </li>
  );
};

export default Step;
