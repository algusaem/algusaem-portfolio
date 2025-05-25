import { Heading, Flex, Text, Box, Highlight } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { videogameBDImages } from "../projectImagesRoutes";
import { useTranslation } from "react-i18next";

const VideogameDB = () => {
  const { t } = useTranslation();
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        {t("projects.items.videogameDatabase.title")}
      </Heading>
      <br />
      <ImageGallery routes={videogameBDImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        {t("projects.items.videogameDatabase.p1")}
      </Text>
      <br />
      <Text lineHeight={1.5}>{t("projects.items.videogameDatabase.p2")}</Text>

      <Flex w={"100%"} gap={1} my={4} flexWrap={"wrap"} justify={"center"}>
        <UsedTech>HTML</UsedTech>
        <UsedTech>SCSS</UsedTech>
        <UsedTech>TypeScript</UsedTech>
        <UsedTech>Angular</UsedTech>
      </Flex>
      <Flex w={"100%"} flexWrap={"wrap"} gap={2} justify={"center"}>
        <GoToWeb src={"https://algusaem.github.io/bd-videojuegos/"}>
          Web
        </GoToWeb>
        <MoreInfo src={"https://github.com/algusaem/bd-videojuegos"}>
          Github
        </MoreInfo>
      </Flex>
    </Box>
  );
};

export default VideogameDB;
