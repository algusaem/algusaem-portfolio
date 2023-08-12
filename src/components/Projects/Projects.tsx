import React from "react";
import useFadeIn from "../Hooks/useFadeIn";
import LandingPageHeading from "../LandingPage/LandingPageHeading/LandingPageHeading";
import { Flex, Text, Button, Box, Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import Project from "./Project/Project";
import TaskManager from "./Project/TaskManager/TaskManager";

const Contact = () => {
  const FadeIn = useFadeIn();

  return (
    <FadeIn>
      <LandingPageHeading>Mis Proyectos</LandingPageHeading>
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
