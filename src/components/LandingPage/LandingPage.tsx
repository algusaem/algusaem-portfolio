import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MyStudiesList from "./MyStudiesList/MyStudiesList";
import AboutMe from "./AboutMe/AboutMe";
import LandingPageHeading from "./LandingPageHeading/LandingPageHeading";
import MyTechnologies from "./MyTechnologies/MyTechnologies";
import MyWork from "./MyWork/MyWork";
import AvatarBox from "./AvatarBox/AvatarBox";

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
        <AvatarBox />

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
