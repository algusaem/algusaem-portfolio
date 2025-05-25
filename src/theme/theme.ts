import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
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
