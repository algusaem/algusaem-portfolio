import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { employeeManagerImages } from "../projectImagesRoutes";

const EmployeeManagerApp = () => {
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        Task Manager
      </Heading>
      <br />
      <ImageGallery routes={employeeManagerImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        Aplicación de gestión de empleados que permite crear, guardar borrar y
        editar usuarios que a su vez tienen roles.
      </Text>
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        Se apoya en una API desarrollada en Java (Spring Boot) y en una Base de
        Datos MySQL
      </Text>
      <Flex w={"100%"} gap={1} my={4} flexWrap={"wrap"} justify={"center"}>
        <UsedTech>HTML</UsedTech>
        <UsedTech>CSS</UsedTech>
        <UsedTech>TypeScript</UsedTech>
        <UsedTech>Bootstrap</UsedTech>
        <UsedTech>Java Spring Boot</UsedTech>
        <UsedTech>MySQL.</UsedTech>
      </Flex>
      <Flex w={"100%"} justify="center" flexWrap={"wrap"} gap={2}>
        <GoToWeb src={"https://algusaem.github.io/employeemanagerapp/"}>
          Web
        </GoToWeb>
        <MoreInfo src={"https://github.com/algusaem/employeemanagerapp"}>
          Github (Frontend)
        </MoreInfo>
        <MoreInfo
          src={"https://github.com/algusaem/employeemanager-springboot-api"}
        >
          Github (Backend)
        </MoreInfo>
      </Flex>
    </Box>
  );
};

export default EmployeeManagerApp;
