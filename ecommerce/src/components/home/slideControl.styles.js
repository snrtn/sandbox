const slideControl = {
  container:
    "z-5 absolute bottom-0 left-0 right-0 flex flex-col items-center overflow-y-hidden bg-bgWhite px-2 py-4",

  controlWrapper:
    "flex items-center justify-between w-full max-w-[1100px] px-2",

  controlGroup: "items-center justify-start hidden tablet-lg:flex flex-1",

  controlInfo: "flex items-center justify-center gap-2 w-full",
  controlButton: "flex items-center justify-start gap-4 w-full",

  slideContainer: "no-scrollbar flex space-x-2 overflow-x-auto flex-[4]",

  slideButton:
    "flex-shrink-0 cursor-pointer px-4 py-2 text-[10px] tablet-lg:text-xs rounded-full",

  activeSlide: "active-slide bg-bgBlack text-cWhite",
  inactiveSlide: "bg-bgGrayWhite text-cBlack",
};

export default slideControl;
