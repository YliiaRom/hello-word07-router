import { motion } from "framer-motion";

import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
function HeaderSocIcon() {
  return (
    <>
      <div className="md:flex hidden items-center space-x-4">
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          href="#"
          className="text-gray-500 dark:text-gray-300 hover:text-violet-200 dark:hover:text-violet-400 transition-colors duration-300"
        >
          <FiGithub className="w-5 h-5" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          href="#"
          className="text-gray-500 dark:text-gray-300 hover:text-violet-200 dark:hover:text-violet-400 transition-colors duration-300"
        >
          <FiTwitter className="w-5 h-5" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          href="#"
          className="text-gray-500 dark:text-gray-300 hover:text-violet-200 dark:hover:text-violet-400 transition-colors duration-300"
        >
          <FiLinkedin className="w-5 h-5" />
        </motion.a>
      </div>
    </>
  );
}
export default HeaderSocIcon;
