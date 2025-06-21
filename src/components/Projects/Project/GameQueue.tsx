import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { GoToWeb, MoreInfo, UsedTech } from "../Projects";
import ImageGallery from "./ImageGallery/ImageGallery";
import { gameQueueImages } from "../projectImagesRoutes";

const GameQueue = () => {
  const { t } = useTranslation();
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        GameQueue
      </Heading>
      <br />
      <ImageGallery routes={gameQueueImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        {t("projects.items.gameQueue.p1")}
      </Text>
      <br />
      <Text lineHeight={1.5}>{t("projects.items.gameQueue.p2")}</Text>

      <Flex w={"100%"} gap={1} my={4} flexWrap={"wrap"} justify={"center"}>
        <UsedTech>HTML</UsedTech>
        <UsedTech>CSS</UsedTech>
        <UsedTech>TypeScript</UsedTech>
        <UsedTech>Next</UsedTech>
        <UsedTech>React</UsedTech>
        <UsedTech>Tailwind</UsedTech>
        <UsedTech>Shadcn</UsedTech>
        <UsedTech>Tanstack Query</UsedTech>
      </Flex>
      <Flex w={"100%"} flexWrap={"wrap"} gap={2} justify={"center"}>
        <GoToWeb src={"https://game-queue.vercel.app/"}>Web</GoToWeb>
        <MoreInfo src={"https://github.com/algusaem/GameQueue"}>
          Github
        </MoreInfo>
      </Flex>
    </Box>
  );
};

export default GameQueue;
