import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useI18n, Language } from '../contexts/i18n-context';

const languages = [
  { code: 'vi' as Language, name: 'Tiếng Việt', flag: 'https://flagcdn.com/w20/vn.png', short: 'VI' },
  { code: 'en' as Language, name: 'English', flag: 'https://flagcdn.com/w20/us.png', short: 'EN' },
  { code: 'ja' as Language, name: '日本語', flag: 'https://flagcdn.com/w20/jp.png', short: 'JP' }
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Desktop version */}
      <div className="hidden md:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-google-blue transition-colors duration-200 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:border-google-blue/30 shadow-sm"
        >
          <Globe className="w-4 h-4" />
          <span className="font-medium text-sm">{currentLanguage.short}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[160px] z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3 ${
                    language === lang.code ? 'text-google-blue bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  <img src={lang.flag} alt={`${lang.name} flag`} className="w-5 h-auto" />
                  <div>
                    <div className="font-medium text-sm">{lang.name}</div>
                    <div className="text-xs text-gray-500">{lang.short}</div>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile version */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-google-blue transition-colors duration-200"
        >
          <img src={currentLanguage.flag} alt={`${currentLanguage.name} flag`} className="w-4 h-auto" />
          <span className="font-medium text-xs">{currentLanguage.short}</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-2 ${
                    language === lang.code ? 'text-google-blue bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  <img src={lang.flag} alt={`${lang.name} flag`} className="w-4 h-auto" />
                  <span className="font-medium text-xs">{lang.short}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}