import React, { createContext } from 'react';
import { useTranslation } from 'react-i18next';

export const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const [t, i18n] = useTranslation('global');
  return (
    <TranslationContext.Provider value={{ t, i18n }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;