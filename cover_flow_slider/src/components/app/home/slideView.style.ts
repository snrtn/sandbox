const slideView = {
  container: "relative w-full h-[100%] overflow-hidden",
  slideImageWrapper: "w-auto h-[100%] flex-shrink-0 overflow-hidden relative",
  slideImageWrapperHalf:
    "w-auto h-[100%] flex-shrink-0 overflow-hidden relative",

  slideImage: "w-full h-full object-contain",

  slideLink: "absolute inset-0 flex items-center justify-center",
  slideContent:
    "relative flex h-full w-full items-start tablet-lg:items-center justify-center pt-4 tablet-lg:pt-0",
  imageWrapper: "relative h-full w-full",
  darkOverlay: "absolute inset-0 bg-bgBlack bg-opacity-60 cursor-pointer",
  darkCenterOverlay: "absolute inset-0 bg-bgBlack bg-opacity-10",

  slideOverlay:
    "absolute inset-0 flex w-full flex-col items-center text-center tablet-lg:text-left tablet-lg:items-start justify-end py-32 section-padding",

  slideTitle:
    "mt-1 text-xl tablet-lg:text-2xl font-bold font-roboto text-cWhite",
  slideDescription: "mt-2 text-md text-cWhite w-full tablet-lg:flex hidden",
  arrowLeft:
    "absolute right-20 top-1/2 transform -translate-y-1/2 flex tablet-lg:hidden",
  arrowRight:
    "absolute left-20 top-1/2 transform -translate-y-1/2 flex tablet-lg:hidden",
};

export default slideView;
