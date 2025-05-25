"use client";
import React from "react";
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation, Trans } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <Paragraph>
        <Trans i18nKey="about.aboutMe.p1" components={{ c: <ColoredText /> }} />
      </Paragraph>

      <Paragraph>
        <Trans i18nKey="about.aboutMe.p2" components={{ c: <ColoredText /> }} />
      </Paragraph>

      <Paragraph>
        <Trans i18nKey="about.aboutMe.p3" components={{ c: <ColoredText /> }} />
      </Paragraph>

      <Flex width="100%" align="center" justify="center" py={2}>
        <Link href="/CV_ESP.pdf" passHref>
          <Button bg="#805AD5" _hover={{ bg: "#6133C9" }} color="white">
            {t("about.aboutMe.resume")}
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default AboutMe;

const Paragraph: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Text
      color={useColorModeValue("black", "white")}
      fontSize="xl"
      px={4}
      lineHeight={1.5}
      align="justify"
      mb={4}
    >
      {children}
    </Text>
  );
};

const ColoredText = ({ children }: { children?: React.ReactNode }) => (
  <Text as={"span"} color="#805AD5">
    {children}
  </Text>
);
