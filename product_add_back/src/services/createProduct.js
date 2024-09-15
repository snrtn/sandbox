import mongoose from "mongoose";
import { createProduct } from "./createProduct/productService.js";
import { createProductTranslations } from "./createProduct/translationService.js";
import {
  createColors,
  createColorTranslations,
} from "./createProduct/colorService.js";
import {
  createSizes,
  createSizeCountries,
} from "./createProduct/sizeService.js";
import {
  createPrices,
  createPriceCurrencies,
} from "./createProduct/priceService.js";

const createProductService = async ({
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

    const savedProduct = await createProduct(productData, session);
    const savedTranslations = await createProductTranslations(
      translations,
      savedProduct._id,
      session
    );
    const savedColors = await createColors(colors, savedProduct._id, session);
    const savedColorTranslations = await createColorTranslations(
      colorTranslations,
      savedColors,
      savedProduct._id,
      session
    );
    const savedSizes = await createSizes(
      sizes,
      savedColors,
      savedProduct._id,
      session
    );
    const savedSizeCountries = await createSizeCountries(
      sizeCountries,
      savedColors,
      savedSizes,
      savedProduct._id,
      session
    );
    const savedPrices = await createPrices(
      prices,
      savedColors,
      savedProduct._id,
      session
    );
    const savedPriceCurrencies = await createPriceCurrencies(
      priceCurrencies,
      savedColors,
      savedPrices,
      savedProduct._id,
      session
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

export default createProductService;
