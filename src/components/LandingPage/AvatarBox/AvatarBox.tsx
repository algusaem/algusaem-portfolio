import {
  Flex,
  useColorModeValue,
  Text,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const AvatarBox = () => {
  const direction: "column" | "row" =
    useBreakpointValue({ base: "column", sm: "row" }) || "row";

  return (
    <Flex
      direction={direction}
      align="center"
      justifyContent="space-around"
      borderRadius={"5px"}
      p={4}
      m={4}
      mt={8}
      bg={useColorModeValue("gray.100", "gray.700")}
      gap={4}
    >
      <Flex
        direction="column"
        textAlign={direction === "column" ? "center" : "left"}
      >
        <Text fontSize="3xl" fontWeight="bold" lineHeight={1.5}>
          Alex Gutierrez
        </Text>
        <Text fontSize="large" lineHeight={1.5}>
          Desarrollador Web Frontend
        </Text>
      </Flex>
      <Avatar
        size="2xl"
        name="Alex Gutierrez"
        src="/fotoPerfil.png"
        border="2px solid gray"
        boxShadow="lg"
      />
    </Flex>
  );
};

export default AvatarBox;
