const productsData = [
  {
    product_id: "1",
    created_at: "2024-08-01T09:00:00Z",
    discount_start: "2024-08-05T00:00:00Z",
    discount_end: "2024-08-12T23:59:59Z",
    gender: "Unisex",
    category: "Accessories",
    sort: "Best Seller",
    type: "Watch",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/000000",
    ],
    translations: [
      {
        language_code: "en",
        name: "Smart Watch",
        description: "A modern smartwatch with multiple features.",
        materials: ["Aluminum", "Silicone"],
        care_instructions: ["Wipe clean", "Avoid exposure to water"],
      },
      {
        language_code: "fr",
        name: "Montre Intelligente",
        description:
          "Une montre intelligente moderne avec plusieurs fonctionnalités.",
        materials: ["Aluminium", "Silicone"],
        care_instructions: [
          "Nettoyer avec un chiffon",
          "Éviter l'exposition à l'eau",
        ],
      },
    ],
    colors: [
      {
        code: "#000000",
        images: ["https://via.placeholder.com/150/000000"],
        translations: [
          {
            language_code: "en",
            name: "Black",
          },
          {
            language_code: "fr",
            name: "Noir",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 199.99,
            discount: 0.15,
          },
          {
            currency_code: "EUR",
            amount: 179.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "One Size",
            stock: 50,
            country_variants: [
              {
                country_code: "US",
                name: "One Size",
              },
              {
                country_code: "FR",
                name: "Taille Unique",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "2",
    created_at: "2024-08-03T12:00:00Z",
    discount_start: null,
    discount_end: null,
    gender: "Men",
    category: "Apparel",
    sort: "New Arrival",
    type: "Jacket",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/008080",
    ],
    translations: [
      {
        language_code: "en",
        name: "Leather Jacket",
        description: "A stylish leather jacket for all occasions.",
        materials: ["Leather"],
        care_instructions: ["Dry clean only", "Store in a cool, dry place"],
      },
      {
        language_code: "fr",
        name: "Veste en Cuir",
        description: "Une veste en cuir élégante pour toutes les occasions.",
        materials: ["Cuir"],
        care_instructions: [
          "Nettoyage à sec uniquement",
          "Ranger dans un endroit frais et sec",
        ],
      },
    ],
    colors: [
      {
        code: "#008080",
        images: ["https://via.placeholder.com/150/008080"],
        translations: [
          {
            language_code: "en",
            name: "Teal",
          },
          {
            language_code: "fr",
            name: "Bleu sarcelle",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 249.99,
            discount: 0.2,
          },
          {
            currency_code: "EUR",
            amount: 229.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "L",
            stock: 20,
            country_variants: [
              {
                country_code: "US",
                name: "42",
              },
              {
                country_code: "FR",
                name: "52",
              },
            ],
          },
          {
            label: "M",
            stock: 15,
            country_variants: [
              {
                country_code: "US",
                name: "40",
              },
              {
                country_code: "FR",
                name: "50",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "3",
    created_at: "2024-08-07T10:00:00Z",
    discount_start: "2024-08-10T00:00:00Z",
    discount_end: "2024-08-17T23:59:59Z",
    gender: "Women",
    category: "Footwear",
    sort: "Featured",
    type: "Sandals",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/FF69B4",
    ],
    translations: [
      {
        language_code: "en",
        name: "Beach Sandals",
        description: "Comfortable sandals perfect for the beach.",
        materials: ["Rubber", "Foam"],
        care_instructions: [
          "Wipe clean",
          "Avoid prolonged exposure to sunlight",
        ],
      },
      {
        language_code: "fr",
        name: "Sandales de Plage",
        description: "Sandales confortables parfaites pour la plage.",
        materials: ["Caoutchouc", "Mousse"],
        care_instructions: [
          "Nettoyer avec un chiffon",
          "Éviter une exposition prolongée au soleil",
        ],
      },
    ],
    colors: [
      {
        code: "#FF69B4",
        images: ["https://via.placeholder.com/150/FF69B4"],
        translations: [
          {
            language_code: "en",
            name: "Pink",
          },
          {
            language_code: "fr",
            name: "Rose",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 29.99,
            discount: 0.1,
          },
          {
            currency_code: "EUR",
            amount: 19.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "L",
            stock: 35,
            country_variants: [
              {
                country_code: "US",
                name: "9",
              },
              {
                country_code: "FR",
                name: "41",
              },
            ],
          },
          {
            label: "M",
            stock: 40,
            country_variants: [
              {
                country_code: "US",
                name: "8",
              },
              {
                country_code: "FR",
                name: "40",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "4",
    created_at: "2024-08-09T15:00:00Z",
    discount_start: null,
    discount_end: null,
    gender: "Unisex",
    category: "Tech",
    sort: "Best Seller",
    type: "Headphones",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/4B0082",
    ],
    translations: [
      {
        language_code: "en",
        name: "Wireless Headphones",
        description:
          "High-quality wireless headphones with noise cancellation.",
        materials: ["Plastic", "Metal"],
        care_instructions: ["Wipe clean", "Store in case when not in use"],
      },
      {
        language_code: "fr",
        name: "Casque Sans Fil",
        description:
          "Casque sans fil de haute qualité avec réduction du bruit.",
        materials: ["Plastique", "Métal"],
        care_instructions: [
          "Nettoyer avec un chiffon",
          "Ranger dans l'étui lorsque non utilisé",
        ],
      },
    ],
    colors: [
      {
        code: "#4B0082",
        images: ["https://via.placeholder.com/150/4B0082"],
        translations: [
          {
            language_code: "en",
            name: "Indigo",
          },
          {
            language_code: "fr",
            name: "Indigo",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 149.99,
            discount: 0.15,
          },
          {
            currency_code: "EUR",
            amount: 129.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "One Size",
            stock: 75,
            country_variants: [
              {
                country_code: "US",
                name: "One Size",
              },
              {
                country_code: "FR",
                name: "Taille Unique",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "5",
    created_at: "2024-08-05T09:00:00Z",
    discount_start: null,
    discount_end: null,
    gender: "Women",
    category: "Footwear",
    sort: "Best Seller",
    type: "Sneakers",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/FFA500",
    ],
    translations: [
      {
        language_code: "en",
        name: "Running Sneakers",
        description: "Lightweight running sneakers.",
        materials: ["Mesh", "Rubber"],
        care_instructions: ["Hand wash", "Air dry"],
      },
      {
        language_code: "fr",
        name: "Baskets de Course",
        description: "Baskets légères pour la course.",
        materials: ["Maille", "Caoutchouc"],
        care_instructions: ["Lavage à la main", "Séchage à l'air"],
      },
    ],
    colors: [
      {
        code: "#FFA500",
        images: ["https://via.placeholder.com/150/FFA500"],
        translations: [
          {
            language_code: "en",
            name: "Orange",
          },
          {
            language_code: "fr",
            name: "Orange",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 59.99,
            discount: 0.1,
          },
          {
            currency_code: "EUR",
            amount: 49.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "L",
            stock: 25,
            country_variants: [
              {
                country_code: "US",
                name: "10",
              },
              {
                country_code: "FR",
                name: "42",
              },
            ],
          },
          {
            label: "M",
            stock: 30,
            country_variants: [
              {
                country_code: "US",
                name: "8",
              },
              {
                country_code: "FR",
                name: "40",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "6",
    created_at: "2024-08-12T12:00:00Z",
    discount_start: "2024-08-15T00:00:00Z",
    discount_end: "2024-08-22T23:59:59Z",
    gender: "Men",
    category: "Apparel",
    sort: "Top",
    type: "Hoodie",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/00FF00",
    ],
    translations: [
      {
        language_code: "en",
        name: "Comfort Hoodie",
        description: "A warm and cozy hoodie.",
        materials: ["Cotton", "Polyester"],
        care_instructions: ["Machine wash warm", "Tumble dry medium"],
      },
      {
        language_code: "fr",
        name: "Sweat à Capuche Confort",
        description: "Un sweat à capuche chaud et confortable.",
        materials: ["Coton", "Polyester"],
        care_instructions: [
          "Lavage en machine chaud",
          "Séchage en tambour moyen",
        ],
      },
    ],
    colors: [
      {
        code: "#00FF00",
        images: ["https://via.placeholder.com/150/00FF00"],
        translations: [
          {
            language_code: "en",
            name: "Green",
          },
          {
            language_code: "fr",
            name: "Vert",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 39.99,
            discount: 0.2,
          },
          {
            currency_code: "EUR",
            amount: 29.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "L",
            stock: 40,
            country_variants: [
              {
                country_code: "US",
                name: "10",
              },
              {
                country_code: "FR",
                name: "42",
              },
            ],
          },
          {
            label: "M",
            stock: 50,
            country_variants: [
              {
                country_code: "US",
                name: "8",
              },
              {
                country_code: "FR",
                name: "40",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "7",
    created_at: "2024-08-18T08:30:00Z",
    discount_start: null,
    discount_end: null,
    gender: "Unisex",
    category: "Accessories",
    sort: "New Arrival",
    type: "Backpack",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/800080",
    ],
    translations: [
      {
        language_code: "en",
        name: "Travel Backpack",
        description: "A durable and spacious travel backpack.",
        materials: ["Nylon", "Polyester"],
        care_instructions: ["Wipe clean", "Do not tumble dry"],
      },
      {
        language_code: "fr",
        name: "Sac à Dos de Voyage",
        description: "Un sac à dos de voyage durable et spacieux.",
        materials: ["Nylon", "Polyester"],
        care_instructions: [
          "Nettoyer avec un chiffon",
          "Ne pas sécher en tambour",
        ],
      },
    ],
    colors: [
      {
        code: "#800080",
        images: ["https://via.placeholder.com/150/800080"],
        translations: [
          {
            language_code: "en",
            name: "Purple",
          },
          {
            language_code: "fr",
            name: "Violet",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 79.99,
            discount: 0.0,
          },
          {
            currency_code: "EUR",
            amount: 69.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "One Size",
            stock: 100,
            country_variants: [
              {
                country_code: "US",
                name: "One Size",
              },
              {
                country_code: "FR",
                name: "Taille Unique",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "8",
    created_at: "2024-08-20T15:00:00Z",
    discount_start: null,
    discount_end: null,
    gender: "Women",
    category: "Jewelry",
    sort: "Featured",
    type: "Necklace",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/FFD700",
    ],
    translations: [
      {
        language_code: "en",
        name: "Gold Necklace",
        description: "A stunning gold necklace with a pendant.",
        materials: ["Gold"],
        care_instructions: [
          "Polish with a soft cloth",
          "Store in a jewelry box",
        ],
      },
      {
        language_code: "fr",
        name: "Collier en Or",
        description: "Un magnifique collier en or avec un pendentif.",
        materials: ["Or"],
        care_instructions: [
          "Polir avec un chiffon doux",
          "Ranger dans une boîte à bijoux",
        ],
      },
    ],
    colors: [
      {
        code: "#FFD700",
        images: ["https://via.placeholder.com/150/FFD700"],
        translations: [
          {
            language_code: "en",
            name: "Gold",
          },
          {
            language_code: "fr",
            name: "Or",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 199.99,
            discount: 0.15,
          },
          {
            currency_code: "EUR",
            amount: 179.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "One Size",
            stock: 20,
            country_variants: [
              {
                country_code: "US",
                name: "One Size",
              },
              {
                country_code: "FR",
                name: "Taille Unique",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "6",
    created_at: "2024-08-12T12:00:00Z",
    discount_start: "2024-08-15T00:00:00Z",
    discount_end: "2024-08-22T23:59:59Z",
    gender: "Men",
    category: "Apparel",
    sort: "Top",
    type: "Hoodie",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/00FF00",
    ],
    translations: [
      {
        language_code: "en",
        name: "Comfort Hoodie",
        description: "A warm and cozy hoodie.",
        materials: ["Cotton", "Polyester"],
        care_instructions: ["Machine wash warm", "Tumble dry medium"],
      },
      {
        language_code: "fr",
        name: "Sweat à Capuche Confort",
        description: "Un sweat à capuche chaud et confortable.",
        materials: ["Coton", "Polyester"],
        care_instructions: [
          "Lavage en machine chaud",
          "Séchage en tambour moyen",
        ],
      },
    ],
    colors: [
      {
        code: "#00FF00",
        images: ["https://via.placeholder.com/150/00FF00"],
        translations: [
          {
            language_code: "en",
            name: "Green",
          },
          {
            language_code: "fr",
            name: "Vert",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 39.99,
            discount: 0.2,
          },
          {
            currency_code: "EUR",
            amount: 29.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "L",
            stock: 40,
            country_variants: [
              {
                country_code: "US",
                name: "10",
              },
              {
                country_code: "FR",
                name: "42",
              },
            ],
          },
          {
            label: "M",
            stock: 50,
            country_variants: [
              {
                country_code: "US",
                name: "8",
              },
              {
                country_code: "FR",
                name: "40",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "6",
    created_at: "2024-08-12T12:00:00Z",
    discount_start: "2024-08-15T00:00:00Z",
    discount_end: "2024-08-22T23:59:59Z",
    gender: "Men",
    category: "Apparel",
    sort: "Top",
    type: "Hoodie",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/00FF00",
    ],
    translations: [
      {
        language_code: "en",
        name: "Comfort Hoodie",
        description: "A warm and cozy hoodie.",
        materials: ["Cotton", "Polyester"],
        care_instructions: ["Machine wash warm", "Tumble dry medium"],
      },
      {
        language_code: "fr",
        name: "Sweat à Capuche Confort",
        description: "Un sweat à capuche chaud et confortable.",
        materials: ["Coton", "Polyester"],
        care_instructions: [
          "Lavage en machine chaud",
          "Séchage en tambour moyen",
        ],
      },
    ],
    colors: [
      {
        code: "#00FF00",
        images: ["https://via.placeholder.com/150/00FF00"],
        translations: [
          {
            language_code: "en",
            name: "Green",
          },
          {
            language_code: "fr",
            name: "Vert",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 39.99,
            discount: 0.2,
          },
          {
            currency_code: "EUR",
            amount: 29.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "L",
            stock: 40,
            country_variants: [
              {
                country_code: "US",
                name: "10",
              },
              {
                country_code: "FR",
                name: "42",
              },
            ],
          },
          {
            label: "M",
            stock: 50,
            country_variants: [
              {
                country_code: "US",
                name: "8",
              },
              {
                country_code: "FR",
                name: "40",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "6",
    created_at: "2024-08-12T12:00:00Z",
    discount_start: "2024-08-15T00:00:00Z",
    discount_end: "2024-08-22T23:59:59Z",
    gender: "Men",
    category: "Apparel",
    sort: "Top",
    type: "Hoodie",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/00FF00",
    ],
    translations: [
      {
        language_code: "en",
        name: "Comfort Hoodie",
        description: "A warm and cozy hoodie.",
        materials: ["Cotton", "Polyester"],
        care_instructions: ["Machine wash warm", "Tumble dry medium"],
      },
      {
        language_code: "fr",
        name: "Sweat à Capuche Confort",
        description: "Un sweat à capuche chaud et confortable.",
        materials: ["Coton", "Polyester"],
        care_instructions: [
          "Lavage en machine chaud",
          "Séchage en tambour moyen",
        ],
      },
    ],
    colors: [
      {
        code: "#00FF00",
        images: ["https://via.placeholder.com/150/00FF00"],
        translations: [
          {
            language_code: "en",
            name: "Green",
          },
          {
            language_code: "fr",
            name: "Vert",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 39.99,
            discount: 0.2,
          },
          {
            currency_code: "EUR",
            amount: 29.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "L",
            stock: 40,
            country_variants: [
              {
                country_code: "US",
                name: "10",
              },
              {
                country_code: "FR",
                name: "42",
              },
            ],
          },
          {
            label: "M",
            stock: 50,
            country_variants: [
              {
                country_code: "US",
                name: "8",
              },
              {
                country_code: "FR",
                name: "40",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    product_id: "6",
    created_at: "2024-08-12T12:00:00Z",
    discount_start: "2024-08-15T00:00:00Z",
    discount_end: "2024-08-22T23:59:59Z",
    gender: "Men",
    category: "Apparel",
    sort: "Top",
    type: "Hoodie",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/00FF00",
    ],
    translations: [
      {
        language_code: "en",
        name: "Comfort Hoodie",
        description: "A warm and cozy hoodie.",
        materials: ["Cotton", "Polyester"],
        care_instructions: ["Machine wash warm", "Tumble dry medium"],
      },
      {
        language_code: "fr",
        name: "Sweat à Capuche Confort",
        description: "Un sweat à capuche chaud et confortable.",
        materials: ["Coton", "Polyester"],
        care_instructions: [
          "Lavage en machine chaud",
          "Séchage en tambour moyen",
        ],
      },
    ],
    colors: [
      {
        code: "#00FF00",
        images: ["https://via.placeholder.com/150/00FF00"],
        translations: [
          {
            language_code: "en",
            name: "Green",
          },
          {
            language_code: "fr",
            name: "Vert",
          },
        ],
        prices: [
          {
            currency_code: "USD",
            amount: 39.99,
            discount: 0.2,
          },
          {
            currency_code: "EUR",
            amount: 29.99,
            discount: 0.15,
          },
        ],
        sizes: [
          {
            label: "L",
            stock: 40,
            country_variants: [
              {
                country_code: "US",
                name: "10",
              },
              {
                country_code: "FR",
                name: "42",
              },
            ],
          },
          {
            label: "M",
            stock: 50,
            country_variants: [
              {
                country_code: "US",
                name: "8",
              },
              {
                country_code: "FR",
                name: "40",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default productsData;
