import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { NavBarLinkProps } from "@/interfaces/Nav/Nav";
import styled from "@emotion/styled";

const LinkBox = styled(Link)`
  display: block;
  border: solid 1px transparent;
  transition: 0.2s;
  user-select: none;
  border-radius: 4px;
  &:hover {
    background-color: #5ad580;
    cursor: pointer;
    border-color: #5ad580;
    color: white;
  }
`;

const NavBarLink: React.FC<NavBarLinkProps> = ({ displayName, routeName }) => {
  return (
    <LinkBox href={`/${routeName}`} passHref>
      <Text m={2} fontSize={"medium"}>
        {displayName}
      </Text>
    </LinkBox>
  );
};

export default NavBarLink;
