"use client";

import React, { useState, useEffect } from "react";
import { options } from "./ProductStepForm.data";

// 인터페이스
interface ProductData {
  gender: "" | "unisex" | "male" | "female";
  category: string;
  sort: string;
  type: string;
  images: {
    front: string;
    back: string;
    left: string;
    right: string;
  };
}

interface ProductStepFormProps {
  onComplete: (isComplete: boolean) => void;
}

// 타입 가드 함수
const isValidGender = (
  gender: string
): gender is "unisex" | "male" | "female" => {
  return ["unisex", "male", "female"].includes(gender);
};

const ProductStepForm: React.FC<ProductStepFormProps> = ({ onComplete }) => {
  const [productData, setProductData] = useState<ProductData>({
    gender: "",
    category: "",
    sort: "",
    type: "",
    images: {
      front: "",
      back: "",
      left: "",
      right: "",
    },
  });

  const [imagePreviews, setImagePreviews] = useState({
    front: "",
    back: "",
    left: "",
    right: "",
  });

  // 필수값이 모두 입력되었는지 확인
  useEffect(() => {
    const isComplete: boolean =
      !!productData.gender &&
      !!productData.category &&
      !!productData.sort &&
      !!productData.type &&
      Object.values(productData.images).every(Boolean);

    onComplete(isComplete); // true 또는 false만 전달
  }, [productData, onComplete]);

  // Product Data 변경 처리
  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "gender" && isValidGender(value)) {
      // Gender 변경 시 category, sort, type 초기화
      setProductData({
        ...productData,
        gender: value,
        category: "",
        sort: "",
        type: "",
      });
    } else if (name === "category") {
      // Category 변경 시 sort, type 초기화
      setProductData({
        ...productData,
        category: value,
        sort: "",
        type: "",
      });
    } else if (name === "sort") {
      // Sort 변경 시 type 초기화
      setProductData({
        ...productData,
        sort: value,
        type: "",
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
  };

  // 이미지 파일 처리
  const handleFileChange = (imageField: string, file: File | null) => {
    if (file && ["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews({
          ...imagePreviews,
          [imageField]: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);

      setProductData({
        ...productData,
        images: {
          ...productData.images,
          [imageField]: file.name,
        },
      });
    } else {
      alert("Only JPG, JPEG, and PNG files are allowed.");
    }
  };

  return (
    <form className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Product Data</h2>

      <div className="flex flex-wrap -mx-2">
        {/* Gender */}
        <div className="w-1/2 px-2 mb-4">
          <label className="block font-semibold mb-1">Gender</label>
          <select
            name="gender"
            value={productData.gender}
            onChange={handleProductChange}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="unisex">Unisex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Category */}
        <div className="w-1/2 px-2 mb-4">
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            value={productData.category}
            onChange={handleProductChange}
            className="block w-full p-2 border border-gray-300 rounded-md"
            disabled={!productData.gender}
          >
            <option value="">Select Category</option>
            {isValidGender(productData.gender) &&
              options[productData.gender].categories.map((category: any) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
        </div>

        {/* Sort */}
        <div className="w-1/2 px-2 mb-4">
          <label className="block font-semibold mb-1">Sort</label>
          <select
            name="sort"
            value={productData.sort}
            onChange={handleProductChange}
            className="block w-full p-2 border border-gray-300 rounded-md"
            disabled={!productData.category}
          >
            <option value="">Select Sort</option>
            {isValidGender(productData.gender) &&
              productData.category &&
              options[productData.gender].sorts[productData.category]?.map(
                (sort: string) => (
                  <option key={sort} value={sort}>
                    {sort}
                  </option>
                )
              )}
          </select>
        </div>

        {/* Type */}
        <div className="w-1/2 px-2 mb-4">
          <label className="block font-semibold mb-1">Type</label>
          <select
            name="type"
            value={productData.type}
            onChange={handleProductChange}
            className="block w-full p-2 border border-gray-300 rounded-md"
            disabled={!productData.sort}
          >
            <option value="">Select Type</option>
            {isValidGender(productData.gender) &&
              productData.sort &&
              options[productData.gender].types[productData.sort]?.map(
                (type: string) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                )
              )}
          </select>
        </div>

        {/* Images */}
        {["front", "back", "left", "right"].map((view) => (
          <div key={view} className="w-1/2 px-2 mb-4">
            <label className="block font-semibold mb-1 capitalize">
              {view} Image
            </label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e) =>
                handleFileChange(
                  view,
                  e.target.files ? e.target.files[0] : null
                )
              }
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
            {imagePreviews[view as keyof typeof imagePreviews] && (
              <img
                src={imagePreviews[view as keyof typeof imagePreviews]}
                alt={`${view} preview`}
                className="mt-2 w-24 h-24 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </form>
  );
};

export default ProductStepForm;
