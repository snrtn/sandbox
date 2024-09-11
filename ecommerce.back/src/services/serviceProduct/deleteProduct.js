import mongoose from "mongoose";
import {
  Product,
  ProductTranslation,
  Color,
  ColorTranslation,
  Size,
  SizeCountry,
  Price,
  PriceCurrency,
} from "../../models/modelProduct.js";

const deleteProduct = async (id) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await Product.findByIdAndDelete(id, { session });

    await Promise.all([
      ProductTranslation.deleteMany({ product_id: id }, { session }),
      Color.deleteMany({ product_id: id }, { session }),
      ColorTranslation.deleteMany({ product_id: id }, { session }),
      Size.deleteMany({ product_id: id }, { session }),
      SizeCountry.deleteMany({ product_id: id }, { session }),
      Price.deleteMany({ product_id: id }, { session }),
      PriceCurrency.deleteMany({ product_id: id }, { session }),
    ]);

    await session.commitTransaction();
    session.endSession();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export default deleteProduct;
