import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'vi' | 'en' | 'ja';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, any>;
  t: (key: string) => string;
  isLoading: boolean;
  isInitialized: boolean;
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

// Cache for loaded translations to prevent re-fetching
const translationsCache = new Map<string, Record<string, any>>();

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get saved language from localStorage or default to 'vi'
    try {
      const savedLang = localStorage.getItem('preferred-language') as Language;
      return savedLang && ['vi', 'en', 'ja'].includes(savedLang) ? savedLang : 'vi';
    } catch {
      return 'vi';
    }
  });
  
  // Start with empty translations - will be loaded immediately in useEffect
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Load translations when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      // Check cache first
      const cacheKey = language;
      if (translationsCache.has(cacheKey)) {
        setTranslations(translationsCache.get(cacheKey)!);
        setIsInitialized(true);
        return;
      }

      setIsLoading(true);
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
        
        // Cache the loaded translations
        translationsCache.set(cacheKey, translations);
        setTranslations(translations);
        setIsInitialized(true);
        setIsLoading(false);
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
          
          // Cache fallback translations
          translationsCache.set(cacheKey, fallbackTranslations);
          setTranslations(fallbackTranslations);
          setIsInitialized(true);
        }
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  // Save language preference when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  // Translation function with nested key support and smart fallbacks
  const t = (key: string): string => {
    // If not initialized yet, return a more user-friendly placeholder
    if (!isInitialized) {
      return '';
    }
    
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Instead of returning key, return empty string while loading
        return '';
      }
    }
    
    return typeof value === 'string' ? value : '';
  };

  return (
    <I18nContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      translations,
      t,
      isLoading,
      isInitialized
    }}>
      {children}
    </I18nContext.Provider>
  );
};