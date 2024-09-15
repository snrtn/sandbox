"use client";

import React, { useState } from "react";
import ProductStepForm from "@home/ProductStepForm";
import TranslationForm from "@home/TranslationForm";
import ColorForm from "@home/ColorForm";

const Page: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const steps = [
    // {
    //   stepName: "Product Information",
    //   component: (
    //     <ProductStepForm
    //       onComplete={(complete) => setIsFormComplete(complete)}
    //     />
    //   ),
    // },
    // {
    //   stepName: "Translations",
    //   component: (
    //     <TranslationForm
    //       onComplete={(complete) => setIsFormComplete(complete)}
    //     />
    //   ),
    // },
    {
      stepName: "Color Information",
      component: (
        <ColorForm onComplete={(complete) => setIsFormComplete(complete)} />
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">{steps[currentStep].stepName}</h1>
      <div className="mb-6">{steps[currentStep].component}</div>
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`${
            currentStep === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded-md`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!isFormComplete && currentStep === 0}
          className={`${
            !isFormComplete && currentStep === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded-md`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
