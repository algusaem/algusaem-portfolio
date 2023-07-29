import React from "react";
import { Box } from "@chakra-ui/react";
import GestiomaProjectList from "./WorkProjects/GestiomaProjectList";

const MyWork = () => {
  return (
    <Box w={"100%"} p={4}>
      <GestiomaProjectList />
    </Box>
  );
};

export default MyWork;
