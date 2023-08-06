import React, { useContext, useState, useEffect } from "react";
import {
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import {
  Box,
  Flex,
  Button,
  Stack,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import NavBarLinks from "./NavBarLinks/NavBarLinks";
import { LangContext } from "@/app/providers";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const boxBg = useColorModeValue("white", "gray.800");
  const context = useContext(LangContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 580);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 580);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayName = isMobile ? "AG" : "Alex Gutierrez";

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
        {isMobile ? (
          <>
            <Button onClick={onOpen} aria-label="Navigation Menu">
              <Icon as={GiHamburgerMenu} />
            </Button>
            <Text fontWeight={"bold"}>{displayName}</Text>
            <Drawer isOpen={isOpen} onClose={onClose}>
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton
                    _hover={{ bg: "#5ad580", color: "white" }}
                  />
                  <DrawerHeader>Alex Gutierrez</DrawerHeader>
                  <DrawerBody>
                    <NavBarLinks direction="column" />
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
        ) : (
          <>
            <Text fontWeight={"bold"}>{displayName}</Text>
            <NavBarLinks />
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
