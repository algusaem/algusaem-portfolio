import {
  List,
  ListItem,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

const MyStudiesList = () => {
  const { t } = useTranslation();

  return (
    <List px={4} pt={1}>
      <MyStudiesListItem>
        {t("about.myEducation.title1")}
        <MyStudiesYear>2023</MyStudiesYear>
      </MyStudiesListItem>

      <MyStudiesListItem>
        {t("about.myEducation.title2")}
        <MyStudiesYear>2019</MyStudiesYear>
      </MyStudiesListItem>

      <MyStudiesListItem>
        {t("about.myEducation.title3")}
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
