import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import jp from '../locales/jp.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en.translation },
      jp: { translation: jp.translation },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
