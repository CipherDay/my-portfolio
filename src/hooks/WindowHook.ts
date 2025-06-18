import { useEffect, useState } from "react";

type BPs = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
const BREAKPOINTS: Record<BPs, number> = {
  xs: 300,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

interface WindowSize {
  width: number;
  height: number;
  breakPoint: BPs;
}
const breakPointEvaluate = (size: number, target: BPs) => {
  return size >= BREAKPOINTS[target];
};
const breakPointConverter = (size: number): BPs => {
  if (size >= 1536) {
    return "2xl";
  } else if (size >= 1280) {
    return "xl";
  } else if (size >= 1024) {
    return "lg";
  } else if (size >= 768) {
    return "md";
  } else if (size >= 640) {
    return "sm";
  } else {
    return "xs";
  }
};
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    breakPoint: breakPointConverter(window.innerWidth),
  });
  const handelResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      breakPoint: breakPointConverter(window.innerWidth),
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);
  return windowSize;
};

export { useWindowSize, type WindowSize, type BPs, breakPointEvaluate };
