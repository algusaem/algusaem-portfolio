import { createContext } from "react";

export type LangContextType = {
  lang: string | null;
  setLang: React.Dispatch<React.SetStateAction<string | null>>;
};

export const LangContext = createContext<LangContextType | undefined>(
  undefined
);
