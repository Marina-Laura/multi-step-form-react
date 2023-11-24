import React, { useState } from "react";

const AddOn = ({
  title,
  subtitle,
  price_monthly,
  price_yearly,
  data,
}: {
  title: string;
  subtitle: string;
  price_monthly: number;
  price_yearly: number;
  data: { isMonthly: boolean };
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="flex flex-col mt-4">
      <div
        className={`flex p-4 items-center border rounded border-LightGray hover:cursor-pointer hover:border-MarineBlue ${
          selected ? "bg-LightBlue border-MarineBlue" : ""
        }`}
        onClick={(_) => setSelected(!selected)}
      >
        <input
          type="checkbox"
          className="mr-4 w-4 h-4 checked:bg-MarineBlue checked:text-white hover:cursor-pointer"
          disabled
          checked={selected}
        />
        <div className="flex-1">
          <h2 className="font-bold text-lg text-MarineBlue">{title}</h2>
          <p className=" text-CoolGray">{subtitle}</p>
        </div>
        <p className="text-PurplishBlue">
          +${data.isMonthly ? price_monthly : price_yearly}/
          {data.isMonthly ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default AddOn;
