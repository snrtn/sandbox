"use client";

import React, { useState, useEffect } from "react";

interface ColorTranslation {
  color_code: string;
  language_code: string;
  name: string;
}

interface ColorTranslationFormProps {
  colors: { code: string }[];
  onComplete: (isComplete: boolean) => void;
}

const ColorTranslationForm: React.FC<ColorTranslationFormProps> = ({
  colors,
  onComplete,
}) => {
  const [translations, setTranslations] = useState<ColorTranslation[]>([]);

  useEffect(() => {
    // Check if all colors have both 'en' and 'fr' translations
    const allComplete = colors.every((color) => {
      const colorTranslations = translations.filter(
        (t) => t.color_code === color.code
      );
      const hasEnglish = colorTranslations.some(
        (t) => t.language_code === "en" && t.name
      );
      const hasFrench = colorTranslations.some(
        (t) => t.language_code === "fr" && t.name
      );
      return hasEnglish && hasFrench;
    });

    onComplete(allComplete); // Pass the complete status to the parent component
  }, [translations, colors, onComplete]);

  const handleTranslationChange = (
    colorCode: string,
    lang: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    const updatedTranslations = translations.map((translation) =>
      translation.color_code === colorCode && translation.language_code === lang
        ? { ...translation, name: value }
        : translation
    );
    setTranslations(updatedTranslations);
  };

  const addTranslation = (colorCode: string, lang: string) => {
    setTranslations([
      ...translations,
      {
        color_code: colorCode,
        language_code: lang,
        name: "",
      },
    ]);
  };

  const availableLanguages = (colorCode: string) => {
    const usedLanguages = translations
      .filter((t) => t.color_code === colorCode)
      .map((t) => t.language_code);
    return ["en", "fr"].filter((lang) => !usedLanguages.includes(lang));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Add Color Translations</h2>

      {colors.map((color) => (
        <div
          key={color.code}
          className="mb-6 p-4 border border-gray-200 rounded-md"
        >
          <div className="flex items-center mb-4">
            <h3 className="text-lg font-semibold">Color: {color.code}</h3>
            <div
              className="ml-4 w-8 h-8 rounded-full border-4"
              style={{ backgroundColor: color.code }}
            ></div>
          </div>

          {/* Display added translations */}
          {translations
            .filter((t) => t.color_code === color.code)
            .map((translation, i) => (
              <div key={i} className="mb-4">
                <label className="block font-semibold mb-1">
                  Language ({translation.language_code})
                </label>
                <input
                  type="text"
                  name="name"
                  value={translation.name}
                  onChange={(e) =>
                    handleTranslationChange(
                      translation.color_code,
                      translation.language_code,
                      e
                    )
                  }
                  className="block w-full p-2 border border-gray-300 rounded-md"
                  placeholder={`Enter ${translation.language_code} name`}
                />
              </div>
            ))}

          {/* Add Translation Button */}
          {availableLanguages(color.code).length > 0 && (
            <div>
              <label className="block font-semibold mb-1">
                Add Translation
              </label>
              <select
                onChange={(e) => {
                  const selectedLang = e.target.value;
                  addTranslation(color.code, selectedLang);
                }}
                className="block w-full p-2 border border-gray-300 rounded-md mb-4"
              >
                <option value="">Select Language</option>
                {availableLanguages(color.code).map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.toUpperCase()}
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

export default ColorTranslationForm;
