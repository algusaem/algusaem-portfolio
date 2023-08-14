import { Heading, Flex, Text, Box, Highlight } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { videogameBDImages } from "../projectImagesRoutes";
import Link from "next/link";

const VideogameDB = () => {
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        Base de Datos de Videojuegos
      </Heading>
      <br />
      <ImageGallery routes={videogameBDImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        Plataforma de información relacionada con todo tipo de videojuegos.
      </Text>
      <br />
      <Text lineHeight={1.5}>
        Utiliza la API de{" "}
        <Link href={"https://rawg.io/"} target="_blank">
          <Text
            as={"span"}
            fontWeight={"bold"}
            color={"#805AD5"}
            _hover={{ color: "#6133C9" }}
          >
            rawg.io
          </Text>
        </Link>{" "}
        para obtener toda la información. Además la web contiene notas de
        metacritic.
      </Text>

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
