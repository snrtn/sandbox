// services/productService.js
import mongoose from "mongoose";

import {
  Product,
  ProductTranslation,
  Color,
  ColorTranslation,
  Size,
  SizeCountry,
  Price,
  PriceCurrency,
} from "../../models/modelProduct.js";

const createProductWithDetails = async ({
  productData,
  translations,
  colors,
  colorTranslations,
  sizes,
  sizeCountries,
  prices,
  priceCurrencies,
}) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    if (
      !productData ||
      !translations ||
      !colors ||
      !colorTranslations ||
      !sizes ||
      !sizeCountries ||
      !prices ||
      !priceCurrencies
    ) {
      throw new Error("Missing required data");
    }

    const product = new Product(productData);
    const savedProduct = await product.save({ session });

    const savedTranslations = await ProductTranslation.insertMany(
      translations.map((translation) => ({
        ...translation,
        product_id: savedProduct._id,
      })),
      { session }
    );

    const savedColors = await Color.insertMany(
      colors.map((color) => ({ ...color, product_id: savedProduct._id })),
      { session }
    );

    const savedColorTranslations = await ColorTranslation.insertMany(
      colorTranslations.map((colorTranslation) => {
        const color = savedColors.find(
          (color) => color.code === colorTranslation.color_code
        );
        if (!color) {
          throw new Error(
            `Color not found for code ${colorTranslation.color_code}`
          );
        }
        return {
          ...colorTranslation,
          product_id: savedProduct._id,
          color_id: color._id,
        };
      }),
      { session }
    );

    const savedSizes = await Size.insertMany(
      sizes.map((size) => {
        const color = savedColors.find(
          (color) => color.code === size.color_code
        );
        if (!color) {
          throw new Error(`Color not found for code ${size.color_code}`);
        }
        return {
          ...size,
          product_id: savedProduct._id,
          color_id: color._id,
        };
      }),
      { session }
    );

    const savedSizeCountries = await SizeCountry.insertMany(
      sizeCountries.map((sizeCountry) => {
        const color = savedColors.find(
          (color) => color.code === sizeCountry.color_code
        );
        const size = savedSizes.find(
          (size) => size.label === sizeCountry.size_label
        );
        if (!color) {
          throw new Error(`Color not found for code ${sizeCountry.color_code}`);
        }
        if (!size) {
          throw new Error(`Size not found for label ${sizeCountry.size_label}`);
        }
        return {
          ...sizeCountry,
          product_id: savedProduct._id,
          color_id: color._id,
          size_id: size._id,
        };
      }),
      { session }
    );

    const savedPrices = await Price.insertMany(
      prices.map((price) => {
        const color = savedColors.find(
          (color) => color.code === price.color_code
        );
        if (!color) {
          throw new Error(`Color not found for code ${price.color_code}`);
        }
        return {
          ...price,
          product_id: savedProduct._id,
          color_id: color._id,
        };
      }),
      { session }
    );

    const savedPriceCurrencies = await PriceCurrency.insertMany(
      priceCurrencies.map((priceCurrency) => {
        const color = savedColors.find(
          (color) => color.code === priceCurrency.color_code
        );
        const price = savedPrices.find(
          (price) => price.color_id.toString() === color._id.toString()
        );
        if (!color) {
          throw new Error(
            `Color not found for code ${priceCurrency.color_code}`
          );
        }
        if (!price) {
          throw new Error(`Price not found for color_id ${color._id}`);
        }
        return {
          ...priceCurrency,
          product_id: savedProduct._id,
          color_id: color._id,
          price_id: price._id,
        };
      }),
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return {
      product: savedProduct,
      productTranslations: savedTranslations,
      colors: savedColors,
      colorTranslations: savedColorTranslations,
      sizes: savedSizes,
      sizeCountries: savedSizeCountries,
      prices: savedPrices,
      priceCurrencies: savedPriceCurrencies,
    };
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};

export default createProductWithDetails;
