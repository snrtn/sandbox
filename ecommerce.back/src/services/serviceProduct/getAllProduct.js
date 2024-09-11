// services/serviceProduct/getAllProducts.js
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

const getAllProducts = async () => {
  const products = await Product.find();

  const allProducts = await Promise.all(
    products.map(async (product) => {
      const productId = product._id;

      const translations = await ProductTranslation.find({
        product_id: productId,
      });
      const colors = await Color.find({ product_id: productId });
      const sizes = await Size.find({ product_id: productId });
      const sizeCountries = await SizeCountry.find({ product_id: productId });
      const prices = await Price.find({ product_id: productId });
      const priceCurrencies = await PriceCurrency.find({
        product_id: productId,
      });

      const colorTranslations = await ColorTranslation.find({
        product_id: productId,
        color_id: { $in: colors.map((color) => color._id) },
      });

      return {
        id: product._id.toString(),
        discount_start: product.discount_start,
        discount_end: product.discount_end,
        discount_all_active: product.discount_all_active,
        discount_part_active: product.discount_part_active,
        sold_out: product.sold_out,
        stock_in_at: product.stock_in_at,
        gender: product.gender,
        category: product.category,
        sort: product.sort,
        type: product.type,
        images: product.images,
        translations: translations.map((translation) => ({
          id: translation._id.toString(),
          product_id: translation.product_id.toString(),
          language_code: translation.language_code,
          name: translation.name,
          description: translation.description,
          materials: translation.materials,
          care_instructions: translation.care_instructions,
        })),
        colors: colors.map((color) => ({
          id: color._id.toString(),
          product_id: color.product_id.toString(),
          code: color.code,
          images: color.images,
          discount_active: color.discount_active,
          stock_active: color.stock_active,
          translations: colorTranslations
            .filter((ct) => ct.color_id.equals(color._id))
            .map((ct) => ({
              id: ct._id.toString(),
              color_id: ct.color_id.toString(),
              language_code: ct.language_code,
              name: ct.name,
            })),
        })),
        sizes: sizes.map((size) => ({
          id: size._id.toString(),
          product_id: size.product_id.toString(),
          color_id: size.color_id.toString(),
          label: size.label,
          stock: size.stock,
          stock_active: size.stock_active,
        })),
        sizeCountries: sizeCountries.map((sizeCountry) => {
          const size = sizes.find(
            (size) => size._id.toString() === sizeCountry.size_id.toString()
          );
          return {
            id: sizeCountry._id.toString(),
            product_id: sizeCountry.product_id.toString(),
            color_id: sizeCountry.color_id.toString(),
            size_id: size ? size._id.toString() : null,
            country_code: sizeCountry.country_code,
            name: sizeCountry.name,
          };
        }),
        prices: prices.map((price) => ({
          id: price._id.toString(),
          product_id: price.product_id.toString(),
          color_id: price.color_id.toString(),
          discount: price.discount,
        })),
        priceCurrencies: priceCurrencies.map((priceCurrency) => ({
          id: priceCurrency._id.toString(),
          product_id: priceCurrency.product_id.toString(),
          color_id: priceCurrency.color_id.toString(),
          price_id: priceCurrency.price_id.toString(),
          country_code: priceCurrency.country_code,
          currency_code: priceCurrency.currency_code,
          amount: priceCurrency.amount,
        })),
      };
    })
  );

  return allProducts;
};

export default getAllProducts;
