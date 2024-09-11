// components/SizeForm.jsx
import { useState } from "react";

const SizeForm = () => {
  const [sizes, setSizes] = useState([
    {
      label: "S",
      stock: 50,
      countryVariants: [{ country_code: "US", name: "0" }],
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSizes = [...sizes];
    updatedSizes[index][name] = value;
    setSizes(updatedSizes);
  };

  const handleVariantChange = (sizeIndex, variantIndex, e) => {
    const { name, value } = e.target;
    const updatedSizes = [...sizes];
    updatedSizes[sizeIndex].countryVariants[variantIndex][name] = value;
    setSizes(updatedSizes);
  };

  const addSize = () => {
    setSizes((prev) => [...prev, { label: "", stock: 0, countryVariants: [] }]);
  };

  const addVariant = (sizeIndex) => {
    const updatedSizes = [...sizes];
    updatedSizes[sizeIndex].countryVariants.push({
      country_code: "",
      name: "",
    });
    setSizes(updatedSizes);
  };

  return (
    <div className="p-4 bg-white ">
      <h3 className="text-lg font-semibold mb-4">Sizes</h3>
      {sizes.map((size, sizeIndex) => (
        <div key={sizeIndex} className="mb-6">
          <p className="text-red-500">{sizeIndex + 1}</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Size Label:
            </label>
            <select
              name="label"
              value={size.label}
              onChange={(e) => handleChange(sizeIndex, e)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              {/* More sizes */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Stock:
            </label>
            <input
              type="number"
              name="stock"
              value={size.stock}
              onChange={(e) => handleChange(sizeIndex, e)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Country Variants
            </h4>
            {size.countryVariants.map((variant, variantIndex) => (
              <div key={variantIndex} className="mb-2">
                <div className="flex items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700 mr-2">
                    Country Code:
                  </label>
                  <select
                    name="country_code"
                    value={variant.country_code}
                    onChange={(e) =>
                      handleVariantChange(sizeIndex, variantIndex, e)
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="US">US</option>
                    <option value="FR">FR</option>
                    {/* More country codes */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={variant.name}
                    onChange={(e) =>
                      handleVariantChange(sizeIndex, variantIndex, e)
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addVariant(sizeIndex)}
              className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Variant
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addSize}
        className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Size
      </button>
    </div>
  );
};

export default SizeForm;
