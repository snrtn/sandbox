import { Product } from "../../models/modelProduct.js";

export const createProduct = async (productData, session) => {
  const product = new Product(productData);
  return await product.save({ session });
};
