import { Heading, Flex, Text, Box, Highlight } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { portfolioImages } from "../projectImagesRoutes";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        Portfolio
      </Heading>
      <br />
      <ImageGallery routes={portfolioImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        {t("projects.items.portfolio.p1")}
      </Text>
      <br />
      <Text lineHeight={1.5}>{t("projects.items.portfolio.p2")}</Text>

      <Flex w={"100%"} gap={1} my={4} flexWrap={"wrap"} justify={"center"}>
        <UsedTech>HTML</UsedTech>
        <UsedTech>CSS</UsedTech>
        <UsedTech>TypeScript</UsedTech>
        <UsedTech>Next</UsedTech>
        <UsedTech>React</UsedTech>
        <UsedTech>ChakraUI</UsedTech>
        <UsedTech>Emotion</UsedTech>
      </Flex>
      <Flex w={"100%"} justifyContent="center" flexWrap={"wrap"} gap={2}>
        <GoToWeb src={"https://algusaem-portfolio.vercel.app/"}>Web</GoToWeb>
        <MoreInfo src={"https://github.com/algusaem/algusaem-portfolio"}>
          Github
        </MoreInfo>
      </Flex>
    </Box>
  );
};

export default Portfolio;
