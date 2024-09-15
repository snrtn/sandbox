import { Color, ColorTranslation } from "../../models/modelProduct.js";

export const createColors = async (colors, productId, session) => {
  return await Color.insertMany(
    colors.map((color) => ({
      ...color,
      product_id: productId,
    })),
    { session }
  );
};

export const createColorTranslations = async (
  colorTranslations,
  savedColors,
  productId,
  session
) => {
  return await ColorTranslation.insertMany(
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
        product_id: productId,
        color_id: color._id,
      };
    }),
    { session }
  );
};
