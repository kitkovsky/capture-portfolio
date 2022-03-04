import { Variants } from "framer-motion";

export const pageAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 300,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },

  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const fastPageAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 300,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },

  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
}

export const titleAnimation: Variants = {
  initial: {
    y: 200,
  },

  animate: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const fadeAnimation: Variants = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const photoAnimation: Variants = {
  initial: {
    scale: 1.5,
    opacity: 0,
  },

  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};
