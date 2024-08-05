import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";
i18n.use(initReactI18next).init({
  resources: {
    en: en,
    ar: ar,
  },
  lng: localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en",
  fallbackLng: "en", // fallback language  ns: ["translations"],
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
