import { Variants, Transition } from "framer-motion";

// Shared spring transitions
export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const springTransitionSnappy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

// Direction-aware slide variants for image galleries/modals
// Pass direction as custom prop: positive = forward, negative = backward
export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

// Stagger container for children animations
export const staggerContainer = (staggerDelay = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

// Fade up animation for items
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

// Scale fade for labels/badges
export const scaleFadeItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransitionSnappy,
  },
};

// Visibility toggle (for indicators)
export const visibilityVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { scaleY: 1, opacity: 1 },
};

// Animated border path for cards
export const borderPathVariants: Variants = {
  idle: {
    pathLength: 0,
    opacity: 0,
  },
  active: {
    pathLength: [0, 1, 1, 0],
    opacity: 1,
    transition: {
      pathLength: {
        duration: 8,
        times: [0, 0.4, 0.6, 1],
        ease: "easeInOut",
        repeat: Infinity,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

// Expand/collapse for accordion content
export const expandVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    marginTop: 0,
  },
  expanded: {
    height: "auto",
    opacity: 1,
    marginTop: 16,
    transition: {
      height: springTransition,
      opacity: { duration: 0.2, delay: 0.1 },
      marginTop: springTransition,
    },
  },
};
