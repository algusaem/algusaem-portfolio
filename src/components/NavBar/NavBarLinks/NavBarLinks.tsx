import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import NavBarLink from "./NavBarLink/NavBarLink";

const linkNames = ["Inicio", "Proyectos", "Contacto"];
const linkNamesEng = ["About", "Projects", "Contact"];

const NavBarLinks = () => {
  return (
    <Box>
      <Flex>
        {linkNames.map((name, index) => (
          <NavBarLink name={name} key={index} />
        ))}
      </Flex>
    </Box>
  );
};

export default NavBarLinks;
