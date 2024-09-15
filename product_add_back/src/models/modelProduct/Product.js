import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  discount_start: { type: Date, required: false },
  discount_end: { type: Date, required: false },
  discount_all_active: { type: Boolean, required: true },
  discount_part_active: { type: Boolean, required: true },
  sold_out: { type: Boolean, required: true },
  stock_in_at: { type: Date, required: false },
  gender: { type: String, required: true },
  category: { type: String, required: true },
  sort: { type: String, required: true },
  type: { type: String, required: true },
  images: {
    front: { type: String, required: true },
    back: { type: String, required: true },
    left: { type: String, required: false },
    right: { type: String, required: false },
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
