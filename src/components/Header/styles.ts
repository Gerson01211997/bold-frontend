export const className = {
  nav: "w-full bg-bold-gradient",
  container:
    "mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16",
  logo: "w-24 md:w-28 h-auto text-white",
  menuDesktop: "hidden items-center gap-6 md:flex",
  menuMobile:
    "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
  menuMobileContent: "px-4 pb-4 flex flex-col gap-2",
  navLink:
    "text-sm font-medium text-white/90 hover:text-white transition flex items-center gap-2",
  navLinkMobile: "py-2 text-white flex items-center gap-2",
  hamburgerButton: "relative h-8 w-8 md:hidden text-white",
  hamburgerLine:
    "absolute left-0 h-0.5 w-full bg-white transition-all duration-300",
  icon: "w-5 h-5 text-white",
} as const;
