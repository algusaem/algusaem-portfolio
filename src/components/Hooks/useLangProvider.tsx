"use client";

import { useEffect, useState } from "react";
import i18n from "../../../i18n";

const useLangProvider = () => {
  const [lang, setLang] = useState<string | null>(null);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");

    if (storedLang) {
      setLang(storedLang);
      return;
    }

    // Use the most preferred matching language
    const preferredLang =
      navigator.languages
        ?.find((l) => ["es", "en"].includes(l.slice(0, 2)))
        ?.slice(0, 2) || "es";

    console.log("Detected browser-preferred lang:", preferredLang);
    setLang(preferredLang);
  }, []);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  return { lang, setLang };
};

export default useLangProvider;
