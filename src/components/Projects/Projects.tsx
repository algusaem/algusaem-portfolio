import React from "react";
import useFadeIn from "../Hooks/useFadeIn";
import LandingPageHeading from "../LandingPage/LandingPageHeading/LandingPageHeading";
import { Flex, GridItem, SimpleGrid } from "@chakra-ui/react";

const Contact = () => {
  const FadeIn = useFadeIn();

  return (
    <FadeIn>
      <LandingPageHeading>Mis Proyectos</LandingPageHeading>
      <SimpleGrid
        w={"100%"}
        columns={2}
        gap={2}
        p={4}
        alignItems="center"
        justifyItems="center"
      >
        <Item>Proyecto 1</Item>
        <Item>Proyecto 2</Item>
        <Item>Proyecto 3</Item>
        <Item>Proyecto 4</Item>
      </SimpleGrid>
    </FadeIn>
  );
};

export default Contact;

const Item = ({ children }: { children: string }) => {
  return (
    <GridItem p={4} bg={"gray"} w={"100%"}>
      <Flex w={"100%"} justify={"center"}>
        {children}
      </Flex>
    </GridItem>
  );
};
