"use client";

import React, { useState, useEffect } from "react";

interface PriceCurrency {
  color_code: string;
  currency_code: string;
  country_code: string;
  amount: number;
}

interface PriceCurrencyFormProps {
  colors: { code: string }[];
  onComplete: (priceCurrencies: PriceCurrency[]) => void;
}

const currencies = ["USD", "EUR", "GBP"]; // 샘플 통화 리스트

const PriceCurrencyForm: React.FC<PriceCurrencyFormProps> = ({
  colors,
  onComplete,
}) => {
  const [priceCurrencies, setPriceCurrencies] = useState<PriceCurrency[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");

  useEffect(() => {
    onComplete(priceCurrencies);
  }, [priceCurrencies, onComplete]);

  const handlePriceCurrencyChange = (
    colorCode: string,
    index: number,
    field: keyof PriceCurrency,
    value: string | number
  ) => {
    const updatedPriceCurrencies = priceCurrencies.map((priceCurrency, i) =>
      i === index && priceCurrency.color_code === colorCode
        ? { ...priceCurrency, [field]: value }
        : priceCurrency
    );
    setPriceCurrencies(updatedPriceCurrencies);
  };

  const addPriceCurrency = (colorCode: string, currency: string) => {
    setPriceCurrencies((prevPriceCurrencies) => [
      ...prevPriceCurrencies,
      {
        color_code: colorCode,
        currency_code: currency,
        country_code: "US", // 기본값
        amount: 0, // 기본값
      },
    ]);
    setSelectedCurrency(""); // 추가 후 선택된 통화 초기화
  };

  const removePriceCurrency = (colorCode: string, index: number) => {
    const updatedPriceCurrencies = priceCurrencies.filter(
      (priceCurrency, i) =>
        !(priceCurrency.color_code === colorCode && i === index)
    );
    setPriceCurrencies(updatedPriceCurrencies);
  };

  const availableCurrencies = (colorCode: string) => {
    const selectedCurrenciesForColor = priceCurrencies
      .filter((priceCurrency) => priceCurrency.color_code === colorCode)
      .map((priceCurrency) => priceCurrency.currency_code);
    return currencies.filter(
      (currency) => !selectedCurrenciesForColor.includes(currency)
    );
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Set Price for Colors</h2>

      {colors.map((color) => (
        <div
          key={color.code}
          className="mb-6 p-4 border border-gray-200 rounded-md"
        >
          <div className="flex items-center mb-4">
            <h3 className="text-lg font-semibold">Color: {color.code}</h3>
            <div
              className="ml-4 w-8 h-8 rounded-full border"
              style={{ backgroundColor: color.code }}
            ></div>
          </div>

          {/* 추가된 통화별 가격 설정 */}
          {priceCurrencies
            .filter((priceCurrency) => priceCurrency.color_code === color.code)
            .map((priceCurrency, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <span className="font-semibold w-32 p-2 border border-gray-300 rounded-md">
                  {priceCurrency.currency_code}
                </span>
                <input
                  type="number"
                  value={priceCurrency.amount}
                  onChange={(e) =>
                    handlePriceCurrencyChange(
                      priceCurrency.color_code,
                      index,
                      "amount",
                      parseFloat(e.target.value)
                    )
                  }
                  className="w-32 p-2 border border-gray-300 rounded-md"
                  placeholder="Amount"
                />
                <button
                  onClick={() =>
                    removePriceCurrency(priceCurrency.color_code, index)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}

          {/* 통화별 가격 추가 버튼 */}
          {availableCurrencies(color.code).length > 0 && (
            <div className="flex space-x-4">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md mb-4"
              >
                <option value="">Select Currency</option>
                {availableCurrencies(color.code).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <button
                onClick={() =>
                  selectedCurrency &&
                  addPriceCurrency(color.code, selectedCurrency)
                }
                disabled={!selectedCurrency}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add Price for {color.code}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PriceCurrencyForm;
