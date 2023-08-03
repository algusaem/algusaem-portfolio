import React from "react";
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <>
      <Paragraph>
        Soy un <ColoredText>Desarrollador Web</ColoredText> residente en el{" "}
        <ColoredText>País Vasco</ColoredText>. Me considero una persona{" "}
        <ColoredText>resolutiva</ColoredText>, muy{" "}
        <ColoredText>motivada</ColoredText>, amante de las{" "}
        <ColoredText>nuevas tecnologías</ColoredText> y en constante{" "}
        <ColoredText>evolución</ColoredText> y{" "}
        <ColoredText>aprendizaje</ColoredText>.
      </Paragraph>

      <Paragraph>
        Me apasiona la programación, disfruto de{" "}
        <ColoredText>nuevos retos</ColoredText> y me preocupa mucho el{" "}
        <ColoredText>correcto desarrollo</ColoredText>,{" "}
        <ColoredText>clean code</ColoredText> y las{" "}
        <ColoredText>buenas prácticas</ColoredText> en mis proyectos.
      </Paragraph>

      <Paragraph>
        A pesar de residir en el <ColoredText>País Vasco</ColoredText>, estoy
        abierto a trabajar en cualquier lugar del planeta. ¡Domino el{" "}
        <ColoredText>Inglés</ColoredText> y estaría encantado de practicarlo!
      </Paragraph>

      <Flex width={"100%"} align={"center"} justify={"center"} py={2}>
        <Button bg={"#805AD5"} _hover={{ bg: "#6245a1" }} color={"white"}>
          Mi Curriculum
        </Button>
      </Flex>
    </>
  );
};

export default AboutMe;

const Paragraph: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Text
      color={useColorModeValue("black", "white")}
      fontSize={"xl"}
      px={4}
      lineHeight={1.5}
      align={"justify"}
      mb={4}
    >
      {children}
    </Text>
  );
};

const ColoredText = ({ children }: { children: string }) => {
  return <span style={{ color: "#805AD5" }}>{children}</span>;
};
