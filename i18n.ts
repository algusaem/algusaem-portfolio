// i18n.ts
"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translations
import en from "./src/locales/en/translation.json";
import es from "./src/locales/es/translation.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
  });
}

export default i18n;
