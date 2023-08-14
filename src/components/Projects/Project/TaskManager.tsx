import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { taskManagerImages } from "../projectImagesRoutes";

const TaskManager = () => {
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        Task Manager
      </Heading>
      <br />
      <ImageGallery routes={taskManagerImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        Aplicación que permite crear, guardar y borrar tareas, además de
        organizarlas en listas, que a su vez pueden crearse, guardarse y/o
        borrarse.
      </Text>
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        La aplicación incluye un sistema de login simple y totalmente funcional.
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
          Github (Frontend)
        </MoreInfo>
        <MoreInfo src={"https://github.com/algusaem/task-manager-api"}>
          Github (Backend)
        </MoreInfo>
      </Flex>
    </Box>
  );
};

export default TaskManager;
