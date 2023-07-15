import React from "react";
import { useColorModeValue, Text, Icon, Flex } from "@chakra-ui/react";
import { Technology, technologiesList } from "./technologyList";

interface TechnologyComponentProps {
  children: React.ReactNode;
  technology: Technology;
}

const MyTechnologies = () => {
  return (
    <Flex mx={"4"} flexWrap="wrap">
      {technologiesList.map((technology, index) => (
        <TechnologyComponent key={index} technology={technology}>
          {technology.name}
        </TechnologyComponent>
      ))}
    </Flex>
  );
};
export default MyTechnologies;

const TechnologyComponent: React.FC<TechnologyComponentProps> = ({
  children,
  technology,
}) => {
  return (
    <Flex
      width={"auto"}
      height={"auto"}
      align="center"
      m={2}
      p={0.5}
      border={"1px solid"}
      borderColor={useColorModeValue("black", "white")}
      borderRadius={"5px"}
      cursor={"pointer"}
      _hover={{ bg: "#b80000" }}
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
