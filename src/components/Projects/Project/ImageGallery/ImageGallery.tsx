import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Flex,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  AspectRatio,
} from "@chakra-ui/react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ImageGallery = ({ routes }: { routes: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + routes.length) % routes.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % routes.length);
  };

  return (
    <MotionBox
      w={"100%"}
      position="relative"
      cursor={"pointer"}
      my={2}
      onClick={onOpen}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          src={routes[currentIndex]}
          alt={`Image ${currentIndex}`}
          objectFit="cover"
          borderRadius={"xl"}
        />
      </AspectRatio>

      <Flex
        justifyContent="space-between"
        position="absolute"
        top="50%"
        width="100%"
        zIndex="2"
        px={2}
      >
        <Button
          maxW={1}
          maxH={10}
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          bg={"#805AD5"}
          _hover={{ bg: "#6133C9" }}
        >
          <Icon as={AiFillCaretLeft} color={"white"} />
        </Button>

        <Button
          maxW={1}
          maxH={10}
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          bg={"#805AD5"}
          _hover={{ bg: "#6133C9" }}
        >
          <Icon as={AiFillCaretRight} color={"white"} />
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            bg={"black"}
            color={"white"}
            _hover={{ bg: "white", color: "black" }}
          />
          <Image src={routes[currentIndex]} alt={`Image ${currentIndex}`} />
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default ImageGallery;
