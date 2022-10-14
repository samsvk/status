import { motion, AnimatePresence } from "framer-motion";

export const container = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: i * 0.18,
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
    y: 200,
    transition: {
      ease: [0.34, 0.53, 0.37, 1.02],
      duration: 0.5,
    },
  },
};

export const Dropdown = ({ children, icon, name, setShowId, show }) => {
  return (
    <li className="relative z-20 flex items-center justify-center flex-1 gap-2 font-semibold text-[1.05rem] text-spotify-text whitespace-nowrap hover:cursor-pointer tracking-tight">
      <span
        onClick={() => setShowId(name)}
        className="flex items-center justify-center gap-2"
      >
        {icon}
        {name}
      </span>
      {/* {show === name && (
        <motion.div className="absolute left-0 z-50 w-full h-max min-w-[550px] text-white bg-spotify-bg  max-w-max top-12 rounded-3xl overflow-hidden p-8 flex flex-col gap-3.5 drop-shadow-lg">
          {children}
        </motion.div>
      )} */}
      {
        <AnimatePresence exitBeforeEnter>
          {show === name && (
            <motion.div
              variants={container}
              initial="hidden"
              animate={"visible"}
              exit="hidden"
              className="absolute left-0 z-50 w-full h-max min-w-[550px] text-white bg-spotify-bg  max-w-max top-12 rounded-3xl overflow-hidden p-8 flex flex-col gap-3.5 drop-shadow-lg"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      }
    </li>
  );
};
