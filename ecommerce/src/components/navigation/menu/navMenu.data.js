const menus = {
  men: {
    label: "Men",
    sections: [
      {
        title: "upper",
        items: [{ label: "tshirts", href: "/hommes/tshirts" }],
      },
      {
        title: "lower",
        items: [{ label: "shorts", href: "/hommes/shorts" }],
      },
      {
        title: "footwear",
        items: [{ label: "sneakers", href: "/hommes/sneakers" }],
      },
    ],
  },
  women: {
    label: "Women",
    sections: [
      {
        title: "upper",
        items: [
          { label: "dresses", href: "/femmes/dresses" },
          { label: "tshirts", href: "/femmes/tshirts" },
          { label: "blouses", href: "/femmes/blouses" },
        ],
      },
      {
        title: "lower",
        items: [
          { label: "leggings", href: "/femmes/leggings" },
          { label: "jeans", href: "/femmes/jeans" },
          { label: "shorts", href: "/femmes/shorts" },
          { label: "skirts", href: "/femmes/skirts" },
        ],
      },
      {
        title: "footwear",
        items: [
          { label: "heels", href: "/femmes/heels" },
          { label: "sandals", href: "/femmes/sandals" },
        ],
      },
      {
        title: "accessories",
        items: [{ label: "handbags", href: "/femmes/handbags" }],
      },
    ],
  },
  kids: {
    label: "Kids",
    sections: [
      {
        title: "upper",
        items: [
          { label: "jackets", href: "/enfants/jackets" },
          { label: "tshirts", href: "/enfants/tshirts" },
          { label: "sweaters", href: "/enfants/sweaters" },
        ],
      },
      {
        title: "lower",
        items: [
          { label: "jeans", href: "/enfants/jeans" },
          { label: "shorts", href: "/enfants/shorts" },
        ],
      },
      {
        title: "footwear",
        items: [{ label: "sneakers", href: "/enfants/sneakers" }],
      },
    ],
  },
};

export default menus;
