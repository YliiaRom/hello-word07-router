import { motion, AnimatePresence } from "framer-motion";
function ContactInputForm() {
  return (
    <>
      <AnimatePresence>
        <form action="#" className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block taxt-sm font-medium text-gray-300 mb-1"
            >
              name
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block taxt-sm font-medium text-gray-300 mb-1"
            >
              Email
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="massage"
              className="block taxt-sm font-medium text-gray-300 mb-1"
            >
              Message
              <textarea
                rows="4"
                id="message"
                placeholder="How can we help you?"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
              />
            </label>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full px-4  py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50"
          >
            Send message
          </motion.button>
        </form>
      </AnimatePresence>
    </>
  );
}
export default ContactInputForm;
