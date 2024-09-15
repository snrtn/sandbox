import mongoose from "mongoose";

const priceCurrencySchema = new mongoose.Schema({
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
  price_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Price",
    required: true,
  },
  country_code: { type: String, required: true },
  currency_code: { type: String, required: true },
  amount: { type: Number, required: true },
});

const PriceCurrency = mongoose.model("PriceCurrency", priceCurrencySchema);
export default PriceCurrency;
