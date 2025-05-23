import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import { join } from 'path';

i18next
  .use(Backend)
  .init({
    lng: 'en', // default language
    fallbackLng: 'en',
    backend: {
      loadPath: join(__dirname, './locales/{{lng}}/{{ns}}.json'),
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export const i18nMiddleware = (req, res, next) => next();

export default i18next;