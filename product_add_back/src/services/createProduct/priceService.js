import { Price, PriceCurrency } from "../../models/modelProduct.js";

export const createPrices = async (prices, savedColors, productId, session) => {
  return await Price.insertMany(
    prices.map((price) => {
      const color = savedColors.find(
        (color) => color.code === price.color_code
      );
      if (!color) {
        throw new Error(`Color not found for code ${price.color_code}`);
      }
      return {
        ...price,
        product_id: productId,
        color_id: color._id,
      };
    }),
    { session }
  );
};

export const createPriceCurrencies = async (
  priceCurrencies,
  savedColors,
  savedPrices,
  productId,
  session
) => {
  return await PriceCurrency.insertMany(
    priceCurrencies.map((priceCurrency) => {
      const color = savedColors.find(
        (color) => color.code === priceCurrency.color_code
      );
      const price = savedPrices.find(
        (price) => price.color_id.toString() === color._id.toString()
      );
      if (!color) {
        throw new Error(`Color not found for code ${priceCurrency.color_code}`);
      }
      if (!price) {
        throw new Error(`Price not found for color_id ${color._id}`);
      }
      return {
        ...priceCurrency,
        product_id: productId,
        color_id: color._id,
        price_id: price._id,
      };
    }),
    { session }
  );
};
