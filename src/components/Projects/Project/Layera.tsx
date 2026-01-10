import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { layeraImages } from "../projectImagesRoutes";
import { useTranslation } from "react-i18next";

const Layera = () => {
  const { t } = useTranslation();
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        {t("projects.items.layera.title")}
      </Heading>
      <br />
      <ImageGallery routes={layeraImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        {t("projects.items.layera.p1")}
      </Text>
      <br />
      <Text lineHeight={1.5}>{t("projects.items.layera.p2")}</Text>

      <Flex w={"100%"} gap={1} my={4} flexWrap={"wrap"} justify={"center"}>
        <UsedTech>Google Generative AI</UsedTech>
        <UsedTech>Next</UsedTech>
        <UsedTech>React</UsedTech>
        <UsedTech>TypeScript</UsedTech>
        <UsedTech>Tailwind</UsedTech>
        <UsedTech>DaisyUI</UsedTech>
        <UsedTech>Clsx</UsedTech>
        <UsedTech>React Hook Form</UsedTech>
        <UsedTech>NextAuth</UsedTech>
        <UsedTech>Sonner</UsedTech>
        <UsedTech>Lucide</UsedTech>
        <UsedTech>Prisma</UsedTech>
        <UsedTech>PostgreSQL</UsedTech>
        <UsedTech>Neon</UsedTech>
        <UsedTech>Cloudinary</UsedTech>
      </Flex>
      <Flex w={"100%"} justifyContent="center" flexWrap={"wrap"} gap={2}>
        <GoToWeb src={"https://layera-fragrances.vercel.app/"}>Web</GoToWeb>
        <MoreInfo src={"https://github.com/algusaem/layera"}>Github</MoreInfo>
      </Flex>
    </Box>
  );
};

export default Layera;
