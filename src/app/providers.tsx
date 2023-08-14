"use client";

import React, { useState, useEffect, createContext, ReactNode } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Container, Text, extendTheme } from "@chakra-ui/react";
import { checkLanguage } from "@/utils/checkLanguage";
import { Flex, Spinner } from "@chakra-ui/react";
import NavBar from "@/components/NavBar/NavBar";

type LangContextType = {
  lang: string | null;
  setLang: React.Dispatch<React.SetStateAction<string | null>>;
};

export const LangContext = createContext<LangContextType | undefined>(
  undefined
);

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        color: props.colorMode === "dark" ? "white" : "black",
        bg: props.colorMode === "dark" ? "gray.800" : "white",
      },
    }),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<string | null>(null);

  useEffect(() => {
    const currentLang = checkLanguage() || "es";
    setLang(currentLang);
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", currentLang);
    }
  }, []);

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
        <LangContext.Provider value={{ lang, setLang }}>
          <Container w={"100vw"} h={"100vh"}>
            <NavBar />
            {children}
            <footer>
              <Flex w={"100%"} justify={"center"} pb={4}>
                <Text fontSize={"sm"}>© 2023 Alex Gutierrez</Text>
              </Flex>
            </footer>
          </Container>
        </LangContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
