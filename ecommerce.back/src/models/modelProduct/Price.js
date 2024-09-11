import mongoose from "mongoose";

const priceSchema = new mongoose.Schema({
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
  discount: { type: Number, required: false },
});

const Price = mongoose.model("Price", priceSchema);
export default Price;
