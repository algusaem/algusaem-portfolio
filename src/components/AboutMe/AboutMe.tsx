import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <>
      <Paragraph>
        Soy un Desarrollador Web residente en el País Vasco. Me considero una
        persona resolutiva, muy motivada, amante de las nuevas tecnologías y en
        constante evolución y aprendizaje.
      </Paragraph>

      <Paragraph>
        Me apasiona la programación, disfruto de nuevos retos y me preocupa
        mucho el correcto desarrollo, clean code y las buenas prácticas en mis
        proyectos.
      </Paragraph>

      <Paragraph>
        A pesar de residir en el País Vasco, estoy abierto a trabajar en
        cualquier lugar del planeta. ¡Domino el Inglés y estaría encantado de
        practicarlo!
      </Paragraph>
    </>
  );
};

export default AboutMe;

const Paragraph: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Text
      color={useColorModeValue("black", "white")}
      size={"sm"}
      px={4}
      lineHeight={2}
      align={"justify"}
    >
      {children}
    </Text>
  );
};
