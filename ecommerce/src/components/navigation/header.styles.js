const header = {
  headerContainer:
    "fixed top-0 w-full z-50 transition-transform duration-500 ease-in-out glassmorphism",
  wrapper:
    "section-padding  w-full flex flex-wrap items-center justify-between tablet-lg:w-full tablet-lg:flex-row",
  headerVisible: "translate-y-0",
  hidden: "-translate-y-full",

  icon: "flex mr-3 tablet-lg:hidden",

  menuContainer:
    "fixed z-20 w-full transition-top duration-500 ease-in-out glassmorphism hidden tablet-lg:flex",
  menuWrapper: "section-padding flex w-full h-12 items-center",
  menuVisible: "block",

  left: `w-2/6 tablet-lg:w-1/3 h-12 tablet-lg:h-full flex items-center justify-start`,
  center: `w-full tablet-lg:w-1/3 h-10 tablet-lg:h-full flex items-center justify-center order-last tablet-lg:order-none`,
  right: `w-4/6 tablet-lg:w-1/3 h-12 tablet-lg:h-full flex items-center justify-end`,

  logoText: "font-roboto cursor-pointer",
};

export default header;
