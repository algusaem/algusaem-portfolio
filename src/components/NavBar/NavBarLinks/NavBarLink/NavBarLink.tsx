import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { NavBarLinkProps } from "@/interfaces/Nav/Nav";

const NavBarLink: React.FC<NavBarLinkProps> = ({ displayName, routeName }) => {
  return (
    <Box as={Link} href={`/${routeName}`} passHref borderRadius="md">
      <Text
        m={2}
        fontSize="medium"
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "2px",
          width: "100%",
          backgroundColor: "#5ad580",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.2s ease-in-out",
        }}
        _hover={{
          _after: {
            transform: "scaleX(1)",
          },
        }}
      >
        {displayName}
      </Text>
    </Box>
  );
};

export default NavBarLink;
