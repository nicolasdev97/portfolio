import React, { createContext } from 'react';
import { useTranslation } from 'react-i18next';

export const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {

  const [t, i18n] = useTranslation('global');

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es"; // Define newLanguage
    i18n.changeLanguage(newLanguage); // Cambia el idioma usando newLanguage
  };

  return (
    <TranslationContext.Provider value={{ t, i18n, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;