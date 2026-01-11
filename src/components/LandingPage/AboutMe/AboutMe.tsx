"use client";
import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation, Trans } from "react-i18next";

const AboutMe = () => {
  const { t, i18n } = useTranslation();
  const cvPath = i18n.language === "es" ? "/CV_ESP.pdf" : "/CV_ENG.pdf";

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
        <Link href={cvPath} passHref>
          <Button variant="brand">
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
      color="text.primary"
      fontSize="md"
      px={4}
      lineHeight={1.5}
      align="justify"
      mb={3}
    >
      {children}
    </Text>
  );
};

const ColoredText = ({ children }: { children?: React.ReactNode }) => (
  <Text as={"span"} color="brand.primary">
    {children}
  </Text>
);
