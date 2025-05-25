"use client";

import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Container, Text, theme } from "@chakra-ui/react";
import { Flex, Spinner } from "@chakra-ui/react";
import NavBar from "@/components/NavBar/NavBar";
import useLangProvider from "@/components/Hooks/useLangProvider";
import { LangContext } from "@/components/Contexts/LangContext";

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
        <LangContext.Provider value={{ lang, setLang }}>
          <Container w={"100vw"} h={"100vh"}>
            <NavBar />
            {children}
            <footer>
              <Flex w={"100%"} justify={"center"} pb={4}>
                <Text fontSize={"sm"}>© 2025 Alex Gutierrez</Text>
              </Flex>
            </footer>
          </Container>
        </LangContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
