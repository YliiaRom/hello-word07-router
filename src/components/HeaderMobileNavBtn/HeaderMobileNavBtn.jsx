import { motion } from "framer-motion";
function HeaderMobileNavBtn({ toggleMenu, children }) {
  return (
    <>
      <div className="md:hidden flex items-center">
        <motion.button
          whileTap={{ scale: 0.7 }}
          onClick={() => toggleMenu()}
          className="text-gray-300"
        >
          {children}
        </motion.button>
      </div>
    </>
  );
}
export default HeaderMobileNavBtn;
