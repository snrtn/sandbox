const navSide = {
  container: "fixed inset-0 flex z-50 tablet-lg:hidden",
  overlay: "flex-1 bg-black bg-opacity-60 cursor-pointer", // Semi-transparent overlay
  sidebar: "w-80 tablet-xs:w-[70%] max-w-[100%] bg-bgWhite h-full left-0 fixed",
  closeButton: "absolute top-10 right-3 cursor-pointer  z-10",
  content:
    "flex flex-col relative bg-bgWhite w-full h-full z-10 overflow-y-auto items-center",
  itemCont: "mt-6 w-full pb-[38vh]",

  welcome:
    "flex px-10 w-full h-28 bg-bgBlack justify-between items-center flex-shrink-0",
  welcomeWrap: "flex-col flex gap-1 ",

  msg: "text-cWhite",

  itemBtn: "flex px-10 py-5 justify-between items-center cursor-pointer w-full",
  faChevron: "text-xs mr-2",

  itemTextWrap: "flex items-center pl-8",
  itemSubText: "flex flex-col px-16",
};

export default navSide;
