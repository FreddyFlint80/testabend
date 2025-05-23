import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '../data/translations';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Default to German, or detect browser language
  const [language, setLanguage] = useState<Language>('de');

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let result = translations[language];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k as keyof typeof result];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return result as string;
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};