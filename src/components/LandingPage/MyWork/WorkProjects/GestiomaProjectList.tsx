import {
  Text,
  Flex,
  List,
  ListItem,
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const GestiomaProjectList = () => {
  return (
    <Flex w={"100%"} align={"center"} justify={"center"}>
      <Box w={"90%"}>
        <Text
          as={"h2"}
          color={useColorModeValue("black", "white")}
          fontSize={"2xl"}
          px={4}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          GESTIOMA
        </Text>
        <Text
          color={useColorModeValue("black", "white")}
          fontSize={"md"}
          px={4}
          mt={4}
          lineHeight={1.5}
          align={"justify"}
        >
          Desarrollo Web Full Stack de diferentes herramientas relacionadas con
          ingeniería civil, modelado 3D y modelos BIM.
        </Text>
        <GestiomaProjectsTitle>Proyectos</GestiomaProjectsTitle>
        <ProjectWeb />
        <ProjectVisor />
        <ProjectManager />
      </Box>
    </Flex>
  );
};

const ProjectWeb = () => {
  return (
    <Flex
      w={"100%"}
      border={"1px solid"}
      borderRadius={"3px"}
      p={4}
      justify={"center"}
      align={"center"}
      flexFlow={"column"}
    >
      <GestiomaProjectTitleContainer>
        Página Web Principal de GESTIOMA
      </GestiomaProjectTitleContainer>

      <Text>Imagen</Text>
      <Text>Tecnologías</Text>

      <List>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>MaterialUI</ListItem>
        <ListItem>Styled-Components</ListItem>
      </List>
    </Flex>
  );
};

const ProjectVisor = () => {
  return (
    <Flex
      w={"100%"}
      border={"1px solid"}
      borderRadius={"3px"}
      p={4}
      justify={"center"}
      align={"center"}
      flexFlow={"column"}
      my={4}
    >
      <GestiomaProjectTitleContainer>
        GOLID Viewer
      </GestiomaProjectTitleContainer>
      <Text>Visor de Modelos 3D</Text>

      <Text>Imagen</Text>
      <Text>Tecnologías</Text>

      <List>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>React</ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </List>
    </Flex>
  );
};

const ProjectManager = () => {
  return (
    <Flex
      w={"100%"}
      border={"1px solid"}
      borderRadius={"3px"}
      p={4}
      justify={"center"}
      align={"center"}
      flexFlow={"column"}
      my={4}
    >
      <GestiomaProjectTitleContainer>
        GOLID Manager
      </GestiomaProjectTitleContainer>
      <Text>Manager de Modelos 3D</Text>

      <Text>Imagen</Text>
      <Text>Tecnologías</Text>

      <List>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>React</ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </List>
    </Flex>
  );
};

const GestiomaProjectsTitle = ({ children }: { children: string }) => {
  return (
    <Flex p={4} width={"100%"} align={"center"} justify={"center"}>
      <Heading
        borderBottom={"4px solid #b80000"}
        w={"fit-content"}
        size={"md"}
        as={"h2"}
      >
        {children}
      </Heading>
    </Flex>
  );
};

const GestiomaProjectTitleContainer = ({ children }: { children: string }) => {
  return (
    <Flex
      p={4}
      mb={1}
      width={"100%"}
      align={"center"}
      justify={"center"}
      borderRadius={"5px"}
      bg={useColorModeValue("gray.100", "gray.700")}
    >
      <Heading w={"fit-content"} size={"md"} as={"h2"}>
        {children}
      </Heading>
    </Flex>
  );
};

export default GestiomaProjectList;
