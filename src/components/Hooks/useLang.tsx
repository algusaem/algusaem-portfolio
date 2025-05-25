import { useContext, useCallback } from "react";
import { LangContext } from "../Contexts/LangContext";

const useLang = () => {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }

  const { lang, setLang } = context;

  const toggleLang = useCallback(() => {
    const newLang = lang === "es" ? "en" : "es";
    setLang(newLang);
  }, [lang, setLang]);

  return { lang, setLang, toggleLang };
};

export default useLang;
