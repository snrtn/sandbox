import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  materialsOptions,
  careInstructionsOptions,
} from "./translationForm.data";
import {
  updateProductTranslation,
  addProductTranslation,
  removeProductTranslation,
  setIsNextDisabled,
} from "../redux/slice/productSlice";

const TranslationForm = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.product.products.find((p) => p.product_id === productId)
  );
  const translations = product ? product.productTranslations : [];

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    dispatch(
      updateProductTranslation({
        productId,
        translationIndex: index,
        name,
        value,
      })
    );
    checkValidation();
  };

  const handleSelectChange = (index, name, value) => {
    const updatedTranslation = { ...translations[index] };
    updatedTranslation[name] = [...updatedTranslation[name], value];

    dispatch(
      updateProductTranslation({
        productId,
        translationIndex: index,
        name,
        value: updatedTranslation[name],
      })
    );
    checkValidation();
  };

  const addNewTranslation = () => {
    dispatch(
      addProductTranslation({
        productId,
        translation: {
          language_code: "en",
          name: "",
          description: "",
          materials: [],
          care_instructions: [],
        },
      })
    );
  };

  const removeExistingTranslation = (index) => {
    dispatch(removeProductTranslation({ productId, translationIndex: index }));
    checkValidation();
  };

  const removeChip = (index, name, item) => {
    const updatedTranslation = { ...translations[index] };
    updatedTranslation[name] = updatedTranslation[name].filter(
      (i) => i !== item
    );

    dispatch(
      updateProductTranslation({
        productId,
        translationIndex: index,
        name,
        value: updatedTranslation[name],
      })
    );
    checkValidation();
  };

  const checkValidation = () => {
    const isValid = translations.every(
      (translation) =>
        translation.language_code &&
        translation.name &&
        translation.description &&
        translation.materials.length > 0 &&
        translation.care_instructions.length > 0
    );
    dispatch(setIsNextDisabled(!isValid));
  };

  return (
    <div className="p-4 bg-white">
      <h3 className="text-lg font-semibold mb-4">Product Translations</h3>
      {translations.map((translation, index) => (
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
              <option value="en">English</option>
              <option value="fr">French</option>
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <input
              type="text"
              name="description"
              value={translation.description}
              onChange={(e) => handleChange(index, e)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Materials:
            </label>
            <select
              name="materials"
              onChange={(e) =>
                handleSelectChange(index, "materials", e.target.value)
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
                Select a material
              </option>
              {materialsOptions[translation.language_code].map((material) => (
                <option key={material} value={material}>
                  {material}
                </option>
              ))}
            </select>
            <div className="mt-2">
              {translation.materials.map((material) => (
                <span
                  key={material}
                  className="inline-flex items-center m-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {material}
                  <button
                    type="button"
                    onClick={() => removeChip(index, "materials", material)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Care Instructions:
            </label>
            <select
              name="care_instructions"
              onChange={(e) =>
                handleSelectChange(index, "care_instructions", e.target.value)
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
                Select a care instruction
              </option>
              {careInstructionsOptions[translation.language_code].map(
                (instruction) => (
                  <option key={instruction} value={instruction}>
                    {instruction}
                  </option>
                )
              )}
            </select>
            <div className="mt-2">
              {translation.care_instructions.map((instruction) => (
                <span
                  key={instruction}
                  className="inline-flex items-center m-1 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                >
                  {instruction}
                  <button
                    type="button"
                    onClick={() =>
                      removeChip(index, "care_instructions", instruction)
                    }
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
          {index !== 0 && (
            <button
              type="button"
              onClick={() => removeExistingTranslation(index)}
              className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Remove Translation
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addNewTranslation}
        className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Translation
      </button>
    </div>
  );
};

// PropTypes 정의
TranslationForm.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default TranslationForm;
