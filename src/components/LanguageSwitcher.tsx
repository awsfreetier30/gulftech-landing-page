import { Globe2, ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  language: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

export function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="absolute top-4 right-4 z-50">
      <button
        onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all"
      >
        <Globe2 className="w-4 h-4" />
        <span>{language === 'en' ? 'العربية' : 'English'}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}