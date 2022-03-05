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
};

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

export const lineAnimation: Variants = {
  initial: {
    width: 0,
  },

  animate: {
    width: "100%",
    transition: {
      duration: 0.75,
    },
  },
};

export const sliderAnimation: Variants = {
  initial: {
    x: "-130%",
    skew: "45deg",
  },

  animate: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const sliderContainerAnimation: Variants = {
  initial: {
    opacity: 1,
  },

  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};
