import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { NavBarLinkProps } from "@/interfaces/Nav/Nav";

const navbarLinksHover = () => {
  return {
    _hover: {
      backgroundColor: "#b80000",
      cursor: "pointer",
      borderColor: "#b80000",
      color: "white",
    },
  };
};

const NavBarLink: React.FC<NavBarLinkProps> = ({ name }) => {
  const hrefTo = name.toLowerCase();

  return (
    <Box
      border="solid 1px transparent"
      borderRadius="4px"
      transition={"0.2s"}
      {...navbarLinksHover()}
    >
      <Link href={hrefTo}>
        <Text m={2} fontSize={"medium"}>
          {name}
        </Text>
      </Link>
    </Box>
  );
};

export default NavBarLink;
