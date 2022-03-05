import { useInView } from "react-intersection-observer";
import { AnimationControls, useAnimation } from "framer-motion";

export const UseScroll = (): [
  (node?: Element | null | undefined) => void,
  AnimationControls
] => {
  const [element, inView] = useInView({ threshold: 0.4 });
  const controls = useAnimation();
  if (inView) {
    controls.start("animate");
  } else {
    controls.start("initial");
  }
  return [element, controls];
};
