import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MyStudiesList from "./MyStudiesList/MyStudiesList";
import AboutMe from "./AboutMe/AboutMe";
import LandingPageHeading from "./LandingPageHeading/LandingPageHeading";
import MyTechnologies from "./MyTechnologies/MyTechnologies";
import MyWork from "./MyWork/MyWork";
import AvatarBox from "./AvatarBox/AvatarBox";
import useFadeIn from "../Hooks/useFadeIn";
import MyContact from "./MyContact/MyContact";

const MotionFlex = motion(Flex);

const LandingPage = () => {
  const FadeIn = useFadeIn();

  return (
    <MotionFlex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      h={"auto"}
      pb={8}
    >
      <FadeIn>
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

          <LandingPageHeading>Mis Redes</LandingPageHeading>
          <MyContact />
        </Box>
      </FadeIn>
    </MotionFlex>
  );
};

export default LandingPage;
