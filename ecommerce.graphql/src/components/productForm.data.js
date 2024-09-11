const genderOptions = {
  Unisex: {
    Apparel: {
      upper: ["jackets", "shirts", "t-shirts", "hoodies", "sweaters"],
      lower: ["jeans", "shorts", "trousers", "leggings", "skirts"],
    },
    Accessories: {
      accessories: [
        "belts",
        "hats",
        "watches",
        "handbags",
        "scarves",
        "jewelry",
        "backpacks",
        "socks",
      ],
      footwear: ["shoes", "sneakers", "boots", "sandals", "heels"],
    },
  },
  Male: {
    Apparel: {
      upper: ["jackets", "shirts", "t-shirts", "hoodies", "sweaters"],
      lower: ["jeans", "shorts", "trousers"],
    },
    Accessories: {
      accessories: ["belts", "hats", "watches"],
      footwear: ["shoes", "sneakers", "boots"],
    },
  },
  Female: {
    Apparel: {
      upper: ["dresses", "t-shirts", "blouses", "sweaters"],
      lower: ["leggings", "jeans", "shorts", "skirts"],
    },
    Accessories: {
      accessories: ["handbags", "scarves", "jewelry"],
      footwear: ["shoes", "sneakers", "sandals", "heels"],
    },
  },
  Kids: {
    Apparel: {
      upper: ["jackets", "shirts", "t-shirts", "sweaters", "hoodies"],
      lower: ["jeans", "shorts", "leggings", "trousers"],
    },
    Accessories: {
      accessories: ["hats", "backpacks", "socks"],
      footwear: ["shoes", "sneakers", "boots"],
    },
  },
};

export default genderOptions;
