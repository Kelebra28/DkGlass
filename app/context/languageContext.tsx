'use client'
import React, { createContext, useState, useEffect, ReactNode } from 'react';

import enJson from '../traduction/en.json'
import esJson from '../traduction/es.json';

interface LanguageContextProps {
  language: boolean;
  toggleLanguage: () => void;
  translations: any;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: true,
  toggleLanguage: () => {},
  translations : null,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<boolean>(true);
  const [translations, setTranslations] = useState<any>(esJson);


  const toggleLanguage = () => {
    setLanguage(!language);
  };

  useEffect(() => {
    if(language){
        setTranslations(enJson)
    } else {
        setTranslations(esJson)
    }

}, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
