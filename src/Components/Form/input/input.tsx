import React from "react";

const Input = ({
  label,
  placeholder,
  validation,
  keyData,
  data,
}: {
  label: string;
  placeholder: string;
  validation: string;
  keyData: string;
  data: {
    setCustomerData: (customer: {}) => void;
    customerData: { [key: string]: any };
  };
}) => {
  return (
    <div className="flex flex-col mt-4">
      <label className="mb-0 text-MarineBlue">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) =>
          data.setCustomerData({
            ...data.customerData,
            [keyData]: e.target.value,
          })
        }
        value={data.customerData[keyData]}
        className="p-4 border border-LightGray rounded mb-4"
      />
    </div>
  );
};

export default Input;
