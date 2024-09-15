import express from "express";
import createProduct from "../services/createProduct.js";

const router = express.Router();

export default (mongoProduct) => {
  router.post("/createProduct", async (req, res) => {
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
      const result = await createProduct(
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
        mongoProduct
      );

      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  return router;
};
