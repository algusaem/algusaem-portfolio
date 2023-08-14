import { Heading, Flex, Text, Box, Highlight } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { pkmnWeightImages } from "../projectImagesRoutes";
import Link from "next/link";

const PkmnWeight = () => {
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        ¿Cuánto pesa tu Pokémon?
      </Heading>
      <br />
      <ImageGallery routes={pkmnWeightImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        Desarrollada con la intención de proveer una herramienta sencilla y
        directa para determinar el peso de cualquier Pokémon de forma dinámica.
      </Text>
      <br />
      <Text lineHeight={1.5}>
        Además se actualiza de forma automática con los nuevos Pokémon que van
        saliendo con cada nueva entrega. Se apoya en la API de{" "}
        <Link href={"https://pokeapi.co/"} target="_blank">
          <Text
            as={"span"}
            fontWeight={"bold"}
            color={"#805AD5"}
            _hover={{ color: "#6133C9" }}
          >
            PokeAPI
          </Text>
        </Link>{" "}
        para actualizar los datos.
      </Text>

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
