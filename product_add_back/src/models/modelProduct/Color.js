import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  code: { type: String, required: true },
  images: {
    front: { type: String, required: true },
    back: { type: String, required: true },
    left: { type: String, required: false },
    right: { type: String, required: false },
  },
  discount_active: { type: Boolean, required: true },
  stock_active: { type: Boolean, required: true },
});

const Color = mongoose.model("Color", colorSchema);
export default Color;
