"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
