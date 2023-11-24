import React from "react";

const Footer = ({
  step,
  setStep,
}: {
  step: "1" | "2" | "3" | "4";
  setStep: (step: "1" | "2" | "3" | "4") => void;
}) => {
  const parsed = parseInt(step);
  const states: Array<"1" | "2" | "3" | "4"> = ["1", "2", "3", "4"];

  return (
    <div
      className={`absolute bottom-0 p-6 bg-white w-full flex ${
        parsed > 1 ? "justify-between" : "justify-end"
      }`}
    >
      {parsed > 1 && (
        <button
          className="p-4 text-CoolGray font-medium"
          onClick={(_) => setStep(states[parsed - 2])}
        >
          Go back
        </button>
      )}
      {parsed < 4 && (
        <button
          className="rounded bg-MarineBlue text-white p-4 "
          onClick={(_) => setStep(states[parsed])}
        >
          Next Step
        </button>
      )}
    </div>
  );
};

export default Footer;
