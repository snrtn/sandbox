import mongoose from "mongoose";

const colorTranslationSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  color_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Color",
    required: true,
  },
  language_code: { type: String, required: true },
  name: { type: String, required: true },
});

const ColorTranslation = mongoose.model(
  "ColorTranslation",
  colorTranslationSchema
);
export default ColorTranslation;
