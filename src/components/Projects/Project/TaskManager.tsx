import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { taskManagerImages } from "../projectImagesRoutes";
import { useTranslation } from "react-i18next";

const TaskManager = () => {
  const { t } = useTranslation();
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        Task Manager
      </Heading>
      <br />
      <ImageGallery routes={taskManagerImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        {t("projects.items.taskManager.p1")}
      </Text>
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        {t("projects.items.taskManager.p2")}
      </Text>
      <Flex w={"100%"} gap={1} my={4} flexWrap={"wrap"} justify={"center"}>
        <UsedTech>HTML</UsedTech>
        <UsedTech>CSS</UsedTech>
        <UsedTech>JavaScript</UsedTech>
        <UsedTech>React</UsedTech>
        <UsedTech>Redux</UsedTech>
        <UsedTech>Tailwind</UsedTech>
        <UsedTech>Tailwind Material</UsedTech>
        <UsedTech>Node</UsedTech>
        <UsedTech>MongoDB</UsedTech>
      </Flex>
      <Flex w={"100%"} justify="center" flexWrap={"wrap"} gap={2}>
        <GoToWeb src={"https://task-manager-mu-neon.vercel.app/"}>Web</GoToWeb>
        <MoreInfo src={"https://github.com/algusaem/task-manager"}>
          Github (Front End)
        </MoreInfo>
        <MoreInfo src={"https://github.com/algusaem/task-manager-api"}>
          Github (Back End)
        </MoreInfo>
      </Flex>
    </Box>
  );
};

export default TaskManager;
