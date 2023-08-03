import React from "react";
import { useColorModeValue, Text, Icon, Flex } from "@chakra-ui/react";
import { Technology, technologiesList } from "./technologyList";

interface TechnologyComponentProps {
  children: React.ReactNode;
  technology: Technology;
}

const MyTechnologies = () => {
  return (
    <Flex mx={"4"} flexWrap="wrap" py={2}>
      {technologiesList.map((technology, index) => (
        <TechnologyComponent key={index} technology={technology}>
          {technology.name}
        </TechnologyComponent>
      ))}
    </Flex>
  );
};
export default MyTechnologies;

export const TechnologyComponent: React.FC<TechnologyComponentProps> = ({
  children,
  technology,
}) => {
  return (
    <Flex
      sx={{ userSelect: "none" }}
      w={"auto"}
      h={"auto"}
      align="center"
      m={2}
      p={2}
      border={"1px solid"}
      borderColor={useColorModeValue("black", "white")}
      borderRadius={"5px"}
      cursor={"pointer"}
      _hover={{ bg: "#b80000", color: "white" }}
      transition={"0.2s"}
      onClick={() => {
        window.open(technology.link, "_blank");
      }}
    >
      {technology.name !== "Emotion" && technology.name !== "Zustand" && (
        <Icon as={technology.icon} boxSize={"8"} />
      )}
      <Text mx={2}>{children}</Text>
    </Flex>
  );
};
