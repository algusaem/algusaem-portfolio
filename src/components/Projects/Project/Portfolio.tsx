import { Heading, Flex, Text, Box, Highlight } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { portfolioImages } from "../projectImagesRoutes";
import Link from "next/link";

const Portfolio = () => {
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        Portfolio
      </Heading>
      <br />
      <ImageGallery routes={portfolioImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        Portfolio de Alex Gutierrez (ésta web). Rework de{" "}
        <Link
          href={"https://github.com/algusaem/algusaem.github.io"}
          target="_blank"
        >
          <Text
            as={"span"}
            fontWeight={"bold"}
            color={"#805AD5"}
            _hover={{ color: "#6133C9" }}
          >
            ésta
          </Text>
        </Link>{" "}
        versión anterior, la cual es una SPA desactualizada.
      </Text>
      <br />
      <Text lineHeight={1.5}>
        El objetivo ha sido crear una versión más sobria, elegante, sencilla y
        minimalista. Más responsiva y con mayor accesibilidad (modo oscuro o
        claro por ejemplo).
      </Text>

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
