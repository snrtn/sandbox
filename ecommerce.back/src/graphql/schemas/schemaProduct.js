import { gql } from "apollo-server-express";

const schemaProduct = gql`
  type Product {
    id: ID!
    discount_start: String
    discount_end: String
    discount_all_active: Boolean
    discount_part_active: Boolean
    sold_out: Boolean
    stock_in_at: String
    gender: String
    category: String
    sort: String
    type: String
    images: ProductImages
    translations: [ProductTranslation] # 추가된 필드
    colors: [Color] # 추가된 필드
    sizes: [Size] # 추가된 필드
    sizeCountries: [SizeCountry] # 추가된 필드
    prices: [Price] # 추가된 필드
    priceCurrencies: [PriceCurrency] # 추가된 필드
  }

  type ProductImages {
    front: String
    back: String
    left: String
    right: String
  }

  type ProductTranslation {
    id: ID!
    product_id: ID!
    language_code: String
    name: String
    description: String
    materials: [String]
    care_instructions: [String]
  }

  type Color {
    id: ID!
    product_id: ID!
    code: String
    images: ColorImages
    discount_active: Boolean
    stock_active: Boolean
    translations: [ColorTranslation] # 추가된 필드
  }

  type ColorImages {
    front: String
    back: String
    left: String
    right: String
  }

  type ColorTranslation {
    id: ID!
    product_id: ID!
    color_id: ID!
    language_code: String
    name: String
  }

  type Size {
    id: ID!
    product_id: ID!
    color_id: ID!
    label: String
    stock: Int
    stock_active: Boolean
  }

  type SizeCountry {
    id: ID!
    product_id: ID!
    color_id: ID!
    size_id: ID!
    country_code: String
    name: String
  }

  type Price {
    id: ID!
    product_id: ID!
    color_id: ID!
    discount: Float
  }

  type PriceCurrency {
    id: ID!
    product_id: ID!
    color_id: ID!
    price_id: ID!
    country_code: String
    currency_code: String
    amount: Float
  }

  type Query {
    getProductById(id: ID!): Product
    getAllProducts: [Product]
  }

  type Mutation {
    createProductWithDetails(
      productData: ProductInput
      translations: [TranslationInput]
      colors: [ColorInput]
      colorTranslations: [ColorTranslationInput]
      sizes: [SizeInput]
      sizeCountries: [SizeCountryInput]
      prices: [PriceInput]
      priceCurrencies: [PriceCurrencyInput]
    ): Product

    updateProduct(id: ID!, productData: ProductInput): Product
    deleteProduct(id: ID!): Boolean
  }

  input ProductInput {
    created_at: String
    updated_at: String
    discount_start: String
    discount_end: String
    discount_all_active: Boolean
    discount_part_active: Boolean
    sold_out: Boolean
    stock_in_at: String
    gender: String
    category: String
    sort: String
    type: String
    images: ProductImagesInput
  }

  input ProductImagesInput {
    front: String
    back: String
    left: String
    right: String
  }

  input TranslationInput {
    language_code: String
    name: String
    description: String
    materials: [String]
    care_instructions: [String]
  }

  input ColorInput {
    code: String
    images: ColorImagesInput
    discount_active: Boolean
    stock_active: Boolean
  }

  input ColorImagesInput {
    front: String
    back: String
    left: String
    right: String
  }

  input ColorTranslationInput {
    color_code: String
    language_code: String
    name: String
  }

  input SizeInput {
    color_code: String
    label: String
    stock: Int
    stock_active: Boolean
  }

  input SizeCountryInput {
    color_code: String
    size_label: String
    country_code: String
    name: String
  }

  input PriceInput {
    color_code: String
    discount: Float
  }

  input PriceCurrencyInput {
    color_code: String
    currency_code: String
    country_code: String
    amount: Float
  }
`;

export default schemaProduct;
