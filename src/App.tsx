import React, { useState } from "react";
import Steps from "./Components/Steps/Steps";
import FormContainer from "./Components/Form/FormContainer";
import Footer from "./Components/Footer/Footer";
function App() {
  const [step, setStep] = useState<"1" | "2" | "3" | "4">("1");
  return (
    <div className="h-screen bg-LightBlue relative">
      <div className="bg-[url('/public/assets/images/bg-sidebar-mobile.svg')] bg-cover h-[33vh] relative">
        <Steps stepActive={step} />
        <FormContainer step={step} />
      </div>
      <Footer step={step} setStep={setStep} />
    </div>
  );
}

export default App;
