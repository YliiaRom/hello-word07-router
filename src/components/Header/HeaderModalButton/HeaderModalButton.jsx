import { motion } from "framer-motion";
function HeaderModalButton({ btnText, openContactForm }) {
  return (
    <>
      <motion.button
        onClick={openContactForm}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.8,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        // className="ml-4 px-4 py-2 rounded-sm bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-black transition-all duration-500"
        className="ml-4 px-4 py-2 rounded-md 
        bg-transparent text-gray-300 font-bold border-2 shadow-[-1px_-1px_2px_#fff,_2px_2px_3px_#000] hover:from-violet-700 hover:to-purple-700 hover:text-black transition-all duration-500"
        // style={{
        //   background:
        //     "linear-gradient(90deg, transparent, #e4e4e3, #fff, #e4e4e3, transparent",
        // }}
      >
        {btnText}
      </motion.button>
    </>
  );
}
export default HeaderModalButton;
