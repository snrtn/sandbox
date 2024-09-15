import { ProductTranslation } from "../../models/modelProduct.js";

export const createProductTranslations = async (
  translations,
  productId,
  session
) => {
  return await ProductTranslation.insertMany(
    translations.map((translation) => ({
      ...translation,
      product_id: productId,
    })),
    { session }
  );
};
