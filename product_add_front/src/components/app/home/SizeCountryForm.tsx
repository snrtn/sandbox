"use client";

import React, { useState, useEffect } from "react";

interface SizeCountry {
  color_code: string;
  size_label: string;
  country_code: string;
  name: string;
}

interface SizeCountryFormProps {
  colors: { code: string }[];
  sizes: { label: string }[];
  onComplete: (sizeCountries: SizeCountry[]) => void;
}

const countries = ["US", "UK", "FR"]; // 샘플 국가 리스트

const SizeCountryForm: React.FC<SizeCountryFormProps> = ({
  colors,
  sizes,
  onComplete,
}) => {
  const [sizeCountries, setSizeCountries] = useState<SizeCountry[]>([]);

  useEffect(() => {
    // 모든 데이터가 변경될 때마다 상위 컴포넌트로 전달
    onComplete(sizeCountries);
  }, [sizeCountries, onComplete]);

  // 사이즈 국가 데이터 변경 처리 함수
  const handleSizeCountryChange = (
    colorCode: string,
    sizeLabel: string,
    countryCode: string,
    field: keyof SizeCountry,
    value: string
  ) => {
    const updatedSizeCountries = sizeCountries.map((sizeCountry) =>
      sizeCountry.color_code === colorCode &&
      sizeCountry.size_label === sizeLabel &&
      sizeCountry.country_code === countryCode
        ? { ...sizeCountry, [field]: value }
        : sizeCountry
    );
    setSizeCountries(updatedSizeCountries);
  };

  // 사이즈 국가 데이터 추가 함수
  const addSizeCountry = (
    colorCode: string,
    sizeLabel: string,
    countryCode: string
  ) => {
    setSizeCountries((prevSizeCountries) => [
      ...prevSizeCountries,
      {
        color_code: colorCode,
        size_label: sizeLabel,
        country_code: countryCode,
        name: "",
      },
    ]);
  };

  // 사이즈 국가 데이터 삭제 함수
  const removeSizeCountry = (
    colorCode: string,
    sizeLabel: string,
    countryCode: string
  ) => {
    const updatedSizeCountries = sizeCountries.filter(
      (sizeCountry) =>
        !(
          sizeCountry.color_code === colorCode &&
          sizeCountry.size_label === sizeLabel &&
          sizeCountry.country_code === countryCode
        )
    );
    setSizeCountries(updatedSizeCountries);
  };

  // 이미 선택된 국가를 필터링하여 반환
  const availableCountries = (colorCode: string, sizeLabel: string) => {
    const selectedCountries = sizeCountries
      .filter(
        (sizeCountry) =>
          sizeCountry.color_code === colorCode &&
          sizeCountry.size_label === sizeLabel
      )
      .map((sizeCountry) => sizeCountry.country_code);
    return countries.filter((country) => !selectedCountries.includes(country));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Add Size Country Information</h2>

      {/* 색상별로 사이즈 국가 정보 추가 및 관리 */}
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

          {/* 사이즈 별 국가 정보 추가 */}
          {sizes.map((size) => (
            <div key={size.label}>
              <h4 className="font-semibold mb-2">Size: {size.label}</h4>

              {/* 추가된 국가별 사이즈 정보 */}
              {sizeCountries
                .filter(
                  (sizeCountry) =>
                    sizeCountry.color_code === color.code &&
                    sizeCountry.size_label === size.label
                )
                .map((sizeCountry, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 mb-4 p-2 bg-gray-100 rounded-md shadow-sm"
                  >
                    <span className="font-semibold flex-1">
                      {sizeCountry.country_code}
                    </span>
                    <input
                      type="text"
                      value={sizeCountry.name}
                      onChange={(e) =>
                        handleSizeCountryChange(
                          sizeCountry.color_code,
                          sizeCountry.size_label,
                          sizeCountry.country_code,
                          "name",
                          e.target.value
                        )
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter size name"
                    />
                    <button
                      onClick={() =>
                        removeSizeCountry(
                          sizeCountry.color_code,
                          sizeCountry.size_label,
                          sizeCountry.country_code
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}

              {/* 국가 추가 버튼 */}
              {availableCountries(color.code, size.label).length > 0 && (
                <div className="flex space-x-4">
                  <select
                    onChange={(e) => {
                      const selectedCountry = e.target.value;
                      if (selectedCountry) {
                        addSizeCountry(color.code, size.label, selectedCountry);
                      }
                    }}
                    className="block w-full p-2 border border-gray-300 rounded-md mb-4"
                  >
                    <option value="">Select Country</option>
                    {availableCountries(color.code, size.label).map(
                      (countryCode) => (
                        <option key={countryCode} value={countryCode}>
                          {countryCode}
                        </option>
                      )
                    )}
                  </select>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SizeCountryForm;
