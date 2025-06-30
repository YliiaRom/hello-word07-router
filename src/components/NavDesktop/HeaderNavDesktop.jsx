import { motion } from "framer-motion";
function HeaderNavDesktop({ list, contentNavItem }) {
  return (
    <>
      <nav className="lg:flex hidden space-x-8">
        {list.map((item, index) => (
          <motion.a
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7 + index * 0.2,
            }}
            className="relative text-gray-400 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300">
              {contentNavItem}
            </span>
          </motion.a>
        ))}
      </nav>
    </>
  );
}
export default HeaderNavDesktop;
