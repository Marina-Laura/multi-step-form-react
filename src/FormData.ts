export const stepData = {
  1: {
    stepName: "YOUR INFO",
    title: "Personal Info",
    subtitle: "Please provide your name, email address and phone number.",
    content: [
      {
        title: "Name",
        key: "name",
        type: "input",
        placeholder: "e.g. Stephen King",
        validation: "",
        formatting: "",
      },
      {
        title: "Email Address",
        key: "email",
        type: "input",
        placeholder: "e.g. stephenking@lorem.com",
        validation: "",
        formatting: "",
      },
      {
        title: "Phone Number",
        key: "phoneNumber",
        type: "input",
        placeholder: "e.g. +1 234 567 890",
        validation: "",
        formatting: "",
      },
    ],
  },
  2: {
    stepName: "SELECT PLAN",
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
    content: [
      {
        title: "Arcade",
        type: "product",
        price_monthly: 9,
        price_yearly: 90,
        icon: "assets/images/icon-arcade.svg",
      },
      {
        title: "Advanced",
        type: "product",
        price_monthly: 12,
        price_yearly: 120,
        icon: "assets/images/icon-advanced.svg",
      },
      {
        title: "Pro",
        type: "product",
        price_monthly: 15,
        price_yearly: 150,
        icon: "assets/images/icon-pro.svg",
      },
      {
        type: "switch",
      },
    ],
  },
  3: {
    stepName: "ADD-ONS",
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
    content: [
      {
        title: "Online service",
        type: "addon",
        subtitle: "Access to multiplayer games",
        price_monthly: 1,
        price_yearly: 10,
      },
      {
        title: "Larger Storage",
        type: "addon",
        subtitle: "Extra 1TB of cloud drive",
        price_monthly: 2,
        price_yearly: 20,
      },
      {
        title: "Customizable profile",
        type: "addon",
        subtitle: "Custom theme on your profile",
        price_monthly: 2,
        price_yearly: 20,
      },
    ],
  },
  4: {
    stepName: "SUMMARY",
    title: "Finishing up",
    subtitle: "Double check everything looks OK before confirming.",
    content: [
      {
        type: "summary",
      },
    ],
  },
};
