// i18n.js
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // Idioma de respaldo
    lng: "en",         // Forzamos inglés por defecto
    debug: true,       // Activa o desactiva según tu entorno
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Asegúrate de que esta ruta sea correcta
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["cookie"],
    },
  });

export default i18n;
