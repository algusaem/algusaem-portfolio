import React, { useState, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Box, Flex, Button, useColorModeValue, Stack } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import NavBarLinks from "./NavBarLinks/NavBarLinks";
import { checkLanguage } from "@/utils/checkLanguage";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [lang, setLang] = useState(checkLanguage() || "es");

  useEffect(() => {
    setLang(checkLanguage() || "es");
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.800")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>AG</Box>
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
      </Box>
      <hr></hr>
    </>
  );
};
