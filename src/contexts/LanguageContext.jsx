
import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import translations from "../lib/i18n";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const toggleLanguage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    // Primero iniciamos la animación de salida
    setShouldUpdate(true);
    
    // Cambiamos el idioma a mitad de la transición
    setTimeout(() => {
      setCurrentLanguage(prev => prev === "en" ? "es" : "en");
      // Pequeño retraso adicional para asegurar que el cambio de idioma se procese
      setTimeout(() => {
        setShouldUpdate(false);
        setIsTransitioning(false);
      }, 150);
    }, 150); // Este tiempo debe ser la mitad de la duración total de la transición
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={shouldUpdate ? "transitioning" : currentLanguage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={isTransitioning ? 'pointer-events-none' : ''}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LanguageContext.Provider>
  );
};
