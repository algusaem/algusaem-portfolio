import {
  List,
  ListItem,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const MyStudiesList = () => {
  return (
    <List px={4} pt={1}>
      <MyStudiesListItem>
        Desarrollo de Aplicaciones Web (Grado Superior)
        <MyStudiesYear>2023</MyStudiesYear>
      </MyStudiesListItem>

      <MyStudiesListItem>
        Asistencia a la Dirección (Grado Superior)
        <MyStudiesYear>2019</MyStudiesYear>
      </MyStudiesListItem>

      <MyStudiesListItem>
        Gestión Administrativa (Grado Medio)
        <MyStudiesYear>2017</MyStudiesYear>
      </MyStudiesListItem>
    </List>
  );
};

export default MyStudiesList;

const MyStudiesListItem: React.FC<{ children: React.ReactNode[] }> = ({
  children,
}) => {
  return (
    <ListItem
      color={useColorModeValue("black", "white")}
      pt={1}
      width={"100%"}
      mb={4}
    >
      <Flex justifyContent={"space-between"}>
        <Text size={"sm"}>{children[0]}</Text>
        {children[1]}
      </Flex>
    </ListItem>
  );
};

const MyStudiesYear: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Text size={"sm"} fontWeight={"bold"}>
      {children}
    </Text>
  );
};
