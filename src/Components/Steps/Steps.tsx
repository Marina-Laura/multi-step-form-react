import React from "react";
import StepButton from "./Step/StepButton";

const Steps = ({ stepActive }: { stepActive: "1" | "2" | "3" | "4" }) => {
  const stepCount = [1, 2, 3, 4];

  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 flex w-1/2 justify-between max-w-lg min-w-[220px]">
      {stepCount.map((step) => (
        <StepButton stepCount={step} active={parseInt(stepActive) === step} />
      ))}
    </div>
  );
};

export default Steps;
