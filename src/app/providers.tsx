"use client";
import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Flex, Spinner } from "@chakra-ui/react";
import useLangProvider from "@/components/Hooks/useLangProvider";
import { LangContext } from "@/components/Contexts/LangContext";
import i18n from "../../i18n";
import { I18nextProvider } from "react-i18next";

export function Providers({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLangProvider();

  if (lang === null) {
    return (
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        bg={"black"}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor={"black"}
          color={"white"}
          size="xl"
        />
      </Flex>
    );
  }

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <LangContext.Provider value={{ lang, setLang }}>
            {children}
          </LangContext.Provider>
        </I18nextProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
