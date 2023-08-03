import React from "react";
import { Text, Box, useColorModeValue, Flex, Avatar } from "@chakra-ui/react";
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
        <Flex
          align="center"
          justifyContent="space-between"
          borderRadius={"5px"}
          p={4}
          m={4}
          mt={8}
          bg={useColorModeValue("gray.100", "gray.700")}
          px={"10%"}
        >
          <Flex direction="column">
            <Text fontSize="3xl" fontWeight="bold" lineHeight={1.5}>
              Alex Gutierrez
            </Text>
            <Text fontSize="large" lineHeight={1.5}>
              Desarrollador Web Frontend
            </Text>
          </Flex>
          <Avatar size="xl" name="Alex Gutierrez" src="/fotoPerfil.png" />
        </Flex>

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
