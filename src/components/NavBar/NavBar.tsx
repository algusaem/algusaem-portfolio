// NavBar.tsx
import React, { useContext } from "react";
import {
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { Box, Flex, Button, Stack, Text } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import NavBarLinks from "./NavBarLinks/NavBarLinks";
import { LangContext } from "@/app/providers";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBarDrawer from "./NavBarDrawer/NavBarDrawer";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const boxBg = useColorModeValue("white", "gray.800");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan580] = useMediaQuery("(min-width: 580px)");
  const displayName = isLargerThan580 ? "Alex Gutierrez" : "AG";

  const context = useContext(LangContext);
  if (!context) {
    return null;
  }
  const { lang, setLang } = context;
  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es");
    localStorage.setItem("lang", lang === "es" ? "en" : "es");
  };

  return (
    <Box bg={boxBg} px={4} position="sticky" top={0} zIndex={1}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {isLargerThan580 ? (
          <>
            <Text fontWeight={"bold"}>{displayName}</Text>
            <NavBarLinks />
          </>
        ) : (
          <>
            <Button onClick={onOpen} aria-label="Navigation Menu">
              <Icon as={GiHamburgerMenu} />
            </Button>
            <Text fontWeight={"bold"}>{displayName}</Text>
            <NavBarDrawer isOpen={isOpen} onClose={onClose} />
          </>
        )}

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

export default NavBar;
