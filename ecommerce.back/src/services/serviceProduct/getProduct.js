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

const getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }

    const productObject = product.toObject();

    const translations = await ProductTranslation.find({ product_id: id });
    const colors = await Color.find({ product_id: id });
    const sizes = await Size.find({ product_id: id });
    const sizeCountries = await SizeCountry.find({ product_id: id });
    const prices = await Price.find({ product_id: id });
    const priceCurrencies = await PriceCurrency.find({ product_id: id });

    const colorTranslations = await ColorTranslation.find({
      product_id: id,
      color_id: { $in: colors.map((color) => color._id) },
    });

    return {
      id: productObject._id.toString(),
      discount_start: productObject.discount_start,
      discount_end: productObject.discount_end,
      discount_all_active: productObject.discount_all_active,
      discount_part_active: productObject.discount_part_active,
      sold_out: productObject.sold_out,
      stock_in_at: productObject.stock_in_at,
      gender: productObject.gender,
      category: productObject.category,
      sort: productObject.sort,
      type: productObject.type,
      images: productObject.images,
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
      sizeCountries: sizeCountries
        .map((sizeCountry) => {
          const size = sizes.find(
            (size) =>
              size.label === sizeCountry.size_label &&
              size.color_id.toString() === sizeCountry.color_id.toString()
          );
          if (!size) return null;
          return {
            id: sizeCountry._id.toString(),
            product_id: sizeCountry.product_id.toString(),
            color_id: sizeCountry.color_id.toString(),
            size_id: size._id.toString(),
            country_code: sizeCountry.country_code,
            name: sizeCountry.name,
          };
        })
        .filter((sizeCountry) => sizeCountry !== null),
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
  } catch (error) {
    throw new Error(`Failed to fetch product with ID ${id}: ${error.message}`);
  }
};

export default getProductById;
