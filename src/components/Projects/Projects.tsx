import React from "react";
import useFadeIn from "../Hooks/useFadeIn";
import LandingPageHeading from "../LandingPage/LandingPageHeading/LandingPageHeading";
import { Flex, Text, Button, Box, Icon } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import TaskManager from "./Project/TaskManager";
import Portfolio from "./Project/Portfolio";
import VideogameDB from "./Project/VideogameDB";
import EmployeeManagerApp from "./Project/EmployeeManagerApp";
import PkmnWeight from "./Project/PkmnWeight";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const FadeIn = useFadeIn();
  const { t } = useTranslation();

  return (
    <FadeIn>
      <LandingPageHeading>{t("projects.heading")}</LandingPageHeading>
      <Flex
        w={"100%"}
        gap={2}
        p={4}
        alignItems="center"
        justifyItems="center"
        flexFlow={"column"}
      >
        <Flex flexFlow={"column"} w={"100%"} px={4}>
          <TaskManager />
          <Portfolio />
          <VideogameDB />
          <EmployeeManagerApp />
          <PkmnWeight />
        </Flex>
      </Flex>
    </FadeIn>
  );
};

export default Contact;

export const UsedTech = ({ children }: { children: string }) => (
  <Box
    w={"fit-content"}
    bg={"#5AD580"}
    p={2}
    borderRadius={"sm"}
    color={"white"}
  >
    <Text>{children}</Text>
  </Box>
);

export const MoreInfo = ({
  children,
  src,
}: {
  children: string;
  src: string;
}) => (
  <Box maxW={"100%"}>
    <Button
      color={"white"}
      bg={"#805AD5"}
      _hover={{ bg: "#6133C9" }}
      w={"max-content"}
      maxWidth="100%"
      onClick={() => {
        window.open(src, "_blank");
      }}
    >
      <Icon as={AiFillGithub} mr={1} />
      <Text fontSize={["xs", "md"]} isTruncated>
        {children}
      </Text>
    </Button>
  </Box>
);

export const GoToWeb = ({
  children,
  src,
}: {
  children: string;
  src: string;
}) => (
  <Box maxW={"100%"}>
    <Button
      color={"white"}
      bg={"#805AD5"}
      _hover={{ bg: "#6133C9" }}
      w={"max-content"}
      maxWidth="100%"
      onClick={() => {
        window.open(src, "_blank");
      }}
    >
      <Icon as={AiOutlineGlobal} mr={1} />
      <Text fontSize={["xs", "md"]} isTruncated>
        {children}
      </Text>
    </Button>
  </Box>
);
