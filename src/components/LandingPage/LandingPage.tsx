import React from "react";
import { Text, Box, useColorModeValue, Flex, Heading } from "@chakra-ui/react";
import MyStudiesList from "./MyStudiesList/MyStudiesList";
import AboutMe from "../AboutMe/AboutMe";
import LandingPageHeading from "./LandingPageHeading/LandingPageHeading";
import MyTechnologies from "./MyTechnologies/MyTechnologies";

const LandingPage = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"auto"}
      pb={8}
    >
      <Box width={"100%"} height={"100%"}>
        <Heading
          color={useColorModeValue("black", "white")}
          size={"lg"}
          p={4}
          py={8}
          fontWeight={"bold"}
          as={"h1"}
        >
          ¡Hola! Soy Alex Gutierrez, Desarrollador Web Frontend.
        </Heading>

        <LandingPageHeading>Sobre Mí</LandingPageHeading>
        <AboutMe />

        <LandingPageHeading>Mis Estudios</LandingPageHeading>
        <MyStudiesList />

        <LandingPageHeading>Mis Tecnologías</LandingPageHeading>
        <MyTechnologies />

        <LandingPageHeading>Mi Trabajo</LandingPageHeading>
        <Text
          color={useColorModeValue("black", "white")}
          size={"sm"}
          px={4}
          pt={1}
          lineHeight={2}
          align={"justify"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          accusamus deserunt nisi nam voluptas, molestiae at ea aspernatur
          dignissimos sunt quia nihil maiores voluptatem nostrum dolore, aliquam
          recusandae quasi dolorum.
        </Text>
      </Box>
    </Flex>
  );
};

export default LandingPage;
