import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import genderOptions from "./productForm.data";

const ProductForm = ({
  products,
  setProduct,
  onValidate,
  fileNames,
  setFileNames,
}) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fileInputRefs = {
    front: useRef(null),
    back: useRef(null),
    left: useRef(null),
    right: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedProduct = { ...products, [name]: value };

    if (name === "gender") {
      updatedProduct.category = "";
      updatedProduct.sort = "";
      updatedProduct.type = "";
    } else if (name === "category") {
      updatedProduct.sort = "";
      updatedProduct.type = "";
    } else if (name === "sort") {
      updatedProduct.type = "";
    }

    setProduct(updatedProduct);
    validateForm(updatedProduct);
  };

  const handleImageChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (file) {
      const updatedFileNames = { ...fileNames, [name]: file.name };
      setFileNames(updatedFileNames);

      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProduct = {
          ...products,
          images: { ...products.images, [name]: reader.result },
        };
        setProduct(updatedProduct);
        validateForm(updatedProduct);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileButtonClick = (side) => {
    if (fileInputRefs[side].current) {
      fileInputRefs[side].current.click();
    }
  };

  const handlePreview = (image) => {
    setPreviewImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPreviewImage(null);
  };

  const validateForm = (updatedProduct) => {
    const isValid =
      updatedProduct.gender &&
      updatedProduct.category &&
      updatedProduct.sort &&
      updatedProduct.type &&
      updatedProduct.images.front &&
      updatedProduct.images.back;

    onValidate(isValid);
  };

  const getInputClassName = (isDisabled) =>
    `mt-1 block w-full px-3 py-2 border ${
      isDisabled ? "border-gray-300 bg-white" : "border-gray-400 bg-gray-100"
    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`;

  const categoryOptions = products.gender
    ? Object.keys(genderOptions[products.gender])
    : [];

  const sortOptions =
    products.gender && products.category
      ? Object.keys(genderOptions[products.gender][products.category])
      : [];

  const typeOptions =
    products.gender && products.category && products.sort
      ? genderOptions[products.gender][products.category][products.sort]
      : [];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Product Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            label: "Gender",
            name: "gender",
            options: Object.keys(genderOptions),
          },
          {
            label: "Category",
            name: "category",
            options: categoryOptions,
            disabled: !products.gender,
          },
          {
            label: "Sort",
            name: "sort",
            options: sortOptions,
            disabled: !products.category,
          },
          {
            label: "Type",
            name: "type",
            options: typeOptions,
            disabled: !products.sort,
          },
        ].map(({ label, name, options, disabled = false }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">
              {label}:
            </label>
            <select
              name={name}
              value={products[name]}
              onChange={handleChange}
              disabled={disabled}
              className={getInputClassName(disabled)}
            >
              <option value="" disabled>
                Select a {label}
              </option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {["front", "back", "left", "right"].map((side) => (
          <div key={side}>
            <label className="block text-sm font-medium text-gray-700">
              {side.charAt(0).toUpperCase() + side.slice(1)} Image:
            </label>
            <div className="flex items-center">
              <input
                type="file"
                accept="image/*"
                name={side}
                ref={fileInputRefs[side]}
                onChange={handleImageChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => handleFileButtonClick(side)}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
              >
                Choose file
              </button>

              {products.images[side] && (
                <div className="ml-2 flex items-center">
                  <img
                    src={products.images[side]}
                    alt={`${side} preview`}
                    className="w-12 h-12 object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => handlePreview(products.images[side])}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    <FaEye className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
            {fileNames[side] && (
              <p className="text-[10px] text-gray-600 mt-1">
                {fileNames[side]}
              </p>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white overflow-hidden shadow-lg">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full h-[62vh]"
            />
            <div className="flex justify-end p-3">
              <button
                type="button"
                onClick={closeModal}
                className="px-3 py-1 text-xs bg-red-500 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes 정의
ProductForm.propTypes = {
  products: PropTypes.shape({
    product_id: PropTypes.string,
    created_at: PropTypes.string,
    discount_start: PropTypes.string,
    discount_end: PropTypes.string,
    gender: PropTypes.string,
    category: PropTypes.string,
    sort: PropTypes.string,
    type: PropTypes.string,
    images: PropTypes.shape({
      front: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      back: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      left: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      right: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    }),
    productTranslations: PropTypes.arrayOf(
      PropTypes.shape({
        translation_id: PropTypes.string,
        product_id: PropTypes.string,
        language_code: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        materials: PropTypes.arrayOf(PropTypes.string),
        care_instructions: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }).isRequired,
  setProduct: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
  fileNames: PropTypes.object.isRequired,
  setFileNames: PropTypes.func.isRequired,
};

export default ProductForm;
