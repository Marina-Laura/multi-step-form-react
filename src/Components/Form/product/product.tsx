import React from "react";

const Product = ({
  title,
  icon,
  price_monthly,
  price_yearly,
  data,
}: {
  title: string;
  icon: string;
  price_monthly: number;
  price_yearly: number;
  data: {
    isMonthly: boolean;
    customerProduct: string;
    setCustomerProduct: (product: string) => void;
  };
}) => {
  return (
    <div className="flex flex-col mt-4">
      <div
        className={`flex p-4 items-center border rounded border-LightGray hover:cursor-pointer hover:border-MarineBlue ${
          data.customerProduct === title ? "bg-LightBlue border-MarineBlue" : ""
        }`}
        onClick={(_) => data.setCustomerProduct(title)}
      >
        <img src={icon} className="mr-4" alt={`${title} icon`} />
        <div>
          <h2 className={`font-bold text-lg text-MarineBlue`}>{title}</h2>
          <p className={`text-CoolGray `}>
            ${`${data.isMonthly ? price_monthly : price_yearly}`}/
            {data.isMonthly ? "mo" : "yr"}
          </p>
          {!data.isMonthly && (
            <p className="text-MarineBlue font-medium">2 months free</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
