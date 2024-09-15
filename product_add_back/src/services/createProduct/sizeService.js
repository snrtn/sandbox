import { Size, SizeCountry } from "../../models/modelProduct.js";

export const createSizes = async (sizes, savedColors, productId, session) => {
  return await Size.insertMany(
    sizes.map((size) => {
      const color = savedColors.find((color) => color.code === size.color_code);
      if (!color) {
        throw new Error(`Color not found for code ${size.color_code}`);
      }
      return {
        ...size,
        product_id: productId,
        color_id: color._id,
      };
    }),
    { session }
  );
};

export const createSizeCountries = async (
  sizeCountries,
  savedColors,
  savedSizes,
  productId,
  session
) => {
  return await SizeCountry.insertMany(
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
        product_id: productId,
        color_id: color._id,
        size_id: size._id,
      };
    }),
    { session }
  );
};
