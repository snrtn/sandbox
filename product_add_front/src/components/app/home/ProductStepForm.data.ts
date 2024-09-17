/* eslint-disable @typescript-eslint/no-explicit-any */
export const options: Record<"unisex" | "male" | "female", any> = {
  unisex: {
    categories: ["Tops", "Bottoms", "Accessories", "Outerwear"],
    sorts: {
      Tops: ["T-Shirt", "Sweater", "Hoodie", "Tank Top"],
      Bottoms: ["Pants", "Shorts", "Joggers", "Jeans"],
      Accessories: ["Hats", "Belts", "Bags", "Socks"],
      Outerwear: ["Jacket", "Raincoat", "Windbreaker"],
    },
    types: {
      "T-Shirt": ["Round Neck", "V-Neck"],
      Sweater: ["Pullover", "Zip-Up"],
      Hoodie: ["Pullover", "Zip-Up"],
      "Tank Top": ["Muscle Shirt", "Sleeveless"],
      Pants: ["Jeans", "Slacks"],
      Shorts: ["Denim", "Cargo"],
      Jacket: ["Leather", "Bomber"],
    },
  },
  male: {
    categories: ["Tops", "Bottoms", "Accessories", "Outerwear"],
    sorts: {
      Tops: ["Shirt", "Jacket", "Polo"],
      Bottoms: ["Jeans", "Chinos", "Shorts"],
      Accessories: ["Belts", "Hats", "Wallets"],
      Outerwear: ["Leather Jacket", "Bomber", "Coat"],
    },
    types: {
      Shirt: ["Dress Shirt", "Casual Shirt"],
      Jacket: ["Leather", "Bomber"],
      Polo: ["Collared", "Regular"],
      Jeans: ["Skinny", "Straight"],
      Chinos: ["Slim", "Regular"],
      Shorts: ["Denim", "Cargo"],
    },
  },
  female: {
    categories: ["Dresses", "Bottoms", "Accessories", "Outerwear"],
    sorts: {
      Dresses: ["Evening Dress", "Summer Dress", "Casual Dress"],
      Bottoms: ["Skirt", "Leggings", "Jeans"],
      Accessories: ["Jewelry", "Scarves", "Bags"],
      Outerwear: ["Coat", "Blazer", "Cardigan"],
    },
    types: {
      "Evening Dress": ["Long", "Short"],
      "Summer Dress": ["Floral", "Plain"],
      "Casual Dress": ["Maxi", "Mini"],
      Skirt: ["Mini", "Maxi"],
      Leggings: ["Sport", "Casual"],
      Jeans: ["Skinny", "Straight"],
    },
  },
};
