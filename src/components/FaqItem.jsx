import { motion, AnimatePresence } from "framer-motion";
export default function FaqItem({ id, question, answer, isOpen, toggleOpen }) {
  return (
    <div className="mx-80 rounded-lg shadow-md">
      <div
        onClick={() => toggleOpen(id)}
        className={`flex justify-between p-4 cursor-pointer hover:font-medium ${
          isOpen
            ? "text-blue-600 bg-blue-50"
            : "text-black hover:text-blue-600 "
        }`}
      >
        {question}
        <span className="text-2xl border border-gray-400 rounded-full bg-white w-8 h-8 flex items-center justify-center float-right -mt-1">
          {isOpen ? "-" : "+"}
        </span>
      </div>

      <hr className="border-black w-full" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="cursor-pointer p-4 text-justify hover:shadow-lg"
              onClick={() => toggleOpen(id)}
            >
              {answer}
            </p>

            <hr className="border-black w-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
