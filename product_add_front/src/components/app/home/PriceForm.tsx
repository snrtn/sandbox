"use client";

import React, { useState, useEffect } from "react";

interface Price {
  color_code: string;
  discount: number;
}

interface PriceFormProps {
  colors: { code: string }[];
  onComplete: (prices: Price[]) => void;
}

const PriceForm: React.FC<PriceFormProps> = ({ colors, onComplete }) => {
  const [prices, setPrices] = useState<Price[]>([]);

  useEffect(() => {
    onComplete(prices);
  }, [prices, onComplete]);

  const handlePriceChange = (
    colorCode: string,
    field: keyof Price,
    value: number
  ) => {
    const updatedPrices = prices.map((price) =>
      price.color_code === colorCode ? { ...price, [field]: value } : price
    );
    setPrices(updatedPrices);
  };

  const addPrice = (colorCode: string) => {
    setPrices((prevPrices) => [
      ...prevPrices,
      {
        color_code: colorCode,
        discount: 0, // 기본값
      },
    ]);
  };

  const removePrice = (colorCode: string) => {
    const updatedPrices = prices.filter(
      (price) => price.color_code !== colorCode
    );
    setPrices(updatedPrices);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Set Discount for Colors</h2>

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

          {/* 추가된 할인율 설정 */}
          {prices
            .filter((price) => price.color_code === color.code)
            .map((price, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <input
                  type="number"
                  value={price.discount}
                  onChange={(e) =>
                    handlePriceChange(
                      price.color_code,
                      "discount",
                      parseFloat(e.target.value)
                    )
                  }
                  className="w-32 p-2 border border-gray-300 rounded-md"
                  placeholder="Enter discount"
                  min="0"
                  max="1"
                  step="0.01"
                />
                <button
                  onClick={() => removePrice(price.color_code)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}

          {/* 할인율 추가 버튼 */}
          {prices.every((p) => p.color_code !== color.code) && (
            <button
              onClick={() => addPrice(color.code)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Discount for {color.code}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PriceForm;
