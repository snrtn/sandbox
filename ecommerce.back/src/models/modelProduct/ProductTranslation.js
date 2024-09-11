import mongoose from "mongoose";

const productTranslationSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  language_code: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  materials: { type: [String], required: true },
  care_instructions: { type: [String], required: true },
});

const ProductTranslation = mongoose.model(
  "ProductTranslation",
  productTranslationSchema
);
export default ProductTranslation;
