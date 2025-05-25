import { useEffect, useState } from "react";
import i18n from "../../../i18n";

const useLangProvider = () => {
  const [lang, setLang] = useState<string | null>(null);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const initialLang = storedLang || "es";
    setLang(initialLang);
    i18n.changeLanguage(initialLang);
  }, []);

  useEffect(() => {
    if (lang) {
      localStorage.setItem("lang", lang);
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return { lang, setLang };
};

export default useLangProvider;
