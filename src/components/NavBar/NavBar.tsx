import React from "react";
import {
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
  useMediaQuery,
  Box,
  Flex,
  Button,
  Stack,
  BoxProps,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import NavBarLinks from "./NavBarLinks/NavBarLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBarDrawer from "./NavBarDrawer/NavBarDrawer";
import Link from "next/link";
import useLang from "../Hooks/useLang";

const bounce = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }
`;

const AnimatedText: React.FC<BoxProps> = (props) => (
  <Box
    as="span"
    _hover={{
      color: "#5ad580",
      animation: "bounce 1s",
    }}
    userSelect="none"
    css={bounce}
    {...props}
  />
);

export const NavBar = () => {
  const { lang, toggleLang } = useLang();
  const { colorMode, toggleColorMode } = useColorMode();
  const boxBg = useColorModeValue("white", "gray.800");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan580] = useMediaQuery("(min-width: 580px)");
  const displayName = isLargerThan580 ? "Alex Gutierrez" : "AG";

  return (
    <Box bg={boxBg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {isLargerThan580 ? (
          <>
            <AnimatedText fontWeight={"bold"}>
              <Link href={`/`} passHref>
                {displayName}
              </Link>
            </AnimatedText>
            <NavBarLinks />
          </>
        ) : (
          <>
            <Button onClick={onOpen} aria-label="Navigation Menu">
              <Icon as={GiHamburgerMenu} />
            </Button>
            <AnimatedText fontWeight={"bold"}>{displayName}</AnimatedText>
            <NavBarDrawer isOpen={isOpen} onClose={onClose} />
          </>
        )}

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={2}>
            <Button onClick={toggleLang}>{lang === "es" ? "ES" : "EN"}</Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <hr />
    </Box>
  );
};

export default NavBar;
