import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import { GoToWeb, UsedTech } from "../Projects";
import { MoreInfo } from "../Projects";
import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { employeeManagerImages } from "../projectImagesRoutes";
import { useTranslation } from "react-i18next";

const EmployeeManagerApp = () => {
  const { t } = useTranslation();
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        {t("projects.items.employeeManager.title")}
      </Heading>
      <br />
      <ImageGallery routes={employeeManagerImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        {t("projects.items.employeeManager.p1")}
      </Text>
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        {t("projects.items.employeeManager.p2")}
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
          Github (Front End)
        </MoreInfo>
        <MoreInfo
          src={"https://github.com/algusaem/employeemanager-springboot-api"}
        >
          Github (Back End)
        </MoreInfo>
      </Flex>
    </Box>
  );
};

export default EmployeeManagerApp;
