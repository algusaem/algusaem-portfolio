import React from "react";
import { Text, Box, useColorModeValue, Flex, Heading } from "@chakra-ui/react";
import MyStudiesList from "./MyStudiesList/MyStudiesList";
import AboutMe from "./AboutMe/AboutMe";
import LandingPageHeading from "./LandingPageHeading/LandingPageHeading";
import MyTechnologies from "./MyTechnologies/MyTechnologies";
import MyWork from "./MyWork/MyWork";

const LandingPage = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      h={"auto"}
      pb={8}
    >
      <Box w={"100%"} h={"100%"}>
        <Heading
          color={useColorModeValue("black", "white")}
          size={"lg"}
          mt={4}
          py={8}
          fontWeight={"bold"}
          as={"h1"}
          textAlign={"center"}
          borderRadius={"5px"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          ¡Hola! Soy Alex Gutierrez Desarrollador Web Frontend
        </Heading>

        <LandingPageHeading>Sobre Mí</LandingPageHeading>
        <AboutMe />

        <LandingPageHeading>Mis Estudios</LandingPageHeading>
        <MyStudiesList />

        <LandingPageHeading>Mis Tecnologías</LandingPageHeading>
        <MyTechnologies />

        <LandingPageHeading>Mi Trabajo</LandingPageHeading>
        <MyWork />
      </Box>
    </Flex>
  );
};

export default LandingPage;
