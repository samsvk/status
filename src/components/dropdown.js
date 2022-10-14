import { motion, AnimatePresence } from "framer-motion";

// export const container = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: (i = 1) => ({
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.05,
//       delayChildren: i * 0.18,
//       opacity: { duration: 0.25 },
//     },
//   }),
// };

// export const child = {
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       ease: [0.34, 0.53, 0.37, 1.02],
//       duration: 0.5,
//     },
//   },
//   hidden: {
//     opacity: 0,
//     y: 200,
//     transition: {
//       ease: [0.34, 0.53, 0.37, 1.02],
//       duration: 0.5,
//     },
//   },
// };

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
      {show === name && (
        <div
          className={`${
            show === name && "animate-[clip_0.4s_ease_0.15s_both]"
          } delay-300 absolute left-0 z-50 w-full h-max min-w-[550px] text-white bg-spotify-bg  max-w-max top-12 rounded-3xl overflow-hidden p-8 flex flex-col gap-3.5 border border-spotify-border/5`}
        >
          {children}
        </div>
      )}
      {/* {
        <AnimatePresence exitBeforeEnter>
          {show === name && (
            <motion.div
              variants={container}
              initial="hidden"
              animate={"visible"}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="absolute left-0 z-50 w-full h-max min-w-[550px] text-white bg-spotify-bg  max-w-max top-12 rounded-3xl overflow-hidden p-8 flex flex-col gap-3.5 drop-shadow-lg"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      } */}
    </li>
  );
};
