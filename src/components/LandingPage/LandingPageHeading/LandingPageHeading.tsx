import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const LandingPageHeading: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <Box px={4} pt={3} mb={1}>
      <Heading
        borderBottom={"3px solid"} borderColor={"brand.secondary"}
        w={"fit-content"}
        size={"sm"}
        as={"h2"}
      >
        {children}
      </Heading>
    </Box>
  );
};

export default LandingPageHeading;
