// redux/slice/productSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Initial state definition
export const initialState = {
  activeStep: 0,
  isNextDisabled: true,
  stepsCompleted: new Array(7).fill(false),
  fileNames: {
    front: "",
    back: "",
    left: "",
    right: "",
  },
  products: {
    product_id: "",
    created_at: "",
    discount_start: "",
    discount_end: "",
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
    productTranslations: [
      {
        translation_id: "",
        product_id: "",
        language_code: "",
        name: "",
        description: "",
        materials: [],
        care_instructions: [],
      },
    ],
    colors: [
      {
        color_id: "",
        product_id: "",
        code: "",
        images: {
          front: "",
          back: "",
          left: "",
          right: "",
        },
      },
    ],
    colorTranslations: [
      {
        color_translation_id: "",
        color_id: "",
        language_code: "",
        name: "",
      },
    ],
    sizes: [
      {
        size_id: "",
        label: "",
        stock: 0,
        sizeCountryVariants: [
          {
            variant_id: "",
            country_code: "",
            name: "",
          },
        ],
      },
    ],
    prices: [
      {
        price_id: "",
        currency_code: "",
        amount: 0.0,
        discount: 0.0,
      },
    ],
  },
};

// Redux slice creation
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // General Product Data Management
    setProducts: (state, action) => {
      state.products = { ...state.products, ...action.payload };
    },
    updateProductData: (state, action) => {
      const { field, value } = action.payload;
      state.products[field] = value;
    },
    setFileNames: (state, action) => {
      state.fileNames = action.payload;
    },

    // Stepper Controls
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    setIsNextDisabled: (state, action) => {
      state.isNextDisabled = action.payload;
    },
    setStepsCompleted: (state, action) => {
      state.stepsCompleted = action.payload;
    },

    // Product Translations Management
    addProductTranslation: (state, action) => {
      state.products.productTranslations.push(action.payload);
    },
    updateProductTranslation: (state, action) => {
      const { index, data } = action.payload;
      state.products.productTranslations[index] = data;
    },
    removeProductTranslation: (state, action) => {
      state.products.productTranslations.splice(action.payload, 1);
    },

    // Color Variations Management
    addColor: (state, action) => {
      state.products.colors.push(action.payload);
    },
    updateColor: (state, action) => {
      const { index, data } = action.payload;
      state.products.colors[index] = data;
    },
    removeColor: (state, action) => {
      state.products.colors.splice(action.payload, 1);
    },

    // Color Translations Management
    addColorTranslation: (state, action) => {
      state.products.colorTranslations.push(action.payload);
    },
    updateColorTranslation: (state, action) => {
      const { index, data } = action.payload;
      state.products.colorTranslations[index] = data;
    },
    removeColorTranslation: (state, action) => {
      state.products.colorTranslations.splice(action.payload, 1);
    },

    // Size Variations Management
    addSize: (state, action) => {
      state.products.sizes.push(action.payload);
    },
    updateSize: (state, action) => {
      const { index, data } = action.payload;
      state.products.sizes[index] = data;
    },
    removeSize: (state, action) => {
      state.products.sizes.splice(action.payload, 1);
    },

    // Pricing Management
    addPrice: (state, action) => {
      state.products.prices.push(action.payload);
    },
    updatePrice: (state, action) => {
      const { index, data } = action.payload;
      state.products.prices[index] = data;
    },
    removePrice: (state, action) => {
      state.products.prices.splice(action.payload, 1);
    },

    // Resetting State
    resetAll: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setProducts,
  setActiveStep,
  setIsNextDisabled,
  setStepsCompleted,
  updateProductData,
  addProductTranslation,
  updateProductTranslation,
  removeProductTranslation,
  addColor,
  updateColor,
  removeColor,
  addColorTranslation,
  updateColorTranslation,
  removeColorTranslation,
  addSize,
  updateSize,
  removeSize,
  addPrice,
  updatePrice,
  removePrice,
  setFileNames,
  resetAll,
} = productSlice.actions;

export default productSlice.reducer;
