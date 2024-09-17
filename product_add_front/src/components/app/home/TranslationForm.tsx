"use client";

import React, { useState, useEffect } from "react";
import { materialsList, careInstructionsList } from "./TranslationForm.data";

interface Translation {
  language_code: "en" | "fr";
  name: string;
  description: string;
  materials: string[];
  care_instructions: string[];
}

interface TranslationFormProps {
  onComplete: (isComplete: boolean) => void;
}

const TranslationForm: React.FC<TranslationFormProps> = ({ onComplete }) => {
  const [translations, setTranslations] = useState<Translation[]>([
    {
      language_code: "en",
      name: "",
      description: "",
      materials: [],
      care_instructions: [],
    },
  ]);

  // 유효성 체크: 폼이 모두 채워졌는지 확인
  useEffect(() => {
    const isComplete = translations.every(
      (translation) =>
        translation.name &&
        translation.description &&
        translation.materials.length > 0 &&
        translation.care_instructions.length > 0
    );
    onComplete(isComplete);
  }, [translations, onComplete]);

  const handleTranslationChange = (
    index: number,
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const updatedTranslations = [...translations];
    updatedTranslations[index] = {
      ...updatedTranslations[index],
      [name]: value,
    };
    setTranslations(updatedTranslations);
  };

  const handleMaterialSelect = (
    index: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value) {
      const updatedTranslations = [...translations];
      updatedTranslations[index].materials.push(e.target.value);
      setTranslations(updatedTranslations);
    }
  };

  const handleCareInstructionSelect = (
    index: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value) {
      const updatedTranslations = [...translations];
      updatedTranslations[index].care_instructions.push(e.target.value);
      setTranslations(updatedTranslations);
    }
  };

  const removeSelectedMaterial = (index: number, material: string) => {
    const updatedTranslations = [...translations];
    updatedTranslations[index].materials = updatedTranslations[
      index
    ].materials.filter((m) => m !== material);
    setTranslations(updatedTranslations);
  };

  const removeSelectedCareInstruction = (
    index: number,
    instruction: string
  ) => {
    const updatedTranslations = [...translations];
    updatedTranslations[index].care_instructions = updatedTranslations[
      index
    ].care_instructions.filter((c) => c !== instruction);
    setTranslations(updatedTranslations);
  };

  const handleLanguageChange = (
    index: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const updatedTranslations = [...translations];
    updatedTranslations[index] = {
      ...updatedTranslations[index],
      language_code: e.target.value as "en" | "fr",
      materials: [],
      care_instructions: [],
    };
    setTranslations(updatedTranslations);
  };

  const addTranslation = () => {
    setTranslations([
      ...translations,
      {
        language_code: "en",
        name: "",
        description: "",
        materials: [],
        care_instructions: [],
      },
    ]);
  };

  const removeTranslation = (index: number) => {
    const updatedTranslations = translations.filter((_, i) => i !== index);
    setTranslations(updatedTranslations);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4">Product Translations</h2>

      {translations.map((translation, index) => {
        const availableMaterials = materialsList[
          translation.language_code
        ].filter((material) => !translation.materials.includes(material));

        const availableCareInstructions = careInstructionsList[
          translation.language_code
        ].filter(
          (instruction) => !translation.care_instructions.includes(instruction)
        );

        return (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-200 rounded-md"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold mb-4">
                Translation {index + 1}
              </h3>
              <button
                onClick={() => removeTranslation(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Remove Translation
              </button>
            </div>

            {/* Language Selector */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Language</label>
              <select
                name="language_code"
                value={translation.language_code}
                onChange={(e) => handleLanguageChange(index, e)}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={translation.name}
                onChange={(e) => handleTranslationChange(index, e)}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Description</label>
              <textarea
                name="description"
                value={translation.description}
                onChange={(e) => handleTranslationChange(index, e)}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Materials Selector */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Materials</label>
              <select
                onChange={(e) => handleMaterialSelect(index, e)}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value=""
              >
                <option value="">Select Material</option>
                {availableMaterials.map((material) => (
                  <option key={material} value={material}>
                    {material}
                  </option>
                ))}
              </select>

              {/* Selected Materials as Chips */}
              <div className="flex flex-wrap mt-2">
                {translation.materials.map((material) => (
                  <div
                    key={material}
                    className="px-3 py-1 m-1 bg-blue-100 text-blue-700 rounded-full flex items-center text-sm"
                  >
                    {material}
                    <button
                      onClick={() => removeSelectedMaterial(index, material)}
                      className="ml-2 text-red-500"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Instructions Selector */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Care Instructions
              </label>
              <select
                onChange={(e) => handleCareInstructionSelect(index, e)}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value=""
              >
                <option value="">Select Care Instruction</option>
                {availableCareInstructions.map((instruction) => (
                  <option key={instruction} value={instruction}>
                    {instruction}
                  </option>
                ))}
              </select>

              {/* Selected Care Instructions as Chips */}
              <div className="flex flex-wrap mt-2">
                {translation.care_instructions.map((instruction) => (
                  <div
                    key={instruction}
                    className="px-3 py-1 m-1 bg-green-100 text-green-700 rounded-full flex items-center text-sm"
                  >
                    {instruction}
                    <button
                      onClick={() =>
                        removeSelectedCareInstruction(index, instruction)
                      }
                      className="ml-2 text-red-500"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      <div className="mt-6 flex justify-end">
        <button
          onClick={addTranslation}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Translation
        </button>
      </div>
    </div>
  );
};

export default TranslationForm;
