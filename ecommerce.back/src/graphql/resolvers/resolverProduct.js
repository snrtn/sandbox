import createProductWithDetails from "../../services/serviceProduct/createProduct.js";
import getProductById from "../../services/serviceProduct/getProduct.js";
import getAllProducts from "../../services/serviceProduct/getAllProduct.js"; // 기본 내보내기로 가져옴
import updateProduct from "../../services/serviceProduct/updateProduct.js";
import deleteProduct from "../../services/serviceProduct/deleteProduct.js";

const resolverProduct = {
  Query: {
    getProductById: async (_, { id }) => {
      try {
        return await getProductById(id);
      } catch (error) {
        throw new Error(
          `Failed to fetch product with ID ${id}: ${error.message}`
        );
      }
    },
    getAllProducts: async () => {
      try {
        return await getAllProducts();
      } catch (error) {
        throw new Error(`Failed to fetch all products: ${error.message}`);
      }
    },
  },
  Mutation: {
    createProductWithDetails: async (_, args) => {
      try {
        return await createProductWithDetails(args);
      } catch (error) {
        throw new Error(`Failed to create product: ${error.message}`);
      }
    },
    updateProduct: async (_, { id, ...args }) => {
      try {
        return await updateProduct(id, args);
      } catch (error) {
        throw new Error(
          `Failed to update product with ID ${id}: ${error.message}`
        );
      }
    },
    deleteProduct: async (_, { id }) => {
      try {
        return await deleteProduct(id);
      } catch (error) {
        throw new Error(
          `Failed to delete product with ID ${id}: ${error.message}`
        );
      }
    },
  },
};

export default resolverProduct;
