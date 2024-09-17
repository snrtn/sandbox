"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ColorImages {
  front: string;
  back: string;
  left: string;
  right: string;
}

interface Color {
  code: string;
  images: ColorImages;
  discount_active: boolean;
  stock_active: boolean;
}

interface ColorFormProps {
  onComplete: (isComplete: boolean, addedColors: Color[]) => void;
}

const ColorForm: React.FC<ColorFormProps> = ({ onComplete }) => {
  const [colors, setColors] = useState<Color[]>([]); // 추가된 색상 목록을 관리
  const [colorError, setColorError] = useState<string | null>(null);
  const [isAddDisabled, setIsAddDisabled] = useState(true); // Add 버튼 비활성화 상태 관리

  const [newColor, setNewColor] = useState<Color>({
    code: "#", // 기본값은 '#'으로 고정
    images: {
      front: "",
      back: "",
      left: "",
      right: "",
    },
    discount_active: false,
    stock_active: true,
  });

  const [imagePreviews, setImagePreviews] = useState<ColorImages>({
    front: "",
    back: "",
    left: "",
    right: "",
  });

  useEffect(() => {
    onComplete(colors.length > 0, colors); // 색상 리스트가 있을 때 완료 상태로 처리
  }, [colors, onComplete]);

  useEffect(() => {
    // 모든 필드가 입력되었는지 확인
    const isColorComplete =
      newColor.code.length === 7 && // # 포함 7자리의 hex 코드인지 확인
      imagePreviews.front &&
      imagePreviews.back &&
      imagePreviews.left &&
      imagePreviews.right;

    setIsAddDisabled(!isColorComplete); // 조건에 맞지 않으면 비활성화
  }, [newColor, imagePreviews]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    if (!value.startsWith("#")) {
      value = "#" + value; // #이 없으면 자동으로 추가
    }

    if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
      setColorError(null);
      setNewColor({
        ...newColor,
        code: value,
      });
    } else {
      setColorError("Color code must be a valid hex code (e.g., #FF5733).");
    }
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: keyof ColorImages
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => ({
          ...prevPreviews,
          [side]: reader.result as string,
        }));

        setNewColor((prevColor) => ({
          ...prevColor,
          images: {
            ...prevColor.images,
            [side]: file.name,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addColor = () => {
    setColors([...colors, { ...newColor, images: { ...imagePreviews } }]);
    setNewColor({
      code: "#", // 폼 초기화 시에도 #으로 시작 고정
      images: {
        front: "",
        back: "",
        left: "",
        right: "",
      },
      discount_active: false,
      stock_active: true,
    });
    setImagePreviews({
      front: "",
      back: "",
      left: "",
      right: "",
    });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Add New Color</h2>

      {/* Color Code 입력 */}
      <div className="mb-4 flex items-center">
        <div className="w-full">
          <label className="block font-semibold mb-1">Color Code</label>
          <div className="flex items-center">
            <input
              type="text"
              name="code"
              value={newColor.code}
              onChange={handleColorChange}
              className={`block w-full p-2 border ${
                colorError ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Enter color code (e.g., #FF5733)"
              maxLength={7} // 헥스 코드 길이 제한
            />
            <div className="ml-4">
              {newColor.code && !colorError && (
                <div
                  className="w-10 h-10 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: newColor.code }}
                ></div>
              )}
            </div>
          </div>
          {colorError && (
            <p className="text-red-500 text-sm mt-1">{colorError}</p>
          )}
        </div>
      </div>

      {/* 이미지 입력 */}
      <div className="flex flex-wrap -mx-2 mb-4">
        {["front", "back", "left", "right"].map((view) => (
          <div key={view} className="w-1/2 px-2 mb-4">
            <label className="block font-semibold mb-1 capitalize">
              {view} Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, view as keyof ColorImages)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
            {imagePreviews[view as keyof ColorImages] && (
              <Image
                src={imagePreviews[view as keyof ColorImages]}
                alt={`${view} preview`}
                className="mt-2 w-full h-40 object-contain rounded-md"
                width={400}
                height={400}
                unoptimized
              />
            )}
          </div>
        ))}
      </div>

      {/* Color 추가 버튼 */}
      <button
        onClick={addColor}
        className={`${
          isAddDisabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white px-6 py-2 rounded-md transition`}
        disabled={isAddDisabled} // 비활성화 상태 관리
      >
        Add Color
      </button>

      {/* 추가된 색상 미리보기 */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Colors Added</h3>
        {colors.map((color, index) => (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50"
          >
            <h3 className="text-xl font-bold mb-4">Color {index + 1}</h3>
            <div className="flex items-center mb-4">
              <div
                className="w-8 h-8 rounded-full mr-4"
                style={{ backgroundColor: color.code }}
              ></div>
              <span className="font-semibold">Color Code: {color.code}</span>
            </div>
            <div className="flex space-x-4">
              {["front", "back", "left", "right"].map((view) => (
                <div key={view} className="w-1/4">
                  <Image
                    src={color.images[view as keyof ColorImages]} // 각 색상의 이미지 미리보기 유지
                    alt={`${view} view`}
                    className="w-full h-40 object-contain rounded-md"
                    width={400}
                    height={400}
                  />
                  <p className="text-center mt-2 capitalize">{view}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorForm;