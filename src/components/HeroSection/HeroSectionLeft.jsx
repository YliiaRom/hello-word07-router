import { motion } from "framer-motion";
function HeroSectionLeft() {
  return (
    <>
      <div className="z-40 xl:md-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 5,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8 font-bold z-10 mb-6 bg-gradient-to-r from-violet-900 to-rose-400 bg-clip-text text-transparent"
        >
          Hello World - <br />
          Your best world
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 5,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1xl lg:text-2xl max-w-2xl bg-gradient-to-r from-violet-800 to-rose-600 bg-clip-text text-transparent"
        >
          Looking for where to buy with guaranteed quality?
        </motion.p>
      </div>
    </>
  );
}
export default HeroSectionLeft;
