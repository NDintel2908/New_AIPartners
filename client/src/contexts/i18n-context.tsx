import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'vi' | 'en' | 'ja';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, any>;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<Language>('vi');
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Load translations when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Load all section files
        const landingSections = ['Header', 'HeroSection', 'AboutSection', 'FeaturesSection', 'AITrainersModel', 'Footer', 'SuccessStoriesSection', 'PartnersSection', 'ContactSection'];
        const pagesSections = ['App', 'NotFoundPage'];
        const translations: Record<string, any> = {};
        
        // Load landing sections
        for (const section of landingSections) {
          try {
            const response = await fetch(`/locales/${language}/landing/${section}.json`);
            const data = await response.json();
            translations[section] = data;
          } catch (error) {
            console.error(`Failed to load ${section} translations:`, error);
          }
        }
        
        // Load pages sections
        for (const section of pagesSections) {
          try {
            const response = await fetch(`/locales/${language}/pages/${section}.json`);
            const data = await response.json();
            translations[section] = data;
          } catch (error) {
            console.error(`Failed to load pages ${section} translations:`, error);
          }
        }
        
        setTranslations(translations);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to Vietnamese if loading fails
        if (language !== 'vi') {
          const landingSections = ['Header', 'HeroSection', 'AboutSection', 'FeaturesSection', 'AITrainersModel', 'Footer', 'SuccessStoriesSection', 'PartnersSection', 'ContactSection'];
          const pagesSections = ['App', 'NotFoundPage'];
          const fallbackTranslations: Record<string, any> = {};
          
          // Load fallback landing sections
          for (const section of landingSections) {
            try {
              const response = await fetch(`/locales/vi/landing/${section}.json`);
              const data = await response.json();
              fallbackTranslations[section] = data;
            } catch (error) {
              console.error(`Failed to load fallback ${section} translations:`, error);
            }
          }
          
          // Load fallback pages sections
          for (const section of pagesSections) {
            try {
              const response = await fetch(`/locales/vi/pages/${section}.json`);
              const data = await response.json();
              fallbackTranslations[section] = data;
            } catch (error) {
              console.error(`Failed to load fallback pages ${section} translations:`, error);
            }
          }
          
          setTranslations(fallbackTranslations);
        }
      }
    };

    loadTranslations();
  }, [language]);

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('aipartners-language') as Language;
    if (savedLanguage && ['vi', 'en', 'ja'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('aipartners-language', lang);
  };

  // Translation function with nested key support
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <I18nContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      translations,
      t
    }}>
      {children}
    </I18nContext.Provider>
  );
};