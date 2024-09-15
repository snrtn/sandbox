import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
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
  label: { type: String, required: true },
  stock: { type: Number, required: true },
  stock_active: { type: Boolean, required: true },
});

const Size = mongoose.model("Size", sizeSchema);
export default Size;
