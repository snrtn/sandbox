import express from "express";
import createProductWithDetails from "../services/serviceProduct/createProduct.js";
import getProductById from "../services/serviceProduct/getProduct.js";
import getAllProducts from "../services/serviceProduct/getAllProduct.js";
import updateProduct from "../services/serviceProduct/updateProduct.js";
import deleteProduct from "../services/serviceProduct/deleteProduct.js";

const router = express.Router();

export default (mongoConnection) => {
  router.post("/addProductWithDetails", async (req, res) => {
    const {
      productData,
      translations,
      colors,
      colorTranslations,
      sizes,
      sizeCountries,
      prices,
      priceCurrencies,
    } = req.body;

    try {
      const result = await createProductWithDetails(
        {
          productData,
          translations,
          colors,
          colorTranslations,
          sizes,
          sizeCountries,
          prices,
          priceCurrencies,
        },
        mongoConnection
      );

      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  router.get("/products/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const result = await getProductById(id);
      if (!result) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(result);
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

  router.get("/products", async (req, res) => {
    try {
      const result = await getAllProducts();
      res.json(result);
    } catch (error) {
      console.error("Error fetching all products:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

  router.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
      const result = await updateProduct(id, updateData);
      res.json(result);
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

  router.delete("/products/:id", async (req, res) => {
    const { id } = req.params;

    try {
      await deleteProduct(id);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

  return router;
};
