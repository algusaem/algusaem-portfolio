import React from "react";
import { Icon, ListItem, List, Button } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";
import useLang from "@/components/Hooks/useLang";

const MyContact = () => {
  const { lang } = useLang();
  const engLocale = lang === "en" ? "?locale=en_US" : "";

  return (
    <List p={4}>
      <ContactLink
        icon={BsLinkedin}
        link={`https://www.linkedin.com/in/alex-gutierrez-56b91224a/${engLocale}`}
      >
        Alex Gutierrez
      </ContactLink>
      <ContactLink icon={BsGithub} link={"https://github.com/algusaem"}>
        @ algusaem
      </ContactLink>
    </List>
  );
};

export default MyContact;

const ContactLink: React.FC<{
  children: React.ReactNode;
  icon: React.ElementType;
  link: string;
}> = ({ children, icon, link }) => {
  const iconComponent = <Icon as={icon} />;
  return (
    <ListItem mb={2}>
      <Link href={link} target="_blank">
        <Button
          leftIcon={iconComponent}
          bg={"transparent"}
          _hover={{ bg: "#805AD5", color: "white" }}
          fontSize={"lg"}
        >
          {children}
        </Button>
      </Link>
    </ListItem>
  );
};
