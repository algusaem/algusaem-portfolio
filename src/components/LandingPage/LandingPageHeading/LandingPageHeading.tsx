import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const LandingPageHeading: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <Box px={4} pt={4} mb={2}>
      <Heading
        borderBottom={"4px solid #b80000"}
        w={"fit-content"}
        size={"md"}
        as={"h2"}
      >
        {children}
      </Heading>
    </Box>
  );
};

export default LandingPageHeading;
