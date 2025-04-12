import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptBR from './locales/ptBR';
import enUS from './locales/enUS';

i18n
  .use(LanguageDetector) // Detecta automaticamente
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: ptBR },
      en: { translation: enUS },
    },
    fallbackLng: 'en', // Caso não consiga detectar
    detection: {
      order: ['navigator', 'htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
