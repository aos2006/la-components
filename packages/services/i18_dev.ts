import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocizeBackend from 'i18next-locize-backend';
import LocizeEditor from 'locize-editor';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(LocizeBackend)
  .use(LocizeEditor)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    appendNamespaceToCIMode: true,
    saveMissing: true,
    ns: ['global', 'Store'],
    defaultNS: 'global',
    fallbackLng: 'en',
    nonExplicitWhitelist: true,
    whitelist: ['en', 'zh', 'ko', 'vi', 'id'],
    load: 'languageOnly',
    debug: false,
    keySeparator: false,
    nsSeparator: false,
    backend: {
      projectId: process.env.LOCIZE_PROJECT_ID,
      apiKey: process.env.LOCIZE_API_KEY,
      referenceLng: 'en',
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
      format(value, format, lng) {
        if (format === 'uppercase') {
          return value.toUpperCase();
        }
        return value;
      },
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
    },
    react: {
      wait: true,
    },
  });

window.i18n = i18n;
export default i18n;
