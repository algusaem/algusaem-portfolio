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
        Desarrollo de Aplicaciones Web
        <MyStudiesYear>2023</MyStudiesYear>
      </MyStudiesListItem>

      <MyStudiesListItem>
        Asistencia a la Dirección
        <MyStudiesYear>2019</MyStudiesYear>
      </MyStudiesListItem>

      <MyStudiesListItem>
        Gestión Administrativa
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
      w={"100%"}
      mb={4}
      fontSize={"xl"}
      lineHeight={1.5}
    >
      <Flex justifyContent={"space-between"}>
        <Text fontSize={"xl"}>{children[0]}</Text>
        {children[1]}
      </Flex>
    </ListItem>
  );
};

const MyStudiesYear: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Text fontSize={"xl"} fontWeight={"bold"} mx={1}>
      {children}
    </Text>
  );
};
