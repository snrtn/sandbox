// App.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveStep,
  setIsNextDisabled,
  setStepsCompleted,
  setProducts,
  setFileNames,
  resetAll,
} from "./redux/slice/productSlice";
import Stepper from "./components/Stepper";
import ProductForm from "./components/ProductForm";
import TranslationForm from "./components/TranslationForm";
import ColorForm from "./components/ColorForm";
import ColorTranslationForm from "./components/ColorTranslationForm";
import SizeForm from "./components/SizeForm";
import PriceForm from "./components/PriceForm";

const steps = [
  { label: "Product Details", component: ProductForm },
  { label: "Translations", component: TranslationForm },
  { label: "Colors", component: ColorForm },
  { label: "Color Translations", component: ColorTranslationForm },
  { label: "Sizes", component: SizeForm },
  { label: "Prices", component: PriceForm },
];

const App = () => {
  const dispatch = useDispatch();
  const { activeStep, isNextDisabled, stepsCompleted, products, fileNames } =
    useSelector((state) => state.product); // state.product.products로 가져옴

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      dispatch(setActiveStep(activeStep + 1));
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      dispatch(setActiveStep(activeStep - 1));
    }
  };

  const handleStepClick = (index) => {
    dispatch(setActiveStep(index));
  };

  const handleValidation = (isValid) => {
    dispatch(setIsNextDisabled(!isValid));

    const updatedStepsCompleted = stepsCompleted.map((completed, index) =>
      index === activeStep ? Boolean(isValid) : Boolean(completed)
    );

    dispatch(setStepsCompleted(updatedStepsCompleted));
  };

  const handleReset = () => {
    dispatch(resetAll());
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full bg-white shadow-md">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          onStepClick={handleStepClick}
          stepsCompleted={stepsCompleted}
        />
      </div>

      <div className="flex-grow flex items-center justify-center w-full py-32">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
          {React.createElement(steps[activeStep].component, {
            products, // products를 전달
            setProduct: (newProduct) => dispatch(setProducts(newProduct)),
            onValidate: handleValidation,
            fileNames,
            setFileNames: (newFileNames) =>
              dispatch(setFileNames(newFileNames)),
          })}
        </div>
      </div>

      <div className="flex justify-between w-full fixed bottom-0 left-0 right-0 p-4 bg-white z-10">
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 disabled:opacity-50"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50"
          disabled={isNextDisabled}
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      {/* 초기화 버튼 */}
      <div className="fixed top-16 right-0 p-4">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
