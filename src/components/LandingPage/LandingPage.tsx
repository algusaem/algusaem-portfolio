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
import { useTranslation } from "react-i18next";

const MotionFlex = motion(Flex);

const LandingPage = () => {
  const FadeIn = useFadeIn();
  const { t } = useTranslation();

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

          <LandingPageHeading>{t("about.headings.aboutMe")}</LandingPageHeading>
          <AboutMe />

          <LandingPageHeading>
            {t("about.headings.myStudies")}
          </LandingPageHeading>
          <MyStudiesList />

          <LandingPageHeading>
            {t("about.headings.myTechnologies")}
          </LandingPageHeading>
          <MyTechnologies />

          <LandingPageHeading>{t("about.headings.myWork")}</LandingPageHeading>
          <MyWork />

          <LandingPageHeading>
            {t("about.headings.mySocials")}
          </LandingPageHeading>
          <MyContact />
        </Box>
      </FadeIn>
    </MotionFlex>
  );
};

export default LandingPage;
