import React, { useContext } from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Box, Flex, Button, Stack, Text, Icon } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import NavBarLinks from "./NavBarLinks/NavBarLinks";
import { LangContext } from "@/app/providers";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const boxBg = useColorModeValue("white", "gray.800");
  const context = useContext(LangContext);

  if (!context) {
    return null;
  }

  const { lang, setLang } = context;

  const toggleLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  return (
    <Box bg={boxBg} px={4} position="sticky" top={0} zIndex={1}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontWeight={"bold"}>Alex Gutierrez</Text>
        <NavBarLinks />
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={2}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button onClick={toggleLanguage}>
              {lang === "es" ? "ES" : "EN"}
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <hr />
    </Box>
  );
};
