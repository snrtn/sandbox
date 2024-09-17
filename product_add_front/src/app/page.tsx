/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import ColorForm from "@home/ColorForm";
import ColorTranslationForm from "@home/ColorTranslationForm";
import SizeForm from "@home/SizeForm";
import SizeCountryForm from "@home/SizeCountryForm"; // 추가
import PriceForm from "@home/PriceForm"; // 추가
import PriceCurrencyForm from "@home/PriceCurrencyForm"; // 추가
import ProductStepForm from "@home/ProductStepForm"; // 추가
import TranslationForm from "@home/TranslationForm"; // 추가

// 타입 정의
interface Color {
  code: string;
}

interface Size {
  color_code: string;
  label: string;
  stock: number;
  stock_active: boolean;
}

interface SizeCountry {
  color_code: string;
  size_label: string;
  country_code: string;
  name: string;
}

interface Price {
  color_code: string;
  discount: number;
}

interface PriceCurrency {
  color_code: string;
  currency_code: string;
  country_code: string;
  amount: number;
}

const Page: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [translationsComplete, setTranslationsComplete] = useState(false);
  const [sizesComplete, setSizesComplete] = useState(false);
  const [sizeCountriesComplete, setSizeCountriesComplete] = useState(false);
  const [pricesComplete, setPricesComplete] = useState(false);
  const [priceCurrenciesComplete, setPriceCurrenciesComplete] = useState(false);
  const [productComplete, setProductComplete] = useState(false); // Product 스텝 완료 상태
  const [translationComplete, setTranslationComplete] = useState(false); // Translation 스텝 완료 상태

  const [colors, setColors] = useState<Color[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);
  const [prices, setPrices] = useState<Price[]>([]);
  const [sizeCountries, setSizeCountries] = useState<SizeCountry[]>([]);
  const [priceCurrencies, setPriceCurrencies] = useState<PriceCurrency[]>([]);

  const steps = [
    {
      stepName: "Product Information", // 새 스텝
      component: (
        <ProductStepForm
          onComplete={(isComplete) => setProductComplete(isComplete)}
        />
      ),
    },
    {
      stepName: "Product Translations", // 새 스텝
      component: (
        <TranslationForm
          onComplete={(isComplete) => setTranslationComplete(isComplete)}
        />
      ),
    },
    {
      stepName: "Color Information",
      component: (
        <ColorForm
          onComplete={(complete: boolean, addedColors: Color[]) => {
            setIsFormComplete(complete);
            setColors(addedColors);
          }}
        />
      ),
    },
    {
      stepName: "Color Translations",
      component: (
        <ColorTranslationForm
          colors={colors}
          onComplete={(complete) => {
            setTranslationsComplete(complete);
          }}
        />
      ),
    },
    {
      stepName: "Size Information",
      component: (
        <SizeForm
          colors={colors}
          onComplete={(addedSizes: Size[]) => {
            setSizes(addedSizes);
            setSizesComplete(addedSizes.length > 0);
          }}
        />
      ),
    },
    {
      stepName: "Size Country Information",
      component: (
        <SizeCountryForm
          colors={colors}
          sizes={sizes}
          onComplete={(addedSizeCountries: SizeCountry[]) => {
            setSizeCountries(addedSizeCountries);
            setSizeCountriesComplete(addedSizeCountries.length > 0);
          }}
        />
      ),
    },
    {
      stepName: "Price Information",
      component: (
        <PriceForm
          colors={colors}
          onComplete={(addedPrices: Price[]) => {
            setPrices(addedPrices);
            setPricesComplete(addedPrices.length > 0);
          }}
        />
      ),
    },
    {
      stepName: "Price Currency Information",
      component: (
        <PriceCurrencyForm
          colors={colors}
          onComplete={(addedPriceCurrencies: PriceCurrency[]) => {
            setPriceCurrencies(addedPriceCurrencies);
            setPriceCurrenciesComplete(addedPriceCurrencies.length > 0);
          }}
        />
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

  const isNextDisabled =
    (currentStep === 0 && !productComplete) || // 새 스텝의 완료 상태 확인
    (currentStep === 1 && !translationComplete) ||
    (currentStep === 2 && !isFormComplete) ||
    (currentStep === 3 && !translationsComplete) ||
    (currentStep === 4 && !sizesComplete) ||
    (currentStep === 5 && !sizeCountriesComplete) ||
    (currentStep === 6 && !pricesComplete) ||
    (currentStep === 7 && !priceCurrenciesComplete);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">{steps[currentStep].stepName}</h1>
      <div className="mb-6">{steps[currentStep].component}</div>

      <div className="flex justify-between mt-6">
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
          disabled={isNextDisabled}
          className={`${
            isNextDisabled
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
