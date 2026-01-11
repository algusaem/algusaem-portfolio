import React from "react";
import { useColorModeValue, Text, Icon, Flex } from "@chakra-ui/react";
import { technologiesList } from "./technologyList";
import { TechnologyComponentProps } from "@/interfaces/Technologies/Technologies";

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
  const noIconTechnologies = [
    "Emotion",
    "Zustand",
    "Xeokit",
    "GeoJSON",
    "Neon",
    "ShadCN",
    "Mantine UI",
  ];
  const shouldShowIcon = !noIconTechnologies.includes(technology.name);

  return (
    <Flex
      sx={{ userSelect: "none" }}
      w={"auto"}
      h={"auto"}
      align="center"
      m={1}
      px={2}
      py={1}
      border={"1px solid"}
      borderColor={useColorModeValue("black", "white")}
      borderRadius={"5px"}
      cursor={"pointer"}
      _hover={{ bg: "brand.primary", color: "white" }}
      transition={"0.2s"}
      onClick={() => {
        window.open(technology.link, "_blank");
      }}
    >
      {shouldShowIcon && <Icon as={technology.icon} boxSize={"5"} />}
      <Text mx={1} fontSize="xs">{children}</Text>
    </Flex>
  );
};
