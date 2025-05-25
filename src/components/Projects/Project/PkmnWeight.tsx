import { Heading, Flex, Text, Box, Highlight } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { pkmnWeightImages } from "../projectImagesRoutes";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const PkmnWeight = () => {
  const { t } = useTranslation();
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        {t("projects.items.pkmnWeight.title")}
      </Heading>
      <br />
      <ImageGallery routes={pkmnWeightImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        {t("projects.items.pkmnWeight.p1")}
      </Text>
      <br />
      <Text lineHeight={1.5}>{t("projects.items.pkmnWeight.p2")}</Text>

      <Flex w={"100%"} gap={1} my={4} flexWrap={"wrap"} justify={"center"}>
        <UsedTech>HTML</UsedTech>
        <UsedTech>CSS</UsedTech>
        <UsedTech>JavaScript</UsedTech>
      </Flex>
      <Flex w={"100%"} justifyContent="center" flexWrap={"wrap"} gap={2}>
        <GoToWeb src={"https://algusaem.github.io/peso-pkmn-webapp/"}>
          Web
        </GoToWeb>
        <MoreInfo src={"https://github.com/algusaem/peso-pkmn-webapp/"}>
          Github
        </MoreInfo>
      </Flex>
    </Box>
  );
};

export default PkmnWeight;
