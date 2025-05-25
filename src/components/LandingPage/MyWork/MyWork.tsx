import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WorkItemProps } from "@/interfaces/Work/Work";

const MyWork = () => {
  const handleLogoGestiomaClick = () => {
    window.open("https://gestioma.com/", "_blank");
  };

  const handleLogoOrekaClick = () => {
    window.open("https://orekait.com/es/", "_blank");
  };

  return (
    <Flex
      w={"100%"}
      p={4}
      flexFlow={"column"}
      align={"center"}
      justify={"center"}
    >
      <MyWorkItem
        logo={"/orekaLogo.jpg"}
        alt="Logo OrekaIT"
        onClick={handleLogoOrekaClick}
        title="Desarrollador Web Fullstack"
        duration="Mayo 2025 - Actualidad"
        description="Desarrollo Web Fullstack y diseño de Aplicaciones multiplataforma vinculadas a sistemas SAP y soluciones de gestión empresarial."
      />

      <MyWorkItem
        logo={"/gestiomaLogo.jpg"}
        alt="Logo GESTIOMA"
        onClick={handleLogoGestiomaClick}
        title="Desarrollador Web Fullstack"
        duration="Diciembre 2022 - Mayo 2025"
        description="Desarrollo Web Fullstack de Aplicaciones basadas en React y Next relacionadas con Ingeniería Civil, Modelado 3D y Modelos BIM."
      />
    </Flex>
  );
};

export default MyWork;

const MyWorkItem = ({
  logo,
  alt,
  title,
  duration,
  description,
  onClick,
}: WorkItemProps) => (
  <>
    <Flex width={"100%"} justify={"center"} align={"center"} p={4}>
      <Box
        as={motion.div}
        borderRadius="3xl"
        border={"1px solid gray"}
        overflow="hidden"
        cursor={"pointer"}
        onClick={onClick}
        whileHover={{ scale: 1.2 }}
      >
        <Image src={logo} alt={alt} width={150} height={150} />
      </Box>
    </Flex>

    <Text
      fontSize="lg"
      fontWeight="bold"
      textDecor={"underline"}
      lineHeight={1.5}
    >
      {title}
    </Text>
    <Text fontSize="md">{duration}</Text>

    <Flex width={"100%"} align={"center"} justify={"center"} p={4}>
      <Box width={"90%"}>
        <Text
          fontSize="md"
          color="gray.500"
          textAlign={"justify"}
          lineHeight={1.2}
        >
          {description}
        </Text>
      </Box>
    </Flex>
  </>
);
