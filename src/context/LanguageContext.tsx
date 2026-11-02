import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isRtl: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'ar' || urlLang === 'en') {
        localStorage.setItem('nozol_lang', urlLang);
        return urlLang;
      }
    } catch (_) {}
    const saved = localStorage.getItem('nozol_lang');
    return (saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  const isRtl = lang === 'ar';

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('nozol_lang', newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
  };

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (isRtl) {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-arabic');
    }
  }, [lang, isRtl]);

  // Fallback simple dictionary helper, detailed strings will be pulled from content.ts
  const t = (key: string) => key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
