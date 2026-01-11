import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    primary: "#805AD5",
    primaryHover: "#6133C9",
    primaryLight: "#9475d8",
    secondary: "#5AD580",
  },
};

const semanticTokens = {
  colors: {
    "bg.surface": {
      default: "gray.100",
      _dark: "gray.700",
    },
    "bg.body": {
      default: "white",
      _dark: "gray.800",
    },
    "text.primary": {
      default: "black",
      _dark: "white",
    },
    "text.muted": {
      default: "gray.700",
      _dark: "gray.200",
    },
    "border.default": {
      default: "gray.300",
      _dark: "gray.300",
    },
  },
};

const components = {
  Button: {
    variants: {
      brand: {
        bg: "brand.primary",
        color: "white",
        _hover: {
          bg: "brand.primaryHover",
        },
      },
      brandGhost: {
        bg: "transparent",
        _hover: {
          bg: "brand.primary",
          color: "white",
        },
      },
      secondary: {
        bg: "transparent",
        _hover: {
          bg: "brand.secondary",
          color: "white",
        },
      },
    },
  },
};

export const theme = extendTheme({
  config,
  colors,
  semanticTokens,
  components,
  styles: {
    global: {
      body: {
        color: "text.primary",
        bg: "bg.body",
      },
    },
  },
});
