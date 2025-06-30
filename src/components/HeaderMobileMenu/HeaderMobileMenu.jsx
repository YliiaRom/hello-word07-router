import HeaderMobileNav from "./HeaderMobileNav";
import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import HeaderSocIcon from "../HeaderSocIcon/HeaderSocIcon";
import HeaderMobileSocIcon from "./HeaderMobileSocIcon";
function HeaderMobileMenu({ isOpen, list, toggleMenu, openContactForm }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-gray-800 dark:bg-gray-900 shadow-lg px-4 py-5 space-e-5"
      >
        {/* nav-menu */}
        <HeaderMobileNav list={list} toggleMenu={toggleMenu} />

        {/* social link */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <HeaderMobileSocIcon />

          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
          >
            Contact me
          </button>
        </div>
      </motion.div>
    </>
  );
}
export default HeaderMobileMenu;
