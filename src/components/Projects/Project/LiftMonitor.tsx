import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { GoToWeb, MoreInfo, UsedTech } from "../Projects";
import ImageGallery from "./ImageGallery/ImageGallery";
import { liftMonitorImages } from "../projectImagesRoutes";

const LiftMonitor = () => {
  const { t } = useTranslation();
  return (
    <Box mb={8}>
      <Heading textAlign={"center"} textDecorationLine={"underline"}>
        Lift Monitor
      </Heading>
      <br />
      <ImageGallery routes={liftMonitorImages} />
      <br />
      <Text textAlign={"justify"} lineHeight={1.5}>
        {t("projects.items.liftMonitor.p1")}
      </Text>
      <br />
      <Text lineHeight={1.5}>{t("projects.items.liftMonitor.p2")}</Text>

      <Flex w={"100%"} gap={1} my={4} flexWrap={"wrap"} justify={"center"}>
        <UsedTech>HTML</UsedTech>
        <UsedTech>CSS</UsedTech>
        <UsedTech>JavaScript</UsedTech>
        <UsedTech>Next</UsedTech>
        <UsedTech>React</UsedTech>
        <UsedTech>Mantine</UsedTech>
        <UsedTech>PostCSS</UsedTech>
        <UsedTech>PostgreSQL</UsedTech>
      </Flex>
      <Flex w={"100%"} flexWrap={"wrap"} gap={2} justify={"center"}>
        <GoToWeb src={"https://lift-monitor.vercel.app/"}>Web</GoToWeb>
        <MoreInfo src={"https://github.com/algusaem/Lift-Monitor"}>
          Github
        </MoreInfo>
      </Flex>
    </Box>
  );
};

export default LiftMonitor;
