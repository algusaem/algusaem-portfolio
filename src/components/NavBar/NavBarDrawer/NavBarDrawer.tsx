import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import NavBarLinks from "../NavBarLinks/NavBarLinks";
import { DisclosureProps } from "@/interfaces/Nav/Nav";

const NavBarDrawer: React.FC<DisclosureProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton _hover={{ bg: "#5ad580", color: "white" }} />
          <DrawerHeader>Alex Gutierrez</DrawerHeader>
          <DrawerBody>
            <NavBarLinks direction="column" />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavBarDrawer;
