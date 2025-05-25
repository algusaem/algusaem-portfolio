import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import NavBarLink from "./NavBarLink/NavBarLink";
import { linkMap } from "./LinkMaps/linkMap";
import { NavBarLinksProps } from "@/interfaces/Nav/Nav";
import useLang from "@/components/Hooks/useLang";

const linkNamesES: string[] = ["Inicio", "Proyectos"];
const linkNamesEN: string[] = ["About Me", "Projects"];

const NavBarLinks: React.FC<NavBarLinksProps> = ({ direction = "row" }) => {
  const { lang } = useLang();
  const linkNames = lang === "es" ? linkNamesES : linkNamesEN;

  return (
    <Box>
      <Flex direction={direction} wrap="nowrap">
        {linkNames.map((name) => (
          <NavBarLink displayName={name} routeName={linkMap[name]} key={name} />
        ))}
      </Flex>
    </Box>
  );
};

export default NavBarLinks;
