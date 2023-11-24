import React from "react";

const StepButton = ({
  stepCount,
  active,
}: {
  stepCount: number;
  active: boolean;
}) => {
  return (
    <div
      className={` border border-white border-solid rounded-full w-12 h-12 text-center flex justify-center items-center ${
        active ? "bg-PastelBlue text-MarineBlue font-bold" : "text-white"
      }`}
    >
      {stepCount}
    </div>
  );
};

export default StepButton;
