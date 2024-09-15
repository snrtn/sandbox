import mongoose from "mongoose";

const sizeCountrySchema = new mongoose.Schema({
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
  size_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Size",
    required: true,
  },
  country_code: { type: String, required: true },
  name: { type: String, required: true },
});

const SizeCountry = mongoose.model("SizeCountry", sizeCountrySchema);
export default SizeCountry;
