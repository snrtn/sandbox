const navMenu = {
  wrap: "h-full w-full",

  menuItem:
    "flex h-full text-sm items-center justify-center pr-10 cursor-pointer",
  secTitle: "text-sm font-roboto",
  listItem: "py-2 cursor-pointer text-cLightBlack hover:text-cBlack",

  activeline: "border-b-2 border-orange-500 duration-300",
  deactiveline: "border-b-2 border-transparent duration-300",

  drop: "left-0 right-0 z-50 top-44 glassmorphism mt-1 glassmorphism py-12 shadow-main",
  dropCont: "overflow-visible flex items-center h-12 space-x-6 z-30",
  dropContent:
    "section-padding no-scroll-x grid h-full w-full grid-cols-6 gap-10",
};

export default navMenu;
