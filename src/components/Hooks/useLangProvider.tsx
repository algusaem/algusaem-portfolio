import { useEffect, useState } from "react";
import { checkLanguage } from "@/utils/checkLanguage";

const useLangProvider = () => {
  const [lang, setLang] = useState<string | null>(null);

  useEffect(() => {
    const currentLang = checkLanguage() || "es";
    setLang(currentLang);
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", currentLang);
    }
  }, []);

  return { lang, setLang };
};

export default useLangProvider;
