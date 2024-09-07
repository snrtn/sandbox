const itemView = {
  container:
    "relative w-full bg-bgWhite overflow-hidden pt-40 py-20 tablet-lg:py-30",
  slidrcontainer:
    "relative w-full bg-bgWhite overflow-hidden py-8 tablet-lg:py-10",
  header: "section-padding",
  title: "text-xl font-bold",
  description: "text-sm mt-4",
  scrollContainer:
    "section-padding flex overflow-x-auto scroll-smooth no-scrollbar",
  slide: "flex-shrink-0 rounded-main overflow-hidden mr-2 relative group",

  hiddenSlide: "hidden tablet-lg:flex tablet-lg:w-0",
  firstSlide: "mx-[-5px]",

  evenSlide: "h-[55vh] w-[35vh]",
  oddSlide: "h-[50vh] w-[35vh]",

  image: "w-full h-full object-cover transition group-hover:opacity-80",
  overlay:
    "from-black/30 to-transparent duration-400 absolute bottom-0 left-0 right-0 flex h-[50vh] cursor-pointer items-end justify-center bg-gradient-to-t p-8  transition-all group-hover:from-black/80 group-hover:items-center",
  overlayText:
    "duration-400 text-cWhite transform text-center transition-transform group-hover:translate-y-[-50%]",
};

export default itemView;
