import { motion } from "framer-motion";
import { NavLink } from "react-router";

function HeaderNavDesktop({ list }) {
  return (
    <>
      <nav className="lg:flex hidden space-x-10 ">
        {list.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7 + index * 0.2,
            }}
            className="relative text-gray-400 dark:text-gray-200 w-10
            hover:text-violet-600 dark:hover:text-violet-400 font-medium
            transition-colors duration-300 group"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition-colors duration-300 group ${
                  isActive
                    ? "text-violet-200 dark:text-violet-100"
                    : "text-gray-600 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400"
                }`
              }
            >
              {item.label}
              {/* <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-violet-300 group-hover:w-full transition-all duration-300"></span> */}
            </NavLink>
          </motion.div>
        ))}
      </nav>
    </>
  );
}
export default HeaderNavDesktop;
