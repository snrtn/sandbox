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

const updateProduct = async (id, updateData) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updateData.product,
      {
        new: true,
        session,
      }
    );

    if (!updatedProduct) {
      throw new Error("Product not found");
    }

    if (updateData.translations) {
      await Promise.all(
        updateData.translations.map(async (translation) => {
          await ProductTranslation.updateOne(
            { product_id: id, language_code: translation.language_code },
            { $set: translation },
            { session, upsert: true }
          );
        })
      );
    }

    if (updateData.colors) {
      await Promise.all(
        updateData.colors.map(async (color) => {
          await Color.updateOne(
            { product_id: id, code: color.code },
            { $set: color },
            { session, upsert: true }
          );
        })
      );
    }

    if (updateData.colorTranslations) {
      await Promise.all(
        updateData.colorTranslations.map(async (colorTranslation) => {
          const color = await Color.findOne({
            code: colorTranslation.color_code,
            product_id: id,
          });
          if (color) {
            await ColorTranslation.updateOne(
              {
                color_id: color._id,
                language_code: colorTranslation.language_code,
              },
              { $set: colorTranslation },
              { session, upsert: true }
            );
          }
        })
      );
    }

    if (updateData.sizes) {
      await Promise.all(
        updateData.sizes.map(async (size) => {
          const color = await Color.findOne({
            code: size.color_code,
            product_id: id,
          });
          if (color) {
            await Size.updateOne(
              { color_id: color._id, label: size.label },
              { $set: size },
              { session, upsert: true }
            );
          }
        })
      );
    }

    if (updateData.sizeCountries) {
      await Promise.all(
        updateData.sizeCountries.map(async (sizeCountry) => {
          const color = await Color.findOne({
            code: sizeCountry.color_code,
            product_id: id,
          });
          const size = await Size.findOne({
            color_id: color._id,
            label: sizeCountry.size_label,
          });
          if (color && size) {
            await SizeCountry.updateOne(
              { size_id: size._id, country_code: sizeCountry.country_code },
              { $set: sizeCountry },
              { session, upsert: true }
            );
          }
        })
      );
    }

    if (updateData.prices) {
      await Promise.all(
        updateData.prices.map(async (price) => {
          const color = await Color.findOne({
            code: price.color_code,
            product_id: id,
          });
          if (color) {
            await Price.updateOne(
              { color_id: color._id },
              { $set: price },
              { session, upsert: true }
            );
          }
        })
      );
    }

    if (updateData.priceCurrencies) {
      await Promise.all(
        updateData.priceCurrencies.map(async (priceCurrency) => {
          const color = await Color.findOne({
            code: priceCurrency.color_code,
            product_id: id,
          });
          const price = await Price.findOne({ color_id: color._id });
          if (color && price) {
            await PriceCurrency.updateOne(
              {
                price_id: price._id,
                currency_code: priceCurrency.currency_code,
              },
              { $set: priceCurrency },
              { session, upsert: true }
            );
          }
        })
      );
    }

    await session.commitTransaction();
    session.endSession();
    return updatedProduct;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export default updateProduct;
