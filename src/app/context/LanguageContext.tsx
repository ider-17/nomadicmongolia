"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Language type
export type Language = "it" | "en";

// Context type
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language | ((prev: Language) => Language)) => void;
}

// Create context with default
const LanguageContext = createContext<LanguageContextType>({
  language: "it",
  setLanguage: () => {},
});

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("it");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook
export const useLanguage = () => useContext(LanguageContext);
