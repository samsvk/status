export const container = {
  hidden: {
    opacity: 1,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: i * 0.35,
    },
  }),
};

export const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 150,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.5,
    },
  },
};

export const item = {
  hidden: (i) => ({
    opacity: 0,
    y: 150,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      delay: i * 0.15,
    },
  }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      delay: i * 0.15,
    },
  }),
  exit: (i) => ({
    opacity: 0,
    y: -50,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      delay: i * 0.15,
    },
  }),
};

export const small = {
  hidden: (i) => ({
    opacity: 0,
    y: 10,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      delay: i * 0.15,
    },
  }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      delay: i * 0.15,
    },
  }),
};
