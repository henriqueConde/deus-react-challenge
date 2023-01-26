import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptPT from './translations/pt-pt.json';
import enUs from './translations/en-us.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: ptPT,
    en: enUs,
  },
  fallbackLng: 'en',
  lng: navigator.language,
  interpolation: {
    escapeValue: false, // react already saves from xss
  },
});

export default i18n;
