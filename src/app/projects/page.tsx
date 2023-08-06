"use client";
import Projects from "@/components/Projects/Projects";
import { NavBar } from "@/components/NavBar/NavBar";
import { Container, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");

  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      bg={bgColor}
      color={textColor}
      overflow={"hidden"}
      alignItems={"center"}
      justifyContent={"center"}
      overflowY={"scroll"}
    >
      <Container h={"100vh"}>
        <NavBar />

        <Projects />
      </Container>
    </Flex>
  );
}
