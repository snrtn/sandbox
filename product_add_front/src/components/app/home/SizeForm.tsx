"use client";

import React, { useState, useEffect } from "react";

interface Size {
  color_code: string;
  label: string;
  stock: number;
  stock_active: boolean;
}

interface SizeFormProps {
  colors: { code: string }[]; // 색상 코드 리스트
  onComplete: (sizes: Size[]) => void; // 사이즈 데이터 상위 컴포넌트로 전달
}

// 사이즈 목록 (XXS부터 6XL까지 추가, 유니크 사이즈 포함)
const predefinedSizes = [
  "XXS",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "2XL",
  "3XL",
  "4XL",
  "5XL",
  "6XL",
  "One Size",
];

const SizeForm: React.FC<SizeFormProps> = ({ colors, onComplete }) => {
  const [sizes, setSizes] = useState<Size[]>([]);

  useEffect(() => {
    // 모든 색상에 대해 사이즈 데이터를 합쳐서 상위 컴포넌트로 전달
    onComplete(sizes);
  }, [sizes, onComplete]);

  // 사이즈 데이터 변경 처리 함수
  const handleSizeChange = (
    colorCode: string,
    index: number,
    field: keyof Size,
    value: string | number | boolean
  ) => {
    const updatedSizes = sizes.map((size, i) =>
      i === index ? { ...size, [field]: value } : size
    );
    setSizes(updatedSizes);
  };

  // 사이즈 추가 함수 (stock_active는 기본 true로 설정)
  const addSize = (colorCode: string, label: string) => {
    setSizes((prevSizes) => [
      ...prevSizes,
      {
        color_code: colorCode,
        label: label,
        stock: 0,
        stock_active: true, // 기본값 true
      },
    ]);
  };

  // 사이즈 삭제 함수
  const removeSize = (index: number) => {
    const updatedSizes = sizes.filter((_, i) => i !== index);
    setSizes(updatedSizes);
  };

  // 사용 가능한 사이즈 필터링
  const availableSizes = (colorCode: string) => {
    const selectedSizesForColor = sizes
      .filter((size) => size.color_code === colorCode)
      .map((size) => size.label);

    // 'One Size'는 아무 사이즈도 선택되지 않았을 때만 추가 가능하게 설정
    if (selectedSizesForColor.length === 0) {
      return predefinedSizes;
    } else {
      return predefinedSizes.filter(
        (size) => size !== "One Size" && !selectedSizesForColor.includes(size)
      );
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Add Sizes for Colors</h2>

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

          {/* 추가된 사이즈 목록 한 줄로 보여주기 */}
          {sizes
            .filter((size) => size.color_code === color.code)
            .map((size, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 mb-4 p-2 bg-gray-100 px-8 rounded-md shadow-sm"
              >
                <div className="flex-1">
                  <span>Size: </span>
                  <span className="p-2 font-semibold">{size.label}</span>
                </div>

                {/* Stock 입력 필드와 라벨 */}
                <div className="flex items-center space-x-2">
                  <label className="text-gray-600">Stock:</label>
                  <input
                    type="number"
                    value={size.stock}
                    onChange={(e) =>
                      handleSizeChange(
                        color.code,
                        index,
                        "stock",
                        +e.target.value
                      )
                    }
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Stock"
                  />
                </div>

                <button
                  onClick={() => removeSize(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}

          {/* 사이즈 추가 버튼 */}
          {availableSizes(color.code).length > 0 && (
            <div className="flex space-x-4">
              <select
                onChange={(e) => addSize(color.code, e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md mb-4"
              >
                <option value="">Select Size</option>
                {availableSizes(color.code).map((sizeOption) => (
                  <option key={sizeOption} value={sizeOption}>
                    {sizeOption}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SizeForm;
