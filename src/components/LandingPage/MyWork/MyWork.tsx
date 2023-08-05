import React from "react";
import { Box, Text, Flex, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const MyWork = () => {
  const handleLogoClick = () => {
    window.open("https://gestioma.com/", "_blank");
  };

  return (
    <Flex
      w={"100%"}
      p={4}
      flexFlow={"column"}
      align={"center"}
      justify={"center"}
    >
      <Flex width={"100%"} justify={"center"} align={"center"} p={4}>
        <Box
          as={motion.div}
          borderRadius="3xl"
          border={"1px solid gray"}
          overflow="hidden"
          cursor={"pointer"}
          onClick={handleLogoClick}
          whileHover={{ scale: 1.2 }}
        >
          <Image
            src={"/gestiomaLogo.jpg"}
            alt="Logo GESTIOMA"
            width={150}
            height={150}
          />
        </Box>
      </Flex>

      <Text
        fontSize="lg"
        fontWeight="bold"
        textDecor={"underline"}
        lineHeight={1.5}
      >
        Desarrollador Web
      </Text>
      <Text fontSize="md">Diciembre 2022 - Actualidad</Text>

      <Flex width={"100%"} align={"center"} justify={"center"} p={4}>
        <Box width={"90%"}>
          <Text fontSize="md" color="gray.500" textAlign={"justify"}>
            Desarrollo Web Full Stack de Aplicaciones basadas en React
            relacionadas con Ingeniería Civil, Modelado 3D y Modelos BIM.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default MyWork;
