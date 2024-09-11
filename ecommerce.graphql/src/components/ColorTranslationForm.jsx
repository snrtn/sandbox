// components/ColorTranslationForm.jsx
import { useState } from "react";

const ColorTranslationForm = () => {
  const [colorTranslations, setColorTranslations] = useState([
    { language_code: "en", name: "" },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTranslations = [...colorTranslations];
    updatedTranslations[index][name] = value;
    setColorTranslations(updatedTranslations);
  };

  const addTranslation = () => {
    setColorTranslations((prev) => [...prev, { language_code: "", name: "" }]);
  };

  return (
    <div className="p-4 bg-white">
      <h3 className="text-lg font-semibold mb-4">Color Translations</h3>
      {colorTranslations.map((translation, index) => (
        <div key={index} className="mb-6">
          <p className="text-red-500">{index + 1}</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Language:
            </label>
            <select
              name="language_code"
              value={translation.language_code}
              onChange={(e) => handleChange(index, e)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Language</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              {/* More languages */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={translation.name}
              onChange={(e) => handleChange(index, e)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addTranslation}
        className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Color Translation
      </button>
    </div>
  );
};

export default ColorTranslationForm;
