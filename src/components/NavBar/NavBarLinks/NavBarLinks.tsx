import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import NavBarLink from "./NavBarLink/NavBarLink";
import { linkMap } from "./LinkMaps/linkMap";
import { NavBarLinksProps } from "@/interfaces/Nav/Nav";

const linkNamesES: string[] = ["Inicio", "Proyectos", "Contacto"];
const linkNamesEN: string[] = ["About", "Projects", "Contact"];

const NavBarLinks: React.FC<NavBarLinksProps> = ({ direction = "row" }) => {
  return (
    <Box>
      <Flex direction={direction} wrap="nowrap">
        {linkNamesES.map((name) => (
          <NavBarLink displayName={name} routeName={linkMap[name]} key={name} />
        ))}
      </Flex>
    </Box>
  );
};

export default NavBarLinks;
