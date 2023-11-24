import React from "react";

const Switch = ({
  data,
}: {
  data: {
    setIsMonthly: (duration: boolean) => boolean;
    isMonthly: boolean;
  };
}) => {
  return (
    <div className="flex items-center justify-center mt-4 bg-LightBlue p-4 rounded">
      <h3
        className={`mr-4 text-CoolGray ${
          data.isMonthly && `text-MarineBlue font-bold`
        }`}
      >
        Monthly
      </h3>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={!data.isMonthly}
          onChange={(_) => {
            data.setIsMonthly(!data.isMonthly);
          }}
        />
        <div className="w-11 h-6 bg-MarineBlue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
      </label>
      <h3
        className={`ml-4 text-CoolGray ${
          !data.isMonthly && `text-MarineBlue font-bold`
        }`}
      >
        Yearly
      </h3>
    </div>
  );
};

export default Switch;
