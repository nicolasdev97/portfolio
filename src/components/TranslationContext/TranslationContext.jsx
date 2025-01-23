import React, { createContext } from 'react';
import { useTranslation } from 'react-i18next';

export const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {

  //Traduccion
  const [t, i18n] = useTranslation('global');

  //Define el lenguaje
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider value={{ t, i18n, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;