import React, { useState } from "react";
import { stepData } from "../../FormData";
import Input from "./input/input";
import Product from "./product/product";
import Switch from "./switch/Switch";
import AddOn from "./addOn/addOn";
const contentType: { [key: string]: any } = {
  addon: (
    frag: {
      title: string;
      subtitle: string;
      price_yearly: number;
      price_monthly: number;
    },
    data: { isMonthly: boolean }
  ) => (
    <AddOn
      title={frag.title}
      subtitle={frag.subtitle}
      price_monthly={frag.price_monthly}
      price_yearly={frag.price_yearly}
      data={data}
    />
  ),
  switch: (
    _: undefined,
    data: {
      isMonthly: boolean;
      setIsMonthly: (duration: boolean) => boolean;
    }
  ) => <Switch data={data} />,
  product: (
    frag: {
      title: string;
      icon: string;
      price_yearly: number;
      price_monthly: number;
    },
    data: {
      isMonthly: boolean;
      customerProduct: string;
      setCustomerProduct: (product: string) => void;
    }
  ) => (
    <Product
      title={frag.title}
      icon={frag.icon}
      price_yearly={frag.price_yearly}
      price_monthly={frag.price_monthly}
      data={data}
    />
  ),
  input: (
    frag: {
      validation: string;
      placeholder: string;
      title: string;
      key: string;
    },
    data: {
      isMonthly: boolean;
      setCustomerData: (customer: {}) => void;
      customerData: {};
    }
  ) => (
    <Input
      validation={frag.validation}
      placeholder={frag.placeholder}
      label={frag.title}
      keyData={frag.key}
      data={data}
    />
  ),
};
const FormContainer = ({ step }: { step: "1" | "2" | "3" | "4" }) => {
  // console.log(stepData[step].content.map((frag) => contentType[frag.type]));
  const [isMonthly, setIsMonthly] = useState(true);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [customerProduct, setCustomerProduct] = useState("");
  const [customerAddOns, setCustomerAddOns] = useState<{ [key: string]: any }>(
    {}
  );

  const updateAddOns = (addOn: { title: string }) => {
    const addOnsClone = { ...customerAddOns };
    if (addOnsClone[addOn.title]) {
      delete addOnsClone[addOn.title];
      setCustomerAddOns(addOnsClone);
      return;
    }

    addOnsClone[addOn.title] = { ...addOn };
    setCustomerAddOns(addOnsClone);
  };
  return (
    <div className="bg-white w-9/12 absolute top-52 left-2/4 -translate-x-2/4 p-8 rounded">
      <h1 className="text-MarineBlue text-4xl font-bold">
        {stepData[step].title}
      </h1>
      <p className="text-CoolGray font-medium">{stepData[step].subtitle}</p>
      {stepData[step].content.map((frag) =>
        contentType[frag.type](frag, {
          isMonthly,
          setIsMonthly,
          customerData,
          setCustomerData,
          customerProduct,
          setCustomerProduct,
          customerAddOns,
          updateAddOns,
        })
      )}
    </div>
  );
};

export default FormContainer;
