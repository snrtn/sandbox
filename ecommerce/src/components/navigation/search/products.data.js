// Combined product data structure
const productsData = [
  {
    product_id: "1",
    created_at: "2024-08-13T10:00:00Z",
    discount_start: "2024-08-15T00:00:00Z",
    discount_end: "2024-08-20T23:59:59Z",
    gender: "Unisex",
    category: "Apparel",
    sort: "Top",
    type: "T-Shirt",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/0000FF",
    ],
    translations: [
      {
        language_code: "en",
        name: "Classic T-Shirt",
        description: "A classic cotton t-shirt.",
        materials: ["Cotton"],
        care_instructions: ["Machine wash cold", "Tumble dry low"],
      },
    ],
    colors: [
      {
        code: "#FF0000",
        images: ["https://via.placeholder.com/150/FF0000"],
        translations: [
          {
            language_code: "en",
            name: "Red",
          },
        ],
        sizes: [
          {
            label: "M",
            stock: 50,
            country_variants: [
              {
                country_code: "US",
                name: "Medium",
              },
            ],
            prices: [
              {
                currency_code: "USD",
                amount: 19.99,
                discount: 0.1,
              },
            ],
          },
        ],
      },
      {
        code: "#0000FF",
        images: ["https://via.placeholder.com/150/0000FF"],
        translations: [
          {
            language_code: "en",
            name: "Blue",
          },
        ],
        sizes: [
          {
            label: "L",
            stock: 30,
            country_variants: [
              {
                country_code: "US",
                name: "Large",
              },
            ],
            prices: [
              {
                currency_code: "USD",
                amount: 22.99,
                discount: 0.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "2",
    created_at: "2024-08-10T10:00:00Z",
    discount_start: null,
    discount_end: null,
    gender: "Men",
    category: "Apparel",
    sort: "New Arrival",
    type: "T-Shirt",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/FF0000",
    ],
    translations: [
      {
        language_code: "en",
        name: "V-Neck T-Shirt",
        description: "A stylish V-neck t-shirt.",
        materials: ["Polyester"],
        care_instructions: ["Hand wash", "Hang dry"],
      },
    ],
    colors: [
      {
        code: "#FF0000",
        images: ["https://via.placeholder.com/150/FF0000"],
        translations: [
          {
            language_code: "en",
            name: "Red",
          },
        ],
        sizes: [
          {
            label: "M",
            stock: 40,
            country_variants: [
              {
                country_code: "US",
                name: "Medium",
              },
            ],
            prices: [
              {
                currency_code: "USD",
                amount: 24.99,
                discount: 0.0,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default productsData;
