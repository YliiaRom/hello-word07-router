import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import ContactInputForm from "../ContactInputForm/ContactInputForm";
function ContactFormWrap({ titleContent, closeContactForm, children }) {
  return (
    <>
      {/* main box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        {/* content wrap*/}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 30 }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            duration: 1,
          }}
          className="bg-gray-600 dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full  p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold  text-gray-300">
              {titleContent}
            </h2>
            <button onClick={() => closeContactForm()}>
              <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
            </button>
          </div>
          {/* form input */}
          {children}
        </motion.div>
      </motion.div>
    </>
  );
}
export default ContactFormWrap;
