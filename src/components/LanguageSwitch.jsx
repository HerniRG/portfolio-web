
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitch = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-accent/80 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentLanguage}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-medium"
        >
          {currentLanguage === "en" ? "ES" : "EN"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default LanguageSwitch;
