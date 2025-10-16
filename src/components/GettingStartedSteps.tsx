import React from "react";
import Step from "./Step";
export type StepType = {
  image: string;
  h3: string;
  p: string | React.ReactNode;
};

const step1: StepType = {
  image: "/steps/one.jpg",
  h3: "Download the Beanie® app",
  p: (
    <>
      <a href="/join" className="underline text-green-700">
        Join in the app
      </a>{" "}
      to get access to the full range of Beanie Rewards benefits. You can also{" "}
      <a href="/join" className="underline text-green-700">
        join online
      </a>
    </>
  ),
};

const step2: StepType = {
  image: "/steps/two.jpg",
  h3: "Order and pay how you'd like",
  p: (
    <>
      Use cash, credit/debit card or save some time and pay right through the
      app. You&apos;ll collect Stars all ways.{" "}
      <a className="text-green-700 underline" href="#waystopay">
        Learn how
      </a>
    </>
  ),
};
const step3: StepType = {
  image: "/steps/three.jpg",
  h3: "Earn Stars, get Rewards",
  p: (
    <>
      As you earn Stars, you can redeem them for Rewards—like free food, drinks,
      and more. Start redeeming with as little as 25 Stars!
    </>
  ),
};

const GettingStartedSteps = () => {
  return (
    <div className="max-w-[1440px] m-auto px-4 lg:px-10 py-12  lg:pt-4 xl:shadow-xl xl:rounded-3xl">
      <div className="md:pl-10 text-center max-w-6xl md:mx-auto md:text-start mb-12 md:mb-16">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          Getting started is easy
        </h1>
        <p className="text-sm md:text-base md:text-gray-500 lg:text-lg">
          Earn Stars and get rewarded in a few easy steps.
        </p>
      </div>
      <ol className="flex md:px-2 md:py-10  flex-col md:flex-row md:justify-center md:items-start md:gap-4 lg:gap-8 max-w-6xl mx-auto ">
        <Step step={step1} />
        <Step step={step2} />
        <Step step={step3} />
      </ol>
    </div>
  );
};

export default GettingStartedSteps;
